import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavLinks from '../NavLinks';
import './style.css';

function Header(props) {
  const location = useLocation();
  return (
    <header className={`header ${location.pathname === '/' && 'header_main-page'} ${props.className}`}>
      <Link to="/" className="header__logo" />
      <nav className="header__links">
        <NavLinks className="header__links-movies"
          links={
            [
              { name: "Фильмы", url: "/movies" },
              { name: "Сохранённые фильмы", url: "/saved-movies" },
            ]
          }
        />
      </nav>
    </header>
  );
}

export default Header;