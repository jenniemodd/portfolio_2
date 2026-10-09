
import styles from "./Navigation.module.css"

function Navigation() {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        Jennie <span>Modd</span>
      </a>

      <nav className={styles.nav} aria-label="Huvudnavigation">
        <a href="#about">Om mig</a>
        <a href="#services">Tjänster</a>
        <a href="#projects">Projekt</a>
        <a href="#contact">Kontakt</a>
      </nav>

      <a href="#contact" className={styles.contactLink}>
        Säg hej <span aria-hidden="true">↗</span>
      </a>
    </header>
  )
}

export default Navigation
