import "./Main.scss";

import MovieList from "../movie/MovieList";

export default function Main({ movies, editMovie }) {
  return (
    <main>
      <MovieList movies={movies} editMovie={editMovie} />
    </main>
  );
}
