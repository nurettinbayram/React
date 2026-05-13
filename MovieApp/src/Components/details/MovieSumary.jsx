/* eslint-disable react/prop-types */
import { colors } from "../../Helper/const";
import { getAvrg } from "../../Helper/commonMethods";

export default function MoviesSumary({ selectedMovies }) {
  /// BIR OBJEDEN LISTE OLUSTURMA YONTEMI getAvrg() FONKSIYONU LISTE BEKLIYOR.
  const raitingList = selectedMovies.map((m) => m.vote_average);
  const custumRaitingList = selectedMovies.map((m) => m.movieRaiting);
  const durationList = selectedMovies.map((m) => m.runtime);
  const durationAvg = getAvrg(durationList);
  const raitingAvg = getAvrg(raitingList);
  const customRaitingAvg = getAvrg(custumRaitingList);

  return (
    <div className="card-body">
      <h5>There are [{selectedMovies.length}] in your list.</h5>
      <div className="d-flex ">
        <p className="me-3">
          <i
            className="bi bi-star-fill me-1"
            style={{ color: colors.goldColor }}
          ></i>
          <span>{raitingAvg}</span>
        </p>
        <p className="me-3">
          <i
            className="bi bi-stars me-1"
            style={{ color: colors.goldColor }}
          ></i>
          <span>{customRaitingAvg}</span>
        </p>
        <p>
          <i
            className="bi bi-stopwatch-fill me-1"
            style={{ color: colors.goldColor }}
          ></i>
          <span>{durationAvg}</span>
        </p>
      </div>
    </div>
  );
}
