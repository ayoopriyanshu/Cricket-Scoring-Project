import { Request, Response } from 'express';
import { Ball } from '../models/ball.model';
import { Match } from '../models/match.model';
import { Player } from '../models/player.model';

export const createBall = async (req: Request, res: Response) => {
    const { runs, outcome, match: matchId, bowler: bowlerId, batsman: batsmanId } = req.body;

    try {
        // Validate input
        if (!matchId || !bowlerId || !batsmanId || !outcome) {
            return res.status(400).json({ message: 'Required fields are missing' });
        }

        // Create a new Ball
        const newBall = new Ball({
            runs,
            outcome,
            match: matchId,
            bowler: bowlerId,
            batsman: batsmanId
        });

        await newBall.save();

        // Update match and players based on the ball outcome
        const match = await Match.findById(matchId);
        const bowler = await Player.findById(bowlerId);
        const batsman = await Player.findById(batsmanId);

        if (!match || !bowler || !batsman) {
            return res.status(404).json({ message: 'Match or player not found' });
        }

        if (['normal', 'normal_with_overthrow'].includes(outcome)) {
            match.totalRuns += runs;
            match.totalBalls +=1;
            bowler.runs +=runs;
            batsman.runs +=runs;
            bowler.balls += 1;
            batsman.balls += 1;
        }

        if (outcome === 'overthrow') {
            match.totalRuns += runs;
            bowler.runs +=runs;
        }

        if (['bye', 'bye_with_overthrow', 'legbye', 'legbye_with_overthrow'].includes(outcome)) {
            match.totalRuns += runs;
            match.totalBalls +=1;
            match.totalExtras += runs;
            bowler.balls += 1;
            batsman.balls += 1;
        }

        if (['noball'].includes(outcome)) {
            match.totalRuns += (runs + 1);
            match.totalExtras += (runs + 1);
            bowler.runs += (runs + 1);
            batsman.runs += runs;
        }

        if (['noball_with_overthrow', 'noball_with_bye', 'noball_with_bye_and_overthrow', 'noball_with_legbye', 'noball_with_legbye_and_overthrow'].includes(outcome)) {
            match.totalRuns += (runs + 1);
            match.totalExtras += (runs + 1);
            bowler.runs += (runs + 1);
        }

        if (['wide', 'wide_with_overthrow', 'wide_with_bye', 'wide_with_bye_and_overthrow', 'wide_with_legbye', 'wide_with_legbye_and_overthrow'].includes(outcome)) {
            match.totalRuns += (runs + 1);
            match.totalExtras += (runs + 1);
            bowler.runs += (runs + 1);
        }

        if (outcome === 'wide_with_noball'){
            match.totalExtras += (runs + 2);
            match.totalRuns += (runs + 2);
            bowler.runs += (runs + 2);
            batsman.runs += runs;
        }

        if (outcome === 'wicket'){
            match.totalRuns += runs;
            match.totalWickets += 1;
            match.totalBalls +=1;
            bowler.balls += 1;
            bowler.wickets += 1;
            bowler.runs += runs;
            batsman.runs += runs;
            batsman.balls += 1;
        }

        await match.save();
        await bowler.save();
        await batsman.save();

        res.status(201).json(newBall);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const getAllBalls = async (req: Request, res: Response) => {
    try {
        const balls = await Ball.find().populate('match bowler batsman');
        res.status(200).json(balls);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const getBall = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const ball = await Ball.findById(id).populate('match bowler batsman');
        if (!ball) {
            return res.status(404).json({ message: 'Ball not found' });
        }
        res.status(200).json(ball);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const deleteBall = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const ball = await Ball.findById(id);
        if (!ball) {
            return res.status(404).json({ message: 'Ball not found' });
        }

        const { match: matchId, bowler: bowlerId, batsman: batsmanId, outcome, runs } = ball;

        // Remove the ball from the database
        await Ball.findByIdAndDelete(id);

        // Fetch the related match and players
        const match = await Match.findById(matchId);
        const bowler = await Player.findById(bowlerId);
        const batsman = await Player.findById(batsmanId);

        if (!match || !bowler || !batsman) {
            return res.status(404).json({ message: 'Match or player not found' });
        }

        // Update statistics based on the outcome of the ball
        if (['normal', 'normal_with_overthrow'].includes(outcome)) {
            match.totalRuns -= runs;
            match.totalBalls -= 1;
            bowler.runs -= runs;
            batsman.runs -= runs;
            bowler.balls -= 1;
            batsman.balls -= 1;
        }

        if (outcome === 'overthrow') {
            match.totalRuns -= runs;
            bowler.runs -= runs;
        }

        if (['bye', 'bye_with_overthrow', 'legbye', 'legbye_with_overthrow'].includes(outcome)) {
            match.totalRuns -= runs;
            match.totalBalls -= 1;
            match.totalExtras -= runs;
            bowler.balls -= 1;
            batsman.balls -= 1;
        }

        if (outcome === 'noball') {
            match.totalRuns -= (runs + 1);
            match.totalExtras -= (runs + 1);
            bowler.runs -= (runs + 1);
            batsman.runs -= runs;
        }

        if (['noball_with_overthrow', 'noball_with_bye', 'noball_with_bye_and_overthrow', 'noball_with_legbye', 'noball_with_legbye_and_overthrow'].includes(outcome)) {
            match.totalRuns -= (runs + 1);
            match.totalExtras -= (runs + 1);
            bowler.runs -= (runs + 1);
        }

        if (['wide', 'wide_with_overthrow', 'wide_with_bye', 'wide_with_bye_and_overthrow', 'wide_with_legbye', 'wide_with_legbye_and_overthrow'].includes(outcome)) {
            match.totalRuns -= (runs + 1);
            match.totalExtras -= (runs + 1);
            bowler.runs -= (runs + 1);
        }

        if (outcome === 'wide_with_noball') {
            match.totalExtras -= (runs + 2);
            match.totalRuns -= (runs + 2);
            bowler.runs -= (runs + 2);
            batsman.runs -= runs;
        }

        if (outcome === 'wicket') {
            match.totalRuns -= runs;
            match.totalWickets -= 1;
            match.totalBalls -= 1;
            bowler.balls -= 1;
            bowler.wickets -= 1;
            bowler.runs -= runs;
            batsman.runs -= runs;
            batsman.balls -= 1;
        }

        await match.save();
        await bowler.save();
        await batsman.save();

        res.status(200).json({ message: 'Ball deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

