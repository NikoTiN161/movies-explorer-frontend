import React, { useState } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import './style.css';
import { optionsMoviesApi } from '../../utils/constants';
import { Redirect, useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';


function MoviesCard(props) {
  const value = React.useContext(CurrentUserContext);
  const history = useHistory();
  const location = useLocation();
  const [click, setClick] = useState(false);

  function handleLikeClick() {
    setClick(!click);
  }

  function handleClickImage() {
    // <Link to={props.card.trailerLink} />

    // props.card.trailerLink
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
      <Link to={{pathname: props.card.trailerLink} } target="_blank" >
        <img src={optionsMoviesApi.baseUrl + props.card.image.url} alt={props.card.nameRU} className="card__image" />
      </Link>
    </li>
  );
}

export default MoviesCard;