import mongoose from 'mongoose'
import { Value as ValueSchema } from '../models/Value'
import { AccountSchema } from '../models/Account'
import { Team } from '../models/Team'
import { Contestant } from '../models/Contestant'
import { TeamContestant } from '../models/TeamContestant'
import { Group } from '../models/Group'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Team = mongoose.model('Team', Team)
  Contestant = mongoose.model('Contestant', Contestant)
  TeamContestant = mongoose.model('TeamContestant', TeamContestant)
  Group = mongoose.model('Group', Group)
}

export const dbContext = new DbContext()
