const { db } = require('../inMemoryDb');

const getAll = async () => db.boards;

const getById = async (boardId) => {
  const board = await db.read(boardId, 'boards');
  return board;
};

const create = async (board) => {
  await db.create(board, 'boards');
};

const remove = async (boardId) => {
  await db.delete(boardId, 'boards');
};

const update = async (board) => {
  await db.update(board, 'boards');
};

module.exports = { getAll, create, delete: remove, getById, update };
