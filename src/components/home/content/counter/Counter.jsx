import React from 'react';
import './counter.scss';

function Counter({ value }) {
  return(
    <div className="counter">
      <b>{value}</b> movies found
    </div>
  )
}

export default Counter;