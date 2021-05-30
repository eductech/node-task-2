const boardsRepo = require('./boards.memory.repository');
const Board = require('./boards.model');

const getAll = () => boardsRepo.getAll();

const getById = (boardId) => boardsRepo.getById(boardId);

const create = (board) => boardsRepo.create(Board.toDb(board));

const remove = (boardId) => boardsRepo.delete(boardId);

const update = (user) => boardsRepo.update(Board.toDb(user));

module.exports = { getAll, create, delete: remove, getById, update };
