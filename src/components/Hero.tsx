
import styles from "./Hero.module.css"

function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.copy}>
        <p className={styles.eyebrow}>
          Front End Developer · Digital kreatör
        </p>

        <h1>
          Jennie
          <br />
          Modd<span>.</span>
        </h1>

        <p className={styles.lead}>
          Jag bygger digitala upplevelser där{" "}
          <strong>kod, innehåll och affär</strong> arbetar
          åt samma håll.
        </p>

        <div className={styles.actions}>
          <a
            href="#projects"
            className={`${styles.button} ${styles.primary}`}
          >
            Se mina projekt <span aria-hidden="true">→</span>
          </a>

          <a
            href="#about"
            className={`${styles.button} ${styles.secondary}`}
          >
            Lär känna mig <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div className={styles.visual}>
        <img
          src="/images/jennie-modd.jpg"
          alt="Jennie Modd, frontendutvecklare och digital marknadsförare"
        />
      </div>
    </section>
  )
}

export default Hero
