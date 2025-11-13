const ProjectCard = ({project, onShowDetail}) => {
    return ( 
        <section>
            <h2  className="h2pronam">{project.name}</h2>
            <img className="ima3e" src={project.image}/>
           <br />
           
            <button className="bttn2"  onClick={() => onShowDetail(project.id)}>
        Meer info
      </button>
        </section>
     );
};
 
export default ProjectCard;