import { Router } from 'express';
import Task from './tasks.model';
import * as tasksService from './tasks.service';

interface Params {
  boardId: string;
}

const router = Router({ mergeParams: true });

router.route('/').get(async (req, res) => {
  const { boardId } = <Params>req.params;
  const tasks = await tasksService.getByBoardId(boardId);

  res.json(tasks.map((task) => Task.toResponse(task as Task)));
});

router.route('/').post(async (req, res) => {
  const { boardId } = <Params>req.params;
  const task = Task.fromRequest({ ...req.body, boardId });
  await tasksService.create(task);

  res.status(201).json(Task.toResponse(task));
});

router.route('/:taskId').get(async (req, res) => {
  const { taskId } = req.params;
  const task = await tasksService.getById(taskId);

  if (!task) res.status(404).json('Not found');

  res.json(Task.toResponse(task as Task));
});

router.route('/:taskId').delete(async (req, res) => {
  const { taskId } = req.params;
  await tasksService.delete(taskId);

  res.json('ok');
});

router.route('/:taskId').put(async (req, res) => {
  const { taskId } = req.params;
  const task = Task.fromRequest({ ...req.body, taskId });
  await tasksService.update(task);

  res.json(task);
});

export default router;
