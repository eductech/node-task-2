import * as dotenv from 'dotenv';
import * as path from 'path';

const parseBoolean = (env: string) => env === 'true';

dotenv.config({
  path: path.join(__dirname, '../../.env'),
});

const {
  PORT,
  MONGO_CONNECTION_STRING,
  JWT_SECRET_KEY,
  AUTH_MODE: AUTH_MODE_ENV,
  NODE_ENV,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB_USERNAME,
  DB_PASSWORD,
  USE_FASTIFY: USE_FASTIFY_ENV,
} = process.env;

const AUTH_MODE = parseBoolean(AUTH_MODE_ENV);
const USE_FASTIFY = parseBoolean(USE_FASTIFY_ENV);

export {
  PORT,
  NODE_ENV,
  MONGO_CONNECTION_STRING,
  JWT_SECRET_KEY,
  AUTH_MODE,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB_USERNAME,
  DB_PASSWORD,
  USE_FASTIFY,
};
