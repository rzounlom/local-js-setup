import ReactStars from "react-rating-stars-component";
import { useEffect } from "react";

export default function Stars({ edit = false, rating = 0, setRating }) {
  let starsConfigNoEdit = {
    edit,
    size: 30,
    isHalf: true,
    value: rating,
  };

  let starsConfiEdit = {
    edit,
    size: 30,
    isHalf: true,
    value: rating,
    onChange: (newValue) => {
      setRating(newValue);
    },
  };

  useEffect(() => {
    return;
  }, [rating]);

  if (edit) {
    return <ReactStars {...starsConfiEdit} />;
  } else {
    return <ReactStars {...starsConfigNoEdit} />;
  }
}
