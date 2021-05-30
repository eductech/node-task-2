const usersRepo = require('./user.memory.repository');
const User = require('./user.model');

const getAll = () => usersRepo.getAll();

const getById = (userId) => usersRepo.getById(userId);

const create = (user) => usersRepo.create(User.toDb(user));

const remove = (userId) => usersRepo.delete(userId);

const update = (user) => usersRepo.update(User.toDb(user));

module.exports = { getAll, getById, create, delete: remove, update };
