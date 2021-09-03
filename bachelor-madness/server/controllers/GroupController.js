import { Auth0Provider } from '@bcwdev/auth0provider'
import { groupService } from '../services/GroupService'
import BaseController from '../utils/BaseController'

export class GroupController extends BaseController {
  constructor() {
    super('api/group')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:id', this.getGroupById)
      .post('', this.createGroup)
      .delete('/:id', this.deleteGroup)
      .put('/:id', this.editGroup)
  }

  async getGroupById(req, res, next) {
    try {
      res.send(await groupService.getGroupById(req.params.id))
    } catch (error) {
      next(error)
    }
  }

  async createGroup(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      res.send(await groupService.createGroup(req.body))
    } catch (error) {
      next(error)
    }
  }

  async deleteGroup(req, res, next) {
    try {
      res.send(await groupService.deleteGroup(req.params.id, req.userInfo.id))
    } catch (error) {
      next(error)
    }
  }

  async editGroup(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      res.send(await groupService.editGroup(req.body, req.params.id))
    } catch (error) {
      next(error)
    }
  }
}
