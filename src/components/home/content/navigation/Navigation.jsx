import React, { useState } from 'react';
import './navigation.scss';
import Selector from './selector/Selector';
import Sort from './sort/Sort';

const STYLES = ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'];

function Navigation() {

  const [selected, setSelected] = useState(STYLES[0]);

  return (
    <div className="navigation">
      {STYLES.map((style, index) =>
        <Selector key={index} name={style} selected={selected} select={(val) => setSelected(val)}/>
      )}
      <Sort />
    </div>
  )
}

export default Navigation;