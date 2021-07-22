import React from 'react';
import './NoticePopup.css';

function NoticePopup({
  isOpen,
  onClose,
  errorText = 'Что-то пошло не так...',
}) {
  return (
    <section className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <h2 className="popup__title">Произошла ошибка(</h2>
        <p className="popup__text">{errorText}</p>
        <button onClick={onClose} className="popup__button" type="button">
          Закрыть
        </button>
      </div>
    </section>
  );
}

export default NoticePopup;
