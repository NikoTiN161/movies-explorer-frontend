import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import './style.css';

function PageNotFound(props) {

  const history = useHistory();

  function goBackClick() {
    history.goBack();
  }

  props.setPageNotFoundTrue();

  return (
    <div className="not-found-page">
      <h1 className="not-found-page__title"><span className="not-found-page__number">404</span>Страница не найдена</h1>
      <Link onClick={goBackClick} className="not-found-page__link-back" >Назад</Link>
    </div>
  );
}

export default PageNotFound;