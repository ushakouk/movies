import React from 'react';
import './top.scss';
import Logo from '../../../common/logo/Logo';
import Button from '../../../common/button/Button';
import { HEADER_MODES } from '../../../../store/constants/constants';

function Top({ mode, closeViewMode, addMovie, logout }) {
  function onAddMovieClick() {
    addMovie()
  }

  return (
    <div className="top">
      <Logo />
      <div className="top__buttons">
        {mode === HEADER_MODES.MOVIE_DETAILS &&
          <Button style="search-icon" onClick={closeViewMode}></Button>}
        {mode === HEADER_MODES.SEARCH_MOVIES &&
          <React.Fragment>
            <Button style="negative small" onClick={logout}>LOG OUT</Button>
            <Button style="small" onClick={onAddMovieClick}>+ ADD MOVIE</Button>
          </React.Fragment>}
      </div>
    </div>
  )
}

export default Top;