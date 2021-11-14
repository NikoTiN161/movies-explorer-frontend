import React from 'react';
import './style.css';

function SearchForm(props) {
  return (
    <section className={`search ${props.className}`}>
      <form className="search__form" action="" method="get">
        <span className="search__logo"></span>
        <input className="search__input" name="search" placeholder="Фильм" type="search"></input>
        <button className="search__button" type="submit"></button>
        <span className="search__delimiter"></span>
        <label className="search__switch">
          <input className="search__checkbox" type="checkbox" ></input>
          <span className="search__slider"></span>
          Короткометражки
        </label>
      </form>
    </section>
  );
}

export default SearchForm;