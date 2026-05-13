/* eslint-disable react/prop-types */
import Movie from "./Movie";

export default function MoviesList({
  movies,
  onSelectedMovie,
  selectedMovieId,
}) {
  return (
    <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4">
      {movies.map((movie) => (
        <Movie
          movie={movie}
          key={movie.id}
          onSelectedMovie={onSelectedMovie}
          selectedMovieId={selectedMovieId}
        />
      ))}
    </div>
  );
}
