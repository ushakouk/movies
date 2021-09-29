import React from 'react';
import Top from './top/Top';
import './header.scss';

function Header({ children, ...props }) {

  return (
    <div className="header">
      <Top {...props} />
      {children}
    </div>
  )
}

export default Header;