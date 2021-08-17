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

  useEffect(() => {
    renderMovies();
  }, [savedMovies]);

  useEffect(() => {
    if (!isSearch) {
      return;
    }
    setFilteredMovieList(wordFilter());
    setIsSearch(false);
  }, [isSearch]);

  useEffect(() => {
    if (isCheckboxActive) {
      setFilteredMovieList(durationFilter());
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
    if (movieFilterWord !== '') {
      setFilteredMovieList(checkboxActiveCheck(wordFilter()));
    } else {
      setFilteredMovieList(checkboxActiveCheck(savedMovies));
    }
  };

  const checkboxActiveCheck = (arr) => {
    if (isCheckboxActive) {
      return filterByDuration(arr);
    }
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

  return (
    <div className="saved-movies">
      <SearchForm
        onMovieSearch={handleMovieSearch}
        onCheckboxClick={checkboxToggle}
      />
      <MoviesCardList>
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
