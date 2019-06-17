import React from 'react';
import HeaderContainer from 'containers/Header/HeaderContainer';
import RootRoutes from 'routes/rootRoutes';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <RootRoutes />
      </div>
    );
  }
}

export default App;
