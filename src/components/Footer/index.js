import React from 'react';
import NavLinks from '../NavLinks';
import SectionTitle from '../SectionTitle';
import './style.css';

function Footer(props) {
  return (
    <footer className={`footer ${props.className}`}>
      <SectionTitle className="footer__title" text="Учебный проект Яндекс.Практикум х BeatFilm." />
      <div className="footer__row">
        <p className="footer__copyright">&copy; 2021</p>
        <NavLinks
          className="footer__links"
          classNameLink="footer__link"
          links={[
            { name: "Яндекс.Практикум", url: "https://practicum.yandex.ru/" },
            { name: "Github", url: "https://github.com/NikoTiN161" },
            { name: "VK", url: "https://vk.com/id13530998"  },
          ]} />
      </div>
    </footer>
  );
}

export default Footer;