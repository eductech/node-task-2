/** @module board/repository */
const { db } = require('../inMemoryDb');
const tasksRepo = require('../tasks/tasks.memory.repository');

/**
 * Query all boards from db.
 * @return {Promise<Board[]>} list of boards.
 */
const getAll = async () => db.boards;

/**
 * Query certain board by id.
 * @param {string} boardId - board id to get data from.
 * @return {Promise<User>} board data object.
 */
const getById = async (boardId) => {
  const board = await db.read(boardId, 'boards');
  return board;
};

/**
 * Stores board data in database.
 * @param {User} board - board object.
 * @return {Promise<void>} promise that resolves when data recorded.
 */
const create = async (board) => {
  await db.create(board, 'boards');
};

/**
 * Deletes board data from database. Also removes all the tasks
 * related to current board.
 * @param {string} boardId - board id to delete.
 * @return {Promise<void>} promise that resolves when data deleted.
 */
const remove = async (boardId) => {
  await db.delete(boardId, 'boards');
  await tasksRepo.deleteByBoardId(boardId);
};

/**
 * Updates board data in database.
 * @param {User} board - board object.
 * @return {Promise<void>} promise that resolves when data updated.
 */
const update = async (board) => {
  await db.update(board, 'boards');
};

module.exports = { getAll, create, delete: remove, getById, update };
