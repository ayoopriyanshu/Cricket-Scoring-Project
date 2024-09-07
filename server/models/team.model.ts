import mongoose, { Document, Model, Schema } from 'mongoose';

interface ITeam extends Document {
  name: string;
  players: mongoose.Types.ObjectId[];
}

const teamSchema: Schema<ITeam> = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  players: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player',
  }]
}, { timestamps: true });

export const Team: Model<ITeam> = mongoose.model<ITeam>('Team', teamSchema);
