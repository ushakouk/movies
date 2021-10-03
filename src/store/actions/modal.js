import { ACTIONS } from '../constants/constants';

export const createOrEditMovie = (movie) => ({
  type: ACTIONS.CREATE_OR_EDIT_MOVIE_MODAL,
  payload: movie
})

export const deleteMovie = (id) => ({
  type: ACTIONS.DELETE_MOVIE_MODAL,
  payload: id
})

export const closeModal = () => ({
  type: ACTIONS.CLOSE_MODAL
})
