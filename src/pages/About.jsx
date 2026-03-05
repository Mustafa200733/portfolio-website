import { useState } from "react";
import Footer from "../Components/Footer";
import skillsData from "../data/skills";

function About() {
  const [selectedSkill, setSelectedSkill] = useState(skillsData[0]);
  const cvDownloadLink = `${import.meta.env.BASE_URL}mustafa-okur-cv-2026.pdf`;

  return (
    <div className="page-container reveal">
      <section className="ana about-hero">
        <section className="sol">
          <p className="hero-badge">Over mij</p>
          <h1>Ik combineer designgevoel met code.</h1>
          <p>
            Ik volg de opleiding Software Developer en werk aan projecten die
            zowel technisch sterk als visueel duidelijk moeten zijn.
          </p>

          <ul className="about-highlights">
            <li>Praktisch gebouwd met React en JavaScript</li>
            <li>Focus op nette structuur en responsive layout</li>
            <li>Steeds verbeteren op basis van feedback</li>
          </ul>
        </section>

        <section className="sag">
          <div className="about-portrait-card">
            <img src="Screenshot.png" alt="Mustafa werkt aan code" />
            <p>Frontend student met focus op gebruiksvriendelijke UI.</p>
          </div>
        </section>
      </section>

      <section className="about-panels section-block">
        <article className="about-panel">
          <h2 className="vaardig">Mijn vaardigheden</h2>

          <div className="skills-list">
            {skillsData.map((skill) => (
              <button
                key={skill.name}
                onClick={() => setSelectedSkill(skill)}
                className={`skill-btn ${selectedSkill?.name === skill.name ? "active" : ""}`}
              >
                {skill.name}
              </button>
            ))}
          </div>

          <div className="skill-info">
            <h3>{selectedSkill.name}</h3>
            <p>{selectedSkill.description}</p>
          </div>
        </article>

        <article className="about-panel">
          <h2 className="h2ab">Contact en links</h2>
          <ul className="about-contact-list">
            <li>
              <a className="about-link" href="https://github.com/Mustafa200733" target="_blank" rel="noreferrer">
                GitHub profiel
              </a>
            </li>
            <li>
              <a
                className="about-link"
                href="https://www.linkedin.com/in/mustafa-okur-aab40438a/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn profiel
              </a>
            </li>
            <li>
              <a className="about-link" href={cvDownloadLink} download>
                Download mijn cv
              </a>
            </li>
          </ul>
        </article>
      </section>

      <Footer />
    </div>
  );
}

export default About;

