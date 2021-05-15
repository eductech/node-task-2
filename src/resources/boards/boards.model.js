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

  static toResponse(user) {
    const { id, title, columns } = user;
    return { id, title, columns };
  }

  static toDb(user) {
    const { id, title, columns } = user;
    return { id, title, columns };
  }
}

module.exports = Board;
