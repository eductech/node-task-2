import express from 'express';
import swaggerUI from 'swagger-ui-express';
import path from 'path';
import YAML from 'yamljs';

import userRouter from './resources/users/user.router';
import boardsRouter from './resources/boards/boards.router';
import tasksRouter from './resources/tasks/tasks.router';
import loginRouter from './resources/login/login.router';
import { logger, stream } from './services/logger';
import { morgan } from './services/morgan';
import { errorsHandler } from './services/errorsHandler';
import { validateSession } from './services/validateSession';

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use(morgan(':method :url :status :body :query', { stream }));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/login', loginRouter);

app.use(validateSession);

app.use('/users', userRouter);
app.use('/boards', boardsRouter);
app.use('/boards/:boardId/tasks', tasksRouter);

// errors
app.use(errorsHandler);

process.on('uncaughtException', (error) => {
  logger.error(`captured error: ${error.message}`);
});

process.on('unhandledRejection', (reason) => {
  logger.error(`Unhandled rejection detected: ${JSON.stringify(reason)}`);
});

export {
  app
};
