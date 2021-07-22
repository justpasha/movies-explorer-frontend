import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard({
  isSave,
  moviePhoto,
  movieName,
  movieDuration,
  movieLink,
}) {
  const [isMovieSave, setMovieSave] = useState(false);

  function handleSave() {
    setMovieSave(true);
  }

  return (
    <article className="movie">
      <div className="movie__info-container">
        <div className="movie__text-container">
          <h2 className="movie__title">{movieName}</h2>
          <p className="movie__duration">{movieDuration}</p>
        </div>
        <Switch>
          <Route path="/movies">
            <button
              className={`movie__button ${
                isSave || isMovieSave ? 'movie__button_saved' : ''
              }`}
              type="button"
              onClick={handleSave}
            />
          </Route>
          <Route path="/saved-movies">
            <button
              className="movie__button movie__button_delete"
              type="button"
            />
          </Route>
        </Switch>
      </div>
      <a
        className="movie__link"
        href={movieLink}
        target="_blank"
        rel="noreferrer"
      >
        <img className="movie__image" src={moviePhoto} alt={movieName} />
      </a>
    </article>
  );
}

export default MoviesCard;
