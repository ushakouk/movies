import React, { useState } from 'react';
import Home from './home/Home';
import Login from './login/Login';
import './App.scss';
import ErrorBoundary from './error/ErrorBoundary';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  function login(login, password) {
    setIsAuth(true);
  }

  return (
    <ErrorBoundary >
      {isAuth
        ? <Home logout={() => setIsAuth(false)} />
        : <Login login={login} />
      }
    </ErrorBoundary>
  )
}

export default App;
