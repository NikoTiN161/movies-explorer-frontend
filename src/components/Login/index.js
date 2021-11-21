import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../Form';
import './style.css';

function Login(props) {
  return (
    <section className="login">
      <Form
        className="login__form"
        title={props.title}
        buttonText={props.buttonText}
      >
        <label className="form__label register__label-input register__label-input_email">
          E-mail
          <input type="email" required id="input_email" className="form__input register__input register__input_email" />
        </label>
        <label className="form__label register__label-input register__label-input_password">
          Пароль
          <input type="password" required id="input_password" className="form__input register__input register__input_password" />
        </label>
        <span className="register__error"></span>
      </Form>
      <p className="register__link-login">Ещё не зарегистрированы?
        <Link to="/signup" className="register__link">Регистрация</Link>
      </p>
    </section>
  );
}

export default Login;