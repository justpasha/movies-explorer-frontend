import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className="search-form">
      <form className="search-form__form" onSubmit={handleSubmit}>
        <div className="search-form__wrapper">
          <input className="search-form__input" placeholder="Фильм" />
          <button className="search-form__button" type="submit" />
        </div>
        <FilterCheckbox />
      </form>
    </section>
  );
}

export default SearchForm;
