import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
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
import './App.css';

function App() {
  const [isNoticePopupOpen, setIsNoticePopupOpen] = useState(false);

  function togglePopup() {
    setIsNoticePopupOpen(!isNoticePopupOpen);
  }

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies />
        </Route>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/">
          <NotFoundPage />
        </Route>
      </Switch>
      <Footer />

      <NoticePopup isOpen={isNoticePopupOpen} onClose={togglePopup} />
    </div>
  );
}

export default App;
