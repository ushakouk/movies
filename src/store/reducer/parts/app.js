import { ACTIONS } from '../../constants/constants';

const initialState = {
  isAuth: true,
  isLoading: false,
  notification: null
}

export const app = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN:
      return { ...state, isAuth: true }
    case ACTIONS.LOGOUT:
      return { ...state, isAuth: false }
    case ACTIONS.SET_IS_LOADING:
      return { ...state, isLoading: action.payload }
    case ACTIONS.SET_NOTIFICATION:
      return { ...state, notification: action.payload }
    case ACTIONS.REMOVE_NOTIFICATION:
      return { ...state, notification: null }
    default:
      return {...state}
  }
}