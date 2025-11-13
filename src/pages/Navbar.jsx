import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">Over mij</Link></li>
          <li><Link to="/Projects">Projects</Link></li>
          <li><Link to="/Contact">Contact</Link></li>

        </ul>
      </nav>
      
    
      <Outlet />
    </>
  );
};

export default Navbar;