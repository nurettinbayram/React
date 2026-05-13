/* eslint-disable react/prop-types */
import MoviesSumary from "./MovieSumary";
import SelectedMovie from "./SelectedMovie";
import { colors } from "../../Helper/const";

export default function SelectedMoviesList({
  selectedMovies,
  onRemoveMovieFromFavorite,
}) {
  return (
    <div>
      <div
        className="card mb-2"
        style={{ backgroundColor: colors.bgColor, color: "white" }}
      >
        <MoviesSumary selectedMovies={selectedMovies} />
      </div>
      {selectedMovies.map((movie) => (
        <SelectedMovie
          movie={movie}
          key={movie.id}
          onRemoveMovieFromFavorite={onRemoveMovieFromFavorite}
        />
      ))}
    </div>
  );
}
