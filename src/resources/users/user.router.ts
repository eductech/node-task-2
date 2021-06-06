import { Router } from 'express';
import User from './user.model';
import * as usersService from './user.service';

const router = Router();

router.route('/').get(async (_, res) => {
  const users = await usersService.getAll();

  res.json(users.map((user) => User.toResponse(user as User)));
});

router.route('/').post(async (req, res) => {
  const user = User.fromRequest(req.body);
  await usersService.create(user);

  res.status(201).json(User.toResponse(user));
});

router.route('/:userId').get(async (req, res) => {
  const { userId } = req.params;
  const user = await usersService.getById(userId);

  res.json(User.toResponse(user as User));
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

export default router;
