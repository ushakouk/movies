import React, { useState } from 'react';
import Select from '../../../../common/select/Select';
import './sort.scss';

const SORT_TYPES = [
  {name: "RELEASE DATE", value: "release_date"},
  {name: "GENRE", value: "genre"},
  {name: "SMTH ELSE", value: "smth"}
]

function Sort() {

  const [sort, setSort] = useState(SORT_TYPES[0].value);

  return (
    <div className="nav-sort">
      <div className="nav-sort__label">SORT BY</div>
      <Select
        options={SORT_TYPES}
        value={sort}
        onChange={(value) => setSort(value)}
      />
    </div>
  );
}

export default Sort;