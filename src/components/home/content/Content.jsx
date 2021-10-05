import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMovies, loadMoreMovies } from '../../../store/actions/complex';
import { showMovieDetails } from '../../../store/actions/header';
import { createOrEditMovie, deleteMovie } from '../../../store/actions/modal';
import { setSort, setFilter } from '../../../store/actions/content';
import { API } from '../../../store/constants/constants';
import Counter from './counter/Counter';
import Movie from './movie/Movie';
import Navigation from './navigation/Navigation';
import './content.scss';

function Content({ actions, movies, found, sort, filter, toSearch, loadMoreTrigger, loadIterator }) {

  useEffect(() => {
    actions.getMovies(toSearch, filter, sort)
  }, [sort, filter, toSearch])

  useEffect(() => {
    if (loadMoreTrigger && found > API.LOAD_LIMIT * loadIterator) {
      actions.loadMoreMovies(toSearch, filter, sort, loadIterator)
    }
  }, [loadMoreTrigger])

  const edit = useCallback((movie) => {
    actions.createOrEditMovie(movie);
  }, [])

  const remove = useCallback((movie) => {
    actions.deleteMovie(movie.id);
  }, [])

  const showDetails = useCallback((movie) => {
    actions.showMovieDetails(movie);
  }, [])

  return (
    <div className="content">
      <Navigation sort={sort} setSort={actions.setSort} filter={filter} setFilter={actions.setFilter} />
      <Counter value={found} />
      <div className="movies_container">
        {movies.map((movie, index) =>
          <Movie
            key={index}
            movie={movie}
            editMovie={edit}
            deleteMovie={remove}
            showMovieDetails={showDetails}
          />
        )}
      </div>
    </div>
  )
}

const mapStateToProps = ({ content, header }) => ({
  ...content, toSearch: header.toSearch
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    createOrEditMovie, deleteMovie, showMovieDetails, setSort, setFilter, getMovies, loadMoreMovies
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);