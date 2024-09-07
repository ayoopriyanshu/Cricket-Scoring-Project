import { Request, Response } from 'express';
import { Player } from '../models/player.model';

// Create a new player
export const createPlayer = async (req: Request, res: Response) => {
  try {
    const player = new Player(req.body);
    await player.save();
    res.status(201).json(player);
  } catch (error) {
    res.status(400).json({ error: "Failed to create player" });
  }
};

export const getAllPlayers = async (req: Request, res: Response) => {
  try {
    const players = await Player.find();
    res.status(200).json(players);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch players" });
  }
};

export const getPlayer = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const player = await Player.findById(id);
    if (!player) return res.status(404).json({ message: 'Player not found' });
    res.status(200).json(player);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch player" });
  }
};

export const deletePlayer = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const player = await Player.findByIdAndDelete(id);
    if (!player) return res.status(404).json({ message: 'Player not found' });
    res.status(200).json({ message: 'Player deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: "Failed to player team" });
  }
};
