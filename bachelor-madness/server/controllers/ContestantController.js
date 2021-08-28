import { Auth0Provider } from '@bcwdev/auth0provider'
import { contestantService } from '../services/ContestantService'
import BaseController from '../utils/BaseController'

export class ContestantController extends BaseController {
  constructor() {
    super('api/contestant')
    this.router
      .get('', this.getAllContestants)
      .get('/:id', this.getContestantById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.addContestant)
      .delete('/:id', this.deleteContestant)
      .put('/:id', this.editContestant)
  }

  async getAllContestants(req, res, next) {
    try {
      res.send(await contestantService.getAllContestants())
    } catch (error) {
      next(error)
    }
  }

  async getContestantById(req, res, next) {
    try {
      res.send(await contestantService.getContestantById(req.params.id))
    } catch (error) {
      next(error)
    }
  }

  async addContestant(req, res, next) {
    try {
      res.send(await contestantService.addContestant(req.body))
    } catch (error) {
      next(error)
    }
  }

  async deleteContestant(req, res, next) {
    try {
      res.send(await contestantService.deleteContestant(req.params.id))
    } catch (error) {
      next(error)
    }
  }

  async editContestant(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      res.send(await contestantService.editContestant(req.body, req.params.id))
    } catch (error) {
      next(error)
    }
  }
}
