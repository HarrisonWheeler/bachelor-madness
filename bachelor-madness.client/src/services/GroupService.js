import { AppState } from '../AppState'
import { api } from './AxiosService'

class GroupService {
  async joinMatch(mCode) {
    const res = await api.post('groupMatch', { matchCode: mCode })
    AppState.ActiveMatch = res.data
  }
}

export const groupService = new GroupService()
