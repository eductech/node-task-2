const router = require('express').Router();
const Board = require('./boards.model');
const boardsService = require('./boards.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();

  res.json(boards.map(Board.toResponse));
});

router.route('/').post(async (req, res) => {
  const board = Board.fromRequest(req.body);
  await boardsService.create(board);

  res.status(201).json(Board.toResponse(board));
});

router.route('/:boardId').get(async (req, res) => {
  const { boardId } = req.params;
  const user = await boardsService.getById(boardId);

  res.json(Board.toResponse(user));
});

// router.route('/:userId').delete(async (req, res) => {
//   const { userId } = req.params;
//   await usersService.delete(userId);

//   res.json('ok');
// });

// router.route('/:userId').put(async (req, res) => {
//   const { userId } = req.params;
//   const user = User.fromRequest({ ...req.body, userId });
//   await usersService.update(user);

//   res.json(user);
// });

module.exports = router;
