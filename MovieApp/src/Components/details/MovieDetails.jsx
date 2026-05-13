/* eslint-disable react/prop-types */
import { useState } from "react";
import useMovieDetails from "../../Hools/useMovieDetails";
import { colors } from "../../Helper/const";
import RaitingStart from "../../RaitingStart";

export default function MovieDetails({
  selectedMovieId,
  onUnSelectedMovieId,
  onMovieToFavorite,
  selectedMovies,
}) {
  const [movieRaiting, setMovieRaiting] = useState(null);
  const { movie } = useMovieDetails(selectedMovieId);

  const selectedMovieUserRaiting = selectedMovies.find(
    (m) => m.id === selectedMovieId,
  )?.movieRaiting;

  function handleMovieToFavorite() {
    //! Here we got open movie object and added new property in movie.
    //! Bu kisim cok onemli bir hazir objeye yeni bir property ekleme islemi var.
    const newMovie = { ...movie, movieRaiting };
    onMovieToFavorite(newMovie);
    console.log(newMovie);
  }

  return (
    <div className="border rounded-2 shadow p-2">
      <div>
        <div className="row  ">
          <div className="col-4 ">
            <img
              src={
                movie.poster_path
                  ? "https://image.tmdb.org/t/p/w500" + movie.poster_path
                  : "https://placehold.co/600x900"
              }
              alt={movie.title}
              className="img-fluid"
            />
          </div>
          <div className="col-8 ">
            <h6>{movie.title}</h6>
            <p>
              <i
                className="bi bi-calendar-date-fill"
                style={{ color: colors.priColor }}
              ></i>
              <span className="ms-1">{movie.release_date}</span>
            </p>
            <p>
              <i className="bi bi-star-fill text-warning"></i>
              {/*/// movie.vote_average?.toFixed(1) buradaki soru isaretine dikkat et movie.vote_average 
              /// bos deger dondurmesi durumunda fixed metodu calismaz buda bir error;a sebep olmaz...
              /// Bu bazen API gec deger dondurmesi bazende degerin bos olmasi fixed bir async bir method 
              /// olmadigi icin hemen calisir bu durumda veri hazir olmaya bilir ve hata verir. */}
              {" " + movie.vote_average?.toFixed(1)}
            </p>
          </div>
          <div className="col-12 border-top">
            <p>{movie.overview}</p>
            <p>
              {
                ///Buradada ? kullanilmis bos bir veri gonderme durumunda hata cikmasini onlemek icin.
                movie.genres?.map((genre) => (
                  <span key={genre.id} className="badge text-bg-primary me-2">
                    {genre.name}
                  </span>
                ))
              }
            </p>
          </div>
        </div>
      </div>
      <div className="my-2">
        {selectedMovieUserRaiting ? (
          <b>
            Your Rait:
            <i className="bi bi-stars text-warning"></i>
            {"  " + selectedMovieUserRaiting}
          </b>
        ) : (
          <RaitingStart
            maxRaiting={10}
            size={18}
            onMovieRaiting={setMovieRaiting}
          />
        )}
      </div>
      <button className="btn btn-info me-2" onClick={handleMovieToFavorite}>
        Add Favorite
      </button>
      <button className="btn btn-danger" onClick={onUnSelectedMovieId}>
        Un-Check
      </button>
    </div>
  );
}
