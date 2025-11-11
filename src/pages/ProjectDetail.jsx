import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projects from '../data/projects.js';

const ProjectDetail = () => {
  const { id} = useParams();
  const navigate = useNavigate();
  const [projectList] = useState(projects);
  
  const project = projectList.find(a => a.id === Number(id))

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
      <button onClick={() => navigate(-1)}>
        ← Terug
      </button>
      
      <h2>{project.name}</h2>
      <p>{project.description}</p>
    </section>
  );
};

export default ProjectDetail;