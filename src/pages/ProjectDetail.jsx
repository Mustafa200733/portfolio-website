import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import projects from "../data/projects";
import Footer from "../Components/Footer";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [projectList] = useState(projects);

  const project = projectList.find((item) => item.id === Number(id));
  const imageSrc = project
    ? `${import.meta.env.BASE_URL}${String(project.image).replace(/^\//, "")}`
    : "";

  if (!project) {
    return (
      <div className="page-wrapper project-detail reveal">
        <button className="btntr" onClick={() => navigate(-1)}>
          Terug
        </button>
        <p>Project niet gevonden.</p>
      </div>
    );
  }

  return (
    <div className="page-wrapper reveal">
      <section className="project-detail">
        <div className="project-detail-card">
          <button className="btntr" onClick={() => navigate(-1)}>
            Terug
          </button>

          <h2 className="h2p">{project.name}</h2>
          <p className="project-description">{project.description}</p>

          <img className="alle3im" src={imageSrc} alt={project.name} />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;

