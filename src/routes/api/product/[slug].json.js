"use strict";

import sqlite from 'better-sqlite3';

export async function get({ params }) {
    const DB = new sqlite('./my-security-check.db');

    const { slug } = params;
    const join_page = ' JOIN product_components proco ON proco.product_id = product.id\n' +
        '    join components_pages_pages page ON proco.component_id = page.id\n';

    const product = await DB.prepare('SELECT page.*, cat.* FROM product \n' +
        join_page +
    'where page.slug like ?').get([slug]);

    if (!product) {
        return undefined;
    }

/*
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
*/

    return {
        body: {
            product
        }
    };


}
