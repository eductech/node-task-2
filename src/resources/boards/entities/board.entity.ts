import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { Task } from '../../tasks/entities/task.entity';

import { Column as ColumnEntity } from './column.entity';

@Entity({ name: 'board' })
class Board {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  title: string;

  @OneToMany(() => ColumnEntity, (column) => column.board, {
    eager: true,
    cascade: true,
  })
  columns: ColumnEntity[];

  @OneToMany(() => Task, (task) => task.userId, {
    eager: true,
    cascade: true,
  })
  tasks?: Task[];
}

export { Board };
