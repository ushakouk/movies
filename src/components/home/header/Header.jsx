import React from 'react';
import Top from './top/Top';
import Search from './search/Search';
import './header.scss';

function Header({ addMovie, logout }) {

  
  return (
    <div className="header">
      <Top logout={logout} addMovie={addMovie}/>
      <Search />
    </div>
  )
}

export default Header;