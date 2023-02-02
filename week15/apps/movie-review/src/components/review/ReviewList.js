import Review from "./Review";

export default function ReviewList({ reviews }) {
  return (
    <div>
      {reviews.map((review) => (
        <Review review={review} key={review.id} />
      ))}
    </div>
  );
}
