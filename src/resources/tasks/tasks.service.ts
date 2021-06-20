import * as tasksRepo from './tasks.memory.repository';
import Task from './tasks.model';


const getAll = () => tasksRepo.getAll();

// @ts-ignore
const getByBoardId = (boardId: string) => tasksRepo.getByBoardId(boardId);

const getById = (taskId: string) => tasksRepo.getById(taskId);

// @ts-ignore
const create = (task: Task) => tasksRepo.create(Task.toDb(task));

const remove = (taskId: string) => tasksRepo.delete(taskId);

// @ts-ignore
const update = (task: Task) => tasksRepo.update(Task.toDb(task));

export { getAll, getByBoardId, create, remove as delete, getById, update };
