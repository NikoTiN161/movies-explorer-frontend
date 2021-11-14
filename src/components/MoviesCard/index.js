import React from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import './style.css';
import { urlApi } from '../../utils/constants';


function MoviesCard(props) {
  const value = React.useContext(CurrentUserContext);

  return (
      <li className="card">
        <div className="card__info">
          <h2 className="card__title">{props.card.nameRU}</h2>
          <span className="card__duration">{props.card.duration}</span>
          <button type="button" className={`card__like-button card__like-button_liked`}></button>
        </div>
        <img src={urlApi + props.card.image.url} alt={props.card.nameRU} className="card__image" />
      </li>
  );
}

export default MoviesCard;