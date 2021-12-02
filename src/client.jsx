import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Root from './components/Root';
import { configureStore } from '../src/store/store';

const store = configureStore(window.PRELOADED_STATE);

const root = (
  <Root
    Router={BrowserRouter}
    store={store}
  />
);

hydrate(root, document.getElementById('root'));
