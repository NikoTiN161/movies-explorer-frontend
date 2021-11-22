import React from 'react';
import SectionTitle from '../SectionTitle';
import './style.css';
import avatar from '../../images/avatar.jpg';
import NavLinks from '../NavLinks';

function AboutMe(props) {
  return (
    <section className={`about-me ${props.className}`}>
      <SectionTitle text="Студент" />
      <div className="about-me__about">
        <h3 className="about-me__name">Дмитрий</h3>
        <h4 className="about-me__subtitle">Фронтенд-разработчик, 27 лет</h4>
        <p className="about-me__bio">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
          и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
        <NavLinks className="about-me__links"
          links={
            [
              { name: "VK", url: "https://vk.com/id13530998", external:true },
              { name: "Github", url: "https://github.com/NikoTiN161", external:true },
            ]
          } />
        <img src={avatar} alt="фотография студента" className="about-me__avatar" />
      </div>
    </section>
  );
}

export default AboutMe;