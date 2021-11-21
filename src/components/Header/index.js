import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavLinks from '../NavLinks';
import './style.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import LinksProfile from '../LinksProfile';


function Header(props) {
  const location = useLocation();

  const value = React.useContext(CurrentUserContext);

  let visible = location.pathname === '/signup' || location.pathname === '/signin';
  let width = location.pathname === '/signup' || location.pathname === '/signin' ? 'header_with-form' : '';

  return (
    <header className={`header ${location.pathname === '/' && 'header_main-page'} ${width} ${props.className} ${props.isTabletScreen && 'header_tablet-screen'} ${(props.isPageNotFound || visible) && 'header_hide'}`}>
      <Link to="/" className="header__logo" />
      {props.isTabletScreen && value.loggedIn
        ?
        (
          <button type="button" className={`header__burger-menu ${props.isVisibilityMenu && 'header__burger-menu_close'}`} onClick={props.onClickMenuButton} ></button>
        )
        :
        (
          <>
            <nav className={`header__links ${value.loggedIn ? 'header__links_logged-in' : ''}`}>
              <NavLinks className={`header__links-movies ${value.loggedIn ? '' : 'header__links-movies_hidden'}`}
              activeClassName="header__links-movies_active"
                links={
                  [
                    { name: "Фильмы", url: "/movies" },
                    { name: "Сохранённые фильмы", url: "/saved-movies" },
                  ]
                }
              />
              {!visible && <LinksProfile  loggedIn={value.loggedIn}/>}
            </nav>
          </>
        )
      }
    </header >
  );
}

export default Header;