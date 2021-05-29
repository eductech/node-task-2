/** @module task/service */
const tasksRepo = require('./tasks.memory.repository');
const Task = require('./tasks.model');

/**
 * Fetches all tasks from db.
 * @return {Promise<Task[]>} list of tasks.
 */
const getAll = () => tasksRepo.getAll();

/**
 * Fetches tasks related to specific board from db.
 * @param {string} boardId - board to fetch tasks from.
 * @return {Promise<Task[]>} list of tasks.
 */
const getByBoardId = (boardId) => tasksRepo.getByBoardId(boardId);

/**
 * Fetches certain task by id.
 * @param {string} taskId - task id to get data from.
 * @return {Promise<Task>} task data object.
 */
const getById = (taskId) => tasksRepo.getById(taskId);

/**
 * Stores task data in database.
 * @param {Task} task - task object.
 * @return {Promise<void>} promise that resolves when data recorded.
 */
const create = (task) => tasksRepo.create(Task.toDb(task));

/**
 * Deletes task data from database.
 * @param {string} taskId - task id to delete.
 * @return {Promise<void>} promise that resolves when data deleted.
 */
const remove = (taskId) => tasksRepo.delete(taskId);

/**
 * Updates task data in database.
 * @param {Task} task - task object.
 * @return {Promise<void>} promise that resolves when data updated.
 */
const update = (task) => tasksRepo.update(Task.toDb(task));

module.exports = { getAll, getByBoardId, create, delete: remove, getById, update };
