import React from 'react';
import './style.css';

function Form(props) {
  return (
    <form action="" className={`form ${props.className}`}>
      <h2 className="form__header">{props.title}{/* value.userName */}</h2>
      {props.children}
      <button className="form__button">{props.buttonText}</button>
    </form>
  );
}

export default Form;