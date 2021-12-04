import { ACTIONS } from '../../constants/constants';

const initialState = {
  movies: [],
  found: 0,
  loadIterator: 0
}

export const content = (state = initialState, action = {}) => {
  switch (action.type) {
    case ACTIONS.SET_MOVIES:
      return { ...state, movies: action.payload.movies, found: action.payload.found, loadIterator: 1 }
    case ACTIONS.ADD_MOVIES:
      return {...state, movies: [...state.movies, ...action.payload], loadIterator: ++state.loadIterator}
    case ACTIONS.UPDATE_MOVIE: {
      const movie = action.payload;
      const found = state.movies.find(mov => mov.id === movie.id);
      Object.assign(found, movie);
      return { ...state, movies: [...state.movies] }
    }
    case ACTIONS.REMOVE_MOVIE:
      return { ...state,  movies: [...state.movies.filter(movie => movie.id != action.payload)] };
    default:
      return {...state}
  }
}