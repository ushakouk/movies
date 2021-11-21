import { app } from "../../../../src/store/reducer/parts";
import { login, logout, setIsLoading, setNotification, removeNotification } from '../../../../src/store/actions/app';
import { NOTIFICATIONS } from "../../../../src/store/constants/constants";

describe('App reducer', () => {
  const EXPECTED_INITIAL_STATE = {
    isAuth: false,
    isLoading: false,
    notification: null
  }

  let state;

  test('init', () => {
    state = app()
    expect(state).toEqual(EXPECTED_INITIAL_STATE);
  })

  test('log in/out', () => {
    state = app(state, login("login", "password"))
    expect(state.isAuth).toEqual(true)

    state = app(state, logout())
    expect(state.isAuth).toEqual(false)
  })

  test('set is loading', () => {
    state = app(state, setIsLoading(true))
    expect(state.isLoading).toEqual(true)

    state = app(state, setIsLoading(false))
    expect(state.isLoading).toEqual(false)
  })

  test('set/remove notification', () => {
    state = app(state, setNotification(NOTIFICATIONS.TYPES.ERROR, NOTIFICATIONS.MESSAGES.INTERNAL_ERROR))
    expect(state.notification.type).toEqual(NOTIFICATIONS.TYPES.ERROR)
    expect(state.notification.message).toEqual(NOTIFICATIONS.MESSAGES.INTERNAL_ERROR)
    
    state = app(state, removeNotification())
    expect(state.notification).toEqual(null)
  })
})