import express, { Request, Response } from 'express';
import { createPlayer, getAllPlayers, getPlayer, deletePlayer } from '../controllers/player.controller';

const router = express.Router();

router.post('/create', (req: Request, res: Response) => {
  createPlayer(req, res);
});

router.get('/all', (req: Request, res: Response) => {
  getAllPlayers(req, res);
});

router.get('/:id', (req: Request, res: Response) => {
  getPlayer(req, res);
});

router.delete('/delete/:id', (req: Request, res: Response) => {
  deletePlayer(req, res);
});

export default router;
