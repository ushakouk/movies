import React, { useState } from 'react';
import './search.scss';
import Title from '../../../common/title/Title';
import Button from '../../../common/button/Button';
import Input from '../../../common/input/Input';

function Search() {

  const [toSearch, setToSearch] = useState("");

  return(
    <div className="search-block">
      <Title>FIND YOUR MOVIE</Title>
      <div className="wrapper">
        <Input size="super-wide" value={toSearch} type="text" placeholder="What do you want to watch" onChange={e => setToSearch(e.target.value)} />
        <Button style="primary" >SEARCH</Button>
      </div>
    </div>
  )
}

export default Search;