import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { login } from '../store/actions/app';
import Home from './home/Home';
import ErrorBoundary from './error/ErrorBoundary';
import NotFound from './error/pages/NotFound';
import './App.scss';

function App({ isAuth, login }) {
  
  return (
    <ErrorBoundary >
      <Router>
        <Switch>
          <Route path="/search/:searchQuery?">
            <Home />
          </Route>
          <Route exact path="/">
            <Redirect to="/search" />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </ErrorBoundary>
  )
}


const mapStateToProps = ({ app }) => ({
  isAuth: app.isAuth
});

const mapDispatchToProps = dispatch => ({
  login: bindActionCreators(login, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
