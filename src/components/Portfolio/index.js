import React from 'react';
import './style.css';
import SectionTitle from '../SectionTitle';
import NavLinks from '../NavLinks';

function Portfolio(props) {
  return (
    <section className={`portfolio ${props.className}`}>
      <SectionTitle className="portfolio__title" text="Портфолио" />
      <NavLinks
        className="portfolio__links"
        classNameLink="portfolio__link"
        classNameAccent="portfolio__link-accent"
        accent="↗"
        links={[
          { name: "Статичный сайт", url: "https://nikotin161.github.io/russian-travel/" },
          { name: "Адаптивный сайт", url: "https://nikotin161.github.io/russian-travel/" },
          { name: "Одностраничное приложение", url: "https://nikotin161.github.io/russian-travel/" },
        ]} />
    </section>
  );
}

export default Portfolio;