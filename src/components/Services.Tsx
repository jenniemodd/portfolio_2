
import { useState } from "react"
import styles from "./Services.module.css"

const services = [
  {
    number: "01",
    title: "Frontendutveckling",
    description:
      "Jag utvecklar och förbättrar webbplatser med fokus på användarupplevelse, tillgänglighet och konvertering.",
    skills: ["HTML", "CSS / Sass", "JavaScript", "TypeScript", "React"],
  },
  {
    number: "02",
    title: "Digital strategi",
    description:
      "Jag tar fram strategier som utgår från målgrupp, kundresa, affärsmål och mätbara KPI:er.",
    skills: ["Digital strategi", "Kundresa", "KPI:er", "Konvertering"],
  },
  {
    number: "03",
    title: "Analys & spårning",
    description:
      "Jag säkerställer att rätt data samlas in så att ni kan fatta bättre beslut och optimera resultat.",
    skills: ["GA4", "Google Tag Manager", "Konverteringsspårning", "GTM"],
  },
  {
    number: "04",
    title: "Digital annonsering",
    description:
      "Jag planerar, sätter upp och optimerar kampanjer för att nå rätt målgrupp och skapa mätbara resultat.",
    skills: ["Google Ads", "Meta Ads", "LinkedIn Ads"],
  },
  {
    number: "05",
    title: "Sociala medier",
    description:
      "Jag hjälper er att skapa innehåll och strategier som bygger varumärke och engagerar rätt målgrupp.",
    skills: ["Instagram", "Facebook", "YouTube", "TikTok", "LinkedIn"],
  },
  {
    number: "06",
    title: "SEO & AI-sök",
    description:
      "Jag förbättrar er synlighet genom teknisk SEO, relevant innehåll och anpassning för nya AI-drivna sökupplevelser.",
    skills: ["Teknisk SEO", "On-page SEO", "Innehåll", "AI-sök"],
  },
  {
    number: "07",
    title: "Innehållsproduktion",
    description:
      "Jag skapar innehåll som stärker varumärket, möter målgruppens behov och driver engagemang i digitala kanaler.",
    skills: ["Copywriting", "Webbinnehåll", "Content marketing", "Sociala medier"],
  },
]

function Services() {
  const [openService, setOpenService] = useState<string | null>(null)

  return (
    <section className={styles.services} id="services">
      <div className={styles.inner}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>02 · Det jag gör</p>

          <h2>
            Det här kan
            <br />
            jag hjälpa er med.
          </h2>

          <p className={styles.introText}>
            Strategi, teknik och kreativitet. Med fokus
            på helheten och det som gör skillnad.
          </p>
        </div>

        <div className={styles.list}>
          {services.map((service) => {
            const isOpen = openService === service.number
            const detailsId = `service-details-${service.number}`

            return (
              <article
                key={service.number}
                className={`${styles.service} ${isOpen ? styles.open : ""}`}
                onMouseEnter={() => setOpenService(service.number)}
                onMouseLeave={() => setOpenService(null)}
              >
                <button
                  type="button"
                  className={styles.serviceButton}
                  aria-expanded={isOpen}
                  aria-controls={detailsId}
                  onClick={() =>
                    setOpenService(isOpen ? null : service.number)
                  }
                  onFocus={() => setOpenService(service.number)}
                  onBlur={(event) => {
                    if (!event.currentTarget.parentElement?.contains(event.relatedTarget)) {
                      setOpenService(null)
                    }
                  }}
                >
                  <span className={styles.number}>{service.number}</span>

                  <span className={styles.serviceTitle}>
                    {service.title}
                  </span>

                  <span className={styles.icon} aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  id={detailsId}
                  className={styles.details}
                  hidden={!isOpen}
                >
                  <p>{service.description}</p>

                  <div className={styles.tags}>
                    {service.skills.map((skill) => (
                      <span className={styles.tag} key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
