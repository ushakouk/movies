import React from 'react';
import './scrollable.scss';

function Scrollable({ children, onScroll }) {
  return (
    <div className="scrollable" onScroll={onScroll}>
      {children}
    </div>
  )
}

export default Scrollable;