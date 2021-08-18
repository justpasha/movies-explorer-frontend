import React, { useEffect } from 'react';
import { useFormWithValidation } from '../../hooks/useForm';
import AuthForm from '../AuthForm/AuthForm';

function Register({ onRegister }) {
  const { values, handleChange, resetFrom, errors, isValid } =
    useFormWithValidation();

  useEffect(() => {
    resetFrom();
  }, [resetFrom]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(values);
    resetFrom();
  };

  return (
    <AuthForm
      onSubmit={handleSubmit}
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      text="Уже зарегистрированы?"
      linkPath="/signin"
      linkText="Войти"
      name="register-form"
      isDisabled={!isValid}
    >
      <label className="auth-page__label" htmlFor="name-input">
        Имя
      </label>
      <input
        className={`auth-page__input ${
          errors.name && 'auth-page__input_type_error'
        }`}
        type="text"
        id="name-input"
        name="name"
        minLength="2"
        maxLength="30"
        placeholder="Павел"
        value={values.name || ''}
        onChange={handleChange}
        required
      />
      <span className="auth-page__span-input-error">{errors.name || ''}</span>
      <label className="auth-page__label" htmlFor="email-input">
        E-mail
      </label>
      <input
        className={`auth-page__input ${
          errors.email && 'auth-page__input_type_error'
        }`}
        type="email"
        id="email-input"
        name="email"
        pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
        placeholder="pochta@yandex.ru"
        value={values.email || ''}
        onChange={handleChange}
        required
      />
      <span className="auth-page__span-input-error">{errors.email || ''}</span>
      <label className="auth-page__label" htmlFor="password-input">
        Пароль
      </label>
      <input
        className={`auth-page__input ${
          errors.password && 'auth-page__input_type_error'
        }`}
        type="password"
        id="password-input"
        name="password"
        value={values.password || ''}
        onChange={handleChange}
        required
      />
      <span className="auth-page__span-input-error">
        {errors.password || ''}
      </span>
    </AuthForm>
  );
}

export default Register;
