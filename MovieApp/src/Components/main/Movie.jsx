/* eslint-disable react/prop-types */
import { colors } from "../../Helper/const";

export default function Movie({ movie, onSelectedMovie, selectedMovieId }) {
  return (
    <div className="col mb-2 rounded-5">
      <div
        //?BU KISIM ONEMLI KOSULA BAGLI CSS UYGULAMASI.
        className={`card movie ${selectedMovieId === movie.id ? "selected-movie" : ""}`}
        onClick={() => onSelectedMovie(movie.id)}
      >
        <img
          src={
            movie.poster_path
              ? "https://image.tmdb.org/t/p/w500" + movie.poster_path
              : "https://placehold.co/600x900"
          }
          alt={movie.title}
          className="card-img-top"
        />
        <div className="card-body ">
          <h6 className="card-title" style={{ color: colors.thrColor }}>
            {movie.title}
          </h6>
          <div className="">
            <i
              className="bi bi-calendar-date-fill"
              style={{ color: colors.priColor }}
            ></i>
            <span className="ms-1" style={{ color: colors.thrColor }}>
              {movie.release_date}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
