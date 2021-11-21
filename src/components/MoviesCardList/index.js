import React from 'react';
import './style.css';
import MoviesCard from '../MoviesCard';

function MoviesCardList(props) {
  return (
    <ul className="movies-list">
      {
        props.cards.map((card) => {
          return (
            <MoviesCard
              key={card.id}
              card={card}
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete}
            />
          )
        })
      }
    </ul>
  );
}

export default MoviesCardList;