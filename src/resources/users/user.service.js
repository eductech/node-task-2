/** @module user/service */
const usersRepo = require('./user.memory.repository');
const User = require('./user.model');

/**
 * Fetches all users from db.
 * @return {Promise<User[]>} list of users.
 */
const getAll = () => usersRepo.getAll();

/**
 * Fetches certain user by id.
 * @param {string} userId - user id to get data from.
 * @return {Promise<User>} user data object.
 */
const getById = (userId) => usersRepo.getById(userId);

/**
 * Stores user data in database.
 * @param {User} user - user object.
 * @return {Promise<void>} promise that resolves when data recorded.
 */
const create = (user) => usersRepo.create(User.toDb(user));

/**
 * Deletes user data from database.
 * @param {string} userId - user id to delete.
 * @return {Promise<void>} promise that resolves when data deleted.
 */
const remove = (userId) => usersRepo.delete(userId);

/**
 * Updates user data in database.
 * @param {User} user - user object.
 * @return {Promise<void>} promise that resolves when data updated.
 */
const update = (user) => usersRepo.update(User.toDb(user));

module.exports = { getAll, getById, create, delete: remove, update };
