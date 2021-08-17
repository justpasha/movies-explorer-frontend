import React, { useEffect } from 'react';
import './NoticePopup.css';

function NoticePopup({
  isOpen,
  onClose,
  popupText = 'Что-то пошло не так...',
  popupTitle = 'Произошла ошибка(',
}) {
  useEffect(() => {
    if (!isOpen) return;
    const handleEscapeClose = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscapeClose);
    return () => {
      document.removeEventListener('keydown', handleEscapeClose);
    };
  }, [isOpen, onClose]);

  const handleOverlayClose = (e) => {
    if (e.target === e.currentTarget && isOpen) {
      onClose();
    }
  };

  return (
    <section
      onMouseDown={handleOverlayClose}
      className={`popup ${isOpen ? 'popup_opened' : ''}`}
    >
      <div className="popup__container">
        <h2 className="popup__title">{popupTitle}</h2>
        <p className="popup__text">{popupText}</p>
        <button onClick={onClose} className="popup__button" type="button">
          Закрыть
        </button>
      </div>
    </section>
  );
}

export default NoticePopup;
