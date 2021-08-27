import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const Contestant = new Schema(
  {
    name: { type: String, required: true },
    bio: { type: String, required: true },
    imgUrl: { type: String, required: true },
    teamId: { type: Schema.Types.ObjectId, required: true },
    score: { type: Number, required: true, default: 0 }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
