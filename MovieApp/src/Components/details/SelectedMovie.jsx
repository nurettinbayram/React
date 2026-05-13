/* eslint-disable react/prop-types */
import { colors } from "../../Helper/const";

export default function SelectedMovie({ movie, onRemoveMovieFromFavorite }) {
  return (
    <div
      className="card mb-2"
      key={movie.id}
      style={{ backgroundColor: colors.bgColor }}
    >
      <div className="row">
        <div className="col-4">
          <img
            src={
              movie.poster_path
                ? "https://image.tmdb.org/t/p/w500" + movie.poster_path
                : "https://placehold.co/600x900"
            }
            alt={movie.title}
            className="img-fluid rounded-start"
          />
        </div>
        <div className="col-8">
          <div className="card-body">
            <h6 className="card-title text-white">{movie.title}</h6>
            <div className="d-flex justify-content-between">
              <div>
                <i
                  className="bi bi-star-fill me-1"
                  style={{ color: colors.goldColor }}
                ></i>
                <span className="text-white">
                  {movie.vote_average?.toFixed(1)}
                </span>
              </div>
              <div>
                <i
                  className="bi bi-stopwatch-fill me-1"
                  style={{ color: colors.goldColor }}
                ></i>
                <span className="text-white">{movie.runtime} min</span>
              </div>
            </div>
            <button
              className="btn btn-sm mt-2 btn-danger"
              onClick={() => onRemoveMovieFromFavorite(movie.id)}
            >
              <i className="bi bi-trash3 text-warning"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
