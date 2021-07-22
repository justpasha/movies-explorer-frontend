import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section id="about-project" className="project">
      <div className="project__container">
        <h2 className="project__title">О проекте</h2>
        <div className="project__info">
          <article className="project__text-container">
            <h3 className="project__heading">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="project__text">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </article>
          <article className="project__text-container">
            <h3 className="project__heading">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="project__text">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </article>
        </div>
        <div className="project__progress-bar">
          <div className="project__line-container">
            <div className="project__line project__line_back">
              <p className="project__line-text project__line-text_back">
                1 неделя
              </p>
            </div>
            <p className="project__line-caption">Back-end</p>
          </div>
          <div className="project__line-container">
            <div className="project__line project__line_front">
              <p className="project__line-text">4 недели</p>
            </div>
            <p className="project__line-caption">Front-end</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
