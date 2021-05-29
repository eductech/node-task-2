const { v4: uuid } = require('uuid');

/**
 * @typedef {Object} Column
 * @property {string} title` - column title.
 * @property {number} order - column order.
 */

/**
 * Class representing a board.
 */
class Board {
  /**
   * Create a board.
   * @param {string} id - unique instance id.
   * @param {string} title - board title.
   * @param {Column[]} columns - board columns.
   */
  constructor({
    id = uuid(),
    title = 'TITLE',
    columns = [],
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  /**
   * Convert request payload to board object.
   * @param {object} data - Object payload that represents task input from client.
   * @return {Board} A Board object.
   */
  static fromRequest(data) {
    return new Board(data);
  }

  /**
   * Convert board instance to object that could be used as response payload.
   * @param {Board} board - Board instance.
   * @return {Board} board info without sensitive data.
   */
  static toResponse(board) {
    return board;
  }

  /**
   * Convert board instance to object that could be stored in db.
   * @param {Board} task - Board instance.
   * @return {Board} Board instance.
   */
  static toDb(board) {
    return board;
  }
}

module.exports = Board;
