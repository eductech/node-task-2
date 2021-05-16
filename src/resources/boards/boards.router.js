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
  const board = await boardsService.getById(boardId);

  if (board) {
    res.json(Board.toResponse(board));
  } else {
    res.status(404).json('Not found');
  }
});

router.route('/:boardId').delete(async (req, res) => {
  const { boardId } = req.params;
  await boardsService.delete(boardId);

  res.json('ok');
});

router.route('/:boardId').put(async (req, res) => {
  const { boardId } = req.params;
  const board = Board.fromRequest({ ...req.body, boardId });
  await boardsService.update(board);

  res.json(board);
});

module.exports = router;
