import React, { useEffect, useState } from 'react';
import './content.scss';
import Counter from './counter/Counter';
import Movie from './movie/Movie';
import Navigation from './navigation/Navigation';
import { getMovies } from '../../../api/requests';

function Content(props) {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(getMovies());
  }, []);

  return (
    <div className="content">
      <Navigation />
      <Counter value={49} />
      <div className="movies_container">
        {movies.map((movie, index) =>
          <Movie key={index} {...movie} />
        )}
      </div>
    </div>
  )
}

export default Content;