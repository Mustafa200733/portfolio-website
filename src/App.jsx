import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import "./App.css";
import Projects from './pages/Projects';

function App() {
  return (
    // BrowserRouter zorgt ervoor dat React routing kan gebruiken
    <BrowserRouter  basename="/portfolio-react/">
      
      /* Routes bevat alle mogelijke URL-routes */
      <Routes>

        /* Hoofdroute met Navbar als layout */
        <Route path="/" element={<Navbar />}>

          /* Standaardpagina voor "/" */
          <Route index element={<Home />} />

          /* Over mij pagina */
          <Route path="About" element={<About />} />

          /* Detailpagina voor een specifiek project, bv /project/3 */
          <Route path="/project/:id" element={<ProjectDetail />} />

          /* Overzicht van alle projecten */
          <Route path="Projects" element={<Projects />} />

          /* Contactpagina */
          <Route path="Contact" element={<Contact />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
