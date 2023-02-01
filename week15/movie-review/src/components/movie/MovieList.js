import "./MovieList.scss";

import Movie from "./Movie";

function NoMovies() {
  return <div className="no-movies">No current movies</div>;
}

export default function MovieList({ movies, editMovie, deleteMovie }) {
  return (
    <div className="movie-list">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <Movie
            movie={movie}
            key={movie.id}
            editMovie={editMovie}
            deleteMovie={deleteMovie}
          />
        ))
      ) : (
        <NoMovies />
      )}
    </div>
  );
}
