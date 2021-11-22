import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../Form';
import './style.css';
import useFormAndValidation from '../../hooks/useFormAndValidation';


function Login(props) {

  const { values, handleChange, errors, isValid, setValues, setIsValid } = useFormAndValidation();

  function handleSubmit(e) {
    e.preventDefault();
    props.onLogin(values.email, values.password);
  }

  return (
    <section className="login">
      <Form
        className="login__form"
        title={props.title}
        buttonText={props.buttonText}
        onSubmit={handleSubmit}
      >
        <label className="form__label register__label-input register__label-input_email">
          E-mail
          <input type="email" required id="input_email" className="form__input register__input register__input_email"
            name="email" value={values.email || ''} onChange={handleChange} />
        </label>
        <label className="form__label register__label-input register__label-input_password">
          Пароль
          <input type="password" required id="input_password" className="form__input register__input register__input_password"
            name="password" value={values.password || ''} onChange={handleChange} />
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