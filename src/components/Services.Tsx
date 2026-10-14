
import { useState } from "react"
import styles from "./Services.module.css"

const services = [
  {
    number: "01",
    title: "Frontendutveckling",
    description:
      "Jag hjälper er genom hela processen, från planering och design utifrån era mål och målgrupp till skiss och utveckling av en hemsida anpassad efter era behov och er budget. Fokus ligger på att skapa en hållbar och användarvänlig hemsida som fungerar många år framöver, är enkel att underhålla för er och enkelt att använda för era kunder.",
    skills: ["HTML", "CSS / Sass", "JavaScript", "TypeScript", "React", "MysQL", "MongoDB"],
  },
  {
    number: "02",
    title: "Digital strategi",
    description:
      "Skulle du fria till någon du precis träffat? Nä, tänkte väl inte det. Och det gör inte era kunder heller. Jag hjälper er ta fram en digital strategi anpassat efter er tid, resurser och behov som skapar synlighet från första mötet till att de blir en kund. Hemligheten? Våga smalna av. Ni behöver inte synas överallt och till alla, bara till rätt personer och i rätt tid. För ni vet vad de säger, en bra digital strategi och en röd tråd, ger en god natt sömn. ",
    skills: ["Övergripande digital strategi", "Influencer marketing strategi", "Sociala medier strategi", "Innehållsstrategi", "SEO-strategi", "E-post marknadsföring strategi"],
  },
  {
    number: "03",
    title: "Analys & spårning",
    description:
      "Hur vet vi att vi uppnått rätt mål? Jag hjälper er att göra en nulägesanalys över era digital kanaler och er hemsida. Sätta upp KPI:er och spårningsplan samt implementera eller förbättra nuvarande spårning så att ni mäter rätt saker. Jag skapar även förståelse i vad ni mäter och varför - huvudnyckeln för att man ska förstå användaren gör och skapa insikter framåt.För alla insikter är bra insikter. ",
    skills: ["GA4", "Google Tag Manager", "Konverteringsspårning", "Analys & rapportering", "Spårningsplan", "A/B-testning"],
  },
  {
    number: "04",
    title: "Digital annonsering",
    description:
      "Jag planerar, ta fram material och innehåll skräddarsytt för varje kanal, sätter upp och optimerar samt följer upp resultat för digital annonsering. Har främst arbetet med Meta ads (Instagram och Facebook), Youtube, Linkedin och Google Ads. Jag har med mig ett strategiskt helhetstänk som kompletterar kundresan och skapar resultat. ",
    skills: ["Google Ads", "Meta Ads", "LinkedIn Ads", "TikTok Ads", "YouTube Ads", "ChatGPT Ads", "Pinterest Ads"],
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
