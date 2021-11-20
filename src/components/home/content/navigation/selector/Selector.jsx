import React from 'react';
import './selector.scss';

function Selector({ name, selected, select }) {
  return (
    <div className={"genre selector" + (name == selected ? " selected" : "")} onClick={() => select(name)}>
      {name}
    </div>
  )
}

export default Selector;