const express = require('express');
const morgan = require('morgan');
const session = require('express-session');

const sso = require('./eyanoapp-sso');
const app = express();

app.use(
  session({
    secret : 'keyboard cat',
    resave : false,
    saveUninitialized : true,
  }),
);

app.use(express.urlencoded({ extended : true }));
app.use(express.json());
app.use(morgan('dev'));

app.use(sso({
  sso_server : process.env.EYANOAPP_SSO_SERVER,
  app_token : process.env.EYANOAPP_APP_TOKEN,
}));

app.use(express.static('./build/'))

app.use((req, res, next) => {
  // catch 404 and forward to error handler
  const err = new Error('Resource Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res) => {
  const statusCode = err.status || 500;
  let message = err.message || 'Internal Server Error';

  if (statusCode === 500) {
    message = 'Internal Server Error';
  }
  res.status(statusCode).json({ message });
});

module.exports = app;