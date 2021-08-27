import mongoose from 'mongoose'
import { Value as ValueSchema } from '../models/Value'
import { AccountSchema } from '../models/Account'
import { Team } from '../models/Team'
import { Contestant } from '../models/Contestant'
import { TeamContestant } from '../models/TeamContestant'
import { GroupMatch } from '../models/GroupMatch'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Team = mongoose.model('Team', Team)
  Contestant = mongoose.model('Contestant', Contestant)
  TeamContestant = mongoose.model('TeamContestant', TeamContestant)
  GroupMatch = mongoose.model('GroupMatch', GroupMatch)
}

export const dbContext = new DbContext()
