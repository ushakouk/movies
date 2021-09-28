import React from 'react';
import './input.scss';

const Input = ({ label, size, ...props }) => {
  if (label) {
    return (
      <div className="wrapper">
        <div className="label">{label}</div>
        <input className={"input " + size} {...props} />
      </div >
    )
  } else {
    return <input className={"input " + size} {...props} />
  }
}
export default Input;
