import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

import photo1 from '../../images/photo-exapmle1.jpg';
import photo2 from '../../images/photo-exapmle2.jpg';
import photo3 from '../../images/photo-exapmle3.jpg';
import { Route } from 'react-router-dom';

function MoviesCardList() {
  return (
    <section className="movies-list">
      <div className="movies-list__grid-container">
        <MoviesCard
          isSave={true}
          movieName="33 слова о дизайне"
          movieDuration="1ч 47м"
          movieLink="https://www.youtube.com/"
          moviePhoto={photo1}
        />
        <MoviesCard
          isSave={false}
          movieName="33 слова о дизайне"
          movieDuration="1ч 47м"
          movieLink="https://www.youtube.com/"
          moviePhoto={photo2}
        />
        <MoviesCard
          isSave={true}
          movieName="33 слова о дизайне"
          movieDuration="1ч 47м"
          movieLink="https://www.youtube.com/"
          moviePhoto={photo3}
        />
        <MoviesCard
          isSave={false}
          movieName="33 слова о дизайне"
          movieDuration="1ч 47м"
          movieLink="https://www.youtube.com/"
          moviePhoto="https://images.unsplash.com/photo-1626814327189-c7748ef35f44?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        />
        <MoviesCard
          isSave={false}
          movieName="33 слова о дизайне"
          movieDuration="1ч 47м"
          movieLink="https://www.youtube.com/"
          moviePhoto={photo3}
        />
        <MoviesCard
          isSave={true}
          movieName="33 слова о дизайне"
          movieDuration="1ч 47м"
          movieLink="https://www.youtube.com/"
          moviePhoto={photo3}
        />
        <MoviesCard
          isSave={false}
          movieName="33 слова о дизайне"
          movieDuration="1ч 47м"
          movieLink="https://www.youtube.com/"
          moviePhoto={photo3}
        />
        <MoviesCard
          isSave={false}
          movieName="33 слова о дизайне"
          movieDuration="1ч 47м"
          movieLink="https://www.youtube.com/"
          moviePhoto={photo3}
        />
      </div>
      <Route path="/movies">
        <button className="movies-list__button" type="button">
          Ещё
        </button>
      </Route>
    </section>
  );
}

export default MoviesCardList;
