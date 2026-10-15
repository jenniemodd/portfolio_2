
import { useState } from "react"
import styles from "./Services.module.css"
import { services } from "../data/services";


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

export default Services;
