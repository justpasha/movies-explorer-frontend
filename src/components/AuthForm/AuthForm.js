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
      <form className="auth-page__form" onSubmit={onSubmit}>
        <Link to="/" className="auth-page__logo-link">
          <img src={logo} alt="лого" className="auth-page__logo-image" />
        </Link>
        <h2 className="auth-page__title">{title}</h2>
        {children}
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
      </form>
    </div>
  );
}

export default AuthForm;
