import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { User } from '../users/User';
import { Board } from '../boards/Board';
import { Column as ColumnEntity } from '../boards/Column';

@Entity({ name: 'task' })
class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  title = 'TITLE';

  @Column('integer')
  order: number;

  @Column('varchar')
  description = 'DESCRIPTION';

  @ManyToOne(() => User, (user) => user.tasks, {
    onDelete: 'SET NULL',
  })
  userId?: User;

  @ManyToOne(() => Board, (board) => board.tasks, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'boardId' })
  boardId: Board;

  @ManyToOne(() => ColumnEntity, (column) => column.tasks, {
    onDelete: 'CASCADE',
  })
  columnId?: ColumnEntity;
}

export { Task };
