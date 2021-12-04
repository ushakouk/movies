import { ACTIONS } from '../constants/constants';

export const login = () => ({
  type: ACTIONS.LOGIN
})

export const logout = () => ({
  type: ACTIONS.LOGOUT
})

export const setIsLoading = (isLoading) => ({
  type: ACTIONS.SET_IS_LOADING,
  payload: isLoading
})

export const setNotification = (type, message) => ({
  type: ACTIONS.SET_NOTIFICATION,
  payload: { type, message }
})

export const removeNotification = () => ({
  type: ACTIONS.REMOVE_NOTIFICATION
})
