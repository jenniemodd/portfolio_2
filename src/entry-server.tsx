import { renderToString } from "react-dom/server"
import App from "./App"
import "./index.css" // om du importerar global CSS i main.tsx, ta med samma här

export function render() {
  return renderToString(<App />)
}