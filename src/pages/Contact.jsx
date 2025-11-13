import "../App.css";
import Footer from "../Components/Footer";
const Home = () => {
  return (
    <div className="page-wrapper">
      <section className="contact-home">
        <section className="contact-links">

          <br />
          <br />
          <h1>Contact</h1>
      <br />

<img src="mail.png" alt="" />
       <p>Email <br />
     Mokur4201@gmail.com</p>
     <p className="ctnp">Voor meer contact info↓</p>

<img src="public/tel.png" alt="" />
<p>Telefoon
  <br />
  0610451897
</p>

<img src="public/linkednl.png" alt="" />
<p>Linkedln <br />
https://www.linkedin.com/in/mustafa-okur-aab40438a/</p>


        </section>

        <section className="contact-image">
        </section>
      </section>
      <img className="imgtoets"src="public/toetsenbord.png" alt="" />

      <Footer image="/public/Contact.png" />
    </div>
  );
};

export default Home;
