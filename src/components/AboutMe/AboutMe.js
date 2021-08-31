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
              Я родился и живу в Челябинске, учусь в вузе на программиста. Я
              люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал
              заниматься веб-разработкой и понял, что это мне нравится больше
              чем другие направления в IT сфере.
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
          {/* <img className="about__image" src={myPhoto} alt="фото автора" /> */}
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
