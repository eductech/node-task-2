import * as usersRepo from './user.memory.repository';
import User from './user.model';

const getAll = () => usersRepo.getAll();

const getById = (userId: string) => usersRepo.getById(userId);

// @ts-ignore
const create = (user: User) => usersRepo.create(User.toDb(user));

const remove = (userId: string) => usersRepo.delete(userId);

// @ts-ignore
const update = (user: User) => usersRepo.update(User.toDb(user));

export { getAll, getById, create, remove as delete, update };
