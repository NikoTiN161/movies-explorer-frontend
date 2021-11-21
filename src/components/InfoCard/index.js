import React from 'react';
import './style.css';

function InfoCard(props) {
  return (
    <article className={`info-card ${props.className}`}>
      <h3 className={`info-card__title ${props.classNameTitle}`} >{props.title}</h3>
      <p className={`info-card__text ${props.classNameText}`} >{props.text}</p>
    </article>
  );
}

export default InfoCard;