import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class GroupService {
  async getGroupById(groupId) {
    const foundGroup = await dbContext.Group.findById(groupId)
    if (!foundGroup) {
      throw new BadRequest('Unable to find that group')
    }
    return foundGroup
  }

  async createGroup(newGroup) {
    return await dbContext.Group.create(newGroup)
  }

  async deleteGroup(groupId, userId) {
    const foundGroup = await this.getGroupById(groupId)
    if (foundGroup.creatorId !== userId) {
      throw new BadRequest('Unable to delete - not authorized')
    }
    const groupToDelete = await dbContext.Group.findByIdAndDelete(groupId)
    if (!groupToDelete) {
      throw new BadRequest('Unable to delete group')
    }
    return groupToDelete
  }

  async editGroup(editedGroup, groupId) {
    const groupToEdit = this.getGroupById(groupId)
    if (groupToEdit !== editedGroup.creatorId) {
      throw new BadRequest('Unable to edit - unauthorized')
    }
    return await dbContext.Group.findByIdAndUpdate(groupId, editedGroup, { new: true })
  }
}

export const groupService = new GroupService()
