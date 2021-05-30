const db = {
  users: [],
  boards: [],
  tasks: [],
  read: (id, tableName) => db[tableName].find(({ id: entityId }) => id === entityId),
  delete: (id, tableName) => {
    const table = db[tableName];
    const index = table.findIndex(({ id: entityId }) => id === entityId);
    
    table.splice(index, 1);
  },
  update: (entity, tableName) => {
    const table = db[tableName];
    const index = table.findIndex(({ id: entityId }) => entity.id === entityId);
    
    table[index] = entity;
  },
  create: (entity, tableName) => {
    db[tableName].push(entity)
  },
};

module.exports = {
  db,
};
