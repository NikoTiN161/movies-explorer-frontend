import React from 'react';
import './style.css';
import LinksProfile from '../LinksProfile';
import NavLinks from '../NavLinks';

function Menu(props) {
  return (
    <div className={`menu ${props.visibility && 'menu_visible'}`}>
      <div className="menu__blur" />
      <nav className="menu__links">
        <NavLinks className="menu__links-movies" activeClassName="menu__links-movies_active" classNameLink="menu__link"
          links={
            [
              { name: "Главная", url: "/" },
              { name: "Фильмы", url: "/movies" },
              { name: "Сохранённые фильмы", url: "/saved-movies" },
            ]
          }
        />
        {<LinksProfile className="menu__links-profile" loggedIn={true} />}
      </nav>
    </div>
  );
}

export default Menu;