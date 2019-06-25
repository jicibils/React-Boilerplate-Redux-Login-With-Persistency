import React from 'react';
import LoginComponent from 'components/Login/LoginComponent';

// REDUX
import { signin } from 'reduxActions/reducers/authReducer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = field => event => {
    this.setState({ [field]: event.target.value });
  };

  onSignin = () => {
    const { email, password } = this.state;
    const { signin } = this.props;

    signin(email, password);
  };

  render() {
    return (
      <LoginComponent
        email={this.state.email}
        password={this.state.password}
        onHandleChange={this.handleChange}
        onSignin={this.onSignin}
        errorMessage={this.props.errorMessage}
        isFetching={this.props.isFetching}
      />
    );
  }
}

const mapStateToProps = store => ({
  user: store.auth.user,
  errorMessage: store.auth.errorMessage,
  isFetching: store.auth.isFetching
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      signin
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
