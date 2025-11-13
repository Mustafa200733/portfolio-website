import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projects from '../data/projects';
import Footer from "../Components/Footer";


const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [projectList] = useState(projects);
  
  const project = projectList.find(a => a.id === Number(id))

  if (!project) {
    return (
      <div>
        <button onClick={() => navigate(-1)}>Terug</button>
        <p >Project niet gevonden!</p>
      </div>
    );
  }

  return (
    <section>
      <br />
      <br />
      <br />
      <br />
      <br />
      
  <button className='btntr' onClick={() => navigate(-1)}>
        ← Terug
      </button>
      
      <h2 className='h2p'>{project.name}</h2>
      <p>{project.description}</p>
        <img className='alleim' src={project.image} alt="" />          

            <Footer image="/public/Project.png" />

    </section>
  );
};

export default ProjectDetail;