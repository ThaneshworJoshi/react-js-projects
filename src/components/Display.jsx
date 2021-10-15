import React from 'react';
import './display.css';

const Display = ({ data, isOn }) => {
  return <div className={`display ${isOn ? 'on' : 'off'}`}>{data}</div>;
};

export default Display;
