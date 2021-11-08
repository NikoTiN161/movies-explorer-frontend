import React from 'react';
import './style.css';

function Tag(props) {
  const tagStyle = {
    backgroundColor: props.backgroundColor,
    color: props.color,
    borderRadius: props.borderRadius,
  }
  return (
    <p className="tag" style={tagStyle}>{props.text}</p>
  );
}

export default Tag;