import React from 'react';
import { parseTime, parseYear } from '../../../../util/util';
import noImage from '../../../../img/no_image.png';
import './movieDetails.scss';

function MovieDetails({ movie }) {
  const { poster_path, title, vote_average, genres, release_date, runtime, overview } = movie;

  return (
    <div className="movie-details" role="movie-details">
      <img src={poster_path} className="image" onError={(e) => { e.target.onerror = null; e.target.src = noImage }} />
      <div className="movie-details_block">
        <div className="details_row">
          <div className="details_title">{title.toUpperCase()}</div>
          <div className="details_raiting">{vote_average}</div>
        </div>
        <div className="details_genre">{genres.join(', ')}</div>
        <div className="details_row">
          <div className="details_year">{parseYear(release_date)}</div>
          <div className="details_runtime">{parseTime(runtime)}</div>
        </div>
        <div className="details_overview">{overview}</div>
      </div>
    </div>
  )
}

export default MovieDetails;