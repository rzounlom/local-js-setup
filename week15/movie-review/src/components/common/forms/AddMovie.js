import "./AddMovie.scss";

import { useState } from "react";

export default function AddMovie({ addMovie }) {
  const [movieData, setMovieData] = useState({
    title: "",
    imgUrl: "",
    summary: "",
  });

  const { title, imgUrl, summary } = movieData;

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setMovieData({ ...movieData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    addMovie({ title, imgUrl, summary });
    setMovieData({
      title: "",
      imgUrl: "",
      summary: "",
    });
  };

  return (
    <form id="add-movie-form" onSubmit={handleSubmit}>
      <div className="heading">
        <h5>Add New Movie</h5>
      </div>
      <div className="inputs">
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Movie title..."
          required
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="imgUrl"
          value={imgUrl}
          placeholder="Movie image url..."
          required
          onChange={handleInputChange}
        />
        <textarea
          type="text"
          name="summary"
          value={summary}
          placeholder="Movie summary..."
          required
          onChange={handleInputChange}
        />
      </div>
      <div className="form-action">
        <button>Submit</button>
      </div>
    </form>
  );
}
