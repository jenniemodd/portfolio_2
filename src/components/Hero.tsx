
import styles from "./Hero.module.css"

function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.copy}>
       
<p className={styles.eyebrow}>
  <span>Front End Developer ·</span>
  <span>Digital Growth Specialist</span>
</p>

        <h1>
          <span className={styles.line}>
            <span className={styles.lineInner}>Jennie</span>
          </span>
          <span className={styles.line}>
            <span className={styles.lineInner}>
              Modd<span className={styles.dot}>.</span>
            </span>
          </span>
          <span className={styles.tagline}>
            Konsult inom digital marknadsföring & webbutveckling
          </span>
        </h1>

        <p className={styles.lead}>
          Jag kombinerar{" "}
          digital marknadsföring och webbutveckling – från
          strategi och idé till kod och resultat. Baserad i Funäsdalen i
          Härjedalen, med kunder i hela Sverige.
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
          alt="Jennie Modd, konsult inom digital marknadsföring och webbutveckling"
          width={800}
          height={1000}
          fetchPriority="high"
        />
      </div>
    </section>
  )
}

export default Hero
