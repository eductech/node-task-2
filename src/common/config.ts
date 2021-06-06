import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.join(__dirname, '../../.env')
});

const { PORT, MONGO_CONNECTION_STRING, JWT_SECRET_KEY, AUTH_MODE: AUTH_MODE_ENV, NODE_ENV } = process.env;
const AUTH_MODE = AUTH_MODE_ENV === 'true';

export {
  PORT,
  NODE_ENV,
  MONGO_CONNECTION_STRING,
  JWT_SECRET_KEY,
  AUTH_MODE,
};
