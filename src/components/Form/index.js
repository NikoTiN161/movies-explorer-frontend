import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Form(props) {
  return (
    <form onSubmit={props.onSubmit} action="" name="form-auth" noValidate className={`form ${props.className}`}>
      <Link to="/" className="form__logo" />
      <h2 className="form__header">{props.title}</h2>
      {props.children}
      <button type="submit" className="form__button">{props.buttonText}</button>
    </form>
  );
}

export default Form;