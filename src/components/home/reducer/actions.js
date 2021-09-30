var dispatch;

export const ACTIONS = {
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

export function setDispatcher(dispatcher) {
  dispatch = dispatcher;
}

export function setMovies(movies) {
  dispatch({ type: ACTIONS.INIT_MOVIES, payload: movies })
}

export function showMovieDetails(movie) {
  dispatch({ type: ACTIONS.SHOW_MOVIE_DETAILS, payload: movie })
}

export function searchMode() {
  dispatch({ type: ACTIONS.TO_SEARCH_MODE })
}

export function addMovie() {
  dispatch({ type: ACTIONS.ADD_MOVIE })
}

export function editMovie(movie) {
  dispatch({ type: ACTIONS.EDIT_MOVIE, payload: movie })
}

export function submitMovie(movie) {
  dispatch({ type: ACTIONS.SUBMIT_MOVIE, payload: movie })
}

export function deleteMovie(movie) {
  dispatch({ type: ACTIONS.DELETE_MOVIE, payload: movie })
}

export function confirmDeleteMovie(id) {
  dispatch({ type: ACTIONS.CONFIRM_DELETE_MOVIE, payload: id })
}

export function closeModal() {
  dispatch({ type: ACTIONS.CLOSE_MODAL })
}

