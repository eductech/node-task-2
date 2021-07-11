import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { User } from '../../users/entities/user.entity';
import { Board } from '../../boards/entities/board.entity';
import { Column as ColumnEntity } from '../../boards/entities/column.entity';

@Entity({ name: 'task' })
class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  title: string;

  @Column('integer')
  order: number;

  @Column('varchar')
  description: string;

  @ManyToOne(() => User, (user) => user.tasks, {
    onDelete: 'SET NULL',
  })
  userId?: User | string;

  @ManyToOne(() => Board, (board) => board.tasks, {
    onDelete: 'CASCADE',
  })
  boardId: Board | string;

  @ManyToOne(() => ColumnEntity, (column) => column.tasks, {
    onDelete: 'CASCADE',
  })
  columnId?: ColumnEntity | string;
}

export { Task };
