import React from 'react'
import ErrorPage from '../../pages/error/ErrorPage';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  static componentDidCatch() {
    //log(error, errorInfo);
  }

  render() {
    return (!this.state.hasError
      ? this.props.children
      : <ErrorPage />
    )
  }
}

export default ErrorBoundary;