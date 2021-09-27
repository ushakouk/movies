import React from 'react';
import ContextMenu from './contextMenu/ContextMenu';
import image from '../../../../img/no_image.png';
import './movie.scss';

function Movie({ poster_path, genres, title, release_date }) {

  function parseYear(date) {
    return date.substr(0, 4)
  }

  return (
    <div className="movie_details">
      <img src={poster_path} className="image" onError={(e) => {e.target.onerror = null; e.target.src=image}}/>
      <div className="info_group">
        <div className="name">{title}</div>
        <div className="year">{parseYear(release_date)}</div>
      </div>
      <div className="genre">{genres.join(', ')}</div>
      <ContextMenu />
    </div>
  )
}

export default Movie;