import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import BaseController from '../utils/BaseController'

export class AccountController extends BaseController {
  constructor() {
    super('account')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserAccount)
      .get('/team', this.getTeamByAccountId)
      .get('/groups', this.getGroupsByAccountId)
  }

  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }

  async getTeamByAccountId(req, res, next) {
    try {
      res.send(await accountService.getTeamByAccountId(req.userInfo.id))
    } catch (error) {
      next(error)
    }
  }

  async getGroupsByAccountId(req, res, next) {
    try {
      res.send(await accountService.getGroupsByAccountId(req.userInfo.id))
    } catch (error) {
      next(error)
    }
  }
}
