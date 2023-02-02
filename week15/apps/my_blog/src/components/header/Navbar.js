import { Nav, Navbar } from "react-bootstrap";

import { IoCreateOutline } from "react-icons/io5";

export default function MyNav() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand href="/">
        <h1>My Blog</h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto"></Nav>
        <Nav>
          <Nav.Link
            eventKey={2}
            href="#memes"
            style={{
              display: "flex",
              alignItems: "center",
              justfyContent: "space-between",
            }}
          >
            Create <IoCreateOutline />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
