export const HEADER_MODES = {
  SEARCH_MOVIES: 'SEARCH_MOVIES',
  MOVIE_DETAILS: 'MOVIE_DETAILS'
}

export const NOTIFICATIONS = {
  TYPES: {
    SUCCESS: 'success',
    ERROR: 'error'
  },
  MESSAGES: {
    MOVIE_CREATED: "The movie has been added to database successfully",
    MOVIE_UPDATED: "The movie has been updated successfully",
    MOVIE_REMOVED: "The movie has been removed successfully",
    VALIDATION_ERROR: "Validation errors:\n",
    MOVIE_NOT_FOUND: "Movie not found",
    INTERNAL_ERROR: "Something wrong..."
  }
}

export const MODALS = {
  CREATE_OR_EDIT_MOVIE: 'CREATE_OR_EDIT_MOVIE',
  CONFIRM_DELETE_MOVIE: 'CONFIRM_DELETE_MOVIE'
}

export const SORTES = {
  RATING: { name: "RATING", value: "vote_average" },
  RELEASE_DATE: { name: "RELEASE DATE", value: "release_date" }
}

export const GENRES = {
  ALL: 'ALL',
  DOCUMENTARY: 'DOCUMENTARY',
  COMEDY: 'COMEDY',
  HORROR: 'HORROR',
  CRIME: 'CRIME'
}

export const API = {
  LOAD_LIMIT: 25,
  SEARCH_BY: 'title',
  SORT_ORDER: 'desc'
}

export const ACTIONS = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGIUT",
  SET_IS_LOADING: "SET_IS_LOADING",
  SET_NOTIFICATION: "SHOW_NOTIFICATION",
  REMOVE_NOTIFICATION: "REMOVE_NOTIFICATION",

  SHOW_MOVIE_DETAILS: "SHOW_MOVIE_DETAILS",
  TO_SEARCH_MODE: "TO_SEARCH_MODE",
  SET_SEARCH_VALUE: "SET_SEARCH_VALUE",

  CREATE_OR_EDIT_MOVIE_MODAL: "CREATE_OR_EDIT_MOVIE_MODAL",
  DELETE_MOVIE_MODAL: "DELETE_MOVIE_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",

  SET_MOVIES: "SET_MOVIES",
  ADD_MOVIES: "ADD_MOVIES",
  SET_FILTER: "SET_FILTER",
  SET_SORT: "SET_SORT",
  ADD_MOVIE: "ADD_MOVIE",
  UPDATE_MOVIE: "UPDATE_MOVIE",
  REMOVE_MOVIE: "REMOVE_MOVIE"
}
