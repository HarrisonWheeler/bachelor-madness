import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const GroupMatch = new Schema(
  {
    creatorId: { type: Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    groupMembers: { type: Array },
    matchCode: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

GroupMatch.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})
