import React from 'react';
import './content.scss';
import Counter from './counter/Counter';
import Movie from './movie/Movie';
import Navigation from './navigation/Navigation';

function Content({ movies, editMovie, deleteMovie }) {

  return (
    <div className="content">
      <Navigation />
      <Counter value={movies.length} />
      <div className="movies_container">
        {movies.map((movie, index) =>
          <Movie
            key={index}
            movie={movie}
            onEdit={editMovie}
            onDelete={deleteMovie}
          />
        )}
      </div>
    </div>
  )
}

export default Content;