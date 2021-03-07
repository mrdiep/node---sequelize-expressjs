import express from 'express';
import routes from '../routes';
import logger from './logger';
import expressWinston from 'express-winston';
import winston from 'winston';
import pageNotFoundHandler from './pageNotFoundHandler';

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');

// / create server base on the express js library
const server = express();
server.use(express.json());
server.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
// sample code for used of middleware.
// do not code like this, this is just example of middlware. import from the other modules
server.use((req, res, next) => {
  console.log(req.url);
  next();
});

server.use(logger);

server.use('/api', routes);
server.use(pageNotFoundHandler);
server.use(expressWinston.errorLogger({
  transports: [
    new winston.transports.Console({
      json: true,
      colorize: true,
    }),
  ],
}));
// global catch error
// do not code like this. use the external with injectable logger
server.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    'errors': {
      message: err.message,
      error: {},
    },
  });

  next();
});

export default server;
