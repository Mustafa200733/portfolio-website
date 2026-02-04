import { useState } from "react";
import Footer from "../Components/Footer";
import skillsData from "../Data/skills";

function About() {
  const [selectedSkill, setSelectedSkill] = useState(null);   // Gekozen vaardigheid
  const [skills, setSkills] = useState(skillsData);           // Lijst met skills uit data

  return (
    <div className="page-container">

     { /* Over mij sectie */}
      <section className="ana">
        <section className="sol">
          <h1>Over mij</h1>
          
          <p>
            Ik volg de opleiding Software Developer en werk graag aan projecten
            die mijn skills uitdagen. Klik op een vaardigheid hieronder om de
            uitleg te zien.
          </p>
        </section>

       
        <section className="sag">
          <img src="Screenshot.png" alt="Mustafa" />
        </section>
      </section>

     
      <h2 className="h2sa">Meer over mij↓</h2>

     
      <section className="vaardigheden section-block">
        <h2 className="vaardig">Mijn vaardigheden</h2>

        
        <div className="skills-list">
          {skills.map((skill) => (
            <button
              key={skill.name}                        // Unieke key
              onClick={() => setSelectedSkill(skill)} // Skill selecteren
              className={`skill-btn ${
                selectedSkill?.name === skill.name ? "active" : ""
              }`}
            >
              {skill.name}
            </button>
          ))}
        </div>

       { /* Extra info over gekozen skill */}
        {selectedSkill && (
          <div className="skill-info">
            <h3>{selectedSkill.name}</h3>
            <p>{selectedSkill.description}</p>
          </div>
        )}
      </section>

   
      <section className="contact section-block">
        <h2 className="h2ab">Contact & Links</h2>
        <ul className="ulab">

         
          <li>
            <a
              href="https://github.com/Mustafa200733"
              target="_blank"
              rel="noreferrer"
            >
              <p className="pgit">GitHub</p>
            </a>
          </li>

       
          <li>
            <a
              href="https://www.linkedin.com/in/mustafa-okur-aab40438a/"
              target="_blank"
              rel="noreferrer"
            >
              <p className="pli">LinkedIn</p>
            </a>
          </li>

      
          <li>
            <a href="/sc.png" download>
              <p className="po">Download mijn CV</p>
            </a>
          </li>

        </ul>
      </section>

      <Footer image="home-banner.png" />
    </div>
  );
}

export default About;



