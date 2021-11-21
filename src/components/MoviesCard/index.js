import React, { useState } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import './style.css';
import { urlApi } from '../../utils/constants';
import { useLocation } from 'react-router';


function MoviesCard(props) {
  const value = React.useContext(CurrentUserContext);
  const location = useLocation();
  const [ click, setClick ] = useState(false);

  function handleLikeClick() {
    setClick(!click);
  }

  return (
    <li className="card">
      <div className="card__info">
        <h2 className="card__title">{props.card.nameRU}</h2>
        <span className="card__duration">{props.card.duration}</span>
        <button type="button"
          onClick={handleLikeClick}
          className={`card__like-button ${click && 'card__like-button_liked'} ${location.pathname === '/saved-movies' && 'card__like-button_saved-movies'}`}>

        </button>
      </div>
      <img src={urlApi + props.card.image.url} alt={props.card.nameRU} className="card__image" />
    </li>
  );
}

export default MoviesCard;