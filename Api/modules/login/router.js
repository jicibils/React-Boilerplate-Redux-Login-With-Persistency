var express = require('express');
var router = express.Router();
var _login = require('./login.js');

// middleware that is specific to this router
// router.use(function timeLog(req, res, next) {
//   console.log('User Time: ', Date.now());
// _tokenCheck.tokenCheck(req, res, next);
// });

// Confirm User Login
router.post('/confirmUser', _login.confirmUser);

module.exports = router;
