const ProjectCard = ({ project, onShowDetail }) => {
  const imageSrc = `${import.meta.env.BASE_URL}${String(project.image).replace(/^\//, "")}`;

  return (
    <article className="project-card">
      <img className="image" src={imageSrc} alt={project.name} />

      <div className="project-card-content">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <button className="bttn2" onClick={() => onShowDetail(project.id)}>
          Bekijk project
        </button>
      </div>
    </article>
  );
};

export default ProjectCard;
