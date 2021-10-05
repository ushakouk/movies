import React, { useEffect, useState } from 'react';
import './search.scss';
import Title from '../../../common/title/Title';
import Button from '../../../common/button/Button';
import Input from '../../../common/input/Input';

function Search({ value, search, reset }) {
  const [toSearch, setToSearch] = useState(value);

  useEffect(() => {
    setToSearch(value);
  }, [value])

  function onReset() {
    if (value) {
      reset()
    } else {
      setToSearch("")
    }
  }

  return (
    <div className="search-block">
      <Title>FIND YOUR MOVIE</Title>
      <div className="wrapper">
        <Input
          size="super-wide"
          value={toSearch}
          type="text"
          placeholder="What do you want to watch"
          onChange={e => setToSearch(e.target.value)}
        />
        <Button style={`negative ${!value && 'hidden'}`} onClick={onReset}>RESET</Button>
        <Button style="primary" onClick={() => search(toSearch)}>SEARCH</Button>
      </div>
    </div>
  )
}

export default Search;