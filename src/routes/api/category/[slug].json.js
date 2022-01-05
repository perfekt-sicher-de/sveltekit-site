"use strict";

import sqlite from 'better-sqlite3';

export async function get({ params }) {
    const DB = new sqlite('./my-security-check.db');

    const { slug } = params;
    const join_page = ' JOIN category_components catco ON catco.category_id = cat.id\n' +
        '    join components_pages_pages page ON catco.component_id = page.id\n';

    const category = await DB.prepare('SELECT page.*, cat.* FROM category cat\n' +
        join_page +
    'where page.slug like ?').get([slug]);

    if (!category) {
        return undefined;
    }

    const categories = await DB.prepare('SELECT page.*, cat.* FROM category cat\n' +
        '    JOIN category__parents catp ON catp.category_id = cat.id\n' +
        join_page +
        ' where catp.related_category_id = ?').all([category.id]);




    const sql = `select page.*, product.* from product__categories as cat
    join product on cat.product_id = product.id
    join product_components as component on component_type = 'components_pages_pages' and component.product_id = product.id
    join components_pages_pages as page on component.component_id = page.id
    where category_id = ?`;
    const products = await DB.prepare(sql).all([category.id]);

    const variants_sql = `select variant.name, variant.price, variant.id from product_components
              join components_products_variants as variant ON component_id = variant.id
    where component_type = 'components_products_variants' and product_id = ?`;

    const features_sql = `select feature.name from components_products_variants_components as variant
              join components_pages_features as feature ON component_id = feature.id
    where component_type = 'components_pages_features' and components_products_variant_id = ?`;

    for (const product of products) {
        const variants = await DB.prepare(variants_sql).all([product.id]);
        product.variants = variants;
        for (const variant of variants) {
            variant.features = [];
            const features = await DB.prepare(features_sql).all([variant.id]);
            for (const feature of features) {
                variant.features.push(feature.name);
            }
        }
    }


    return {
        body: {
            category,
            categories,
            products
        }
    };


}
