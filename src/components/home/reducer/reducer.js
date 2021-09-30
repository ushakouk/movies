import { ACTIONS } from './actions';

export const MODES = {
  SEARCH_MOVIES: 'searchMovies',
  MOVIE_DETAILS: 'viewMovieDetails'
};

export const MODALS = {
  CREATE_OR_EDIT_MOVIE: 'createOrEditMovie',
  CONFIRM_DELETE_MOVIE: 'confirmDelete',
  NOTIFICATION: 'notification'
}

export const initialState = {
  mode: MODES.SEARCH_MOVIES,
  modal: null,
  movies: [],
  movieDetails: null,
  modalMovieDetails: null
}

export function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INIT_MOVIES:
      return { ...state, movies: action.payload };
    case ACTIONS.TO_SEARCH_MODE:
      return { ...state, mode: MODES.SEARCH_MOVIES };
    case ACTIONS.SHOW_MOVIE_DETAILS:
      return { ...state, mode: MODES.MOVIE_DETAILS, movieDetails: action.payload };
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