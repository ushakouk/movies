import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { HEADER_MODES } from '../../../store/constants/constants';
import { logout } from '../../../store/actions/app';
import { searchMode, setSearchValue } from '../../../store/actions/header';
import { createOrEditMovie } from '../../../store/actions/modal';
import Top from './top/Top';
import Search from './search/Search';
import MovieDetails from './movieDetails/MovieDetails';
import './header.scss';

function Header({ mode, movieDetails, toSearch, actions }) {
  const { logout, searchMode, addMovie, setSearchValue } = actions;

  return (
    <div className="header">
      <Top
        mode={mode}
        closeViewMode={searchMode}
        addMovie={addMovie}
        logout={logout}
      />
      {mode === HEADER_MODES.SEARCH_MOVIES &&
        <Search value={toSearch} search={setSearchValue} reset={() => setSearchValue("")} />}
      {mode === HEADER_MODES.MOVIE_DETAILS &&
        <MovieDetails movie={movieDetails} />}
    </div>
  )
}


const mapStateToProps = ({ header }) => ({
  mode: header.mode,
  movieDetails: header.movie,
  toSearch: header.toSearch
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ logout, searchMode, addMovie: createOrEditMovie, setSearchValue }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);