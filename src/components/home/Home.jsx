import React, { useEffect, useReducer } from 'react';
import Header from './header/Header';
import Content from './content/Content';
import Footer from './footer/Footer';
import EditMovie from './modal/EditMovie';
import DeleteMovie from './modal/DeleteMovie';
import Success from './modal/Success';
import { getMovies } from '../../api/requests';
import './home.scss';

const ACTIONS = {
  INIT_MOVIES: "initMovies",
  TO_SEARCH_MODE: "toSearchMode",
  SHOW_MOVIE_DETAILS: "showMovieDetails",
  ADD_MOVIE: "addMovie",
  EDIT_MOVIE: "editMovie",
  SUBMIT_MOVIE: "submitMovie",
  DELETE_MOVIE: "deleteMovie",
  CONFIRM_DELETE_MOVIE: "confirmDeleteMovie",
  CLOSE_MODAL: "closeModal"
}

const MODES = {
  SEARCH_MOVIES: 'searchMovies',
  VIEW_MOVIE_DETAILS: 'viewMovieDetails'
};

const MODALS = {
  CREATE_OR_EDIT_MOVIE: 'createOrEditMovie',
  CONFIRM_DELETE_MOVIE: 'confirmDelete',
  NOTIFICATION: 'notification'
}

const initialState = {
  mode: MODES.SEARCH_MOVIES,
  modal: null,
  movies: [],
  movieDetails: null,
  modalMovieDetails: null
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INIT_MOVIES:
      return { ...state, movies: getMovies() };
    case ACTIONS.TO_SEARCH_MODE:
      return { ...state, mode: MODES.SEARCH_MOVIES };
    case ACTIONS.VIEW_MOVIE_DETAILS:
      return { ...state, mode: MODES.VIEW_MOVIE_DETAILS, movieDetails: action.payload };
    case ACTIONS.ADD_MOVIE:
      return { ...state, modal: MODALS.CREATE_OR_EDIT_MOVIE };
    case ACTIONS.EDIT_MOVIE:
      return { ...state, modal: MODALS.CREATE_OR_EDIT_MOVIE, modalMovieDetails: action.payload };
    case ACTIONS.SUBMIT_MOVIE:
      const movie = action.payload;
      if (movie.id) {
        const found = state.movies.find(mov => mov.id === movie.id);
        Object.assign(found, movie);
      } else {
        state.movies.push(movie);
      }
      return { ...state, modal: null, modalMovieDetails: null, movies: [...state.movies] };
    case ACTIONS.DELETE_MOVIE:
      return { ...state, modal: MODALS.CONFIRM_DELETE_MOVIE, modalMovieDetails: action.payload };
    case ACTIONS.CONFIRM_DELETE_MOVIE:
      return { ...state, modal: null, movies: [...state.movies.filter(movie => movie.id != action.payload)] };
    case ACTIONS.CLOSE_MODAL:
      return { ...state, modal: null, modalMovieDetails: null };
    default:
      throw new Error();
  }
}

function Home({ logout }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: ACTIONS.INIT_MOVIES })
  }, [])

  function getModal(modal) {
    switch (modal) {
      case MODALS.CREATE_OR_EDIT_MOVIE:
        return (
          <EditMovie
            movie={state.modalMovieDetails}
            submit={(movie) => dispatch({ type: ACTIONS.SUBMIT_MOVIE, payload: movie })}
            close={() => dispatch({ type: ACTIONS.CLOSE_MODAL })}
          />)
      case MODALS.CONFIRM_DELETE_MOVIE:
        return (
          <DeleteMovie
            movie={state.modalMovieDetails}
            confirm={(id) => dispatch({ type: ACTIONS.CONFIRM_DELETE_MOVIE, payload: id })}
            close={() => dispatch({ type: ACTIONS.CLOSE_MODAL })}
          />)
      case MODALS.NOTIFICATION:
        return (
          <Success close={() => dispatch({ type: ACTIONS.CLOSE_MODAL })} />
        )
    }
  }

  return (
    <React.Fragment>
      <Header addMovie={() => dispatch({ type: ACTIONS.ADD_MOVIE })} logout={() => logout()} />
      <Content
        movies={state.movies}
        editMovie={(movie) => dispatch({ type: ACTIONS.EDIT_MOVIE, payload: movie })}
        deleteMovie={(movie) => dispatch({ type: ACTIONS.DELETE_MOVIE, payload: movie })}
      />
      <Footer />
      {state.modal &&
        getModal(state.modal)
      }
    </React.Fragment>
  )
}

export default Home;