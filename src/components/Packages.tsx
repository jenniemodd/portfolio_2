import { packages } from "../data/packages"
import styles from "./Packages.module.css"

function Packages() {
  return (
    <section className={styles.packages} id="packages">
  <div className={styles.container}>
    <header className={styles.header}>
        <h2>
          Rätt hjälp.
          <br />
          Där ni är.
        </h2>

        <p className={styles.intro}>
          Tre paket, tre olika lösningar och utrymme för något helt eget!
Utöver paketen hjälper jag dig även med webbutveckling och digitala insatser utifrån din verksamhets behov. Vi går igenom dina mål och hittar tillsammans en lösning som passar, oavsett om du behöver hjälp med en enskild insats eller vill ha ett mer långsiktigt samarbete. Hör av dig!
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
                Allt i allo-paket
              </span>
            )}

            <div className={styles.cardHeader}>
              <span className={styles.number}>
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className={styles.type}>
                Paketförslag
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
                <p className={styles.price}>
  <span>Från</span>
  <strong>{item.price}</strong>
</p>
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
    </div>
  </section>
  )
}

export default Packages
