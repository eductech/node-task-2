import * as boardsRepo from './boards.memory.repository';
import Board from './boards.model';

const getAll = async (): Promise<Board[]> => {
  const boards = await boardsRepo.getAll();
  
  // @ts-ignore
  return boards.map((board) => ({
    ...board,
    columns: board.columns.sort((a, b) => a.order - b.order),
  }));
}

const getById = async (boardId: string): Promise<Board | undefined> => {
  const board = await boardsRepo.getById(boardId);

  if (!board) return undefined;

  return {
    ...board,
    // @ts-ignore
    columns: board.columns.sort((a, b) => a.order - b.order),
  };
}

// @ts-ignore
const create = (board: Board) => boardsRepo.create(Board.toDb(board));

const remove = (boardId: string) => boardsRepo.delete(boardId);

// @ts-ignore
const update = (board: Board) => boardsRepo.update(Board.toDb(board));

export { getAll, create, remove as delete, getById, update };
