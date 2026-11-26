import fs from "node:fs"
import { render } from "./dist-server/entry-server.js"

const template = fs.readFileSync("dist/index.html", "utf-8")
const html = template.replace('<div id="root"></div>', `<div id="root">${render()}</div>`)
fs.writeFileSync("dist/index.html", html)
console.log("✔ Prerendered dist/index.html")

// Sätt dagens datum som lastmod i sitemap vid varje build
const today = new Date().toISOString().slice(0, 10)
const sitemap = fs
  .readFileSync("dist/sitemap.xml", "utf-8")
  .replace(/<lastmod>.*?<\/lastmod>/g, `<lastmod>${today}</lastmod>`)
fs.writeFileSync("dist/sitemap.xml", sitemap)
console.log(`✔ Updated sitemap lastmod to ${today}`)
