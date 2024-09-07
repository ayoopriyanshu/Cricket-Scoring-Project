import express, { Request, Response } from "express";
import { createTeam, getAllTeams, getTeam, deleteTeam } from "../controllers/team.controller";

const router = express.Router();

router.post("/create", (req: Request, res: Response) => {
  createTeam(req, res);
});

router.get("/all", (req: Request, res: Response) => {
  getAllTeams(req, res);
});

router.get("/:id", (req: Request, res: Response) => {
  getTeam(req, res);
});

router.delete("/delete/:id", (req: Request, res: Response) => {
  deleteTeam(req, res);
});

export default router;
