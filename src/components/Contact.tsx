
import { useForm, ValidationError } from "@formspree/react"
import styles from "./Contact.module.css"

function Contact() {
  const [state, handleSubmit] = useForm("mrpeyvaj")

  if (state.succeeded) {
    return (
      <section className={styles.contact} id="contact">
        <div className={styles.container}>
          <div className={styles.intro}>
            <p className={styles.eyebrow}>06 · Kontakta mig</p>

            <h2 className={styles.heading}>
              Tack för
              <br />
              ditt <span>meddelande!</span>
            </h2>

            <p className={styles.description}>
              Ditt meddelande är skickat. Jag återkommer så
              snart jag kan!
            </p>

            <div className={styles.contactLinks}>
              <a href="mailto:hej@jenniemodd.se">
                <span aria-hidden="true">✉</span>
                hej@jenniemodd.se
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>06 · Kontakt</p>

          <h2 className={styles.heading}>
            Nyfiken?
            <br />
            <span>Hör av dig!</span>
          </h2>

          <p className={styles.description}>
            Har du en idé, ett problem som behöver lösas eller vet du kanske inte riktigt vad du behöver hjälp med än? Hör av dig!
Se mig som ett bollplank. Vi kan prata om dina tankar, hitta möjligheter och se om vi finner något spännande att göra tillsammans. 
          </p>
          <p className={styles.contactNote}>
  Det kostar ingenting att ta ett första samtal, och du behöver
  inte ha allt klart från början. No pressure, no stress! Bara
  ett förutsättningslöst samtal, mail eller sms och en chans att
  se vart det leder.
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

        <form className={styles.form} onSubmit={handleSubmit}>
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
            <ValidationError
              prefix="E-post"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="message">
              Vad har du på hjärtat?
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Berätta lite om din idé, roll eller utmaning..."
              rows={5}
              required
            />
            <ValidationError
              prefix="Meddelande"
              field="message"
              errors={state.errors}
            />
          </div>

          {state.errors && (
            <p role="alert">
              Något gick fel när meddelandet skulle skickas.
              Kontrollera formuläret och försök igen.
            </p>
          )}

          <button
            className={styles.submit}
            type="submit"
            disabled={state.submitting}
          >
            <span>
              {state.submitting
                ? "Skickar..."
                : "Skicka meddelande"}
            </span>
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
