import React from 'react';
import './input.scss';

const Input = ({ label, size, error, ...props }) => {
  return (
    <div className="wrapper">
      <label className="label">
        {label}
        <input className={"input " + size} {...props} />
        {error &&
          <div className="validation-error">{error}</div>}
      </label>
    </div>
  )
}
export default Input;
