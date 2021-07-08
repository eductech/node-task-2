import { v4 as uuid } from 'uuid';

import { Task as TaskEntity } from './Task';

interface Params {
  id: string;
  title: string;
  order: number;
  description: string;
  userId?: TaskEntity['userId'];
  boardId: TaskEntity['boardId'];
  columnId?: TaskEntity['columnId'];
}

class Task {
  id: string;

  title: string;

  order: number;

  description: string;

  userId?: TaskEntity['userId'];

  boardId: TaskEntity['boardId'];

  columnId?: TaskEntity['columnId'];

  constructor(
    {
      id = uuid(),
      title = id,
      order = NaN,
      description = '',
      userId,
      boardId,
      columnId,
    }: Params = {} as Params
  ) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  static fromRequest(data: Task) {
    return new Task(data);
  }

  static toResponse(task: Task) {
    return task;
  }

  static toDb(task: Task) {
    return task;
  }
}

export default Task;
