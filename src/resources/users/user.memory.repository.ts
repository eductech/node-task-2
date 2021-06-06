import { db, DBRecord } from '../inMemoryDb';
import * as tasksRepo from '../tasks/tasks.memory.repository';

import type User from './user.model';

const getAll = async () => db.users;

const getById = async (userId: string) => {
  const user = await db.read(userId, 'users');
  return user;
};

const create = async (user: User) => {
  await db.create(user as DBRecord, 'users');
};

const remove = async (userId:string) => {
  await db.delete(userId, 'users');
  await tasksRepo.resetUserLink(userId);
};

const update = async (user: User) => {
  await db.update(user, 'users');
};

export { getAll, getById, create, remove as delete, update };
