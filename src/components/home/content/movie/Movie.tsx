import React from 'react';
import ContextMenu from './contextMenu/ContextMenu';
import noImage from '../../../../img/no_image.png';
import { parseYear } from '../../../../util/util';
import { IMovieProps } from '../../../../types/types';
import './movie.scss';

const Movie: React.FC<IMovieProps> = ({ movie, editMovie, deleteMovie, showMovieDetails }) => {
  const { id, poster_path, genres, title, release_date } = movie;

  const onDelete = () => deleteMovie(movie)
  const onEdit = () => editMovie(movie);
  const showDetails = () => showMovieDetails(id);
  const onError = (e) => { 
    e.target.onerror = null; 
    e.target.src = noImage 
  }

  return (
    <div className="movie_details" onClick={showDetails} role="movie">
      <img src={poster_path} className="image" onError={onError} />
      <div className="info_group">
        <div className="name">{title}</div>
        <div className="year">{parseYear(release_date)}</div>
      </div>
      <div className="genre">{genres.join(', ')}</div>
      <ContextMenu onEdit={onEdit} onDelete={onDelete}/>
    </div>
  )
}

export default Movie;