import React from 'react';
import './top.scss';
import Logo from '../../../common/logo/Logo';
import Button from '../../../common/button/Button';

function Top({ isViewMode, closeViewMode, addMovie, logout }) {
  return (
    <div className="top">
      <Logo />
      <div className="top__buttons">
        {isViewMode ?
          <Button style="search-icon" onClick={() => closeViewMode()}></Button>
          :
          <React.Fragment>
            <Button style="negative small" onClick={() => logout()}>LOG OUT</Button>
            <Button style="small" onClick={() => addMovie()}>+ ADD MOVIE</Button>
          </React.Fragment>
        }
      </div>
    </div>
  )
}

export default Top;