import React from 'react';
import './selector.scss';
import { equalIgnoreCase } from '../../../../../util/util'
function Selector({ name, selected, select }) {
  return (
    <div className={"genre selector" + (equalIgnoreCase(name, selected) ? " selected" : "")} onClick={() => select(name)}>
      {name}
    </div>
  )
}

export default Selector;