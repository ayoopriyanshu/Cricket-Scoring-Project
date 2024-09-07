import { Request, Response } from 'express';
import { Match } from '../models/match.model';

export const createMatch = async (req: Request, res: Response): Promise<void> => {
  try {
    const match = new Match(req.body);
    await match.save();
    res.status(201).json(match);
  } catch (error) {
    res.status(400).json({ message: 'Error creating match', error });
  }
};

export const getAllMatches = async (req: Request, res: Response): Promise<void> => {
  try {
    const matches = await Match.find();
    res.status(200).json(matches);
  } catch (error) {
    res.status(400).json({ message: 'Error retrieving matches', error });
  }
};

export const getMatch = async (req: Request, res: Response): Promise<void> => {
  try {
    const match = await Match.findById(req.params.id);
    if (!match) {
      res.status(404).json({ message: 'Match not found' });
    } else {
      res.status(200).json(match);
    }
  } catch (error) {
    res.status(400).json({ message: 'Error retrieving match', error });
  }
};

export const deleteMatch = async (req: Request, res: Response): Promise<void> => {
  try {
    const match = await Match.findByIdAndDelete(req.params.id);
    if (!match) {
      res.status(404).json({ message: 'Match not found' });
    } else {
      res.status(200).json({ message: 'Match deleted successfully' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Error deleting match', error });
  }
};
