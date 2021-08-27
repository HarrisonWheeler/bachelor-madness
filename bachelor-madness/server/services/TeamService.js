import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class TeamService {
  async getTeamById(teamId) {
    const foundTeam = await dbContext.Team.findById(teamId)
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
    const deleted = await dbContext.Team.findByIdAndDelete(teamId)
    if (!deleted) {
      throw new BadRequest('Unable to delete')
    }
    return deleted
  }

  async editTeam(editedTeam, teamId) {
    const teamToEdit = await this.getTeamById(teamId)
    if (teamToEdit.creatorId !== editedTeam.creatorId) {
      throw new BadRequest('Unauthorized to edit')
    }
    const edited = await dbContext.Team.findByIdAndUpdate(teamId, editedTeam, { new: true })
    if (!edited) {
      throw new BadRequest('Unable to edit')
    }
    return edited
  }
}

export const teamService = new TeamService()
