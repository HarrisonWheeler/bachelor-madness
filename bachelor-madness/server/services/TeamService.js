import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class TeamService {
  async getTeamById(teamId) {
    const foundTeam = await dbContext.Team.findById(teamId).populate('creator', 'name picture')
    if (!foundTeam) {
      throw new BadRequest('Unable to find that team')
    }
    return foundTeam
  }

  async createTeam(newTeam) {
    return await dbContext.Team.create(newTeam)
  }

  async deleteTeam(teamId, userId) {
    const teamToDelete = await this.getTeamById(teamId)
    if (teamToDelete.creatorId !== userId) {
      throw new BadRequest('Unauthorized to delete')
    }
    await teamToDelete.remove()
    return teamToDelete
  }

  async editTeam(editedTeam, teamId) {
    const foundTeam = await this.getTeamById(teamId)
    if (foundTeam.creatorId !== editedTeam.creatorId) {
      throw new BadRequest('Unauthorized to edit')
    }
    // REVIEW creator id....?
    foundTeam.name = editedTeam.name || foundTeam.name
    foundTeam.teamScore = editedTeam.teamScore || foundTeam.teamScore
    foundTeam.groupId = editedTeam.groupId || foundTeam.groupId

    foundTeam.save()
    return foundTeam
  }
}

export const teamService = new TeamService()
