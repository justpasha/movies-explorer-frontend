import React, { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import { filterByTitle, filterByDuration } from '../../utils/moviesFilters';
import './SavedMovies.css';

function SavedMovies({ savedMovies, onMovieDelete }) {
  const [isCheckboxActive, setIsCheckboxActive] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [movieFilterWord, setMovieFilterWord] = useState('');
  const [filteredMovieList, setFilteredMovieList] = useState([]);
  const [isNothingFound, setIsNothingFound] = useState(false);

  useEffect(() => {
    renderMovies();
  }, [savedMovies]);

  useEffect(() => {
    if (!isSearch) {
      return;
    }
    const filteredArr = wordFilter();
    setFilteredMovieList(filteredArr);
    moviesCountCheck(filteredArr);
    if (isCheckboxActive) {
      checkboxActiveCheck(filteredArr);
    }
    setIsSearch(false);
  }, [isSearch]);

  useEffect(() => {
    setIsNothingFound(false);
    if (isCheckboxActive) {
      setFilteredMovieList(durationFilter());
      moviesCountCheck(durationFilter());
    } else {
      renderMovies();
    }
  }, [isCheckboxActive]);

  const wordFilter = () => {
    return filterByTitle(savedMovies, movieFilterWord);
  };

  const durationFilter = () => {
    return filterByDuration(filteredMovieList);
  };

  const renderMovies = () => {
    setIsNothingFound(false);
    if (movieFilterWord !== '') {
      const arr = checkboxActiveCheck(wordFilter());
      setFilteredMovieList(arr);
      moviesCountCheck(arr);
    } else {
      setFilteredMovieList(checkboxActiveCheck(savedMovies));
      moviesCountCheck(checkboxActiveCheck(savedMovies));
    }
  };

  const checkboxActiveCheck = (arr) => {
    if (isCheckboxActive) {
      moviesCountCheck(filterByDuration(arr));
      return filterByDuration(arr);
    }
    moviesCountCheck(arr);
    return arr;
  };

  const checkboxToggle = () => {
    setIsCheckboxActive(!isCheckboxActive);
  };

  const handleMovieDelete = (movie) => {
    onMovieDelete(movie);
  };

  const handleMovieSearch = (filterWord) => {
    setMovieFilterWord(filterWord);
    setIsSearch(true);
  };

  const moviesCountCheck = (arr) => {
    if (arr.length === 0) {
      setIsNothingFound(true);
    } else {
      setIsNothingFound(false);
    }
  };

  return (
    <div className="saved-movies">
      <SearchForm
        onMovieSearch={handleMovieSearch}
        onCheckboxClick={checkboxToggle}
      />
      <MoviesCardList isNothingFound={isNothingFound}>
        {filteredMovieList.map((movie) => (
          <MoviesCard
            movie={movie}
            key={movie._id}
            duration={movie.duration}
            movieName={movie.nameRU}
            movieLink={movie.trailer}
            moviePhoto={movie.image}
            onMovieDelete={handleMovieDelete}
          />
        ))}
      </MoviesCardList>
    </div>
  );
}

export default SavedMovies;
