import 'isomorphic-fetch';
import 'babel-polyfill';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import Home from '../pages/home/Home';
import ErrorBoundary from './error/ErrorBoundary';
import NotFound from '../pages/error/NotFound';
import './Root.scss';

function Root({ Router, location, context, store }) {
  return (
    <ErrorBoundary >
      <Provider store={store} >
        <Router location={location} context={context}>
          <Switch>
            <Route exact path="/">
              <Redirect to="/search" />
            </Route>
            <Route path="/search/:searchQuery?">
              <Home />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </Provider >
    </ErrorBoundary>
  )
}

export default hot(module)(Root);
