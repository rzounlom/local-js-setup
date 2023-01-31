import "./Review.scss";

import { ListGroup } from "react-bootstrap";
import Stars from "../common/stars/Stars";

export default function Review({ review }) {
  return (
    <ListGroup className="review">
      <ListGroup.Item>
        <div className="rating">
          {`${review.name}`} <Stars rating={review.rating} />
        </div>
        <div className="review-text">- {review.review}</div>
      </ListGroup.Item>
    </ListGroup>
  );
}
