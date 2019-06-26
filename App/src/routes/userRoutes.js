import React, { Fragment } from 'react';
// import { PrivateRoute } from 'react-router-with-props';
import PrivateRoute from 'routes/PrivateRoute';
import Home from 'containers/Home/HomeContainer';
import HeaderContainer from 'containers/Header/HeaderContainer';
import PageOne from 'containers/Example/PageOneContainer';
import PageTwo from 'containers/Example/PageTwoContainer';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundaryComponent';

// REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class UserRoutes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  wrapUnderAppNavbar = elem => {
    return (
      <Fragment>
        <HeaderContainer />
        <ErrorBoundary>{elem}</ErrorBoundary>
      </Fragment>
    );
  };

  getContent = () => {
    return (
      <Fragment>
        <PrivateRoute
          path="/"
          component={Home}
          authed={this.props.isAuthed}
          exact
          redirectTo="/"
        />
        <PrivateRoute
          path="/pageOne"
          component={PageOne}
          authed={this.props.isAuthed}
          redirectTo="/"
        />
        <PrivateRoute
          path="/pageTwo"
          component={PageTwo}
          authed={this.props.isAuthed}
          redirectTo="/"
        />
      </Fragment>
    );
  };

  render() {
    const content = this.getContent();

    return this.wrapUnderAppNavbar(content);
  }
}

const mapStateToProps = store => ({
  user: store.auth.user,
  isAuthed: store.auth.isAuthed
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserRoutes);
