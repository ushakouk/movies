import React from 'react';
import './button.css';

const Button = ({text, style, ...props} ) => {
  const className = style ? "button " + style : "button";

  return (
    <button {...props} className={className}>
      {text}
    </button>
  );
};

export default Button;
