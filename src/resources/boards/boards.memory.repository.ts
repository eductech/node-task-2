import { getRepository } from 'typeorm';

import { Board } from './Board';

const getAll = async () => {
  const boardRepository = getRepository(Board);
  const boards = boardRepository.find();

  return boards;
}

const getById = async (boardId: string) => {
  const boardRepository = getRepository(Board);
  const board = boardRepository.findOne(boardId);

  return board;
};

const create = async (board: Board) => {
  const boardRepository = getRepository(Board);
  await boardRepository.save(board);
};

const remove = async (boardId: string) => {
  const boardRepository = getRepository(Board);
  await boardRepository.delete(boardId);
};

const update = async (board: Board) => {
  const boardRepository = getRepository(Board);
  await boardRepository.save(board);
};

export { getAll, create, remove as delete, getById, update };
