import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavLinks from '../NavLinks';
import './style.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';


function Header(props) {
  const location = useLocation();

  const value = React.useContext(CurrentUserContext);

  return (
    <header className={`header ${location.pathname === '/' && 'header_main-page'} ${props.className}`}>
      <Link to="/" className="header__logo" />
      <nav className="header__links">
        <NavLinks className={`header__links-movies ${value.loggedIn ? '' : 'header__links-movies_hidden'}`}
          links={
            [
              { name: "Фильмы", url: "/movies" },
              { name: "Сохранённые фильмы", url: "/saved-movies" },
            ]
          }
        />
        <div className="header__links-profile">
          {value.loggedIn ? <Link to={"/profile"} className="header__links-profile header__links-profile_profile">Аккаунт</Link>
            : <>
              <Link to={"/signup"} className="header__links-profile header__links-profile_signup">Регистрация</Link>
              <Link to={"/signin"} className="header__links-profile header__links-profile_signin">Войти</Link>
            </>}
        </div>
      </nav>
    </header>
  );
}

export default Header;