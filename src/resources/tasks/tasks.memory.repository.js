const { db } = require('../inMemoryDb');

const getAll = async () => db.tasks;

const getById = async (taskId) => {
  const task = await db.read(taskId, 'tasks');
  return task;
};

const getByBoardId = async (boardId) => {
  const tasks = await getAll();
  return tasks.filter(({ boardId: taskBoardId }) => taskBoardId === boardId);
};

const create = async (task) => {
  await db.create(task, 'tasks');
};

const remove = async (taskId) => {
  await db.delete(taskId, 'tasks');
};

const deleteByBoardId = async (boardId) => {
  const tasks = await getAll();

  db.tasks = tasks.filter(({ boardId: taskBoardId }) => taskBoardId !== boardId);
};

const update = async (task) => {
  await db.update(task, 'tasks');
};

const resetUserLink = async (userId) => {
  const tasks = await getAll();

  tasks.forEach((task) => {
    if (userId === task.userId) {
      db.update({ ...task, userId: null }, 'tasks');
    };
  });
};

module.exports = { getAll, getByBoardId, create, delete: remove, getById, update, deleteByBoardId, resetUserLink };
