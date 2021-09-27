import React from 'react';
import './top.scss';
import Logo from '../../../common/logo/Logo';
import Button from '../../../common/button/Button';

function Top({ logout }) {
  return(
      <div className="top">
        <Logo />
        <div className="top__buttons">
          <Button style="negative small" onClick={() => logout()}>LOG OUT</Button>
          <Button style="small">+ ADD MOVIE</Button>
        </div>
      </div>
  )
}

export default Top;