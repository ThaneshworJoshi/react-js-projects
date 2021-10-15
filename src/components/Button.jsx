import React from 'react';
import './button.css';
const Button = ({ label, size, value, onClick }) => {
  return (
    <div
      className='button'
      onClick={onClick}
      data-size={size}
      data-value={value}
    >
      {label}
    </div>
  );
};

export default Button;
