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
    await contestantToDelete.remove()
    return contestantToDelete
  }

  async editContestant(editedContestant, contestantId) {
    const foundContestant = await this.getContestantById(contestantId)
    foundContestant.name = editedContestant.name || foundContestant.name
    foundContestant.bio = editedContestant.bio || foundContestant.bio
    foundContestant.imgUrl = editedContestant.imgUrl || foundContestant.imgUrl
    foundContestant.teamId = editedContestant.teamId || foundContestant.teamId
    foundContestant.score = editedContestant.score || foundContestant.score
    foundContestant.eliminated = editedContestant.eliminated || foundContestant.eliminated

    await foundContestant.save()
    return foundContestant
  }
}

export const contestantService = new ContestantService()
