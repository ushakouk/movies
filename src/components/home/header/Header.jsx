import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { HEADER_MODES } from '../../../store/constants/constants';
import { logout } from '../../../store/actions/app';
import { searchMode } from '../../../store/actions/header';
import { createOrEditMovie } from '../../../store/actions/modal';
import Top from './top/Top';
import Search from './search/Search';
import MovieDetails from './movieDetails/MovieDetails';
import './header.scss';

function Header({ mode, movieDetails, actions }) {
  const { logout, searchMode, createOrEditMovie } = actions;

  return (
    <div className="header">
      <Top
        mode={mode}
        closeViewMode={searchMode}
        addMovie={createOrEditMovie}
        logout={logout}
      />
      {mode === HEADER_MODES.SEARCH_MOVIES &&
        <Search />}
      {mode === HEADER_MODES.MOVIE_DETAILS &&
        <MovieDetails movie={movieDetails} />}
    </div>
  )
}


const mapStateToProps = ({ header }) => ({
  mode: header.mode,
  movieDetails: header.movie
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ logout, searchMode, createOrEditMovie }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);