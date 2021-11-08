import React from 'react';
import './style.css';
import SectionTitle from '../SectionTitle';
import InfoCard from '../InfoCard';
import Tag from '../Tag';


function AboutProject(props) {
  return (
    <section className={`about ${props.className}`}>
      <SectionTitle className="about__title" text="О проекте" />
      <div className="about__grid-cards">
        <InfoCard className="about__card" title="Дипломный проект включал 5 этапов" text="Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки." />
        <InfoCard className="about__card" title="На выполнение диплома ушло 5 недель" text="У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься." />
      </div>
      <div className="about__grid-time">
        <Tag text="1 неделя" color="#000000" backgroundColor="#3DDC84" />
        <Tag text="4 недели" color="#FFFFFF" backgroundColor="#303030" />
        <Tag text="Back-end" color="#8B8B8B" />
        <Tag text="Front-end" color="#8B8B8B" />
      </div>
    </section>
  );
}

export default AboutProject;