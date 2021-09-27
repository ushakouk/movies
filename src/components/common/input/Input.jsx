import React from 'react';
import './input.scss';

const Input = ({ label, size, ...props }) => (
  <React.Fragment>
    {label && <div className="label">{label}</div>}
    <input className={"input " + size} {...props} />
  </React.Fragment>
);

export default Input;
