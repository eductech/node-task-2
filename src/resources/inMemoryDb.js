const db = {
  users: [],
  boards: [],
  tasks: [],
  /**
   * Read record from db.
   * @param {string} id - record id.
   * @param {string} tableName - table name to read from.
   * @returns {object} record data.
   */
  read: (id, tableName) => db[tableName].find(({ id: entityId }) => id === entityId),
  /**
   * Delete record from db.
   * @param {string} id - record id.
   * @param {string} tableName - table name to read from.
   */
  delete: (id, tableName) => {
    const table = db[tableName];
    const index = table.findIndex(({ id: entityId }) => id === entityId);
    
    table.splice(index, 1);
  },
  /**
   * Update record in db.
   * @param {object} entity - entity data to be updated.
   * @param {string} tableName - table name where record was stored.
   */
  update: (entity, tableName) => {
    const table = db[tableName];
    const index = table.findIndex(({ id: entityId }) => entity.id === entityId);
    
    table[index] = entity;
  },
  /**
   * Create new record in db.
   * @param {object} entity - entity data to be recorded.
   * @param {string} tableName - table name to post data.
   */
  create: (entity, tableName) => {
    db[tableName].push(entity)
  },
};

module.exports = {
  db,
};
