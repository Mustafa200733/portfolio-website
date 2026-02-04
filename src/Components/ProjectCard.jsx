const ProjectCard = ({ project, onShowDetail }) => {
  const imageSrc = `${import.meta.env.BASE_URL}${String(project.image).replace(
    /^\//,
    ""
  )}`;

  return (
    <article className="project-card">
      <img className="image" src={imageSrc} alt={project.name} />
      <h3>{project.name}</h3>
      <button className="bttn2" onClick={() => onShowDetail(project.id)}>
        Meer info
      </button>
    </article>
  );
};
 
export default ProjectCard;
