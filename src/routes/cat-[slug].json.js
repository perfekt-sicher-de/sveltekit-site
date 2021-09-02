"use strict";
/*

const categories = [
    {
        id: "ast",
        title: "AST",
        subtitle: "Application Security Testing (SAST, DAST, IAST, SCA)",
        parents: ["root"]
    },
    {
        id: "ast_probely",
        title: "Probely",
        subtitle: "Static And Dynamic Application Security Testing",
        exturl: "https://probely.com/?utm_medium=affiliate&utm_source=partner&utm_campaign=keywan",
        parents: ["ast"]
    },
    {
        id: "ast_forty",
        title: "Forty Webinspect",
        subtitle : "Dynamic Application Security Testing",
        exturl: "https://www.microfocus.com/de-de/products/webinspect-dynamic-analysis-dast/overview",
        parents: ["ast"]
    },
    {
        id: "ast_sonar",
        exturl: "https://sonarcloud.io",
        title: "Sonarcloud Scanner",
        subtitle : "Static Application Security Testing and Code Quality",
        parents: ["ast"]
    },
    {
        id: "ast_deepsource",
        exturl: "https://deepsource.io",
        title: "Deepsource Scanner",
        subtitle : "Static Application Security Testing and Code Quality",
        parents: ["ast"]
    },
    {
        id: "handsOn",
        title: "Hands On",
        subtitle: "Hardening und absichern",
        parents: ["root"]
    },
    {
        id: "secDev",
        title: "Sec-Dev",
        subtitle: "Entwicklung von sicheren Anwendungen",
        parents: ["root"]
    },
    {
        id: "siem",
        title: "SIEM",
        subtitle: "Security Incident Event Managment",
        parents: ["root"]
    },
    {
        id: "penTest",
        title: "PEN-Test",
        subtitle: "Security Checks nach Maß",
        parents: ["root"]
    },
    {
        id: "securityincident",
        title: "security incident",
        subtitle: "Im Ernstfall gibt es hier Hilfe",
        parents: ["root"]
    },
    {
        id: "si_dgc",
        title: "DGC",
        subtitle: "Deutsche Gesellschaft für Cybersicherheit",
        exturl: "https://dgc.org/contact",
        parents: ["securityincident"]
    },
    {
        id: "root",
        title: "Alle Security Produkte und Dienstleistungen",
        subtitle: "Alles vom Antivirus-Programm bis zur forensischen Untersuchung im Schadensfall"
    },
    {
        id: "av_sophos",
        title: "Sophos",
        subtitle: "Sophos Antivirus",
        exturl: "https://www.sophos.com",
        parents: ["antivirus"]
    },
    {
        id: "av_kaspersky",
        title: "Kaspersky",
        subtitle: "",
        exturl: "https://www.kaspersky.de/small-to-medium-business-security/downloads/endpoint",
        parents: ["antivirus"]
    },
    {
        id: "av_norton",
        title: "Norton",
        subtitle: "",
        exturl: "https://de.norton.com/antivirus?inid=nortoncom_nav_antivirus_internetsecurity:internetsecurity-malware-ransomware-5-dos-and-donts",
        parents: ["antivirus"]
    },
    {
        id: "av_avira",
        title: "Avira",
        subtitle: "Ideal für Firmen mit sehr kleinem Budget und um die 5 Mitarbeitern",
        exturl: "https://www.avira.com/de",
        parents: ["antivirus"]
    },
    {
        id: "av_mcafee",
        title: "Mc Afee",
        subtitle: "",
        exturl: "https://www.mcafee.com/enterprise/de-de/home.html",
        parents: ["antivirus"]
    },
    {
        id: "av_scanguard",
        title: "ScanGuard",
        subtitle: "Für Privatanwender und Selbstständige",
        exturl: "https://www.scanguard.com/software",
        parents: ["antivirus"]
    },
    {
        id: "av_avast",
        title: "Avast",
        exturl: "https://www.avast.com/de-de/business/",
        subtitle: "Lösungen für Unternehmen",
        parents: ["antivirus"]
    },
    {
        id: "av_eset",
        title: "eset",
        exturl: "https://www.eset.com/de/business/complete-protection-bundle/",
        subtitle: "ESET PROTECT Complete",
        parents: ["antivirus"]
    },
    {
        id: "av_bitdefender",
        title: "Bitdefender",
        subtitle: "30 Tage testen",
        exturl: "https://www.bitdefender.de/business/",
        parents: ["antivirus"]
    },
    {
        id: "av_avg",
        title: "AVG",
        subtitle: "",
        exturl: "https://www.avg.com/de-de/antivirus-business-edition",
        parents: ["antivirus"]
    },
    {
        id: "waf_cloudflare",
        title: "Cloudflare",
        subtitle: "",
        exturl: "https://www.cloudflare.com/",
        parents: ["waf"]
    }
];
*/
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
        return {
            body: {
                error: `${slug} not found`
            }
        }
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

    for (let product of products) {
        const variants = await DB.prepare(variants_sql).all([product.id]);
        product.variants = variants;
        for (const variant of variants) {
            variant.features = [];
            let features = await DB.prepare(features_sql).all([variant.id]);
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
