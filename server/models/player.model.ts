import mongoose, { Document, Model, Schema } from 'mongoose';

interface IPlayer extends Document {
  name: string;
  role: 'BATSMAN' | 'BOWLER';
  runs: number;
  wickets: number;
  balls: number;
}

const playerSchema: Schema<IPlayer> = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['BATSMAN', 'BOWLER'],
    required: true
  },
  runs: {
    type: Number,
    default: 0
  },
  wickets: {
    type: Number,
    default: 0
  },
  balls: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

export const Player: Model<IPlayer> = mongoose.model<IPlayer>('Player', playerSchema);
