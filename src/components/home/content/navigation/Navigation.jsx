import React from 'react';
import './navigation.scss';
import Selector from './selector/Selector';
import Select from '../../../common/select/Select';
import { GENRES, SORTES } from '../../../../store/constants/constants';

function Navigation({ sort, setSort, filter, setFilter }) {
  return (
    <div className="navigation">
      {Object.values(GENRES).map((style, index) =>
        <Selector key={index} name={style} selected={filter} select={setFilter}/>
      )}
      <Select 
        label="SORT BY"
        options={Object.values(SORTES)}
        selectedValue={sort}
        onChange={setSort}
        className="sort"
      />
    </div>
  )
}

export default Navigation;