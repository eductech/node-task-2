import { ConnectionOptions } from 'typeorm';

import { User } from './src/resources/users/entities/user.entity';
import { Board } from './src/resources/boards/entities/board.entity';
import { Column } from './src/resources/boards/entities/column.entity';
import { Task } from './src/resources/tasks/entities/task.entity';

import {
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB_USERNAME,
  DB_PASSWORD,
} from './src/common/config';

const config: ConnectionOptions = {
  type: 'postgres',
  synchronize: true,
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  entities: [User, Board, Column, Task],
  migrations: ['src/migration/*.ts'],
  cli: {
    migrationsDir: 'src/migration',
  },
};

export default config;
