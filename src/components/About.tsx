
import styles from "./About.module.css"

function About() {
  return (
    <section className={styles.about} id="about">
      <p className={styles.eyebrow}>01 · Om mig</p>

      <h2 className={styles.heading}>
        Mellan människa
        <br />
        och maskin.
      </h2>

      <div className={styles.content}>
        <div className={styles.visual}>
            <img
              src="/images/jennie_modd.jpg"
              alt="Porträtt av mig, frontendutvecklare och digital marknadsförare"
              className={styles.portrait}
            />

          <div className={styles.note}>
            Kreativ
            <br />
            problemlösare
            <br />
            sedan alltid.
          </div>
        </div>

        <div className={styles.copy}>
          <p className={styles.lead}>
            Jag är en Front End Developer med flera års
            erfarenhet av digital marknadsföring — en
            kombination som låter mig se både helheten
            och detaljerna.
          </p>

          <p className={styles.description}>
            Min bakgrund inom strategi, analys, SEO och
            konvertering har lärt mig att en snygg webb
            aldrig är målet i sig. Den ska vara enkel att
            använda, kännas rätt och göra verklig skillnad.
          </p>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>8+</span>
              <p>
                år inom digital
                <br />
                marknadsföring
              </p>
            </div>

            <div className={styles.stat}>
              <span className={styles.statNumber}>∞</span>
              <p>
                nyfikenhet på
                <br />
                människor & teknik
              </p>
            </div>
          </div>

          <a href="#contact" className={styles.button}>
            Mer om min bakgrund
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
