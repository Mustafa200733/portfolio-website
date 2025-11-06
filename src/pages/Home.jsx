import "../App.css";
import Footer from "../Components/Footer";
const Home = () => {
  return (
    <div className="page-wrapper">
      <section className="home-container">
        <section className="info-content">
          
          <h1>Welkom op mijn portfolio</h1>
        
          <p>Welkom! Ik leer en bouw met code <br />
            om ideeën tot leven te brengen. <br />
            <br />
            Ik ontwikkel met enthousiasme mijn <br />
             eerste stappen in de wereld van
            software.
          </p>
        </section>
        <section className="image-content">
          <img src="/Mustafa.jpg" alt="" />
        </section>
      </section>
      <Footer image="/public/Onderimg.png" />
    </div>
  );
};

export default Home;
