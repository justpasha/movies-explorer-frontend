import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation({ isOpen, onMenuClose }) {
  return (
    <div className={`nav ${isOpen ? 'nav_menu-open' : ''}`}>
      <div className="nav__menu-wrapper">
        <nav className="nav__nav-bar">
          <NavLink
            to="/"
            exact
            activeClassName="nav__link_active"
            className="nav__link nav__link_main"
          >
            Главная
          </NavLink>
          <NavLink
            onClick={onMenuClose}
            to="/movies"
            activeClassName="nav__link_active"
            className="nav__link"
          >
            Фильмы
          </NavLink>
          <NavLink
            onClick={onMenuClose}
            to="/saved-movies"
            activeClassName="nav__link_active"
            className="nav__link"
          >
            Сохранённые фильмы
          </NavLink>
        </nav>
        <Link onClick={onMenuClose} to="/profile" className="nav__profile-link">
          Аккаунт
        </Link>
        <button
          onClick={onMenuClose}
          className="nav__close-menu-button"
          type="button"
        />
      </div>
    </div>
  );
}

export default Navigation;
