import "./Main.scss";

import MovieList from "../movie/MovieList";

export default function Main({ movies, editMovie, deleteMovie, addReview }) {
  return (
    <main>
      <MovieList
        movies={movies}
        editMovie={editMovie}
        deleteMovie={deleteMovie}
        addReview={addReview}
      />
    </main>
  );
}
