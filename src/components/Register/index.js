import React from 'react';
import './style.css';
import Form from '../Form';
import { Link } from 'react-router-dom';
import useFormAndValidation from '../../hooks/useFormAndValidation';

function Register(props) {

  const { values, handleChange, errors, isValid, setValues, setIsValid } = useFormAndValidation();


  function handleSubmit(e) {
    e.preventDefault();
    props.onRegister(values.name, values.email, values.password);
  }

  return (
    <section className="register">
      <Form
        className="register__form"
        title="Добро пожаловать!"
        buttonText="Зарегистрироваться"
        onSubmit={handleSubmit}
      >
        <label className="form__label register__label-input register__label-input_name">
          Имя
          <input type="text" required id="input_name" className="form__input register__input register__input_name"
            name="name" value={values.name || ''} onChange={handleChange} />
        </label>
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
      <p className="register__link-login">Уже зарегистрированы?
        <Link to="/signin" className="register__link">Войти</Link>
      </p>
    </section>
  );
}

export default Register;