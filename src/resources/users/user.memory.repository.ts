import { getRepository } from 'typeorm';

import { User } from './User';

const getAll = async () => {
  const userRepository = getRepository(User);
  const users = await userRepository.find();
  
  return users;
}

const getById = async (userId: string) => {
  const userRepository = getRepository(User);
  const user = await userRepository.findOne(userId);
  return user;
};

const create = async (user: User) => {
  const userRepository = getRepository(User);
  await userRepository.save(user);
};

const remove = async (userId:string) => {
  const userRepository = getRepository(User);
  await userRepository.delete(userId);
};

const update = async (user: User) => {
  const userRepository = getRepository(User);
  await userRepository.update(user.id, user);
};

export { getAll, getById, create, remove as delete, update };
