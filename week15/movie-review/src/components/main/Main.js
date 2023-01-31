import "./Main.scss";

import MovieList from "../movie/MovieList";

export default function Main({ movies }) {
  return (
    <main>
      <MovieList movies={movies} />
    </main>
  );
}
