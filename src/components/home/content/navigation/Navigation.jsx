import React, { useState } from 'react';
import './navigation.scss';
import Selector from './selector/Selector';
import Select from '../../../common/select/Select';

const STYLES = ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'];
const SORT_TYPES = [
  { name: "RELEASE DATE", value: "release_date" },
  { name: "GENRE", value: "genre" },
  { name: "SMTH ELSE", value: "smth" }
]

function Navigation() {

  const [selected, setSelected] = useState(STYLES[0]);

  return (
    <div className="navigation">
      {STYLES.map((style, index) =>
        <Selector key={index} name={style} selected={selected} select={(val) => setSelected(val)}/>
      )}
      <Select 
        label="SORT BY"
        options={SORT_TYPES}
        className="sort"
      />
    </div>
  )
}

export default Navigation;