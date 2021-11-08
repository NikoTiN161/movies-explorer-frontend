import React from 'react';
import './style.css';
import promo_logo from '../../images/landing-logo.svg';

function Promo(props) {
  return (
    <section className={`promo ${props.className}`}>
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      <img src={promo_logo} alt="логотип" className="promo__logo" />
    </section>
  );
}

export default Promo;