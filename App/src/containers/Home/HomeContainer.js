import React from 'react';
import HomeComponent from 'components/Home/HomeComponent';
import { getHelloWorld } from 'api/services/example';

class HomeContainer extends React.Component {
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
    return <HomeComponent message={this.state.message} />;
  }
}

export default HomeContainer;
