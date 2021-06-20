import { getRepository } from 'typeorm';

import { Task } from './Task';

const getAll = async () => {
  const taskRepository = getRepository(Task);
  const tasks = await taskRepository.find();

  return tasks;
};

const getById = async (taskId: string) => {
  const taskRepository = getRepository(Task);
  const task = taskRepository.findOne(taskId, {
    loadRelationIds: true,
  });

  return task;
};

const getByBoardId = async (boardId: string) => {
  const taskRepository = getRepository(Task);
  const tasks = await taskRepository.find({
    loadRelationIds: true,
    where: { boardId: { id: boardId } },
  });

  return tasks;
};

const create = async (task: Task) => {
  const taskRepository = getRepository(Task);
  await taskRepository.save(task);
};

const remove = async (taskId: string) => {
  const taskRepository = getRepository(Task);
  await taskRepository.delete(taskId);
};

const update = async (task: Task) => {
  const taskRepository = getRepository(Task);
  await taskRepository.save(task);
};

export { getAll, getByBoardId, create, remove as delete, getById, update };
