import { v4 as uuid } from 'uuid';

interface Params {
  id: string;
  title: string;
  order: number;
  description: string;
  userId: string;
  boardId: string;
  columnId: string;
}

class Task {
  id: string;

  title: string;

  order: number;

  description: string;

  userId?: string;

  boardId?: string;

  columnId?: string;

  constructor({
    id = uuid(),
    title = id,
    order = NaN,
    description = '',
    userId,
    boardId,
    columnId,
  }: Partial<Params> = {}) {
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
