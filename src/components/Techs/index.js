import React from 'react';
import './style.css';
import SectionTitle from '../SectionTitle';
import InfoCard from '../InfoCard';
import Tag from '../Tag';

function Techs(props) {
  return (
    <section className={`techs ${props.className}`}>
      <SectionTitle className="techs__title" text="Технологии" />
      <InfoCard
      className="techs__card"
      classNameTitle="techs__card-title"
      classNameText="techs__card-text"
      title="7 технологий"
      text="На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте." />
      <div className="techs__stack">
        <Tag text="HTML" color="#FFFFFF" borderRadius="10px" backgroundColor="#303030" />
        <Tag text="CSS" color="#FFFFFF" borderRadius="10px" backgroundColor="#303030" />
        <Tag text="JS" color="#FFFFFF" borderRadius="10px" backgroundColor="#303030" />
        <Tag text="React" color="#FFFFFF" borderRadius="10px" backgroundColor="#303030" />
        <Tag text="Git" color="#FFFFFF" borderRadius="10px" backgroundColor="#303030" />
        <Tag text="Express.js" color="#FFFFFF" borderRadius="10px" backgroundColor="#303030" />
        <Tag text="mongoDB" color="#FFFFFF" borderRadius="10px" backgroundColor="#303030" />
      </div>
    </section>
  );
}

export default Techs;