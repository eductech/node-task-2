const { v4: uuid } = require('uuid');

class Board {
  constructor({
    id = uuid(),
    title = 'TITLE',
    columns = [],
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  static fromRequest(data) {
    return new Board(data);
  }

  static toResponse(board) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }

  static toDb(board) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}

module.exports = Board;
