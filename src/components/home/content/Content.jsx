import React, { useCallback } from 'react';
import './content.scss';
import Counter from './counter/Counter';
import Movie from './movie/Movie';
import Navigation from './navigation/Navigation';

function Content({ movies, editMovie, deleteMovie, showMovieDetails }) {
  const edit = useCallback((movie) => {
    editMovie(movie);
  }, [])

  const remove = useCallback((movie) => {
    deleteMovie(movie);
  }, [])

  const showDetails = useCallback((movie) => {
    showMovieDetails(movie);
  }, [])

  return (
    <div className="content">
      <Navigation />
      <Counter value={movies.length} />
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

export default Content;