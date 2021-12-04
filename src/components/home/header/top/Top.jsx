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
          <Button style="search-icon" role="toSearchMode" onClick={closeViewMode} />
          :
          <React.Fragment>
            <Button text="LOG OUT" style="negative small" onClick={logout} />
            <Button text="+ ADD MOVIE" style="small" onClick={addMovie} />
          </React.Fragment>}
      </div>
    </div>
  )
}

export default Top;