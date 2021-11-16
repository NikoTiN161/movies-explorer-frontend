import React from 'react';
import Form from '../Form';

function Register(props) {
  return (
    <section>
      <Form
        className="register__form"
        title="Добро пожаловать!"
        buttonText="Зарегистрироваться"
      >
        <label className="register__label-input register__label-input_name">
          Имя
          <input type="text" id="input_name" className="register__input register__input_name" />
        </label>
        <label className="register__label-input register__label-input_email">
          E-mail
          <input type="email" id="input_email" className="register__input register__input_email" />
        </label>
        <label className="register__label-input register__label-input_password">
          Пароль
          <input type="password" id="input_password" className="register__input register__input_password" />
        </label>
        <span className="register__error"></span>
      </Form>
    </section>
  );
}

export default Register;