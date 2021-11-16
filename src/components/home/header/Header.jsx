import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from '../../../store/actions/app';
import { createOrEditMovie } from '../../../store/actions/modal';
import Top from './top/Top';
import Search from './search/Search';
import MovieDetails from './movieDetails/MovieDetails';
import './header.scss';
import { getMovieRequest } from '../../../api/requests';

function Header({ movieId, closeMovieDetails, searchValue, setSearchValue, actions }) {
  const { logout, addMovie } = actions;

  const [movieDetails, setMovieDetails] = useState(null)
  const [isViewMode, setIsViewMode] = useState(false)

  useEffect(() => {
    if ((!movieDetails && movieId) || (movieDetails && !movieId) || (movieDetails && movieDetails.id !== movieId.toString())) {
      init(movieId)
    }
  }, [movieId])

  const init = (id) => {
    if (id) {
      getMovieRequest(id).then((movie) => setState(movie))
    } else {
      setState(null)
    }   
  }

  const setState = (movie) => {
    setMovieDetails(movie)
    setIsViewMode(movie && movie.id)
  }

  return (
    <div className="header">
      <Top
        isViewMode={isViewMode}
        closeViewMode={closeMovieDetails}
        addMovie={addMovie}
        logout={logout}
      />
      {isViewMode ?
        <MovieDetails movie={movieDetails} />
        :
        <Search initValue={searchValue} search={setSearchValue} reset={() => setSearchValue(null)} />}
    </div>
  )
}


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ logout, addMovie: createOrEditMovie }, dispatch)
});

export default connect(null, mapDispatchToProps)(Header);