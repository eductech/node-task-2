import { getConnection, createConnection } from 'typeorm';

import { logger } from './logger';
import config from '../common/ormconfig';

const connectToDatabase = async () => {
  let connection;

  try {
    connection = getConnection();
  } catch (error) {
    logger.error('Get connection error', error);
  }

  try {
    if (connection) {
      if (!connection.isConnected) {
        await connection.connect();
      }
    } else {
      await createConnection(config);
    }

    logger.info('Database connected');
  } catch (error) {
    logger.error('Database connection error', error);
  }
};

export { connectToDatabase };
