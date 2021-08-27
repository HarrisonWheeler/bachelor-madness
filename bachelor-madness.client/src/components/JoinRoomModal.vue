<template>
  <div class="modal fade"
       id="joinGroup"
       tabindex="-1"
       role="dialog"
       aria-labelledby="joinGroupLabel"
       aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="joinGroupLabel">
            Join Match!
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="joinMatch">
            <div class="form-group">
              <input type="text"
                     class="form-control"
                     name=""
                     id=""
                     placeholder="Room Code"
                     v-model="state.matchCode"
              >
            </div>
            <button class="btn btn-success">
              Join
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { groupMatchService } from '../services/GroupMatchService'
export default {
  setup() {
    const state = reactive({
      matchCode: ''
    })
    return {
      state,
      async joinMatch() {
        await groupMatchService.joinMatch(state.matchCode)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
