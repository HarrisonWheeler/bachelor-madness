<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />

    <!---------------------- Modals -------------->
    <JoinMatchModal />
  </main>
  <footer>
    <div class="navbar" v-if="user.isAuthenticated">
      <router-link :to="{ name: 'Account' }">
        <div class="active">
          Profile
        </div>
      </router-link>
      <div>
        My Groups
      </div>
      <div>My Teams?</div>
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      user: computed(() => AppState.user),
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

</style>
