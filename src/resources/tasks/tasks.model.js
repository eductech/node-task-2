const { v4: uuid } = require('uuid');

class Task {
  constructor({
    id = uuid(),
    title = id,
    order = NaN,
    description = '',
    userId,
    boardId,
    columnId,
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  static fromRequest(data) {
    return new Task(data);
  }

  static toResponse(task) {
    return task;
  }

  static toDb(task) {
    return task;
  }
}

module.exports = Task;
