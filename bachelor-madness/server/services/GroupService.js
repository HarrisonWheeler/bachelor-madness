import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class GroupService {
  async getGroupById(groupId) {
    const foundGroup = await dbContext.Group.findById(groupId).populate('creator', 'name picture')
    if (!foundGroup) {
      throw new BadRequest('Unable to find that group')
    }
    return foundGroup
  }

  async createGroup(newGroup) {
    return await dbContext.Group.create(newGroup)
  }

  async deleteGroup(groupId, userId) {
    const groupToDelete = await this.getGroupById(groupId)
    if (groupToDelete.creatorId !== userId) {
      throw new BadRequest('Unable to delete - not authorized')
    }
    groupToDelete.remove()
    return groupToDelete
  }

  async editGroup(editedGroup, groupId) {
    const foundGroup = await this.getGroupById(groupId)
    if (foundGroup.creatorId !== editedGroup.creatorId) {
      throw new BadRequest('Unable to edit - unauthorized')
    }
    // creator Id......?
    foundGroup.name = editedGroup.name || foundGroup.name
    foundGroup.groupMembers = editedGroup.groupMembers || foundGroup.groupMembers
    foundGroup.matchCode = editedGroup.matchCode || foundGroup.matchCode

    foundGroup.save()
    return foundGroup
  }
}

export const groupService = new GroupService()
