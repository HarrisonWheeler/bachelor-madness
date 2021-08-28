<template>
  <div class="component">
    <button class="btn btn-danger" @click="logout">
      Logout
    </button>
  </div>
</template>

<script>
import { AuthService } from '../services/AuthService'
export default {
  setup() {
    return {
      async logout() {
        AuthService.logout({ returnTo: window.location.origin })
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
