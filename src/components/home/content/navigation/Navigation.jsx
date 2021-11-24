import React from 'react';
import './navigation.scss';
import Selector from './selector/Selector';
import Select from '../../../common/fields/select/Select';
import { GENRES, SORTES } from '../../../../store/constants/constants';

function Navigation({ sort = SORTES.RELEASE_DATE.value, setSort, filter = GENRES.ALL, setFilter }) {
  return (
    <div className="navigation" role="navigation">
      {Object.values(GENRES).map((genre, index) =>
        <Selector key={index} name={genre} selected={filter} select={setFilter}/>
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