import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class ContestantService {
  async getAllContestants(query = {}) {
    return await dbContext.Contestant.find(query)
  }

  async getContestantById(contestantId) {
    const foundContestant = await dbContext.Contestant.findById(contestantId)
    if (!foundContestant) {
      throw new BadRequest('Unable to find contestant')
    }
    return foundContestant
  }

  async addContestant(newContestant) {
    return await dbContext.Contestant.create(newContestant)
  }
}

export const contestantService = new ContestantService()
