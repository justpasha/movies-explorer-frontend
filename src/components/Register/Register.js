import React from 'react';
import AuthForm from '../AuthForm/AuthForm';

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <AuthForm
      onSubmit={handleSubmit}
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      text="Уже зарегистрированы?"
      linkPath="/signin"
      linkText="Войти"
    >
      <label className="auth-page__label" htmlFor="name">
        Имя
      </label>
      <input
        className="auth-page__input"
        type="text"
        id="name"
        minLength="2"
        maxLength="30"
        placeholder="Павел"
      />
      <label className="auth-page__label" htmlFor="email">
        E-mail
      </label>
      <input
        className="auth-page__input"
        type="email"
        id="email"
        placeholder="pochta@yandex.ru"
      />
      <label className="auth-page__label" htmlFor="password">
        Пароль
      </label>
      <input className="auth-page__input" type="password" id="password" />
    </AuthForm>
  );
}

export default Register;
