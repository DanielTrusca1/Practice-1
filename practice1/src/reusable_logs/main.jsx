// IMPORTANT - Logs will be called 3 times in development mode due to React Strict Mode
import React, { Component } from "react";

// Dummy task function
function log_something(msg) {
  console.log(msg);
}

// React functional component
export function AF(props) {
  return <div></div>;
}

// React class component
export class AC extends Component {
  render() {
    return <div></div>;
  }
}

export class BC extends Component {
  render() {
    return <div></div>;
  }
}
export class CC extends Component {
  render() {
    return <div></div>;
  }
}

// Higher-Order Component (HOC) Decorator
function with_logging(WrappedComponent) {
  return class extends Component {
    componentDidMount() {
      log_something(`${WrappedComponent.name} mounted`);
    }

    componentWillUnmount() {
      log_something(`${WrappedComponent.name} unmounted`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

export const LoggedAC = with_logging(AC);
export const LoggedBC = with_logging(BC);
export const LoggedCC = with_logging(CC);

