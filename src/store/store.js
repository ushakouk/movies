import { compose, createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducer/root';
import thunk from 'redux-thunk';

const enhancers = compose(
    applyMiddleware(thunk)
);

export const store = createStore(rootReducer, enhancers);