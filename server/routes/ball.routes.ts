import express, { Request, Response } from 'express';
import { createBall, getAllBalls, getBall, deleteBall } from '../controllers/ball.controller';

const router = express.Router();

router.post('/create', (req: Request, res: Response) => {
    createBall(req, res);
});

router.get('/all', (req: Request, res: Response) => {
    getAllBalls(req, res);
});
  
router.get('/:id', (req: Request, res: Response) => {
    getBall(req, res);
});
  
router.delete('/delete/:id', (req: Request, res: Response) => {
    deleteBall(req, res);
});

export default router;