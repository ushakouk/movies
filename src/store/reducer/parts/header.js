import { ACTIONS, HEADER_MODES } from '../../constants/constants';

const initialState = {
  mode: HEADER_MODES.SEARCH_MOVIES,
  movie: null,
  toSearch: ""
}

export const header = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SHOW_MOVIE_DETAILS:
      return { ...state, mode: HEADER_MODES.MOVIE_DETAILS, movie: action.payload }
    case ACTIONS.TO_SEARCH_MODE:
      return { ...state, mode: HEADER_MODES.SEARCH_MOVIES, movie: null }
    case ACTIONS.SET_SEARCH_VALUE:
      return { ...state, toSearch: action.payload }
    default:
      return {...state}
  }
}