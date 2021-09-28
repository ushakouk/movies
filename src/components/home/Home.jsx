import React, { useState } from 'react';
import Header from './header/Header';
import Content from './content/Content';
import Footer from './footer/Footer';
import EditMovie from './modal/EditMovie';
import DeleteMovie from './modal/DeleteMovie';
import Success from './modal/Success';
import { getMovies } from '../../api/requests';
import './home.scss';

const STATES = {
  ADD_MOVIE: {
    title: 'ADD MOVIE'
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
  const [movies, setMovies] = useState(getMovies());

  function submitMovie(movie) {
    if (!movie.id) {
      setState(STATES.MOVIE_IS_CREATED);
    } else {
      setState(STATES.DEFAULT);
    }
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
        <EditMovie
          movie={state.movie}
          submit={(movie) => submitMovie(movie)}
          close={() => setState(STATES.DEFAULT)}
        />
      }
      {state.title == STATES.DELETE_MOVIE.title &&
        <DeleteMovie
          movie={state.movie}
          confirm={(id) => setMovies(movies.filter(mov => mov.id != id))}
          close={() => setState(STATES.DEFAULT)}
        />
      }
      {state.title == STATES.MOVIE_IS_CREATED.title &&
        <Success close={() => setState(STATES.DEFAULT)} />
      }
      <Footer />
    </React.Fragment>
  )
}

export default Home;