import { useEffect, useState } from "react";

const API_KEY = "7dcc8afb3a6e4de80620f847dea7fc2d";

export default function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  function nextPage() {
    setCurrentPage(currentPage + 1);
  }

  function previousPage() {
    setCurrentPage(currentPage - 1);
  }

  ///-----------------------------------------YALIN HALI--------------------------------------------------
  ///Bu kisimda FETCH yanin bir sekilde kulanildiginda gelen data movies useStatetini gunceller useState
  ///guncellenince componenet tekrar render edilir bu durumda sonsuz bir donguye girer bu yuzden birada
  ///useEffect'te ihtiyacimiz var.
  /* 
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&page=1&query=${query}`)
    .then((respons) => respons.json())
    .then((data) => {
      console.log(data);
      setMovies(data.results);
    });
  */
  ///-------------------------------------------FETCH ILE---------------------------------------------------
  /*
  useEffect(
    function () {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&page=1&query=${query}`)
        .then((respons) => respons.json())
        .then((data) => {
          console.log(data);
          setMovies(data.results);
        });
    },
    [] //Dependenceis: Bu bolumde bagli oludugu parametreler girilebilir. Bos durumunda ise ilk yuklendiginde calisir.,
  );
  */
  ///----------------------------------------ASYNC AWAIT---------------------------------------------------
  //? Bu kisimda async await kullaniyoruz daha profasyonel oldugu icin.
  useEffect(
    function () {
      //! 6.12. dersinde 4. dk da ne ise yaradigini dinlayabiliriz.
      //! Arama motorunda arama yaparken daha klavyeden yazdigimizda bir onceki kismi ararken bir harf daha ekleyip yeni bir sorgu gonderiyoruz buda cok olup performans sorunu cikarabilir
      const controller = new AbortController();
      const signal = controller.signal;

      async function getResult(page) {
        try {
          setSpinner(true);
          const reponse = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&page=1&query=${query}&page=${page}`,
            { signal: signal },
          );
          if (!reponse.ok) {
            throw new Error("Response error: Check your URI");
          }
          const data = await reponse.json();
          if (query.length < 1) {
            setMovies([]);
            return;
          }

          if (data.total_results === 0) {
            throw new Error("There is no result!!! ");
          } else {
            //bu kisimda set olmus error mesajini bosaltmamiz gerekiyor aksi taktirda hep hata mesaji aliriz.
            setErrorMsg("");
          }
          setTotalPage(data.total_pages);
          setMovies(data.results);
        } catch (err) {
          if (err.name === "AbortError") {
            console.log("aborted...");
          } else {
            setErrorMsg(err.message);
          }
        } finally {
          setSpinner(false);
        }
      }
      getResult(currentPage);

      return () => {
        controller.abort();
      };
    },
    [query, currentPage],
  );

  return {
    nextPage,
    previousPage,
    currentPage,
    totalPage,
    movies,
    spinner,
    errorMsg,
  };
}
