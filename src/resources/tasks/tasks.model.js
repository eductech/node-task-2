const { v4: uuid } = require('uuid');

/**
 * Class representing a task.
 */
class Task {
  /**
   * Create a task.
   * @param {string} id - unique instance id.
   * @param {string} title - task title.
   * @param {number} order - task order in the column.
   * @param {string} description - task description.
   * @param {string} userId - task owner id.
   * @param {string} boardId - task bord id.
   * @param {string} columnId - task column id.
   */
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

  /**
   * Convert request payload to task object.
   * @param {object} data - Object payload that represents task input from client.
   * @return {Task} A Task object.
   */
  static fromRequest(data) {
    return new Task(data);
  }

  /**
   * Convert task instance to object that could be used as response payload.
   * @param {Task} task - Task instance.
   * @return {Task} Task instance.
   */
  static toResponse(task) {
    return task;
  }

  /**
   * Convert task instance to object that could be stored in db.
   * @param {Task} task - Task instance.
   * @return {Task} Task instance.
   */
  static toDb(task) {
    return task;
  }
}

module.exports = Task;
