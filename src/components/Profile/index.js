import React from 'react';
import './style.css';

function Profile(props) {
  return (
    <section className={`profile ${props.className}`}>
      <form action="" className="profile__form">
        <h2 className="profile__header">Привет, Виталий!{/* value.userName */}</h2>
        <label className="profile__label-input profile__label-input_name">
          Имя
          <input type="text" className="profile__input profile__input_name" />
        </label>
        <label className="profile__label-input profile__label-input_email">
          E-mail
          <input type="email" className="profile__input profile__input_email" />
        </label>
        <button className="profile__button profile__button_edit">Редактировать</button>
      </form>
      <button className="profile__button profile__button_exit">Выйти из аккаунта</button>
    </section>
  );
}

export default Profile;