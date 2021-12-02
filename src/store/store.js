import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducer/root';
import thunk from 'redux-thunk';

export const configureStore = (initialState) =>
  createStore(rootReducer, initialState, applyMiddleware(thunk));