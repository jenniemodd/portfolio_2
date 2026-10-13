
import styles from "./Contact.module.css"

function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>06 · Kontakt</p>

          <h2 className={styles.heading}>
            Har du en
            <br />
            idé?
            <br />
            <span>Jag lyssnar.</span>
          </h2>

          <p className={styles.description}>
            Ett nytt uppdrag, en roll som känns rätt eller bara
            ett digitalt problem som behöver lösas? Skriv några
            rader.
          </p>

          <div className={styles.contactLinks}>
            <a href="mailto:hej@jenniemodd.se">
              <span aria-hidden="true">✉</span>
              hej@jenniemodd.se
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <form className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="name">Namn</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Ditt namn"
              autoComplete="name"
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="email">E-post</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="du@exempel.se"
              autoComplete="email"
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="message">
              Vad vill du prata om?
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Berätta lite om din idé, roll eller utmaning..."
              rows={5}
              required
            />
          </div>

          <button className={styles.submit} type="submit">
            <span>Skicka meddelande</span>
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
