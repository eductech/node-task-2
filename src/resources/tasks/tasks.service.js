const tasksRepo = require('./tasks.memory.repository');
const Task = require('./tasks.model');

const getAll = () => tasksRepo.getAll();

const getByBoardId = (boardId) => tasksRepo.getByBoardId(boardId);

const getById = (taskId) => tasksRepo.getById(taskId);

const create = (task) => tasksRepo.create(Task.toDb(task));

const remove = (taskId) => tasksRepo.delete(taskId);

const update = (user) => tasksRepo.update(Task.toDb(user));

module.exports = { getAll, getByBoardId, create, delete: remove, getById, update };
