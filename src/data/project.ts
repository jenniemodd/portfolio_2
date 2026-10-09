
import type { Project } from "../types/project"

export const projects: Project[] = [
  {
    id: 1,
    title: "Fairly",
    description: "En budgetapp för par som vill få bättre överblick över sin gemensamma ekonomi.",
    technologies: ["JavaScript", "HTML", "SCSS"],
    image: "/images/fairly.png",
    githubUrl: "",
    liveUrl: "",
  },
  {
    id: 2,
    title: "JAL Book Club",
    description: "En webbplats för bokälskare, med boklistor och funktioner för att utforska böcker.",
    technologies: ["JavaScript", "HTML", "CSS"],
    image: "/images/jal-book-club.png",
    githubUrl: "",
    liveUrl: "",
  },
  {
    id: 3,
    title: "Alice in Wonderland",
    description: "Ett interaktivt spel utvecklat i ett grupprojekt med TypeScript.",
    technologies: ["TypeScript", "Vite", "SCSS"],
    image: "/images/alice-in-wonderland.png",
    githubUrl: "",
    liveUrl: "",
  },
]
