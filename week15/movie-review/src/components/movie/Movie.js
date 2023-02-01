import "./Movie.scss";

import { Accordion } from "react-bootstrap";
import EditMovie from "../common/modals/EditMovie";
import ReviewList from "../review/ReviewList";
import Stars from "../common/stars/Stars";
import { useState } from "react";

export default function Movie({ movie, editMovie }) {
  const [show, setShow] = useState(false);
  const handleShowModal = () => setShow(true);
  const handleCloseModal = () => setShow(false);

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
        show={show}
        handleCloseModal={handleCloseModal}
        editMovie={editMovie}
      />
      <div className="img">
        <img src={`${movie.imgUrl}`} alt={movie.title} />
        <div className="movie-actions">
          <button className="edit" onClick={handleShowModal}>
            Edit
          </button>{" "}
          <button className="delete">Delete</button>
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
            <Accordion.Body>Add Review Form</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}
