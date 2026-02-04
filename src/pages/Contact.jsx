import "../App.css";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <div className="page-wrapper">
      <section className="contact-home section-block">
        <div className="contact-card">
          <h1>Contact</h1>

          <div className="contact-item">
            <img src="mail.png" alt="" />
            <div>
              <p className="contact-label">Email</p>
              <a className="contact-value" href="mailto:Mokur4201@gmail.com">Mokur4201@gmail.com</a>
            </div>
          </div>

          <div className="contact-item">
            <img src="tel.png" alt="" />
            <div>
              <p className="contact-label">Telefoon</p>
              <a className="contact-value" href="tel:0610451897">0610451897</a>
            </div>
          </div>

          <div className="contact-item">
            <img src="linkednl.png" alt="" />
            <div>
              <p className="contact-label">LinkedIn</p>
              <a className="contact-value" href="https://www.linkedin.com/in/mustafa-okur-aab40438a/" target="_blank" rel="noreferrer">linkedin.com/in/mustafa-okur-aab40438a</a>
            </div>
          </div>
        </div>
<img src="toetsenbord.png" alt="" />
       
      </section>


      <Footer image="home-banner.png" />
    </div>
  );
};

export default Contact;
