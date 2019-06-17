import React from 'react';
import { Link } from 'react-router-dom';

class HeaderComponent extends React.Component {
  render() {
    return (
      <header>
        <div style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ marginTop: 30 }}>
              <Link to="/">Home</Link>
            </div>
            <div style={{ marginTop: 30 }}>
              <Link to="/pageOne">Page One</Link>
            </div>
            <div style={{ marginTop: 30 }}>
              <Link to="/pageTwo">Page Two</Link>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default HeaderComponent;
