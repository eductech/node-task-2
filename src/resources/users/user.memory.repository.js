/** @module user/repository */
const { db } = require('../inMemoryDb');
const tasksRepo = require('../tasks/tasks.memory.repository');

/**
 * Query all users from db.
 * @return {Promise<User[]>} list of users.
 */
const getAll = async () => db.users;

/**
 * Query certain user by id.
 * @param {string} userId - user id to get data from.
 * @return {Promise<User>} user data object.
 */
const getById = async (userId) => {
  const user = await db.read(userId, 'users');
  return user;
};

/**
 * Stores user data in database.
 * @param {User} user - user object.
 * @return {Promise<void>} promise that resolves when data recorded.
 */
const create = async (user) => {
  await db.create(user, 'users');
};

/**
 * Deletes user data from database. Also removes link from all the tasks
 * related to current user.
 * @param {string} userId - user id to delete.
 * @return {Promise<void>} promise that resolves when data deleted.
 */
const remove = async (userId) => {
  await db.delete(userId, 'users');
  await tasksRepo.resetUserLink(userId);
};

/**
 * Updates user data in database.
 * @param {User} user - user object.
 * @return {Promise<void>} promise that resolves when data updated.
 */
const update = async (user) => {
  await db.update(user, 'users');
};

module.exports = { getAll, getById, create, delete: remove, update };
