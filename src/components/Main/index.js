import React from 'react';
import './style.css';
import AboutProject from '../AboutProject';
import Promo from '../Promo';
import Techs from '../Techs';
import AboutMe from '../AboutMe';
import Portfolio from '../Portfolio';

function Main(props) {
  return (
    <main className={`main ${props.className}`}>
      <Promo className="main__promo" />
      <AboutProject className="main__about" />
      <Techs className="main__techs" />
      <AboutMe className="main__about-me" />
      <Portfolio className="main__portfolio" />
    </main>
  );
}

export default Main;