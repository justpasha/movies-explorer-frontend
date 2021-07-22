import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './AuthForm.css';

function AuthForm({
  children,
  title,
  buttonText,
  text,
  linkText,
  linkPath,
  onSubmit,
  loginPage,
}) {
  return (
    <div className="auth-page">
      <Link to="/" className="auth-page__logo-link">
        <img src={logo} alt="лого" className="auth-page__logo-image" />
      </Link>
      <form className="auth-page__form" onSubmit={onSubmit}>
        <div className="auth-page__wrapper">
          <h2 className="auth-page__title">{title}</h2>
          {children}
        </div>
        <div className="auth-page__wrapper">
          <button
            className={`auth-page__button ${
              loginPage ? 'auth-page__button_login' : ''
            }`}
            type="submit"
          >
            {buttonText}
          </button>
          <p className="auth-page__text">
            {`${text} `}
            <Link className="auth-page__link" to={linkPath}>
              {linkText}
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default AuthForm;
