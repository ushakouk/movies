import React, { useState, useEffect } from 'react';
import Header from './header/Header';
import Content from './content/Content';
import Footer from './footer/Footer';
import EditMovie from './modal/EditMovie';
import DeleteMovie from './modal/DeleteMovie';
import { getMovies } from '../../api/requests';
import './home.scss';
import Success from './modal/Success';

const STATES = {
  ADD_MOVIE: {
    title: 'ADD MOVIE',
    movie: {}
  },
  EDIT_MOVIE: {
    title: 'EDIT MOVIE'
  },
  DELETE_MOVIE: {
    title: 'DELETE MOVIE'
  },
  MOVIE_IS_CREATED: {
    title: 'MOVIE IS CREATED'
  },
  DEFAULT: {
    title: 'DEFAULT'
  }
};

function Home({ logout }) {
  const [state, setState] = useState(STATES.DEFAULT);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(getMovies());
  }, []);

  function submitMovie(movie) {
    setState(STATES.DEFAULT);
    setTimeout(() => setState(STATES.MOVIE_IS_CREATED), 1000)
  }

  return (
    <React.Fragment>
      <Header addMovie={() => setState(STATES.ADD_MOVIE)} logout={() => logout()} />
      <Content
        movies={movies}
        editMovie={(movie) => setState({ ...STATES.EDIT_MOVIE, movie })}
        deleteMovie={(movie) => setState({ ...STATES.DELETE_MOVIE, movie })}
      />
      {(state.title == STATES.ADD_MOVIE.title || state.title == STATES.EDIT_MOVIE.title) &&
        <EditMovie movie={state.movie} close={() => setState(STATES.DEFAULT)} submit={(movie) => submitMovie(movie)}/>
      }
      {state.title == STATES.DELETE_MOVIE.title &&
        <DeleteMovie movie={state.movie} confirm={(id) => setMovies(movies.filter(mov => mov.id != id))} close={() => setState(STATES.DEFAULT)} />
      }
      {state.title == STATES.MOVIE_IS_CREATED.title &&
        <Success close={() => setState(STATES.DEFAULT)} />
      }
      <Footer />
    </React.Fragment>
  )
}

export default Home;