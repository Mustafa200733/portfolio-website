import { Link } from "react-router-dom";
import "../App.css";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="page-wrapper reveal">
      <section className="home-container">
        <section className="info-content">
          <p className="hero-badge">Software Developer in opleiding</p>
          <h1>Ik bouw digitale ideeen stap voor stap uit.</h1>
          <p className="hero-subtitle">
            Welkom op mijn portfolio. Hier laat ik zien hoe ik met HTML, CSS,
            JavaScript en React werk aan heldere interfaces en bruikbare projecten.
          </p>

          <div className="hero-actions">
            <Link className="btn-primary" to="/Projects">
              Bekijk mijn projecten
            </Link>
            <Link className="btn-secondary" to="/Contact">
              Neem contact op
            </Link>
          </div>

          <div className="hero-metrics">
            <div className="metric-card">
              <strong>3+</strong>
              <span>Portfolio projecten</span>
            </div>
            <div className="metric-card">
              <strong>7</strong>
              <span>Technieken geoefend</span>
            </div>
          </div>
        </section>

        <section className="image-content">
          <img src="Mustafa.jpg" alt="Portret van Mustafa" />
        </section>
      </section>

      <Footer />
    </div>
  );
};

export default Home;

