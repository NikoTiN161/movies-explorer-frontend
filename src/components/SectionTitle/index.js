import React from 'react';
import './style.css';

function SectionTitle(props) {
  return (
    <h2 className={`section-title ${props.className}`}>
      {props.text}
    </h2>
  );
}

export default SectionTitle;