import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';

function Movies() {
  return (
    <div className="saved-movies">
      <SearchForm />
      <MoviesCardList />
    </div>
  );
}

export default Movies;
