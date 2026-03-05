import { NavLink, Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="site-nav">
        <Link to="/" className="brand">
          Mustafa Okur
        </Link>

        <ul className="nav-links">
          <li>
            <NavLink to="/" end className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}>
              Over mij
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      <main className="content-shell">
        <Outlet />
      </main>
    </>
  );
};

export default Navbar;
