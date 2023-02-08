import "./Navbar.scss";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      {" "}
      <ul className="nav navbar-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/category">Category</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </nav>
  );
}
