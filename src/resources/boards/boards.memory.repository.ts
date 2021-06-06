import { db } from '../inMemoryDb';
import * as tasksRepo from '../tasks/tasks.memory.repository';

import type Board from './boards.model';

const getAll = async () => db.boards;

const getById = async (boardId: string) => {
  const board = await db.read(boardId, 'boards');
  return board;
};

const create = async (board: Board) => {
  await db.create(board, 'boards');
};

const remove = async (boardId: string) => {
  await db.delete(boardId, 'boards');
  await tasksRepo.deleteByBoardId(boardId);
};

const update = async (board: Board) => {
  await db.update(board, 'boards');
};

export { getAll, create, remove as delete, getById, update };
