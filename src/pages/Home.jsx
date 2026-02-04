import { Link } from "react-router-dom";
import "../App.css";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="page-wrapper">
      <section className="home-container">
        <section className="info-content">
         
          <h1>Welkom op mijn portfolio</h1>
          <p className="hero-subtitle">
            Welkom! Ik leer en bouw met code om ideeen tot leven te brengen. Ik
            ontwikkel met enthousiasme mijn eerste stappen in de wereld van
            software.
          </p>
          <div className="hero-actions">
            
          </div>
        </section>
        <section className="image-content">
          <img src="Mustafa.jpg" alt="Portret van Mustafa" />
        </section>
      </section>
      <Footer image="home-banner.png" />
    </div>
  );
};

export default Home;
