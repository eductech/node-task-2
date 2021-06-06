import { db, DBRecord } from '../inMemoryDb';

import type Task from './tasks.model';

const getAll = async () => db.tasks;

const getById = async (taskId: string) => {
  const task = await db.read(taskId, 'tasks');
  return task;
};

const getByBoardId = async (boardId: string) => {
  const tasks = <Task[]>await getAll();
  return tasks.filter(({ boardId: taskBoardId }) => taskBoardId === boardId);
};

const create = async (task: Task) => {
  await db.create(task, 'tasks');
};

const remove = async (taskId: string) => {
  await db.delete(taskId, 'tasks');
};

const deleteByBoardId = async (boardId: string) => {
  const tasks = <Task[]>await getAll();

  db.tasks = tasks.filter(({ boardId: taskBoardId }) => taskBoardId !== boardId);
};

const update = async (task: Task) => {
  await db.update(task, 'tasks');
};

const resetUserLink = async (userId: string) => {
  const tasks = <Task[]>await getAll();

  tasks.forEach((task) => {
    if (userId === task.userId) {
      db.update({ ...task, userId: null } as DBRecord, 'tasks');
    };
  });
};

export { getAll, getByBoardId, create, remove as delete, getById, update, deleteByBoardId, resetUserLink };
