import React, { Component } from "react";

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  // is like the trycatch block in javascript
  // if any error goes out, it will run this life cicly hook
  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oooops. That is not good. We sorry :(</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundry;
