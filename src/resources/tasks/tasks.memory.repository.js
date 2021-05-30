/** @module task/repository */
const { db } = require('../inMemoryDb');

/**
 * Query all tasks from db.
 * @return {Promise<Task[]>} list of tasks.
 */
const getAll = async () => db.tasks;

/**
 * Query certain task by id.
 * @param {string} taskId - task id to get data from.
 * @return {Promise<Task>} task data object.
 */
const getById = async (taskId) => {
  const task = await db.read(taskId, 'tasks');
  return task;
};

/**
 * Query tasks related to specific board from db.
 * @param {string} boardId - board to fetch tasks from.
 * @return {Promise<Task[]>} list of tasks.
 */
const getByBoardId = async (boardId) => {
  const tasks = await getAll();
  return tasks.filter(({ boardId: taskBoardId }) => taskBoardId === boardId);
};

/**
 * Stores task data in database.
 * @param {Task} task - task object.
 * @return {Promise<void>} promise that resolves when data recorded.
 */
const create = async (task) => {
  await db.create(task, 'tasks');
};

/**
 * Deletes task data from database.
 * @param {string} taskId - task id to delete.
 * @return {Promise<void>} promise that resolves when data deleted.
 */
const remove = async (taskId) => {
  await db.delete(taskId, 'tasks');
};

/**
 * Deletes tasks data from database related to specific board.
 * @param {string} boardId - board id.
 * @return {Promise<void>} promise that resolves when data deleted.
 */
const deleteByBoardId = async (boardId) => {
  const tasks = await getAll();

  db.tasks = tasks.filter(({ boardId: taskBoardId }) => taskBoardId !== boardId);
};

/**
 * Updates task data in database.
 * @param {Task} task - task object.
 * @return {Promise<void>} promise that resolves when data updated.
 */
const update = async (task) => {
  await db.update(task, 'tasks');
};

/**
 * Removes user link from all task associated with him.
 * @param {string} userId - user id.
 * @return {Promise<void>} promise that resolves when links data was finally reset.
 */
const resetUserLink = async (userId) => {
  const tasks = await getAll();

  tasks.forEach((task) => {
    if (userId === task.userId) {
      db.update({ ...task, userId: null }, 'tasks');
    };
  });
};

module.exports = { getAll, getByBoardId, create, delete: remove, getById, update, deleteByBoardId, resetUserLink };
