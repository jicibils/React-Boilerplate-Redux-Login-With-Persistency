var express = require('express');
var router = express.Router();
let middleware = require('../../middleware/middleware');
var _example = require('./example.js');

// example to use the middleware (checkToken)
router.get('/getHelloWorld', middleware.checkToken, _example.getHelloWorld);

module.exports = router;
