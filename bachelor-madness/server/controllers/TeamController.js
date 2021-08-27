import { Auth0Provider } from '@bcwdev/auth0provider'
import { teamService } from '../services/TeamService'
import BaseController from '../utils/BaseController'

export class TeamController extends BaseController {
  // TODO need to test these routes AFTER group routes are finished
  constructor() {
    super('api/team')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:id', this.getTeamById)
      .post('', this.createTeam)
      .delete('/:id', this.deleteTeam)
      .put('/:id', this.editTeam)
  }

  async getTeamById(req, res, next) {
    try {
      res.send(await teamService.getTeamById(req.params.id))
    } catch (error) {
      next(error)
    }
  }

  async createTeam(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      res.send(await teamService.createTeam(req.body))
    } catch (error) {
      next(error)
    }
  }

  async deleteTeam(req, res, next) {
    try {
      res.send(await teamService.deleteTeam(req.params.id, req.userInfo.id))
    } catch (error) {
      next(error)
    }
  }

  async editTeam(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      res.send(await teamService.editTeam(req.body, req.params.id))
    } catch (error) {
      next(error)
    }
  }
}
