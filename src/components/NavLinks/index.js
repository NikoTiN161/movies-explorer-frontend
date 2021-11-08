import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function NavLinks(props) {
  const { classNameLink = '', classNameAccent = '', accent = '' } = props;
  return (
    <nav className={`nav-links ${props.className}`}>
      {props.links.map((link, index) => {
        return (
          <Link key={index} to={link.url} className={`nav-links__link ${classNameLink}`}>
            {link.name}<span className={`nav-links__link-accent ${classNameAccent}`}>{accent}</span>
          </Link>
        )
      })}
    </nav>
  );
}

export default NavLinks;