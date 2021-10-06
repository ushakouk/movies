import { ACTIONS, MODALS } from '../../constants/constants';

const initialState = {
  modal: null,
  movie: null
}

export const modal = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.CREATE_OR_EDIT_MOVIE_MODAL:
      return { ...state, modal: MODALS.CREATE_OR_EDIT_MOVIE, movie: action.payload }
    case ACTIONS.DELETE_MOVIE_MODAL:
      return { ...state, modal: MODALS.CONFIRM_DELETE_MOVIE, movie: { id: action.payload } }
    case ACTIONS.CLOSE_MODAL:
      return { ...initialState }
    default:
      return {...state}
  }
}