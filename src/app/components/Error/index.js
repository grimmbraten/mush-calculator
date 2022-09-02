import React from 'react';
import ErrorView from '~views/Error';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    return this.state.hasError ? <ErrorView /> : this.props.children;
  }
}

export default ErrorBoundary;
