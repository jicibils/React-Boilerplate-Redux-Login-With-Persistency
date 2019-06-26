// Catch errors thrown by its children components and render a message for user
import React, { Component } from 'react';
import { Button } from '@material-ui/core';

class ErrorBoundary extends Component {
  state = {
    hasError: false
  };

  componentDidCatch(error, info) {
    console.log('ErrorBoundary -> error', error);
    this.setState({ hasError: true });
  }

  refreshPage = () => {
    if (window !== undefined) {
      window.location = '/';
    }
  };

  renderErrorBoundaryContent = () => (
    <div style={{ marginTop: 200 }}>
      <h1>{'Oops! Something Went Wrong'}</h1>
      <h3>{`But don't worry, you can try to reload the page`}</h3>
      <Button variant="outlined" color="primary" onClick={this.refreshPage}>
        Refresh
      </Button>
    </div>
  );

  render() {
    return !this.state.hasError
      ? this.props.children
      : this.renderErrorBoundaryContent();
  }
}

export default ErrorBoundary;
