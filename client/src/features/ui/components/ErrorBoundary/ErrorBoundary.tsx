import { Component } from 'react';

class ErrorBoundary extends Component {
  state = { isError: false };

  static getDerivedStateFromError() {
    return { isError: true };
  }
  
  render() {
    if(this.state.isError)
      return <h1>Oh no... error! Please, refresh!</h1>;

    return this.props.children;
  }
}

export { ErrorBoundary };