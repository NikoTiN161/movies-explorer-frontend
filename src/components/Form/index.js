import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Form(props) {
  return (
    <form action="" className={`form ${props.className}`}>
      <Link to="/" className="form__logo" />
      <h2 className="form__header">{props.title}{/* value.userName */}</h2>
      {props.children}
      <button className="form__button">{props.buttonText}</button>
    </form>
  );
}

export default Form;