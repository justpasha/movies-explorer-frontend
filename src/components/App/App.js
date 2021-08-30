import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { CurrenUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import NoticePopup from '../NoticePopup/NoticePopup';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import * as mainApi from '../../utils/MainApi';
import {
  serverError,
  succesUpdate,
  loginError,
  newDataError,
} from '../../utils/serverAnswersText';
import './App.css';

function App() {
  const [isNoticePopupOpen, setIsNoticePopupOpen] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(true);
  const [popupText, setPopupText] = useState({
    title: 'Что-то пошло не так...',
    text: 'Произошла ошибка(',
  });

  const history = useHistory();

  useEffect(() => {
    tokenCheck();
  }, []);

  function togglePopup() {
    setIsNoticePopupOpen(!isNoticePopupOpen);
  }

  function openPopup(text) {
    setPopupText(text);
    togglePopup();
  }

  function handleProfileUpdate(data) {
    mainApi
      .editUserData(data, localStorage.getItem('jwt'))
      .then((data) => {
        setCurrentUser(data);
        openPopup(succesUpdate);
      })
      .catch((err) => {
        openPopup(newDataError);
        console.log(err);
      });
  }

  function addSavedMovie(movie) {
    setSavedMovies([...savedMovies, movie]);
  }

  function handleMovieDelete(movie) {
    const jwt = localStorage.getItem('jwt');
    mainApi
      .deleteMovie(movie._id, jwt)
      .then(() => {
        setSavedMovies(
          savedMovies.filter((m) => {
            return m._id !== movie._id;
          })
        );
      })
      .catch((err) => {
        openPopup(serverError);
        console.log(err);
      });
  }

  //аутентификация
  function handleRegister(data) {
    return mainApi
      .register(data)
      .then(({ token, email, name }) => {
        localStorage.setItem('jwt', token);
        setCurrentUser({ email, name });
        setLoggedIn(true);
        history.push('/movies');
      })
      .catch((err) => {
        openPopup(newDataError);
        console.log(err);
      });
  }

  function handleLogin(data) {
    return mainApi
      .authorize(data)
      .then(({ token }) => {
        localStorage.setItem('jwt', token);
        setLoggedIn(true);
        history.push('/movies');
        tokenCheck();
      })
      .catch((err) => {
        openPopup(loginError);
        setLoggedIn(false);
        console.log(err);
      });
  }

  function tokenCheck() {
    if (!localStorage.getItem('jwt')) {
      setLoggedIn(false);
      return;
    }
    const jwt = localStorage.getItem('jwt');
    mainApi
      .getUser(jwt)
      .then((res) => {
        setCurrentUser(res);
        setLoggedIn(true);
      })
      .catch((err) => {
        openPopup(serverError);
        console.log(err);
      });

    mainApi
      .getMovies(jwt)
      .then((data) => {
        setSavedMovies(data);
      })
      .catch((err) => {
        openPopup(serverError);
        console.log(err);
      });
  }

  function handleLogout() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('movieData');
    localStorage.removeItem('movieFilter');
    setLoggedIn(false);
    history.push('/');
  }

  return (
    <div className="app">
      <CurrenUserContext.Provider value={currentUser}>
        <Header isLoggedIn={loggedIn} />
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/signup">
            {loggedIn ? (
              <Redirect to="/movies" />
            ) : (
              <Register onRegister={handleRegister} />
            )}
          </Route>
          <Route path="/signin">
            {loggedIn ? (
              <Redirect to="/movies" />
            ) : (
              <Login onLogin={handleLogin} />
            )}
          </Route>
          <ProtectedRoute
            path="/movies"
            component={Movies}
            loggedIn={loggedIn}
            onPopupOpen={openPopup}
            onMovieSave={addSavedMovie}
            savedMovies={savedMovies}
            onMovieDelete={handleMovieDelete}
          />
          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            loggedIn={loggedIn}
            savedMovies={savedMovies}
            onMovieDelete={handleMovieDelete}
          />
          <ProtectedRoute
            path="/profile"
            component={Profile}
            loggedIn={loggedIn}
            onLogout={handleLogout}
            onProfileUpdate={handleProfileUpdate}
          />
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
        <Footer />

        <NoticePopup
          isOpen={isNoticePopupOpen}
          onClose={togglePopup}
          popupTitle={popupText.title}
          popupText={popupText.text}
        />
      </CurrenUserContext.Provider>
    </div>
  );
}

export default App;
