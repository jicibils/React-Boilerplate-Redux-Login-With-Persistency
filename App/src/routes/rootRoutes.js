import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'containers/Home/HomeContainer';
import Login from 'containers/Login/LoginContainer';
import HeaderContainer from 'containers/Header/HeaderContainer';
import PageOne from 'containers/Example/PageOneContainer';
import PageTwo from 'containers/Example/PageTwoContainer';
import get from 'lodash/get';

// REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const universalRoutes = () => <Route exact path="/" component={Login} />;

const userRoutes = () => (
  <main>
    <HeaderContainer />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/pageOne" component={PageOne} />
      <Route path="/pageTwo" component={PageTwo} />
    </Switch>
  </main>
);

class rootRoutes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return get(this.props, 'isLogged', false)
      ? userRoutes()
      : universalRoutes();
  }
}

const mapStateToProps = store => ({
  user: store.auth.user,
  isLogged: store.auth.isLogged
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(rootRoutes);
