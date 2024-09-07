import { Request, Response } from "express";
import { Team } from "../models/team.model";

export const createTeam = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, players } = req.body;
    const newTeam = new Team({ name, players });
    await newTeam.save();
    res.status(201).json(newTeam);
  } catch (error) {
    res.status(500).json({ error: "Failed to create team" });
  }
};

export const getAllTeams = async (req: Request, res: Response): Promise<void> => {
  try {
    const teams = await Team.find().populate("players");
    res.status(200).json(teams);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch teams" });
  }
};

export const getTeam = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const team = await Team.findById(id).populate("players");
    if (!team) {
      res.status(404).json({ error: "Team not found" });
      return;
    }
    res.status(200).json(team);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch team" });
  }
};

export const deleteTeam = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const deletedTeam = await Team.findByIdAndDelete(id);
    if (!deletedTeam) {
      res.status(404).json({ error: "Team not found" });
      return;
    }
    res.status(200).json({ message: "Team deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete team" });
  }
};
