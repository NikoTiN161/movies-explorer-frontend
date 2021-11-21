import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

function NavLinks(props) {
  const { classNameLink = '', activeClassName = '', classNameAccent = '', accent = '' } = props;
  return (
    <nav className={`nav-links ${props.className}`}>
      {props.links.map((link, index) => {
        return (
          <NavLink key={index} exact to={link.url} className={`nav-links__link ${classNameLink}`} activeClassName={activeClassName}>
            {link.name}<span className={`nav-links__link-accent ${classNameAccent}`}>{accent}</span>
          </NavLink>
        )
      })}
    </nav>
  );
}

export default NavLinks;