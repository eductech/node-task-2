import { v4 as uuid } from 'uuid';

export interface Column {
  order: number;
  bordId: string;
}

class Board {
  id: string;

  title: string;

  columns: Column[];

  constructor({
    id = uuid(),
    title = 'TITLE',
    columns = [] as Column[],
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  static fromRequest(data: Board) {
    return new Board(data);
  }

  static toResponse(board: Board) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }

  static toDb(board: Board) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}

export default Board;
