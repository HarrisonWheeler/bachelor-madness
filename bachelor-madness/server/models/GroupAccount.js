import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const GroupAccount = new Schema(
  {
    accountId: { type: Schema.Types.ObjectId, required: true },
    groupId: { type: Schema.Types.ObjectId, required: true },
    creatorId: { type: Schema.Types.ObjectId, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
