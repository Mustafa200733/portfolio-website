import "../App.css";
import Footer from "../Components/Footer";
const Home = () => {
  return (
    <div className="page-wrapper">
      <section className="contact-home">
        <section className="links-content">
          
          <h1>Contact</h1>
        
          <p><br />
         <br />
            <br />
           
          </p>
        </section>
        <section className="image-content">
          <img src="/Mustafa.jpg" alt="" />
        </section>
      </section>
      <Footer image="/public/home-banner.png" />
    </div>
  );
};

export default Home;
