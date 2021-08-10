{
  "cloudflare_waf": {
     "title": "Cloudflare WAF",
     "categories" : ["waf_cloudflare"],
     "variants": {
         "pro": {
              "features": [
                  "OWASP Regelset",
                  "Cloudflare Regelset",
                  "Eine Regeln"
                  "ModSecurity Regelset"
              ],
              "price": "$20"
          },
         "business":{
              "inherit" : "pro",
              "features": [
                  "Priorisierter Kundensupport",
                  "Bot-Analytics und erweiterte Abwehr"
               ],
               "price": "$200"
         },
         "enterprise":{
               "inherit" : "business",
               "features": [
                  "Priorisierter Kundensupport",
                  "Prüfprotokolle und Enterprise-Rohdatenprotokolle mit Zielintegrationen",
                  "Analysezeitbereich von 1 Minuten",
                  "Priorisierter Kundensupport: rund um die Uhr über Telefon, Chat und E-Mail",
                  "SLA mit 100 % Verfügbarkeit und 25-facher Erstattung",
                  "Rollenbasierte Kontosteuerung",
                  "Single-Sign-On-Support",
                  "Netzwerkpriorisierung"
               ]
         }
     }
  }
}
