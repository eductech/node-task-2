const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();

  res.json(users.map(User.toResponse));
});

router.route('/').post(async (req, res) => {
  const user = User.fromRequest(req.body);
  await usersService.create(user);

  res.status(201).json(User.toResponse(user));
});

router.route('/:userId').get(async (req, res) => {
  const { userId } = req.params;
  const user = await usersService.getById(userId);

  res.json(User.toResponse(user));
});

router.route('/:userId').delete(async (req, res) => {
  const { userId } = req.params;
  await usersService.delete(userId);

  res.json('ok');
});

router.route('/:userId').put(async (req, res) => {
  const { userId } = req.params;
  const user = User.fromRequest({ ...req.body, userId });
  await usersService.update(user);

  res.json(user);
});

module.exports = router;
