import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const TeamContestant = new Schema(
  {
    teamId: { type: Schema.Types.ObjectId, required: true },
    contestantId: { type: Schema.Types.ObjectId, required: true },
    creatorId: { type: Schema.Types.ObjectId, required: true },
    bracketOrder: { type: Number, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

TeamContestant.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})

TeamContestant.virtual('contestants', {
  localField: 'contestantId',
  ref: 'Contestant',
  foreignField: '_id',
  justOne: true
})
