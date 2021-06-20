import { Router } from 'express';
import Board from './boards.model';
import * as boardsService from './boards.service';

const router = Router();

router.route('/').get(async (_, res) => {
  const boards = await boardsService.getAll();

  // @ts-ignore
  res.json(boards.map((board) => Board.toResponse(board as Board)));
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
    // @ts-ignore
    res.json(Board.toResponse(board as Board));
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

export default router;
