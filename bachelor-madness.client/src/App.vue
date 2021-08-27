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
    <div class="navbar">
      <div class="active">
        Profile
      </div>
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
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

</style>
