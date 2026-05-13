import { useEffect, useState } from "react";

const API_KEY = "7dcc8afb3a6e4de80620f847dea7fc2d";

export default function useMovieDetails(selectedMovieId) {
  const [movie, setMovie] = useState({});

  //Useeffect selectedMovieId degerine bagli olarak degisiyor.
  useEffect(
    function () {
      async function getMovieDetails() {
        const reponse = await fetch(
          `https://api.themoviedb.org/3/movie/${selectedMovieId}?api_key=${API_KEY}`,
        );
        const data = await reponse.json();
        setMovie(data);
      }

      getMovieDetails();
    },
    [selectedMovieId],
  );

  return { movie };
}
