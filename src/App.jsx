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
    <BrowserRouter  basename="/portfolio-website/">
      
      <Routes>

        <Route path="/" element={<Navbar />}>

          <Route index element={<Home />} />

          <Route path="About" element={<About />} />

          <Route path="/project/:id" element={<ProjectDetail />} />

          <Route path="Projects" element={<Projects />} />

          <Route path="Contact" element={<Contact />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
