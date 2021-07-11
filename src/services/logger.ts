import * as appRoot from 'app-root-path';
import { createLogger, format, transports } from 'winston';

const logger = createLogger({
  level: 'silly',
  format: format.combine(format.colorize(), format.cli()),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: `${appRoot}/logs/error.log`,
      level: 'error',
      format: format.combine(format.uncolorize(), format.json()),
    }),
    new transports.File({
      filename: `${appRoot}/logs/info.log`,
      level: 'info',
      format: format.combine(format.uncolorize(), format.json()),
      maxsize: 5242880,
      maxFiles: 5,
    }),
  ],
});

const stream = {
  write: (message: string) => {
    // use the 'info' log level so the output will be picked up by both transports (file and console)
    logger.info(message);
  },
};

export { logger, stream };
