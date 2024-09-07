import mongoose, { Document, Model, Schema } from 'mongoose';

interface IBall extends Document {
  runs: number;
  outcome: 
    | 'normal' 
    | 'normal_with_overthrow' 
    | 'overthrow' 
    | 'bye' 
    | 'bye_with_overthrow'
    | 'legbye' 
    | 'legbye_with_overthrow' 
    | 'noball' 
    | 'noball_with_overthrow' 
    | 'noball_with_bye'
    | 'noball_with_bye_and_overthrow' 
    | 'noball_with_legbye' 
    | 'noball_with_legbye_and_overthrow'
    | 'wide' 
    | 'wide_with_overthrow' 
    | 'wide_with_bye' 
    | 'wide_with_bye_and_overthrow'
    | 'wide_with_legbye' 
    | 'wide_with_legbye_and_overthrow' 
    | 'wide_with_noball'
    | 'wicket';
  match: mongoose.Types.ObjectId;
  bowler: mongoose.Types.ObjectId;
  batsman: mongoose.Types.ObjectId;
}

const ballSchema: Schema<IBall> = new mongoose.Schema({
  runs: {
    type: Number,
    default: 0
  },
  outcome: {
    type: String,
    enum: [
      'normal', 'normal_with_overthrow', 'overthrow', 'bye', 'bye_with_overthrow',
      'legbye', 'legbye_with_overthrow', 'noball', 'noball_with_overthrow', 'noball_with_bye',
      'noball_with_bye_and_overthrow', 'noball_with_legbye', 'noball_with_legbye_and_overthrow',
      'wide', 'wide_with_overthrow', 'wide_with_bye', 'wide_with_bye_and_overthrow',
      'wide_with_legbye', 'wide_with_legbye_and_overthrow',
      'wide_with_noball', 'wicket'
    ],
    required: true
  },
  match: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Match',
    required: true
  },
  bowler: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player',
    required: true
  },
  batsman: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player',
    required: true
  }
}, { timestamps: true });

export const Ball: Model<IBall> = mongoose.model<IBall>('Ball', ballSchema);
