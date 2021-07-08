import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

import { Task } from '../tasks/Task';

import { Board } from './Board';

@Entity({ name: 'column' })
class ColumnEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  title = 'TITLE';

  @Column('integer')
  order: number;

  @ManyToOne(() => Board, (board) => board.columns, {
    onDelete: 'CASCADE',
  })
  board: Board[];

  @OneToMany(() => Task, (task) => task.userId, {
    eager: true,
    cascade: true,
  })
  tasks?: Task[];
}

export { ColumnEntity as Column };
