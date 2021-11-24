import { ACTIONS } from '../constants/constants';

export const setMovies = (movies, found) => ({
  type: ACTIONS.SET_MOVIES,
  payload: { movies, found }
})

export const addMovies = (movies) => ({
  type: ACTIONS.ADD_MOVIES,
  payload: movies
})

export const updateMovie = (movie) => ({
  type: ACTIONS.UPDATE_MOVIE,
  payload: movie
})

export const removeMovie = (id) => ({
  type: ACTIONS.REMOVE_MOVIE,
  payload: id
})

