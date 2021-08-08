const categories = {
    antivirus: {
        title: "Antivirus",
        subtitle: "Maleware und Spam Schutz",
        parents: ["root"]
    },
    firewall: {
        title: "Firewall",
        subtitle: "",
        parents: ["root"]
    },
    waf: {
        title: "WAF",
        subtitle: "Web Application Firewall",
        parents: ["root"]
    },
    ast: {
        title: "AST",
        subtitle: "Application Security Testing (SAST, DAST, IAST, SCA)",
        parents: ["root"]
    },
    handsOn: {
        title: "Hands On",
        subtitle: "Hardening und absichern",
        parents: ["root"]
    },
    secDev: {
        title: "Sec-Dev",
        subtitle: "Entwicklung von sicheren Anwendungen",
        parents: ["root"]
    },
    siem: {
        title: "SIEM",
        subtitle: "Security Incident Event Managment",
        parents: ["root"]
    },
    penTest: {
        title: "PEN-Test",
        subtitle: "Security Checks nach Maß",
        parents: ["root"]
    },
    securityincident: {
        title: "security incident",
        subtitle: "Im Ernstfall gibt es hier Hilfe",
        parents: ["root"]
    },
    si_dgc: {
        title: "DGC",
        subtitle: "Deutsche Gesellschaft für Cybersicherheit",
        exturl: "https://dgc.org/contact",
        parents: ["securityincident"]
    },
    root: {
        title: "Alle Security Produkte und Dienstleistungen",
        subtitle: "Alles vom Antivirus-Programm bis zur forensischen Untersuchung im Schadensfall"
    },
    av_sophos: {
        title: "Sophos",
        subtitle: "Sophos Antivirus",
        exturl: "https://www.sophos.com",
        parents: ["antivirus"]
    },
    av_kaspersky: {
        title: "Kaspersky",
        subtitle: "",
        exturl: "https://www.kaspersky.de/small-to-medium-business-security/downloads/endpoint",
        parents: ["antivirus"]
    },
    av_norton: {
        title: "Norton",
        subtitle: "",
        exturl: "https://de.norton.com/antivirus?inid=nortoncom_nav_antivirus_internetsecurity:internetsecurity-malware-ransomware-5-dos-and-donts",
        parents: ["antivirus"]
    },
    av_avira: {
        title: "Avira",
        subtitle: "Ideal für Firmen mit sehr kleinem Budget und um die 5 Mitarbeitern",
        exturl: "https://www.avira.com/de",
        parents: ["antivirus"]
    },
    av_mcafee: {
        title: "Mc Afee",
        subtitle: "",
        exturl: "https://www.mcafee.com/enterprise/de-de/home.html",
        parents: ["antivirus"]
    },
    av_scanguard: {
        title: "ScanGuard",
        subtitle: "Für Privatanwender und Selbstständige",
        exturl: "https://www.scanguard.com/software",
        parents: ["antivirus"]
    },
    av_avast: {
        title: "Avast",
        exturl: "https://www.avast.com/de-de/business/",
        subtitle: "Lösungen für Unternehmen",
        parents: ["antivirus"]
    },
    av_eset: {
        title: "eset",
        exturl: "https://www.eset.com/de/business/complete-protection-bundle/",
        subtitle: "ESET PROTECT Complete",
        parents: ["antivirus"]
    },
    av_bitdefender: {
        title: "Bitdefender",
        subtitle: "30 Tage testen",
        exturl: "https://www.bitdefender.de/business/",
        parents: ["antivirus"]
    },
    av_avg: {
        title: "AVG",
        subtitle: "",
        exturl: "https://www.avg.com/de-de/antivirus-business-edition",
        parents: ["antivirus"]
    },
    waf_cloudflare: {
        title: "Cloudflare",
        subtitle: "",
        exturl: "https://www.cloudflare.com/",
        parents: ["waf"]
    }
};
export default categories;
