import mongoose, { Document, Model, Schema } from 'mongoose';

interface IMatch extends Document {
  playerA: mongoose.Types.ObjectId;
  playerB: mongoose.Types.ObjectId;
  totalMatchBalls: number;
  totalBalls: number;
  totalWickets: number;
  totalRuns: number;
  totalExtras: number;
  matchStatus: 'ONGOING' | 'COMPLETED';
  result?: string;
  date: Date;
}

const matchSchema: Schema<IMatch> = new mongoose.Schema({
  playerA: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player',
    required: true
  },
  playerB: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player',
    required: true
  },
  totalMatchBalls: {
    type: Number,
    required: true
  },
  totalBalls: {
    type: Number,
    default: 0,
  },
  totalWickets: {
    type: Number,
    default: 0
  },
  totalRuns: {
    type: Number,
    default: 0
  },
  totalExtras: {
    type: Number,
    default: 0
  },
  matchStatus: {
    type: String,
    enum: ['ONGOING', 'COMPLETED'],
    default: 'ONGOING'
  },
  result: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });


export const Match: Model<IMatch> = mongoose.model<IMatch>('Match', matchSchema);
