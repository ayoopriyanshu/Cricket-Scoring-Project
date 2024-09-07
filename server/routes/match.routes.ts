import express, { Request, Response } from 'express';
import { createMatch, getAllMatches, getMatch, deleteMatch } from '../controllers/match.controller';

const router = express.Router();

router.post('/create', (req: Request, res: Response) => {
    createMatch(req, res);
});

router.get('/all', (req: Request, res: Response) => {
    getAllMatches(req, res);
});
  
router.get('/:id', (req: Request, res: Response) => {
    getMatch(req, res);
});
  
router.delete('/delete/:id', (req: Request, res: Response) => {
    deleteMatch(req, res);
});

export default router;