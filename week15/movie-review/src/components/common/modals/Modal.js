import { Button, Form, Modal } from "react-bootstrap";

import { useState } from "react";

export default function DefaultModal() {
  const [show, setShow] = useState(true);

  const handleShowModal = () => setShow(!show);

  return (
    <Modal show={show} onHide={handleShowModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Movie Title</Form.Label>
            <Form.Control type="text" placeholder="title..." autoFocus />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Movie Image Url</Form.Label>
            <Form.Control type="text" placeholder="url..." rows={3} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Movie Summary</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              placeholder="summary..."
              rows={3}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleShowModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleShowModal}>
          Add Movie
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
