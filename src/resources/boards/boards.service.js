/** @module board/service */
const boardsRepo = require('./boards.memory.repository');
const Board = require('./boards.model');

/**
 * Fetches all boards from db.
 * @return {Promise<Board[]>} list of boards.
 */
const getAll = () => boardsRepo.getAll();

/**
 * Fetches certain board by id.
 * @param {string} boardId - board id to get data from.
 * @return {Promise<Board>} board data object.
 */
const getById = (boardId) => boardsRepo.getById(boardId);

/**
 * Stores board data in database.
 * @param {Board} board - board object.
 * @return {Promise<void>} promise that resolves when data recorded.
 */
const create = (board) => boardsRepo.create(Board.toDb(board));

/**
 * Deletes board data from database.
 * @param {string} boardId - board id to delete.
 * @return {Promise<void>} promise that resolves when data deleted.
 */
const remove = (boardId) => boardsRepo.delete(boardId);

/**
 * Updates board data in database.
 * @param {Board} board - board object.
 * @return {Promise<void>} promise that resolves when data updated.
 */
const update = (board) => boardsRepo.update(Board.toDb(board));

module.exports = { getAll, create, delete: remove, getById, update };
