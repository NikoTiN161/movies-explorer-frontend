import React from 'react';
import './style.css';
import Form from '../Form';
import { Link } from 'react-router-dom';

function Register(props) {
  return (
    <section className="register">
      <Form
        className="register__form"
        title="Добро пожаловать!"
        buttonText="Зарегистрироваться"
      >
        <label className="form__label register__label-input register__label-input_name">
          Имя
          <input type="text" required id="input_name" className="form__input register__input register__input_name" />
        </label>
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
      <p className="register__link-login">Уже зарегистрированы?
        <Link to="/signin" className="register__link">Войти</Link>
      </p>
    </section>
  );
}

export default Register;