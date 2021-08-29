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

  async deleteContestant(contestantId) {
    const contestantToDelete = await this.getContestantById(contestantId)
    if (!contestantToDelete) {
      throw new BadRequest('Unable to delete contestant')
    }
    return await dbContext.Contestant.findByIdAndDelete(contestantId)
  }

  async editContestant(editedContestant, contestantId) {
    await this.getContestantById(contestantId)
    return await dbContext.Contestant.findByIdAndUpdate(contestantId, editedContestant, { new: true })
  }
}

export const contestantService = new ContestantService()
