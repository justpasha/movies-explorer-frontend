import React, { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import { getAllMovies } from '../../utils/MoviesApi';
import { createMovie } from '../../utils/MainApi';
import { filterByTitle, filterByDuration } from '../../utils/moviesFilters';
import { serverError } from '../../utils/serverAnswersText';
import './Movies.css';

function Movies({ onPopupOpen, onMovieSave, savedMovies, onMovieDelete }) {
  const [isPreloader, setIsPreloader] = useState(false);
  const [movies, setMovies] = useState([]);
  const [isCheckboxActive, setIsCheckboxActive] = useState(false);
  const [isNothingFound, setIsNothingFound] = useState(false);
  const [isMoreButtonEnable, setIsMoreButtonEnable] = useState(false);

  const [cardsCount, setCardsCount] = useState(12);
  const [AddCardsCount, setAddCardsCount] = useState(3);

  window.addEventListener('resize', () => {
    setTimeout(() => {
      widthDefine();
    }, 10000);
  });

  useEffect(() => {
    widthDefine();
    if (!localStorage.getItem('movieData')) {
      setIsPreloader(true);
      return;
    }
    renderMovies(localStorage.getItem('movieFilter'));
  }, []);

  useEffect(() => {
    if (!localStorage.getItem('movieData')) {
      return;
    }
    setIsNothingFound(false);

    if (isCheckboxActive) {
      const filteredArr = filterByDuration(movies);
      setMovies(filteredArr);
      moviesCountCheck(filteredArr);
      showButton(filteredArr);
    } else {
      renderMovies(localStorage.getItem('movieFilter'));
    }
  }, [isCheckboxActive]);

  const checkboxToggle = () => {
    setIsCheckboxActive(!isCheckboxActive);
  };

  const handleMovieSearch = (movieWordFilter) => {
    setIsNothingFound(false);
    localStorage.setItem('movieFilter', movieWordFilter);
    if (!localStorage.getItem('movieData')) {
      getAllMovies()
        .then((moviesData) => {
          localStorage.setItem(
            'movieData',
            JSON.stringify({ movies: moviesData })
          );
          const filteredArr = filterByTitle(moviesData, movieWordFilter);
          moviesCountCheck(filteredArr);
          setMovies(filteredArr);
          showButton(filteredArr);
        })
        .catch((err) => {
          onPopupOpen(serverError);
          console.log(err);
        })
        .finally(() => setIsPreloader(false));
    } else {
      renderMovies(movieWordFilter);
    }
  };

  const renderMovies = (wordFilter) => {
    const movieArr = JSON.parse(localStorage.getItem('movieData'));
    const filteredArr = filterByTitle(movieArr.movies, wordFilter);

    if (isCheckboxActive) {
      const filteredByTimeArr = filterByDuration(filteredArr);
      setMovies(filteredByTimeArr);
      moviesCountCheck(filteredByTimeArr);
      showButton(filteredByTimeArr);
    } else {
      setMovies(filteredArr);
      moviesCountCheck(filteredArr);
      showButton(filteredArr);
    }
  };

  const moviesCountCheck = (arr) => {
    if (arr.length === 0) {
      setIsNothingFound(true);
    }
  };

  const handleMovieDelete = (movieId) => {
    const movie = savedMovies.find((savedMovie) => {
      if (savedMovie.movieId === movieId) {
        return savedMovie;
      }
    });
    onMovieDelete(movie);
  };

  const handleMovieSave = (movie) => {
    const jwt = localStorage.getItem('jwt');
    const mainUrl = 'https://api.nomoreparties.co';
    createMovie(movie, jwt, mainUrl)
      .then((movie) => {
        onMovieSave(movie);
      })
      .catch((err) => {
        onPopupOpen(serverError);
        console.log(err);
      });
  };

  const handleMoreClick = () => {
    setCardsCount(cardsCount + AddCardsCount);
    renderMovies(localStorage.getItem('movieFilter'));
  };

  const widthDefine = () => {
    if (document.documentElement.clientWidth >= 1280) {
      setCardsCount(12);
      setAddCardsCount(3);
    }
    if (
      document.documentElement.clientWidth <= 1267 &&
      document.documentElement.clientWidth >= 768
    ) {
      setCardsCount(8);
      setAddCardsCount(2);
    }
    if (document.documentElement.clientWidth < 768) {
      setCardsCount(5);
      setAddCardsCount(2);
    }
  };

  const showButton = (arr) => {
    if (arr.length > 3) {
      setIsMoreButtonEnable(true);
    } else {
      setIsMoreButtonEnable(false);
    }

    if (movies.length === arr.length) {
      setIsMoreButtonEnable(false);
    }
  };

  return (
    <div className="movies">
      <SearchForm
        onMovieSearch={handleMovieSearch}
        onCheckboxClick={checkboxToggle}
      />
      <MoviesCardList
        isPreloader={isPreloader}
        isNothingFound={isNothingFound}
        onMoreClick={handleMoreClick}
        isButtonEnable={isMoreButtonEnable}
      >
        {movies.map((movie, number) => {
          if (number < cardsCount) {
            return (
              <MoviesCard
                movie={movie}
                key={movie.id}
                duration={movie.duration}
                movieName={movie.nameRU}
                movieLink={movie.trailerLink}
                moviePhoto={`https://api.nomoreparties.co${movie.image.url}`}
                onMovieSave={handleMovieSave}
                onMovieDelete={handleMovieDelete}
                savedMovies={savedMovies}
              />
            );
          }
        })}
      </MoviesCardList>
    </div>
  );
}

export default Movies;
