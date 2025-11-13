import { useState } from "react";
import Footer from "../Components/Footer";
import skillsData from "../Data/skills";

function About() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [skills, setSkills] = useState(skillsData);

  return (
    <div className="page-container">
      <section className="ana">
        <section className="sol">
          <h1>Over mij</h1>
          
          <p>
            Hallo, ik ben Mustafa. Ik volg de opleiding <br />
            Software Developer en heb al veel ervaring <br />
            met programmeren in HTML, CSS, PHP, SQL, <br />
            JavaScript en Python. <br />
            <br />
            Daarnaast heb ik ook gewerkt met Figma <br />
            en een app ontworpen.          </p>
        </section>
        <section className="sag">
          <img src="/Screenshot.png" alt="Mustafa" />
        </section>
      </section>
        <h1 className="h2sa"> Meer over mij ↓ </h1>
      <section className="vaardigheden">
        <h2 className="vaardig">Mijn vaardigheden</h2>

        <div className="skills-list">
          {skills.map((skill) => (
            <button
              key={skill.name}
              onClick={() => setSelectedSkill(skill)}
              className={`skill-btn ${
                selectedSkill?.name === skill.name ? "active" : ""
              }`}
            >
              {skill.name}
            </button>
          ))}
        </div>

        {selectedSkill && (
          <div className="skill-info">
            <h3>{selectedSkill.name}</h3>
            <p>{selectedSkill.description}</p>
          </div>
        )}
      </section>

      <section className="contact">
        <h2 className="h2ab">Contact & Links</h2>
        <ul className="ulab">
          <li>
            <a
              href="https://github.com/users/Mustafa200733/projects/1/views/1?pane=issue&itemId=136254815&issue=Mustafa200733%7Cportfolio-website%7C11"
              target="_blank"
              rel="noreferrer"
            >
             <p className="pgit"> GitHub</p>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/mustafa-okur-aab40438a/"
              target="_blank"
              rel="noreferrer"
            >
             <p className="pli"> LinkedIn </p>
            </a>
          </li>
          <li>
            <a href="/sc.png" download>
             <p className="po"> Download mijn CV</p>
            </a>
          </li>
        </ul>
      </section>

      <Footer image="/public/Overmij.png" />
    </div>
  );
}

export default About;
