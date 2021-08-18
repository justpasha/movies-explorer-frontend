import React from 'react';
import { Route } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import './MoviesCardList.css';

function MoviesCardList({
  isPreloader,
  isNothingFound,
  children,
  onMoreClick,
  isButtonEnable,
}) {
  return (
    <section className="movies-list">
      {isPreloader ? <Preloader /> : ''}
      <div className="movies-list__grid-container">{children}</div>
      <p
        className={`movies-list__text ${
          isNothingFound && 'movies-list__text_enabled'
        }`}
      >
        Ничего не найдено
      </p>
      <Route path="/movies">
        <button
          onClick={() => onMoreClick()}
          className={`movies-list__button ${
            isButtonEnable && 'movies-list__button_enable'
          }`}
          type="button"
        >
          Ещё
        </button>
      </Route>
    </section>
  );
}

export default MoviesCardList;
