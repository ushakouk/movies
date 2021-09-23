import React from 'react';
import ContextMenu from './contextMenu/ContextMenu';
import './movie.scss';

function Movie({ img, genre, name, year }) {
  return (
    <div className="movie_details">
      <ContextMenu />
      <div className="image"></div>
      <div className="info_group">
        <div className="name">{name}</div>
        <div className="year">{year}</div>
      </div>
      <div className="genre">{genre}</div>
    </div>
  )
}

export default Movie;