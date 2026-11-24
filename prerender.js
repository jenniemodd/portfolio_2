import fs from "node:fs"
import { render } from "./dist-server/entry-server.js"

const template = fs.readFileSync("dist/index.html", "utf-8")
const html = template.replace('<div id="root"></div>', `<div id="root">${render()}</div>`)
fs.writeFileSync("dist/index.html", html)
console.log("✔ Prerendered dist/index.html")