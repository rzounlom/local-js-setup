import { Button, Form, Modal } from "react-bootstrap";

import { useState } from "react";

export default function EditMovie({
  movie,
  show,
  handleCloseModal,
  editMovie,
}) {
  const [movieData, setMovieData] = useState({
    title: movie.title,
    imgUrl: movie.imgUrl,
    summary: movie.summary,
  });

  const { title, imgUrl, summary } = movieData;

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setMovieData({ ...movieData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedMovie = {
      ...movie,
      ...movieData,
    };

    editMovie(updatedMovie);
    handleCloseModal();
  };

  return (
    <Modal show={show} onHide={handleCloseModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Movie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="addMovieForm.ControlInput1">
            <Form.Label>Movie Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={title}
              placeholder="The best movie ever..."
              autoFocus
              required
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="addMovieForm.ControlInput2">
            <Form.Label>Movie Image Url</Form.Label>
            <Form.Control
              type="text"
              name="imgUrl"
              value={imgUrl}
              placeholder="https://movieurl..."
              rows={3}
              required
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="addMovieForm.ControlInput3">
            <Form.Label>Movie Summary</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              name="summary"
              value={summary}
              placeholder="Long ago, in a galaxy far far away..."
              rows={3}
              required
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Update Movie
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
