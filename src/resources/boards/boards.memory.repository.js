const { db } = require('../inMemoryDb');

const getAll = async () => db.boards;

const getById = async (boardId) => {
  const user = await db.read(boardId, 'boards');
  return user;
};

const create = async (board) => {
  await db.create(board, 'boards');
};

const remove = async (boardId) => {
  await db.delete(boardId, 'boards');
};

// const update = async (user) => {
//   await db.update(user, 'users');
// };

module.exports = { getAll, create, delete: remove, getById };
