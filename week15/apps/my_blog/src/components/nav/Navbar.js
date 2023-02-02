import { Container, Nav, Navbar } from "react-bootstrap";

import CreatePostModal from "../modals/CreatePost";
import { IoCreateOutline } from "react-icons/io5";
import { useState } from "react";

export default function MyNav({ getPosts }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  return (
    <>
      <CreatePostModal
        show={show}
        handleClose={handleClose}
        getPosts={getPosts}
      />
      <Navbar collapseOnSelect expand="xxl" bg="light" variant="light">
        <Container fluid>
          <Navbar.Brand href="/" style={{ color: "aqua" }}>
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
                  fontSize: "1.2rem",
                  fontWeight: "700",
                  border: "3px solid aqua",
                  color: "aqua",
                  borderRadius: "12px",
                }}
                onClick={handleOpen}
              >
                <div>Create</div> <IoCreateOutline size={30} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
