
import styles from "./IntroBanner.module.css"

function IntroBanner() {
  return (
    <section className={styles.banner}>
      <span className={styles.monogram} aria-hidden="true">
        JM
      </span>

      <p className={styles.text}>
        Friluftsälskande norrlänning som drivs av att skapa
        digitala upplevelser där{" "}
        <em>webb, innehåll, strategi och resultat</em> möts.
      </p>
    </section>
  )
}

export default IntroBanner
