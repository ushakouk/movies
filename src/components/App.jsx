import React from 'react';
import Home from './home/Home';
import Login from './login/Login';
import ErrorPage from './error/ErrorPage';
import './App.scss';

const UNAUTHORIZED = 'unauthorized';
const AUTHORIZED = 'authorized';
const ERROR = 'error';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = UNAUTHORIZED;
  }

  static getDerivedStateFromError(error) {
    return ERROR;
  }

  componentDidCatch(error, errorInfo) {
    //log(error, errorInfo);
  }

  render() {
    switch (this.state) {
      case AUTHORIZED:
        return <Home />
      case UNAUTHORIZED:
        return <Login />
      case ERROR:
      default:
        return <ErrorPage />
    }
  }
}

export default App;
