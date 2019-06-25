import React from 'react';
import { Container, TextField, Button } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

import './Login.scss';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  }
});

class LoginComponent extends React.Component {
  render() {
    const {
      email,
      password,
      onHandleChange,
      onSignin,
      errorMessage,
      isFetching
    } = this.props;
    return (
      <Container maxWidth="sm">
        <div className={'container-css'}>
          <h1>Login</h1>
          <form className={styles.container} noValidate autoComplete="off">
            <TextField
              id="outlined-email-input"
              label="Email"
              type="email"
              name="email"
              error={!!errorMessage}
              className={styles.textField}
              autoComplete="nope"
              margin="normal"
              variant="outlined"
              value={email}
              onChange={onHandleChange('email')}
            />
            <TextField
              id="outlined-password-input"
              label="Contraseña"
              type="password"
              error={!!errorMessage}
              className={styles.textField}
              autoComplete="new-password"
              margin="normal"
              variant="outlined"
              value={password}
              onChange={onHandleChange('password')}
            />
          </form>
          {!!errorMessage && <p className={'error-message'}>{errorMessage}</p>}
          <Button
            variant="contained"
            disabled={isFetching}
            onClick={() => onSignin()}
          >
            Login
          </Button>
          {isFetching && (
            <div className={'button-progress-container'}>
              <CircularProgress size={24} className={styles.buttonProgress} />
            </div>
          )}
        </div>
      </Container>
    );
  }
}

export default LoginComponent;
