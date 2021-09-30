import React from 'react'
import ErrorPage from './error_page/ErrorPage';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  static componentDidCatch(error, errorInfo) {
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