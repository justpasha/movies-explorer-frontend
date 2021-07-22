import React from 'react';
import './Profile.css';

function Profile() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="profile" onSubmit={handleSubmit}>
      <h2 className="profile__title">Привет, Виталий!</h2>
      <div className="profile__input-container">
        <label className="profile__label" htmlFor="profileName">
          Имя
        </label>
        <input
          className="profile__input"
          id="profileName"
          type="text"
          value="Виталий"
          minLength="2"
          maxLength="30"
          required
        />
      </div>
      <div className="profile__input-container">
        <label className="profile__label" htmlFor="profileEmail">
          E-mail
        </label>
        <input
          className="profile__input"
          id="profileEmail"
          type="email"
          value="pochta@yandex.ru"
          required
        />
      </div>
      <button className="profile__button" type="submit">
        Редактировать
      </button>
      <button className="profile__button profile__button_exit" type="button">
        Выйти из аккаунта
      </button>
    </form>
  );
}

export default Profile;
