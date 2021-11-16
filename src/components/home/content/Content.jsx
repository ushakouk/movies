import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createOrEditMovie, deleteMovie } from '../../../store/actions/modal';
import Counter from './counter/Counter';
import Movie from './movie/Movie';
import Navigation from './navigation/Navigation';
import './content.scss';

function Content({ params, setParam, actions, movies, found }) {

  const setSort = (value) => setParam('sort', value)
  const setFilter = (value) => setParam('genre', value)
  const setMovie = (id) => setParam('movie', id)

  const edit = useCallback((movie) => actions.createOrEditMovie(movie), [])
  const remove = useCallback((movie) => actions.deleteMovie(movie.id), [])

  return (
    <div className="content">
      <Navigation sort={params.sort} setSort={setSort} filter={params.genre} setFilter={setFilter} />
      <Counter value={found} />
      <div className="movies_container">
        {movies.map((movie, index) =>
          <Movie
            key={index}
            movie={movie}
            editMovie={edit}
            deleteMovie={remove}
            showMovieDetails={setMovie}
          />
        )}
      </div>
    </div>
  )
}

const mapStateToProps = ({ content }) => ({
  ...content
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ createOrEditMovie, deleteMovie }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);