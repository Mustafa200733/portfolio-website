import React, { useState } from "react";
import skills from "../Data/skills.js";
import { useNavigate } from "react-router";

const Projects = () => {
  const navigate = useNavigate();
  const [ProjectList, setProjectList] = useState([]); // initialize with empty array to avoid .map() errors

  const goToDetail = (ProjectId) => {
    navigate(`/Project/${ProjectId}`);
  };

  return (
    <section>
      {ProjectList.map((project) => (
        <Card
          key={project.id} // lowercase 'project', not 'Project'
          Project={project}
          onShowDetail={goToDetail}
        />
      ))}
    </section>
  );
};

export default Projects;
