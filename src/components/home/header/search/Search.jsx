import React, { useEffect, useState } from 'react';
import './search.scss';
import Title from '../../../common/title/Title';
import Button from '../../../common/button/Button';
import Input from '../../../common/fields/input/Input';

function Search({ initValue, search, reset }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(initValue ? initValue : "");
  }, [initValue])

  return (
    <div className="search-block" role="search-block">
      <Title>FIND YOUR MOVIE</Title>
      <div className="row">
        <Input
          id="search-input"
          size="super-wide"
          value={value}
          type="text"
          placeholder="What do you want to watch"
          onChange={e => setValue(e.target.value)}
        />
        <Button id="submit-search" style="primary" onClick={() => search(value)}>SEARCH</Button>
        <Button id="submit-reset-search" style={`negative ${!initValue && 'hidden'}`} onClick={reset}>RESET</Button>
      </div>
    </div>
  )
}

export default Search;