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
  const [moviesNumbers, setMoviesNumbers] = useState([]);
  const [cardsCount, setCardsCount] = useState(0);
  const [AddCardsCount, setAddCardsCount] = useState(0);

  const onResize = () => {
    window.addEventListener('resize', resizeThrottler, false);

    let resizeTimeout;
    function resizeThrottler() {
      if (!resizeTimeout) {
        resizeTimeout = setTimeout(() => {
          resizeTimeout = null;
          actualResizeHandler();
        }, 10000);
      }
    }

    const actualResizeHandler = () => {
      widthDefine(
        cardsCount > 12 ? cardsCount : 12,
        cardsCount > 8 ? cardsCount : 8,
        cardsCount > 5 ? cardsCount : 5
      );
    };
  };

  useEffect(() => {
    widthDefine(12, 8, 5);
    if (!localStorage.getItem('movieData')) {
      return;
    }
    renderMovies(localStorage.getItem('movieFilter'));
    onResize();
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
    } else {
      renderMovies(localStorage.getItem('movieFilter'));
    }
  }, [isCheckboxActive]);

  const checkboxToggle = () => {
    setIsCheckboxActive(!isCheckboxActive);
  };

  useEffect(() => {
    setIsMoreButtonEnable(false);
    if (movies.length > 3) {
      setIsMoreButtonEnable(true);
    }
    if (cardsCount >= movies.length) {
      setIsMoreButtonEnable(false);
    }
    setMoviesNumbers([moviesNumbers, moviesNumbers.push()]);
  }, [movies]);

  const handleMovieSearch = (movieWordFilter) => {
    widthDefine(12, 8, 5);
    setIsNothingFound(false);
    localStorage.setItem('movieFilter', movieWordFilter);
    if (!localStorage.getItem('movieData')) {
      setIsPreloader(true);
      getAllMovies()
        .then((moviesData) => {
          localStorage.setItem(
            'movieData',
            JSON.stringify({ movies: moviesData })
          );
          const filteredArr = filterByTitle(moviesData, movieWordFilter);
          moviesCountCheck(filteredArr);
          setMovies(filteredArr);
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
    } else {
      setMovies(filteredArr);
      moviesCountCheck(filteredArr);
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

  const widthDefine = (maxCount, middleCount, minCount) => {
    if (document.documentElement.clientWidth >= 1268) {
      setCardsCount(maxCount);
      setAddCardsCount(3);
    }
    if (
      document.documentElement.clientWidth <= 1267 &&
      document.documentElement.clientWidth >= 768
    ) {
      setCardsCount(middleCount);
      setAddCardsCount(2);
    }
    if (document.documentElement.clientWidth < 768) {
      setCardsCount(minCount);
      setAddCardsCount(2);
    }
  };

  const movieRender = (movieNumber) => {
    if (movieNumber <= cardsCount) {
      return true;
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
        {movies.map((movie, number) => (
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
            movieNumber={number + 1}
            onMovieRender={movieRender}
          />
        ))}
      </MoviesCardList>
    </div>
  );
}

export default Movies;
