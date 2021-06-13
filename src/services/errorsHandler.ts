import { ErrorRequestHandler } from 'express';
import { logger } from './logger';

// eslint-disable-next-line no-unused-vars
const errorsHandler: ErrorRequestHandler = (err, req, res, _next) => {
  logger.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);

  res.status(err.status || 500);
  res.send('something went wrong :(');
};

export { errorsHandler };
