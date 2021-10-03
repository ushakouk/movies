import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../store/actions/app';
import Home from './home/Home';
import Login from './login/Login';
import ErrorBoundary from './error/ErrorBoundary';
import './App.scss';

function App({ isAuth, login }) {
  
  return (
    <ErrorBoundary >
      {isAuth
        ? <Home />
        : <Login login={login} />
      }
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
