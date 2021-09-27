import React from 'react';
import Home from './home/Home';
import Login from './login/Login';
import ErrorPage from './error/ErrorPage';
import './App.scss';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isAuth: false,
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    //log(error, errorInfo);
  }

  login(login, password) {
    this.setState({ isAuth: true });
  }

  logout() {
    this.setState({ isAuth: false });
  }

  render() {
    const { hasError, isAuth } = this.state;
    if (!hasError) {
      return isAuth
        ? <Home logout={() => this.logout()}/>
        : <Login login={(login, password) => this.login(login, password)}/>
    } else {
      return <ErrorPage />
    }
  }
}

export default App;
