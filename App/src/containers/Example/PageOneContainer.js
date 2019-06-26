import React from 'react';
import PageOneComponent from 'components/Example/PageOneComponent';

class PageOneContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <PageOneComponent />;
  }
}

export default PageOneContainer;
