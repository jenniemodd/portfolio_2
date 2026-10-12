
import { useState } from "react"
import styles from "./Navigation.module.css"

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo} onClick={closeMenu}>
        JM.
      </a>

     
<button
  type="button"
  className={`${styles.menuButton} ${menuOpen ? styles.menuButtonOpen : ""}`}
  aria-label={menuOpen ? "Stäng meny" : "Öppna meny"}
  aria-expanded={menuOpen}
  aria-controls="main-navigation"
  onClick={() => setMenuOpen(!menuOpen)}
>
  <span className={styles.menuLines} aria-hidden="true">
    <span />
    <span />
    <span />
  </span>
</button>

      <nav
        id="main-navigation"
        className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
        aria-label="Huvudnavigation"
      >
        <a href="#home" onClick={closeMenu}>Hem</a>
        <a href="#about" onClick={closeMenu}>Om mig</a>
        <a href="#services" onClick={closeMenu}>Tjänster</a>
        <a href="#projects" onClick={closeMenu}>Projekt</a>
        <a href="#packages" onClick={closeMenu}>Priser</a>
        <a href="#contact" onClick={closeMenu}>Kontakt</a>
      </nav>

      <a
        href="#contact"
        className={styles.contactLink}
        onClick={closeMenu}
      >
        Säg hej <span aria-hidden="true">→</span>
      </a>
    </header>
  )
}

export default Navigation
