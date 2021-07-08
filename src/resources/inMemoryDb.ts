type TableName = 'users' | 'boards' | 'tasks';
export type DBRecord = object & { id: string };

export const db = {
  users: [] as DBRecord[],
  boards: [] as DBRecord[],
  tasks: [] as DBRecord[],
  read: (id: string, tableName: TableName) =>
    db[tableName].find(({ id: entityId }) => id === entityId),
  delete: (id: string, tableName: TableName) => {
    const table = db[tableName];
    const index = table.findIndex(({ id: entityId }) => id === entityId);

    table.splice(index, 1);
  },
  update: (entity: DBRecord, tableName: TableName) => {
    const table = db[tableName];
    const index = table.findIndex(({ id: entityId }) => entity.id === entityId);

    table[index] = entity;
  },
  create: (entity: DBRecord, tableName: TableName) => {
    db[tableName].push(entity);
  },
};
