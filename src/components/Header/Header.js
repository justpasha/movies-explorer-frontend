import React, { useState } from 'react';
import { Route, Link, Switch, useRouteMatch } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import logo from '../../images/logo.svg';
import './Header.css';

function Header() {
  const isMain = useRouteMatch({ path: '/', exact: true });
  const isMovies = useRouteMatch({ path: '/movies' });
  const isSavedMovies = useRouteMatch({ path: '/saved-movies' });
  const isProfile = useRouteMatch({ path: '/profile' });

  const headerEnabled = isMain || isMovies || isSavedMovies || isProfile;

  const [isMenuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <header
      className={`header
    ${isMain ? 'header_page-main' : ''}
    ${headerEnabled ? 'header_enabled' : ''}`}
    >
      <div className="header__container">
        <Link to="/" className="header__logo-link">
          <img src={logo} alt="лого" className="header__logo-image" />
        </Link>
        <Switch>
          <Route path="/" exact>
            <div className="header__button-container">
              <Link to="/signup" className="header__register-button">
                Регистрация
              </Link>
              <Link to="/signin" className="header__login-button">
                Войти
              </Link>
            </div>
          </Route>
          <Route path="/">
            <Navigation isOpen={isMenuOpen} onMenuClose={toggleMenu} />
            <button
              className="header__burger-button"
              type="button"
              onClick={toggleMenu}
            />
          </Route>
        </Switch>
      </div>
    </header>
  );
}

export default Header;
