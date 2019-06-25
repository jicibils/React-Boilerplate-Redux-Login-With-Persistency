import React from 'react';
import HeaderComponent from 'components/Header/HeaderComponent';
// REDUX
import { signout } from 'reduxActions/reducers/authReducer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSignout = () => {
    const { signout } = this.props;
    signout();
  };

  render() {
    return <HeaderComponent onSignout={this.onSignout} />;
  }
}

const mapStateToProps = store => ({
  user: store.auth.user
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      signout
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);
