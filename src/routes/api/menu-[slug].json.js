"use strict";
import sqlite from 'better-sqlite3';

export async function get({ params }) {
    const DB = new sqlite('./my-security-check.db');
    const { slug } = params;

    const join_page = ' JOIN category_components catco ON catco.category_id = cat.id\n' +
    '    join components_pages_pages page ON catco.component_id = page.id\n';

    const category = await DB.prepare('SELECT page.slug, cat.id, cat.title FROM category cat\n' +
    join_page +
    'where page.slug like ?').get([slug]);

    if (!category) {
        return undefined;
    }

    const categories = await DB.prepare('SELECT page.slug, cat.id, cat.title FROM category cat\n' +
        '    JOIN category__parents catp ON catp.category_id = cat.id\n' +
        join_page +
        ' where catp.related_category_id = ?').all([category.id]);

    return {
        body: {
            category,
            categories
        }
    };


}
