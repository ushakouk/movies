import { combineReducers } from 'redux';
import { app, header, content, modal } from './parts';

export const rootReducer = combineReducers({
    header,
    content,
    modal,
    app
})