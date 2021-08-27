import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const Team = new Schema(
  {
    creatorId: { type: Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    teamScore: { type: Number, required: true, default: 0 },
    groupId: { type: Schema.Types.ObjectId, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

// REVIEW do a virtual to populate teamScore....?

Team.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})
