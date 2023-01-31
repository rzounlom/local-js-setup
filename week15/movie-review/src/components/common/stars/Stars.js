import React from "react";
import ReactStars from "react-rating-stars-component";

export default function Stars({ edit = false, rating, setRating }) {
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
      console.log(`Example 4: new value is ${newValue}`);
    },
  };

  if (edit) {
    return <ReactStars {...starsConfiEdit} />;
  } else {
    return <ReactStars {...starsConfigNoEdit} />;
  }
}
