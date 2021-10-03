import { ACTIONS } from '../constants/constants';

export const setMovies = (movies, found) => ({
  type: ACTIONS.SET_MOVIES,
  payload: { movies, found }
})

export const addMovie = (movie) => ({
  type: ACTIONS.ADD_MOVIE,
  payload: movie
})

export const updateMovie = (movie) => ({
  type: ACTIONS.UPDATE_MOVIE,
  payload: movie
})

export const removeMovie = (id) => ({
  type: ACTIONS.REMOVE_MOVIE,
  payload: id
})

export const setSort = (sort) => ({
  type: ACTIONS.SET_SORT,
  payload: sort
})

export const setFilter = (filter) => ({
  type: ACTIONS.SET_FILTER,
  payload: filter
})
