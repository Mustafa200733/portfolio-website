import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projects from '../data/projects';
import Footer from "../Components/Footer";

const ProjectDetail = () => {
  const { id } = useParams();                // Haal het project-ID uit de URL
  const navigate = useNavigate();            // Navigeren (terugknop)
  const [projectList] = useState(projects);  // Projecten laden in state
  
  // Zoek het juiste project o.b.v. het ID
  const project = projectList.find(a => a.id === Number(id))

  // Als project niet bestaat → foutmelding
  if (!project) {
    return (
      <div>
        <button onClick={() => navigate(-1)}>Terug</button>
        <p>Project niet gevonden!</p>
      </div>
    );
  }

  return (
    <section>
      <br /><br /><br /><br /><br />

      <button className='btntr' onClick={() => navigate(-1)}>
        ← Terug
      </button>

      <h2 className='h2p'>{project.name}</h2>
      <p>{project.description}</p>

      <img className='alle3im' src={project.image} alt="" />          

      <Footer image="Project.png" />
    </section>
  );
};

export default ProjectDetail;
