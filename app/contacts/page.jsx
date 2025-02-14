// app/contact/page.js
export default function Contact() {
    return (
      <section className="container">
        <h1>Contact Me</h1>
        <div className="contact-form">
          <form>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    );
  }
  