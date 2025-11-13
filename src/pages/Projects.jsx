import React, { useState } from "react";
import skills from "../Data/skills.js";
import { useNavigate } from "react-router";
import Footer from "../Components/Footer.jsx";
import projects from "../data/projects.js";
import ProjectCard from "../Components/ProjectCard";

const Projects = () => {
  const navigate = useNavigate();
  const [ProjectList, setProjectList] = useState(projects);

  const goToDetail = (id) => {
    navigate(`/project/${id}`);
  };

  return (
    <>
      <section className="projects-container">
        {ProjectList.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onShowDetail={goToDetail}
          />
        ))}
      </section>

      <Footer image="/public/Project.png" />
    </>
  );
};

export default Projects;
