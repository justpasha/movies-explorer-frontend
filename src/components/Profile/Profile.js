import React, { useEffect, useState } from 'react';
import { useFormWithValidation } from '../../hooks/useForm';
import './Profile.css';

function Profile({ onLogout, onProfileUpdate, currentUser }) {
  const [isEditing, setIsEditing] = useState(false);
  const { values, handleChange, resetFrom, errors, isValid } =
    useFormWithValidation();

  useEffect(() => {
    if (currentUser) {
      resetFrom(currentUser, {}, false);
    }
  }, [currentUser, resetFrom]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onProfileUpdate(values);
    setIsEditing(false);
    resetFrom(currentUser, {}, false);
  };

  const handleLogout = () => {
    onLogout();
  };

  return (
    <form className="profile" name="edit-profile-form" onSubmit={handleSubmit}>
      <h2 className="profile__title">{`Привет, ${currentUser.name}`}</h2>
      <div className="profile__inputs-container">
        <span className="profile__span-input-error" id="user-name-error">
          {errors.name || ''}
        </span>

        <div className="profile__input-container">
          <label className="profile__label" htmlFor="user-name">
            Имя
          </label>
          <input
            className={`profile__input ${
              errors.name && 'profile__input_type_error'
            }`}
            id="user-name"
            type="text"
            minLength="2"
            maxLength="30"
            name="name"
            value={values.name || ''}
            onChange={handleChange}
            required
          />
        </div>
        <div className="profile__input-container">
          <label className="profile__label" htmlFor="user-email">
            E-mail
          </label>
          <input
            className={`profile__input ${
              errors.email && 'profile__input_type_error'
            }`}
            id="user-email"
            pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
            type="email"
            name="email"
            value={values.email || ''}
            onChange={handleChange}
            required
          />
        </div>
        <span className="profile__span-input-error" id="user-email-error">
          {errors.email || ''}
        </span>
      </div>
      <div
        className={`profile__button-container ${
          isEditing && 'profile__button-container_disabled'
        }`}
      >
        <button className="profile__button" type="button" onClick={handleEdit}>
          Редактировать
        </button>
        <button
          onClick={handleLogout}
          className="profile__button profile__button_exit"
          type="button"
        >
          Выйти из аккаунта
        </button>
      </div>
      <button
        className={`profile__submit-button ${
          isEditing && 'profile__submit-button_enabled'
        } ${!isValid && 'profile__submit-button_disabled'}`}
        disabled={!isValid}
        type="submit"
      >
        Сохранить
      </button>
    </form>
  );
}

export default Profile;
