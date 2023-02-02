import "./Movie.scss";

import { Accordion, Button, Form } from "react-bootstrap";

import DeleteModal from "../common/modals/DeleteMovie";
import EditMovie from "../common/modals/EditMovie";
import ReviewList from "../review/ReviewList";
import Stars from "../common/stars/Stars";
import { useState } from "react";

export default function Movie({ movie, editMovie, deleteMovie, addReview }) {
  const [showEditModal, setShowEditModal] = useState(false);
  const handleShowEditModal = () => setShowEditModal(true);
  const handleCloseEditModal = () => setShowEditModal(false);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const handleShowDeleteModal = () => setShowDeleteModal(true);
  const handleCloseDeleteModal = () => setShowDeleteModal(false);

  const [reviewData, setReviewData] = useState({
    name: "",
    review: "",
  });

  const [rating, setRating] = useState(0);
  const { name, review } = reviewData;
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setReviewData({ ...reviewData, [name]: value });
  };

  const handleDeleteMovie = () => {
    deleteMovie(movie.id);
    handleCloseDeleteModal();
  };

  const handleSubmitReview = (event) => {
    event.preventDefault();
    const newReview = { ...reviewData, rating };
    addReview(movie.id, newReview);
    setReviewData({
      name: "",
      review: "",
    });
    setRating(0);
  };

  //helper function to get the average of all movie review ratings
  const avgReview = () => {
    //check to make sure movie hast reviews
    if (movie.reviews.length > 0) {
      const totalReview = movie.reviews
        //map over each review and return an array of ratings as a number
        .map((review) => Number(review.rating))
        //reduce the array of ratings down to one total rating
        .reduce((sum, rating) => sum + rating);

      //divide the total ratings sum by the number of reviews
      return totalReview / movie.reviews.length;
    }

    //return 0 if ther are no reviews
    return 0;
  };

  const defaultMovie = { title: "", imgUrl: "", summary: "" };

  return (
    <div className="movie">
      <EditMovie
        movie={movie ? movie : defaultMovie}
        show={showEditModal}
        handleCloseModal={handleCloseEditModal}
        editMovie={editMovie}
      />

      <DeleteModal
        show={showDeleteModal}
        handleCloseModal={handleCloseDeleteModal}
        handleDeleteMovie={handleDeleteMovie}
      />
      <div className="img">
        <img src={`${movie.imgUrl}`} alt={movie.title} />
        <div className="movie-actions">
          <button className="edit" onClick={handleShowEditModal}>
            Edit
          </button>{" "}
          <button className="delete" onClick={handleShowDeleteModal}>
            Delete
          </button>
        </div>
      </div>
      <div className="movie-description">
        <div className="rating">
          {movie.title} <Stars rating={avgReview()} edit={false} />
        </div>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Movie Summary</Accordion.Header>
            <Accordion.Body>{movie.summary}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Reviews</Accordion.Header>
            <Accordion.Body>
              {movie.reviews.length > 0 ? (
                <ReviewList reviews={movie.reviews} />
              ) : (
                "No Reviews Yet"
              )}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Add Your Review</Accordion.Header>
            <Accordion.Body>
              {" "}
              <Form onSubmit={handleSubmitReview}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Your name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={name}
                    required
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Your review</Form.Label>
                  <Form.Control
                    type="text"
                    name="review"
                    placeholder="The best movie I've ever seen..."
                    value={review}
                    required
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Label>Your rating</Form.Label>
                  <Stars edit={true} rating={rating} setRating={setRating} />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}
