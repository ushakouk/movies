import { ACTIONS } from '../constants/constants';

export const showMovieDetails = (movie) => ({
  type: ACTIONS.SHOW_MOVIE_DETAILS,
  payload: movie
})

export const searchMode = () => ({
  type: ACTIONS.TO_SEARCH_MODE
})

export const setSearchValue = (value) => ({
  type: ACTIONS.SET_SEARCH_VALUE,
  payload: value
})