import React from 'react';

class HomeComponent extends React.Component {
  render() {
    return (
      <div style={{ marginTop: 150 }}>
        <h1>Home</h1>
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

export default HomeComponent;
