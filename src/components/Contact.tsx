
function Contact() {
  return (
    <section id="contact">
      <p>07 — Kontakt</p>

      <h2>Ska vi skapa något bra tillsammans?</h2>

      <p>
        Berätta vad du behöver hjälp med, så tar vi det
        därifrån.
      </p>

      <div>
        <a href="mailto:din.epost@example.com">
          Skicka e-post
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>

      <form>
        <div>
          <label htmlFor="name">Namn</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
          />
        </div>

        <div>
          <label htmlFor="email">E-post</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>

        <div>
          <label htmlFor="subject">Vad behöver du hjälp med?</label>
          <select id="subject" name="subject" defaultValue="">
            <option value="" disabled>
              Välj ett område
            </option>
            <option value="frontend">Frontendutveckling</option>
            <option value="marketing">Digital marknadsföring</option>
            <option value="seo">SEO och analys</option>
            <option value="other">Annat</option>
          </select>
        </div>

        <div>
          <label htmlFor="message">Meddelande</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
          />
        </div>

        <button type="submit">Skicka förfrågan</button>
      </form>
    </section>
  )
}

export default Contact
