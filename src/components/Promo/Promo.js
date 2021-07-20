import React from 'react';
import webPlanetImage from '../../images/web-planet-logo.svg';
import './Promo.css';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <div className="promo__info-container">
          <h1 className="promo__heading">
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <p className="promo__text">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <a href="#about-project" className="promo__button">
            Узнать больше
          </a>
        </div>
        <img src={webPlanetImage} alt="веб планета" className="promo__image" />
      </div>
    </section>
  );
}

export default Promo;
