import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__link-list">
          <li className="portfolio__link-item">
            <p className="portfolio__name">Статичный сайт</p>
            <a
              href="https://github.com/justpasha"
              target="_blank"
              rel="noreferrer"
              className="portfolio__link"
            />
          </li>
          <li className="portfolio__link-item">
            <p className="portfolio__name">Адаптивный сайт</p>
            <a
              href="https://justpasha.github.io/russian-travel/"
              target="_blank"
              rel="noreferrer"
              className="portfolio__link"
            />
          </li>
          <li className="portfolio__link-item">
            <p className="portfolio__name">Одностраничное приложение</p>
            <a
              href="https://mesto.sproject.nomoredomains.monster/"
              target="_blank"
              rel="noreferrer"
              className="portfolio__link"
            />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
