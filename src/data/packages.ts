export type Package = {
  id: number
  name: string
  description: string
  features: string[]
  cta: string
  price: string
  featured?: boolean
}

export const packages: Package[] = [
  {
    id: 1,
    name: "Tracking start",
    description:
      "För dig som vill få koll på din data och fatta bättre beslut.",
    features: [
      "GA4 & Tag Manager",
      "Konverteringsspårning",
      "Grundläggande audit",
      "Dokumentation",
    ],
    cta: "Pris på förfrågan",
    price: "10 000 kr",
  },
  {
    id: 2,
    name: "Synas bättre",
    description:
      "En fokuserad SEO-insats som ger dig en tydlig väg framåt.",
    features: [
      "Teknisk SEO-check",
      "Sökordsanalys",
      "On-page rekommendationer",
      "Prioriterad handlingsplan",
    ],
    cta: "Pris på förfrågan",
    price: "15 000 kr",
  },
  {
    id: 3,
    name: "Webb med riktning",
    description:
      "För en ny eller befintlig webbplats som behöver bli tydligare och vassare.",
    features: [
      "UX & innehållsstruktur",
      "Responsiv Front End",
      "Tillgänglighetscheck",
      "Analys & överlämning",
    ],
    cta: "Offert efter behov",
    price: "25 000 kr",
    featured: true,
  },
]