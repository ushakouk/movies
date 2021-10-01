import React from 'react';
import ContextMenu from './contextMenu/ContextMenu';
import noImage from '../../../../img/no_image.png';
import { parseYear } from '../../../../util/util';
import './movie.scss';

function Movie({ movie, editMovie, deleteMovie, showMovieDetails }) {
  const { poster_path, genres, title, release_date } = movie;

  return (
    <div className="movie_details" onClick={() => showMovieDetails(movie)}>
      <img src={poster_path} className="image" onError={(e) => { e.target.onerror = null; e.target.src = noImage }} />
      <div className="info_group">
        <div className="name">{title}</div>
        <div className="year">{parseYear(release_date)}</div>
      </div>
      <div className="genre">{genres.join(', ')}</div>
      <ContextMenu onEdit={() => editMovie(movie)} onDelete={() => deleteMovie(movie)}/>
    </div>
  )
}

export default Movie;