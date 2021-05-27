const router = require('express').Router({mergeParams: true});
const Task = require('./tasks.model');
const tasksService = require('./tasks.service');

router.route('/').get(async (req, res) => {
  const { boardId } = req.params;
  const tasks = await tasksService.getAll(boardId);

  res.json(tasks.map(Task.toResponse));
});

router.route('/').post(async (req, res) => {
  const { boardId } = req.params;
  const task = Task.fromRequest({ ...req.body, boardId });
  await tasksService.create(task);

  res.status(201).json(Task.toResponse(task));
});

router.route('/:taskId').get(async (req, res) => {
  const { taskId } = req.params;
  const task = await tasksService.getById(taskId);

  if (!task) res.status(404).json('Not found');

  res.json(Task.toResponse(task));
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

module.exports = router;
