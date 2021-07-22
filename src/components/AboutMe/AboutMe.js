import React from 'react';
import myPhoto from '../../images/my_photo.jpg';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className="about">
      <div className="about__container">
        <h2 className="about__title">Студент</h2>
        <div className="about__info-container">
          <div className="about__text-container">
            <h3 className="about__name">Павел</h3>
            <p className="about__description">Фронтенд-разработчик, 20 лет</p>
            <p className="about__text">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
              Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <ul className="about__link-container">
              <li className="about__link">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="about__link-item"
                >
                  Facebook
                </a>
              </li>
              <li className="about__link">
                <a
                  href="https://github.com/justpasha"
                  target="_blank"
                  rel="noreferrer"
                  className="about__link-item"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
          <img className="about__image" src={myPhoto} alt="фото автора" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
