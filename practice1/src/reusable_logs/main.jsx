// IMPORTANT - Logs will be called 3 times in development mode due to React Strict Mode
import React, { Component } from 'react';

// Dummy task function
function log_something() {
  console.log("Something");
}

// React functional component
export function AF(props) {
  return <div></div>;
}

// React class component
export class AC extends Component {
  componentDidMount() {
    log_something();
  }

  componentWillUnmount() {
    log_something();
  }

  render() {
    return <div></div>;
  }
}

export class BC extends Component {
  componentDidMount() {
    log_something();
  }

  componentWillUnmount() {
    log_something();
  }

  render() {
    return <div></div>;
  }
}
export class CC extends Component {
  componentDidMount() {
    log_something();
  }

  componentWillUnmount() {
    log_something();
  }

  render() {
    return <div></div>;
  }
}