import React from 'react';
import './select.scss';

function Select({ options, value, onChange }) {
  return (
    <select
      className="select"
      value={value}
      onChange={event => onChange(event.target.value)}
    >
      {options.map(option =>
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      )}
    </select>
  );
};

export default Select;
