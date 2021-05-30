const { db } = require('../inMemoryDb');
const tasksRepo = require('../tasks/tasks.memory.repository');

const getAll = async () => db.users;

const getById = async (userId) => {
  const user = await db.read(userId, 'users');
  return user;
};

const create = async (user) => {
  await db.create(user, 'users');
};

const remove = async (userId) => {
  await db.delete(userId, 'users');
  await tasksRepo.resetUserLink(userId);
};

const update = async (user) => {
  await db.update(user, 'users');
};

module.exports = { getAll, getById, create, delete: remove, update };
