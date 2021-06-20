import { ConnectionOptions } from 'typeorm';

import { User } from '../resources/users/User';
import { Board } from '../resources/boards/Board';
import { Column } from '../resources/boards/Column';
import { Task } from '../resources/tasks/Task';

import {
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB_USERNAME,
  DB_PASSWORD,
} from './config';

export const config: ConnectionOptions = {
  type: 'postgres',
  synchronize: true,
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  entities: [User, Board, Column, Task],
  // autoReconnect: true,
  // reconnectTries: Number.MAX_VALUE,
  // reconnectionInterval: 1000,
};