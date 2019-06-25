import React from 'react';
import PageOneComponent from 'components/Example/PageOneComponent';
import { getHelloWorld } from 'api/services/example';

class PageOneContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
  }

  async componentDidMount() {
    const helloWorld = await getHelloWorld();
    this.setState({ message: helloWorld.data.message });
  }

  render() {
    return <PageOneComponent message={this.state.message} />;
  }
}

export default PageOneContainer;
