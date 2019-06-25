import React from 'react';

class PageOneComponent extends React.Component {
  render() {
    return (
      <div style={{ marginTop: 150 }}>
        <h1>Page One</h1>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h5>{this.props.message}</h5>
      </div>
    );
  }
}

export default PageOneComponent;
