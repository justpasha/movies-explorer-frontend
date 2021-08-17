import React, { useEffect } from 'react';
import { useFormWithValidation } from '../../hooks/useForm';
import AuthForm from '../AuthForm/AuthForm';

function Login({ onLogin }) {
  const { values, handleChange, resetFrom, errors, isValid } =
    useFormWithValidation();

  useEffect(() => {
    resetFrom();
  }, [resetFrom]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(values);
    resetFrom();
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
      name="login-form"
      isDisabled={!isValid}
    >
      <label className="auth-page__label" htmlFor="user-email">
        E-mail
      </label>
      <input
        className={`auth-page__input ${
          errors.email && 'auth-page__input_type_error'
        }`}
        type="email"
        id="user-email"
        pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
        placeholder="pochta@yandex.ru"
        name="email"
        value={values.email || ''}
        onChange={handleChange}
        required
      />
      <span className="auth-page__span-input-error" id="user-email-error">
        {errors.email || ''}
      </span>
      <label className="auth-page__label" htmlFor="user-password">
        Пароль
      </label>
      <input
        className={`auth-page__input ${
          errors.password && 'auth-page__input_type_error'
        }`}
        type="password"
        id="user-password"
        name="password"
        value={values.password || ''}
        onChange={handleChange}
        required
      />
      <span className="auth-page__span-input-error" id="user-password-error">
        {errors.password || ''}
      </span>
    </AuthForm>
  );
}

export default Login;
