
import styles from "./Packages.module.css"

type Package = {
  id: number
  name: string
  description: string
  features: string[]
  cta: string
  featured?: boolean
}

const packages: Package[] = [
  {
    id: 1,
    name: "Tracking start",
    description:
      "För dig som vill få koll på din data och fatta bättre beslut.",
    features: [
      "GA4 & Tag Manager",
      "Konverteringsspårning",
      "Grundläggande audit",
      "Dokumentation",
    ],
    cta: "Pris på förfrågan",
  },
  {
    id: 2,
    name: "Synas bättre",
    description:
      "En fokuserad SEO-insats som ger dig en tydlig väg framåt.",
    features: [
      "Teknisk SEO-check",
      "Sökordsanalys",
      "On-page rekommendationer",
      "Prioriterad handlingsplan",
    ],
    cta: "Pris på förfrågan",
    featured: true,
  },
  {
    id: 3,
    name: "Webb med riktning",
    description:
      "För en ny eller befintlig webbplats som behöver bli tydligare och vassare.",
    features: [
      "UX & innehållsstruktur",
      "Responsiv Front End",
      "Tillgänglighetscheck",
      "Analys & överlämning",
    ],
    cta: "Offert efter behov",
  },
]

function Packages() {
  return (
    <section className={styles.packages} id="packages">
      <header className={styles.header}>
        <h2>
          En tydlig start.
          <br />
          Utan krångel.
        </h2>

        <p className={styles.intro}>
          Några vanliga behov, paketerade för att göra
          första steget enkelt. Behöver du något annat?
          Då formar vi det tillsammans.
        </p>
      </header>

      <div className={styles.packageList}>
        {packages.map((item, index) => (
          <article
            key={item.id}
            className={`${styles.card} ${
              item.featured ? styles.featured : ""
            }`}
          >
            {item.featured && (
              <span className={styles.badge}>
                Populärt val
              </span>
            )}

            <div className={styles.cardHeader}>
              <span className={styles.number}>
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className={styles.type}>
                Fast paket
              </span>
            </div>

            <div className={styles.cardContent}>
              <h3>{item.name}</h3>
              <p className={styles.description}>
                {item.description}
              </p>

              <ul className={styles.features}>
                {item.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className={styles.cardFooter}>
              <a href="#contact" className={styles.cta}>
                <span>{item.cta}</span>
                <span
                  className={styles.arrow}
                  aria-hidden="true"
                >
                  →
                </span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Packages
