import { getMoviesRequest, updateMoviesRequest, createMoviesRequest, removeMovieRequest } from '../../api/requests';
import { setMovies, updateMovie, removeMovie } from './content';
import { setIsLoading, setNotification } from './app';
import { closeModal } from './modal';
import { NOTIFICATIONS } from '../constants/constants';

export const getMovies = (filter, sort) => (dispatch) => {
  dispatch(setIsLoading(true));
  getMoviesRequest(filter, sort).then(resp => {
    dispatch(setMovies(resp.data, resp.totalAmount))
    dispatch(setIsLoading(false))
  }).catch(err => dispatch(processRequestError()))
}

export const submitMovie = (movie) => (dispatch) => {
  dispatch(setIsLoading(true));
  if (movie.id) {
    dispatch(submitUpdateMovie(movie))
  } else {
    dispatch(submitCreateMovie(movie))
  }
}

export const submitRemoveMovie = (id) => (dispatch) => {
  dispatch(setIsLoading(true));
  removeMovieRequest(id).then(() => {
    dispatch(removeMovie(id))
    dispatch(closeModal())
    dispatch(setIsLoading(false))
    dispatch(setNotification(NOTIFICATIONS.TYPES.SUCCESS, NOTIFICATIONS.MESSAGES.MOVIE_REMOVED))
  }).catch(err => dispatch(processRequestError(err)))
}

const submitUpdateMovie = (movie) => (dispatch) => {
  updateMoviesRequest(movie).then(resp => {
    dispatch(updateMovie(resp))
    dispatch(closeModal())
    dispatch(setIsLoading(false))
    dispatch(setNotification(NOTIFICATIONS.TYPES.SUCCESS, NOTIFICATIONS.MESSAGES.MOVIE_UPDATED))
  }).catch(err => dispatch(processRequestError(err)))
}

const submitCreateMovie = (movie) => (dispatch) => {
  createMoviesRequest(movie).then(resp => {
    dispatch(closeModal())
    dispatch(setIsLoading(false))
    dispatch(setNotification(NOTIFICATIONS.TYPES.SUCCESS, NOTIFICATIONS.MESSAGES.MOVIE_CREATED))
  }).catch(err => dispatch(processRequestError(err)))
}

const processRequestError = (err) => (dispatch) => {
  console.log(err)
  dispatch(setIsLoading(false))
  if (err.response) {
    if (err.response.status === 400 && err.response.data.messages) {
      return dispatch(setNotification(
        NOTIFICATIONS.TYPES.ERROR,
        NOTIFICATIONS.MESSAGES.VALIDATION_ERROR + err.response.data.messages.join('\n'))
      )
    } else if (err.response.status === 404) {
      return dispatch(setNotification(
        NOTIFICATIONS.TYPES.ERROR,
        NOTIFICATIONS.MESSAGES.MOVIE_NOT_FOUND)
      )
    }
  }
  dispatch(setNotification(NOTIFICATIONS.TYPES.ERROR, NOTIFICATIONS.MESSAGES.INTERNAL_ERROR))
}