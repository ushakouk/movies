import React from 'react';
import './button.scss';

const Button = ({children, style, ...props} ) => {
  const className = style ? "button " + style : "button";

  return (
    <button {...props} className={className}>
      {children}
    </button>
  );
};

export default Button;
