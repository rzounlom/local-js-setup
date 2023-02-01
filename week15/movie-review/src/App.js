import "./App.scss";

import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { movies } from "./data/movies";
import { useState } from "react";
import uuid from "react-uuid";

function App() {
  const [currentMovies, setCurrentMovies] = useState(movies);

  const handleAddMovie = ({ title, imgUrl, summary }) => {
    const newMovie = {
      id: uuid(),
      title,
      imgUrl,
      summary,
      rating: 0,
      reviews: [],
    };

    setCurrentMovies([newMovie, ...currentMovies]);
  };

  const handleEditMovie = (updatedMovie) => {
    //find the index of the movie we want to edit
    const idx = currentMovies.findIndex(
      (movie) => movie.id === updatedMovie.id
    );

    //create copy of current movies: don't want to mutate state directly
    const movies = currentMovies.map((movie) => movie);

    //reset movie based on its index
    movies[idx] = updatedMovie;

    //update currentMovies
    setCurrentMovies(movies);
  };

  const handleAddReview = () => {};

  const handleDeleteMovie = (movieId) => {
    const filteredMovies = currentMovies.filter(
      (movie) => movie.id !== movieId
    );

    setCurrentMovies(filteredMovies);
  };

  return (
    <Container className="App">
      <Header addMovie={handleAddMovie} />
      <Main
        movies={currentMovies}
        editMovie={handleEditMovie}
        deleteMovie={handleDeleteMovie}
      />
    </Container>
  );
}

export default App;
