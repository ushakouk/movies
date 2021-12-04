import React from 'react';
import './button.css';
import { IButton } from '../../../types/types';

const Button: React.FC<IButton>  = ({id, text, style, onClick}) => {
  const className = style ? "button " + style : "button";

  return (
    <button id={id} className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
