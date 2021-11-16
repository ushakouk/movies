import { combineReducers } from 'redux';
import { app, content, modal } from './parts';

export const rootReducer = combineReducers({
    content,
    modal,
    app
})