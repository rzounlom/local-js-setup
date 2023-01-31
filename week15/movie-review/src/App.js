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

    setCurrentMovies([...currentMovies, newMovie]);
  };

  return (
    <Container className="App">
      <Header addMovie={handleAddMovie} />
      <Main movies={currentMovies} />
      {/* <Footer /> */}
    </Container>
  );
}

export default App;
