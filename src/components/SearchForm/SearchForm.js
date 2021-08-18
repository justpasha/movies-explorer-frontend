import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm({ onMovieSearch, onCheckboxClick }) {
  const [movie, setMovie] = useState('');
  const isMoviesPage = useRouteMatch({ path: '/movies' });

  useEffect(() => {
    if (!localStorage.getItem('movieFilter')) {
      return;
    }
    if (isMoviesPage) {
      setMovie(localStorage.getItem('movieFilter'));
    }
  }, []);

  function handleMovieChange(e) {
    setMovie(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onMovieSearch(movie);
  }

  return (
    <section className="search-form">
      <form className="search-form__form" onSubmit={handleSubmit}>
        <div className="search-form__wrapper">
          <input
            onChange={handleMovieChange}
            value={movie}
            className="search-form__input"
            placeholder="Фильм"
            required
          />
          <button className="search-form__button" type="submit" />
        </div>
        <FilterCheckbox onCheckboxClick={onCheckboxClick} />
      </form>
    </section>
  );
}

export default SearchForm;
