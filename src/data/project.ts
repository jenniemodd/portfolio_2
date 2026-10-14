
import type { Project } from "../types/project"

export const projects: Project[] = [
  
  {
    id: 1,
    title: "Fairly",
    description: "En budgetapp för par som vill få bättre överblick över sin gemensamma ekonomi.",
    category: "Front end-utveckling",
    tags: ["TypeScript", "HTML", "SCSS","Vite",],
    image: "/images/fairly.jpg",
    githubUrl: "https://github.com/jenniemodd/fairly-app",
    liveUrl: "https://fairly-app.vercel.app/",
  },
   
{
  id: 2,
  title: "Destination Funäsfjällen",
  description:
    "Projektledning av en ny webbplats med fokus på innehållsstrategi, SEO och användarupplevelse. Samt löpande arbete med huvudansvar över all marknadsföring.",
  category: "Digital marknadsföring",
  tags: [
    "SEO",
    "Google Ads",
    "Meta Ads",
    "GA4",
    "Innehållsproduktion",
    "Wordpress",
    "Digital strategi",
    "Sociala medier",
    "E-post marknadsföring",
    "PR",

  ],
  image: "/images/funasfjallen_logga.jpeg",
  liveUrl: "https://funasfjallen.se/",
  results: [
  {
    value: "+100 %",
    label: "Ökning av organisk trafik på ett år",
  },
  {
    value: "+29 %",
    label: "Ökad omsättning",
  },
  {
    value: "22 → 32 000",
    label: "Följare i sociala medier",
  },
  {
    value: "Ökad synlighet",
    label: "I AI-sök och på mer specifika sökningar",
  },
],
},

{
    id: 3,
    title: "JAL Book Club",
    description: "Skolprojekt med fokus på API-utveckling. En online bokklubb, med boklistor och funktioner för att utforska böcker samt lämna recensioner.",
    category: "Front end-utveckling",
    tags: ["TypeScript", "HTML", "SCSS","Vite","Biome",],
    image: "/images/jal_bookclub.jpg",
    githubUrl: "https://github.com/AlexJCodes/jal-book-club",
    liveUrl: "https://jal-book-club-seven.vercel.app/",
  },

 
{
  id: 4,
  title: "Ramundberget Alpina AB",
  description:
    "Digital kommunikation och webbansvar med fokus på SEO, innehåll, användarupplevelse och betald annonsering. Utvecklade webbplatsens innehåll och struktur för att bättre möta nya besökares behov.",
  category: "Digital marknadsföring",
  tags: [
    "SEO",
    "Digital strategi",
    "Sociala medier",
    "Meta Ads",
    "Google Ads",
    "Innehållsproduktion",
    "Google Analytics",
    "Episerver",
  ],
  image: "/images/ramundberget_logga.jpg",
  liveUrl: "https://ramundbergetalpina.se/",
  results: [
  {
    value: "+20 %",
    label: "Ökning av organisk trafik på ett år",
  },
  {
    value: "+25 %",
    label: "Ökad omsättning under ett år",
  },
  {
    value: "12 → 19 000",
    label: "Följare i sociala medier under ett år",
  },
],
},

  {
    id: 5,
    title: "Alice in Wonderland",
    description: "Ett interaktivt spel utvecklat i ett grupprojekt med TypeScript.",
    category: "Front end-utveckling",
    tags: ["TypeScript", "Vite", "SCSS"],
    image: "/images/alice-in-wonderland.png",
    githubUrl: "",
    liveUrl: "",
  },
    {
    id: 6,
    title: "Gotfridsmunkar",
    description: "Mitt första typescript projekt där jag byggde en enklare e-handel med produktlista, produktdetaljsida och kundvagn.",
    category: "Front end-utveckling",
    tags: ["TypeScript", "Vite", "SCSS"],
    image: "/images/donut_shop.jpg",
    githubUrl: "https://github.com/jenniemodd/donut-shop",
    liveUrl: "https://donut-shop-eta.vercel.app/",
  },
]
