<template>
  <div class="container-fluid">
    <div class="row height align-items-center text-center" v-if="!user.isAuthenticated">
      <div class="col-12">
        <button class="btn btn-danger" @click="login">
          Create Account
        </button>
      </div>
      <div class="col-12">
        <button class="btn btn-danger" @click="login">
          Login
        </button>
      </div>
    </div>
    <div class="row height align-items-center text-center" v-if="user.isAuthenticated">
      <div class="col-12">
        <button class="btn btn-danger">
          Create Match
        </button>
      </div>
      <div class="col-12">
        <button class="btn btn-danger" data-target="#joinGroup" data-toggle="modal">
          Join Match
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { AuthService } from '../services/AuthService'
export default {
  setup() {
    return {
      user: computed(() => AppState.user),
      async login() {
        AuthService.loginWithPopup()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.height{
  height: 80vh;
}
</style>
