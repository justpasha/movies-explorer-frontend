import React from 'react';
import './Techs.css';

function Techs() {
  return (
    <section className="techs">
      <div className="techs__container">
        <h2 className="techs__title">Технологии</h2>
        <div className="techs__content">
          <h3 className="techs__heading">7 технологий</h3>
          <p className="techs__text">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
          <ul className="techs__grid-container">
            <li className="techs__tech">
              <p className="techs__tech-text">HTML</p>
            </li>
            <li className="techs__tech">
              <p className="techs__tech-text">CSS</p>
            </li>
            <li className="techs__tech">
              <p className="techs__tech-text">JS</p>
            </li>
            <li className="techs__tech">
              <p className="techs__tech-text">React</p>
            </li>
            <li className="techs__tech">
              <p className="techs__tech-text">Git</p>
            </li>
            <li className="techs__tech">
              <p className="techs__tech-text">Express.js</p>
            </li>
            <li className="techs__tech">
              <p className="techs__tech-text">mongoDB</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Techs;
