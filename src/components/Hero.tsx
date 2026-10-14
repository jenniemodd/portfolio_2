
import styles from "./Hero.module.css"

function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.copy}>
        <p className={styles.eyebrow}>
          Front End Developer · Digital Marketing Specialist
        </p>

        <h1>
          Jennie
          <br />
          Modd<span>.</span>
        </h1>

        <p className={styles.lead}>
          Jag kombinerar {" "}
          <strong>digital marknadsföring och webbutveckling. </strong>
          Från strategi och idé till kod och resultat.
        </p>

        <div className={styles.actions}>
          <a
            href="#projects"
            className={`${styles.button} ${styles.primary}`}
          >
            Se mina projekt <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div className={styles.visual}>
        <img
          src="/images/jenniemodd-work.jpg"
          alt="Jennie Modd, frontendutvecklare och digital marknadsförare"
        />
      </div>
    </section>
  )
}

export default Hero
