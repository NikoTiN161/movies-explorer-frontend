import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function LinksProfile(props) {
  return (
    <div className={`links-profile ${props.className}`}>
      {props.loggedIn ? <Link to={"/profile"} className="links-profile__profile">Аккаунт</Link>
        :
        <>
          <Link to={"/signup"} className="links-profile__signup">Регистрация</Link>
          <Link to={"/signin"} className="links-profile__signin">Войти</Link>
        </>}
    </div>
  );
}

export default LinksProfile;