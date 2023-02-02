import "./MovieList.scss";

import { Col } from "react-bootstrap";
import Movie from "./Movie";

function NoMovies() {
  return <div className="no-movies">No current movies</div>;
}

export default function MovieList({
  movies,
  editMovie,
  deleteMovie,
  addReview,
}) {
  return (
    <div className="movie-list">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <Col
            lg={6}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Movie
              movie={movie}
              key={movie.id}
              editMovie={editMovie}
              deleteMovie={deleteMovie}
              addReview={addReview}
            />
          </Col>
        ))
      ) : (
        <NoMovies />
      )}
    </div>
  );
}
