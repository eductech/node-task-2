import * as boardsRepo from './boards.memory.repository';
import Board from './boards.model';

const getAll = () => boardsRepo.getAll();

const getById = (boardId: string) => boardsRepo.getById(boardId);

const create = (board: Board) => boardsRepo.create(Board.toDb(board));

const remove = (boardId: string) => boardsRepo.delete(boardId);

const update = (board: Board) => boardsRepo.update(Board.toDb(board));

export { getAll, create, remove as delete, getById, update };
