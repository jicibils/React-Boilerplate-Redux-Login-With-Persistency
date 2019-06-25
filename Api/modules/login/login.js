// const { db } = require('../../config/db_connection');
const jwt = require('jsonwebtoken');
let config = require('../../config');
const bcrypt = require('bcrypt');
const saltRounds = 12;
const mockedPassword = 'admin';
const mockedEmail = 'admin';

// When you add a user in the DB the password has to be encrypted like this
const getEncryptedDBPassword = () =>
  bcrypt.hash(mockedPassword, saltRounds).then(
    hash =>
      // Store hash in your password DB.
      hash
  );

const getComparePasswordsResult = (password, passwordDBEncrypted) =>
  bcrypt.compare(password, passwordDBEncrypted).then(res => res);

/**
 * mockedEmail && passwordDBEncrypted should be the data get from DB
 */
const confirmUser = async (req, res) => {
  const { email, password } = req.body;
  const passwordDBEncrypted = await getEncryptedDBPassword();
  // Load hash from your password DB.
  const comparePasswordsResult = await getComparePasswordsResult(
    password,
    passwordDBEncrypted
  );
  //userData should be the User from DB
  const userData = { email };
  if (comparePasswordsResult && email === mockedEmail) {
    let token = jwt.sign({ email }, config.jwt.secretKey, {
      expiresIn: '24h' // expires in 24 hours
    });
    // return the JWT token for the future API calls
    res.status(200).json({
      type: 'AuthSuccess',
      message: 'Successful authentication',
      userData,
      token
    });
  } else
    res
      .status(200)
      .json({ type: 'AuthFailure', message: 'Email or Password are wrong' });
};

module.exports = {
  confirmUser
};
