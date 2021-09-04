"use strict";

import sqlite from 'better-sqlite3';
import marked from "marked";

export async function get({ params }) {

    const {slug} = params;
    try {
        const DB = new sqlite('./my-security-check.db');

        const join_page = ' JOIN landing_pages_components pageco ON pageco.landing_page_id = landing_pages.id\n' +
            '    join components_pages_pages page ON pageco.component_id = page.id\n';

        const page = await DB.prepare('SELECT landing_pages.title, landing_pages.main FROM landing_pages\n' +
            join_page +
            'where page.slug like ?').get([slug]);
        if (!page) {
            return undefined;
        }

        const options = {
            mangle: false
        };
        const html = marked(page.main, options);
        page.main = html;
        return {
            body: {
                page
            }
        };
    } catch (e) {
        console.log(e);
        throw e;
    }


}
