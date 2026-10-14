
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
            Jag är digital marknadsförare med både strategisk och praktisk erfarenhet av hela kundresan. Från att väcka intresse och attrahera nya kunder till konvertering och långsiktiga kundrelationer har jag arbetat med allt från planering och strategi till innehåll och genomförande.
          </p>

          <p className={styles.description}>
            Just nu studerar jag till Front End Developer och lär mig att koda. Jag kompletterar min erfarenhet inom digital marknadsföring med webbutveckling, vilket ger mig möjlighet att arbeta brett för en komplett digital kundupplevelse. 
            <br />Under tiden jag studerar tar jag mig an uppdrag inom både Digital Marknadsföring och Webbutveckling.
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
                år studier inom Front End Developer
                <br />
                (pågående)
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
