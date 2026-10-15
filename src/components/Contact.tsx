
import { useState } from "react"
import { useForm, ValidationError } from "@formspree/react"
import styles from "./Contact.module.css"

type FormData = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

type FormErrors = Partial<Record<keyof FormData, string>>

function Contact() {
  const [state, handleSubmit] = useForm("mrpeyvaj")

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [formErrors, setFormErrors] = useState<FormErrors>({})

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }))

    setFormErrors((currentErrors) => ({
      ...currentErrors,
      [name]: "",
    }))
  }

  function validateForm(): boolean {
    const errors: FormErrors = {}

    if (!formData.name.trim()) {
      errors.name = "Fyll i ditt namn."
    }

    if (!formData.email.trim()) {
      errors.email = "Fyll i din e-postadress."
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      errors.email = "Ange en giltig e-postadress."
    }

    if (!formData.phone.trim()) {
      errors.phone = "Fyll i ditt telefonnummer."
    }

    if (!formData.subject.trim()) {
      errors.subject = "Ange vad ditt meddelande gäller."
    }

    if (!formData.message.trim()) {
      errors.message = "Skriv ett meddelande."
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  async function handleFormSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault()

    if (!validateForm()) {
      return
    }

    await handleSubmit(event)
  }

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
            Har du en idé, ett problem som behöver lösas eller vet du
            kanske inte riktigt vad du behöver hjälp med än? Hör av dig!
            Se mig som ett bollplank. Vi kan prata om dina tankar, hitta
            möjligheter och se om vi finner något spännande att göra
            tillsammans.
          </p>

          <p className={styles.contactNote}>
            Det kostar ingenting att ta ett första samtal, och du behöver
            inte ha allt klart från början. No pressure, no stress! Bara
            ett förutsättningslöst samtal, mail eller sms och en chans
            att se vart det leder.
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

        <form
          className={styles.form}
          onSubmit={handleFormSubmit}
          noValidate
        >
          <div className={styles.field}>
            <label htmlFor="name">Namn</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Ditt namn"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              aria-invalid={Boolean(formErrors.name)}
              aria-describedby={formErrors.name ? "name-error" : undefined}
              required
            />
            {formErrors.name && (
              <p id="name-error" role="alert">{formErrors.name}</p>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor="email">E-post</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="du@exempel.se"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              aria-invalid={Boolean(formErrors.email)}
              aria-describedby={formErrors.email ? "email-error" : undefined}
              required
            />
            {formErrors.email && (
              <p id="email-error" role="alert">{formErrors.email}</p>
            )}
            <ValidationError
              prefix="E-post"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="phone">Telefon</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Ditt telefonnummer"
              autoComplete="tel"
              value={formData.phone}
              onChange={handleChange}
              aria-invalid={Boolean(formErrors.phone)}
              aria-describedby={formErrors.phone ? "phone-error" : undefined}
              required
            />
            {formErrors.phone && (
              <p id="phone-error" role="alert">{formErrors.phone}</p>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor="subject">Ämne</label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Vad gäller det?"
              value={formData.subject}
              onChange={handleChange}
              aria-invalid={Boolean(formErrors.subject)}
              aria-describedby={formErrors.subject ? "subject-error" : undefined}
              required
            />
            {formErrors.subject && (
              <p id="subject-error" role="alert">{formErrors.subject}</p>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor="message">Vad har du på hjärtat?</label>
            <textarea
              id="message"
              name="message"
              placeholder="Berätta lite om din idé, roll eller utmaning..."
              rows={5}
              value={formData.message}
              onChange={handleChange}
              aria-invalid={Boolean(formErrors.message)}
              aria-describedby={formErrors.message ? "message-error" : undefined}
              required
            />
            {formErrors.message && (
              <p id="message-error" role="alert">{formErrors.message}</p>
            )}
            <ValidationError
              prefix="Meddelande"
              field="message"
              errors={state.errors}
            />
          </div>

         
{state.errors && (
  <p className={styles.formError} role="alert">
    Meddelandet kunde inte skickas just nu.
    Försök igen om en stund eller mejla mig direkt på{" "}
    <a href="mailto:hej@jenniemodd.se">
      hej@jenniemodd.se
    </a>.
  </p>
)}


          <button
            className={styles.submit}
            type="submit"
            disabled={state.submitting}
          >
            <span>
              {state.submitting ? "Skickar..." : "Skicka meddelande"}
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
