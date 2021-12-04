import React from 'react';
import './button.css';

interface ButtonProps {
  id: string;
  text: string;
  style: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps>  = ({id, text, style, onClick}) => {
  const className = style ? "button " + style : "button";

  return (
    <button id={id} className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
