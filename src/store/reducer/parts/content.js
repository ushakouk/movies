import { ACTIONS, SORTES, GENRES } from '../../constants/constants';

const initialState = {
  movies: [],
  found: 0,
  loadIterator: 0,
  sort: SORTES.RELEASE_DATE.value,
  filter: GENRES.ALL
}

export const content = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_MOVIES:
      return { ...state, movies: action.payload.movies, found: action.payload.found, loadIterator: 1 }
    case ACTIONS.ADD_MOVIES:
      return {...state, movies: [...state.movies, ...action.payload], loadIterator: ++state.loadIterator}
    case ACTIONS.UPDATE_MOVIE:
      const movie = action.payload;
      const found = state.movies.find(mov => mov.id === movie.id);
      Object.assign(found, movie);
      return { ...state, movies: [...state.movies] }
    case ACTIONS.REMOVE_MOVIE:
      return { ...state,  movies: [...state.movies.filter(movie => movie.id != action.payload)] };
    case ACTIONS.SET_SORT:
      return { ...state, sort: action.payload }
    case ACTIONS.SET_FILTER:
      return { ...state, filter: action.payload }
    default:
      return {...state}
  }
}