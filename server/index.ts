import express, { Request, Response } from 'express';
import cors from 'cors';
import connectToMongoDb from './mongo/connect.to.db';
import dotenv from 'dotenv';
import teamRoutes from './routes/team.routes';
import playerRoutes from './routes/player.routes';
import matchRoutes from './routes/match.routes';
import ballRoutes from './routes/ball.routes';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

// app.use("/api/team", teamRoutes);
app.use("/api/player", playerRoutes);
app.use("/api/match", matchRoutes);
app.use("/api/ball", ballRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Server is running');
});

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 5000;
app.listen(PORT, () => {
  connectToMongoDb();
  console.log(`Server running on port ${PORT}`);
});
