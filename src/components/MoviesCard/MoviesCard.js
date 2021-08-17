import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard({
  movie,
  onMovieSave,
  moviePhoto,
  movieName,
  movieLink,
  duration,
  onMovieDelete,
  savedMovies,
}) {
  const minutes = duration % 60;
  const hours = Math.floor(duration / 60);

  function isMovieSave() {
    if (!savedMovies) {
      return false;
    }
    return savedMovies.some((savedMovie) => savedMovie.movieId === movie.id);
  }

  function handleSave() {
    onMovieSave(movie);
  }

  function handleDelete() {
    onMovieDelete(movie.id);
  }

  function handleSavedMovieDelete() {
    onMovieDelete(movie);
  }

  return (
    <article className="movie">
      <div className="movie__info-container">
        <div className="movie__text-container">
          <h2 className="movie__title">{movieName}</h2>
          <p className="movie__duration">{`${hours}ч ${minutes}м`}</p>
        </div>
        <Switch>
          <Route path="/movies">
            <button
              className={`movie__button ${
                isMovieSave() ? 'movie__button_saved' : ''
              }`}
              type="button"
              onClick={isMovieSave() ? handleDelete : handleSave}
            />
          </Route>
          <Route path="/saved-movies">
            <button
              onClick={handleSavedMovieDelete}
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
