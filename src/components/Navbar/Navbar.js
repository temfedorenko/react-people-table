import { NavLink } from "react-router-dom";

const Navbar = () => {
  const itemClasses = ({ isActive }) =>
    ["navbar-item", isActive ? "has-background-grey-lighter" : null].join(" ");

  return (
    <nav className="navbar is-fixed-top has-shadow" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={itemClasses}>
            Home
          </NavLink>

          <NavLink to="/people" className={itemClasses}>
            People
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
