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
        required
      />
      <label className="auth-page__label" htmlFor="email">
        E-mail
      </label>
      <input
        className="auth-page__input"
        type="email"
        id="email"
        placeholder="pochta@yandex.ru"
        required
      />
      <label className="auth-page__label" htmlFor="password">
        Пароль
      </label>
      <input
        className="auth-page__input auth-page__input_type_error"
        type="password"
        id="password"
        required
      />
      <span className="auth-page__span-input-error">
        Что-то пошло не так...
      </span>
    </AuthForm>
  );
}

export default Register;
