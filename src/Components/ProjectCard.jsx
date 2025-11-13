const ProjectCard = ({project, onShowDetail}) => {
    return ( 
        <section>
            <h2  className="h2pronam">{project.name}</h2>
            <img className="img" src={project.image}/>
           <br />
           
            <button  onClick={() => onShowDetail(project.id)}>
        Meer info
      </button>
        </section>
     );
};
 
export default ProjectCard;