const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const Login = require('./modules/login/router.js');
const Example = require('./modules/example/router.js');

const config = require('./config');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   );
//   next();
// });

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true
  })
);

app.use(express.static('data'));

//Routers
app.use('/login', Login);

app.use('/example', Example);

// web server
app.listen(config.serverPort, () =>
  console.log(
    `\n[API-React Boilerplate] Web server listening on port ${
      config.serverPort
    }!`
  )
);
