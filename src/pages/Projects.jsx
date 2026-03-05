import { useState } from "react";
import { useNavigate } from "react-router";
import Footer from "../Components/Footer.jsx";
import projects from "../data/projects.js";
import ProjectCard from "../Components/ProjectCard";

const Projects = () => {
  const navigate = useNavigate();
  const [projectList] = useState(projects);

  const goToDetail = (id) => {
    navigate(`/project/${id}`);
  };

  return (
    <div className="page-wrapper reveal">
      <header className="projects-header">
        <h1 className="projects-title">Projecten</h1>
        <p className="projects-subtitle">
          Een selectie van projecten waarin ik ontwerp, front-end en structuur combineer.
          Klik op een project voor meer details.
        </p>
      </header>

      <section className="projects-container">
        {projectList.map((project) => (
          <ProjectCard key={project.id} project={project} onShowDetail={goToDetail} />
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default Projects;

