import "../App.css";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <div className="page-wrapper reveal">
      <section className="contact-home section-block">
        <div className="contact-card">
          <h1>Contact</h1>
          <p className="contact-intro">
            Wil je samenwerken of heb je een vraag over mijn projecten? Stuur me een bericht.
          </p>

          <div className="contact-item">
            <img src="mail.png" alt="E-mail icoon" />
            <div>
              <p className="contact-label">Email</p>
              <a className="contact-value" href="mailto:Mokur4201@gmail.com">
                Mokur4201@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-item">
            <img src="tel.png" alt="Telefoon icoon" />
            <div>
              <p className="contact-label">Telefoon</p>
              <a className="contact-value" href="tel:+31622496205">
                06 2249 6205
              </a>
            </div>
          </div>

          <div className="contact-item">
            <img src="linkednl.png" alt="LinkedIn icoon" />
            <div>
              <p className="contact-label">LinkedIn</p>
              <a
                className="contact-value"
                href="https://www.linkedin.com/in/mustafa-okur-aab40438a/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/mustafa-okur-aab40438a
              </a>
            </div>
          </div>
        </div>

        <aside className="contact-aside">
          <img className="contact-image" src="toetsenbord.png" alt="Werkplek met toetsenbord" />
          <p className="contact-note">
            Ik reageer meestal binnen 24 uur op berichten via e-mail of LinkedIn.
          </p>
        </aside>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

