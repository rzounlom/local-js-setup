import "./Navbar.scss";

import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </ul>
    </nav>
  );
};
