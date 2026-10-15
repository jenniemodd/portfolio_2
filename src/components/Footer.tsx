
import styles from "./Footer.module.css"

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <a
          href="#top"
          className={styles.logo}
          aria-label="Till toppen av sidan"
        >
          JM.
        </a>

        <p className={styles.description}>
          Front End Developer · Digital marketing Specialist · Jämtland
        </p>

        <p className={styles.copyright}>
          © {new Date().getFullYear()} Jennie Modd, med musik och kaffe 🎶
        </p>
      </div>
    </footer>
  )
}

export default Footer
