import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from 'containers/Login/LoginContainer';
import UserRoutes from 'routes/userRoutes';
import get from 'lodash/get';

// REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//this function is to put whatever route for everyone like policy privacy
// const getUniversalRoutes = () => {};

class rootRoutes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return get(this.props, 'isAuthed', false) ? (
      <div>
        <Switch>
          {/* {getUniversalRoutes()} */}
          <UserRoutes />
        </Switch>
      </div>
    ) : (
      <Switch>
        {/* {getUniversalRoutes()} */}
        <Route exact path="/" component={Login} />;
      </Switch>
    );
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
)(rootRoutes);
