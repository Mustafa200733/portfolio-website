import React, { useState } from "react";
import skills from "../Data/skills.js"; // (Lijkt niet gebruikt, kan eventueel weg)
import { useNavigate } from "react-router";
import Footer from "../Components/Footer.jsx";
import projects from "../data/projects.js";
import ProjectCard from "../Components/ProjectCard";

const Projects = () => {
  const navigate = useNavigate();                // Om naar detailpagina te navigeren
  const [ProjectList, setProjectList] = useState(projects); // Lijst met projecten

  // Navigeren naar het projectdetail (met ID)
  const goToDetail = (id) => {
    navigate(`/project/${id}`);
  };

  return (
    <>
      /* Container voor alle projectkaarten */
      <section className="projects-container">
        {ProjectList.map((project) => (
          <ProjectCard
            key={project.id}               // Unieke key voor React
            project={project}              // Projectgegevens doorgeven aan de kaart
            onShowDetail={goToDetail}      // Functie om naar de detailpagina te gaan
          />
        ))}
      </section>

°      <Footer image="/public/Project.png" />
    </>
  );
};

export default Projects;
