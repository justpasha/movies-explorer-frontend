import React from 'react';
import AuthForm from '../AuthForm/AuthForm';

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <AuthForm
      onSubmit={handleSubmit}
      title="Рады видеть!"
      buttonText="Войти"
      text="Ещё не зарегистрированы?"
      linkPath="/signup"
      linkText="Регистрация"
      loginPage="true"
    >
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
