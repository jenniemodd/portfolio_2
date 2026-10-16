import type { Package } from "../types/packages"

export const packages: Package[] = [
  {
    id: 1,
    name: "Spårning & analys",
    description:
      "Få koll på vad som händer på er hemsida och fatta bättre beslut baserade på data.",
    features: [
      "Spårningsplan utifrån era mål",
      "GA4 & Google Tag Manager",
      "Konverteringsspårning",
      "Testning & dokumentation",
    ],
    cta: "Kontakta mig för prisförslag",
    price: "5 000 kr",
  },
  {
    id: 2,
    name: "SEO och AI-sök",
    description:
      "Vill ni synas där kunderna söker? Vi lägger grunden för bättre organisk synlighet i sökmotorer och AI-drivna sökresultat.",
    features: [
      "SEO-översyn av er befintliga webbplats",
      "Sökordsanalys & prioritering",
      "3 SEO- & AI-anpassade texter",
      "Rekommendationer för fortsatt optimering",
    ],
    cta: "Kontakta mig för prisförslag",
    price: "10 000 kr",
  },
  {
    id: 3,
    name: "Digital marknadsföring",
    description:
      "Vill ni komma igång med digital marknadsföring, få ordning på det ni redan gör eller ta nästa steg? Jag hjälper er att hitta rätt väg framåt, från strategi, till implementation och resultat. Allt utifrån era mål, er budget och era resurser.",
    features: [
      "Strategi och prioritering av digitala kanaler",
      "Tydlig kundresa med konkreta actions",
      "SEO, innehåll och sociala medier",
      "Spårning, analys och konverteringsoptimering",
      "Webb, användarupplevelse och förbättringar",
      "Innehållsproduktion",
    ],
    cta: "Hör av dig!",
    price: "Efter behov",
    featured: true,
  },
]