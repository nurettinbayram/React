/* eslint-disable no-unused-vars */

import { colors } from "./Helper/const";
import { useEffect, useState } from "react";
import RaitingStart from "./RaitingStart";
import useMovies from "./Hools/useMovies";
import useMovieDetails from "./Hools/useMovieDetails";
import useLocalStorage from "./Hools/useLocalStorage";

import Logo from "./Components/nav/Logo";
import Nav from "./Components/nav/Nav";
import NavSearchResult from "./Components/nav/NavSearchResult";
import Search from "./Components/nav/Search";

import ArrowButton from "./Components/main/ArrowButton";
import ListContainer from "./Components/main/ListContainer";
import Main from "./Components/main/Main";
import Movie from "./Components/main/Movie";
import MoviesList from "./Components/main/MoviesList";

import MovieDetails from "./Components/details/MovieDetails";
import MoviesSumary from "./Components/details/MovieSumary";
import SelectedMoviesList from "./Components/details/SelectedMovieList";
import SelectedMovie from "./Components/details/SelectedMovie";

import Pagination from "./Components/Pagination";
import ErrorMessage from "./Components/ErrorMessage";
import SpinnerIcon from "./Components/SpinnerIcon";

//#https://getcssscan.com/css-box-shadow-examples

const API_KEY = "7dcc8afb3a6e4de80620f847dea7fc2d";

export default function App() {
  //Hooks'tan veri aliniyor
  const [selectedMovies, setSelectedMovies] = useLocalStorage(
    [],
    "selectedMovies",
  );
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [query, setQuery] = useState("father");

  const {
    nextPage,
    previousPage,
    currentPage,
    totalPage,
    movies,
    spinner,
    errorMsg,
  } = useMovies(query);

  //? BU KISMI NOT AL ONEMLI. SECIMIN TERSINI ALIR.
  function handlerSelectedMovieId(id) {
    setSelectedMovieId((selectedMovieId) =>
      selectedMovieId === id ? null : id,
    );
  }
  function handlerUnSelectedMovieId() {
    setSelectedMovieId(null);
  }

  //? BU KISIMDA selectedMovies UZERINDE DOLASARAK HEPSININ ID'SINI ALIP SON EKLENMEK ISTENEN FILM ID;SI ILE
  //? KIYASLANIR EGER YOKSA LISTEYE EKLENIR VARSA ALERT MESAJI VERIR.
  function handlerMovieToFavorite(movie) {
    const isMovieSelected = selectedMovies.map((m) => m.id).includes(movie.id);

    if (!isMovieSelected) {
      setSelectedMovies((selectedMovies) => [movie, ...selectedMovies]);
      handlerUnSelectedMovieId();
    } else {
      alert("It already in your favorite list!!!");
    }
  }

  function handlerRemoveMovieFromFavorite(id) {
    setSelectedMovies((selectedMovies) =>
      selectedMovies.filter((movie) => movie.id !== id),
    );
  }

  return (
    //? BURADA COMPONENT COMPOSITION ILE PROPSLARI PARENTTEN CHILD COMPONENLERE AKTARMALI SEKLINDE DEGILDE
    //? GECIS KOMPONENLERI PAREN COMPONENTE TANIMLAYARAK CHILDREN SEKLINDE ICINE PROPS OLARAK GONDERILIR.
    //? BUNA COMPONENT COMPOSITION DENIR.
    <>
      <Nav>
        <Logo />
        <Search setQuery={setQuery} query={query} />
        <NavSearchResult movies={movies} />
      </Nav>
      <Main>
        {/* --------------Left List------------------ */}
        <div className="col-md-9">
          {movies.length > 0 && (
            <>
              <ListContainer>
                {/* {spinner ? <SpinnerIcon /> : <MoviesList movies={movies} />} */}

                {spinner && <SpinnerIcon />}
                {!spinner && !errorMsg && (
                  <MoviesList
                    movies={movies}
                    onSelectedMovie={handlerSelectedMovieId}
                    selectedMovieId={selectedMovieId}
                  />
                )}
                {errorMsg && <ErrorMessage errMessage={errorMsg} />}
              </ListContainer>
              <Pagination
                onNextPage={nextPage}
                onPreviousPage={previousPage}
                totalPage={totalPage}
                currentPage={currentPage}
              />
            </>
          )}
        </div>

        {/* ----------------Right Selected List---------------- */}
        <div className="col-md-3">
          <ListContainer>
            {selectedMovieId ? (
              <MovieDetails
                selectedMovieId={selectedMovieId}
                onUnSelectedMovieId={handlerUnSelectedMovieId}
                onMovieToFavorite={handlerMovieToFavorite}
                selectedMovies={selectedMovies}
              />
            ) : (
              <SelectedMoviesList
                selectedMovies={selectedMovies}
                onRemoveMovieFromFavorite={handlerRemoveMovieFromFavorite}
              />
            )}
          </ListContainer>
        </div>
      </Main>
    </>
  );
}
