
import styles from "./About.module.css"

function About() {
  return (
    <section className={styles.about} id="about">
      <p className={styles.eyebrow}>01 · Om mig</p>

      <h2 className={styles.heading}>
        Ett bredare
        <br />
        digital synsätt
      </h2>

      <div className={styles.content}>
        <div className={styles.visual}>
            <img
              src="/images/jennie_modd.jpg"
              alt="Porträtt av mig, frontendutvecklare och digital growth specialist"
              className={styles.portrait}
            />

          <div className={styles.note}>
            Trial
            <br />
            error
            <br />
            & repeat ✌🏼
          </div>
        </div>

        <div className={styles.copy}>
          <p className={styles.lead}>
            Jag är en digital growth specialist som arbetar med hela kundresan – från idé och strategi till genomförande. Jag stannar inte vid planen, utan är hands-on hela vägen: från att väcka intresse och locka nya kunder till konvertering och långsiktiga kundrelationer.
          </p>

          <p className={styles.description}>
            Du kan se mig som en hel marknadsavdelning i en person. Jag sätter upp spårningen, tar fram och kör annonser, jobbar med SEO och GEO, skapar innehållet och bygger webben. Med AI som en naturlig del av arbetssättet kan jag jobba effektivt, utan att tumma på kvalitet eller känsla.
            
            Just nu studerar jag till Front End Developer (examen 2027), och under tiden tar jag mig an uppdrag inom både digital marknadsföring och webbutveckling.
            </p>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>8+</span>
              <p>
                år arbetslivserfarenhet inom
                <br />
                Digital marknadsföring
              </p>
            </div>

            <div className={styles.stat}>
              <span className={styles.statNumber}>4+</span>
              <p>
                år utbildning inom
                <br />
                Digital Marknadsföring & teknik
              </p>
            </div>
              <div className={styles.stat}>
              <span className={styles.statNumber}>1</span>
              <p>
                år studier (so far!)
                <br />
                till Front End Developer
              </p>
            </div>
          </div>

          <a href="#projects" className={styles.button}>
            Se mina projekt
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
