<template>
  <div>
    <v-app-bar color="primary" dark height="100" class="px-3">
      <v-app-bar-nav-icon v-if="isLogged" class="small-devices" @click="drawer = true"></v-app-bar-nav-icon>
      <v-img v-if="isLogged" max-height="70" max-width="70" src="@/assets/logoAppAlarm.png"></v-img>
      <v-toolbar-title class="mx-auto">App Alarm</v-toolbar-title>
      <div v-if="isLogged">
        <span class="mr-2">User123</span>
        <v-avatar size="36px">
          <img alt="user" src="@/assets/profile.png">
        </v-avatar>
      </div>
    </v-app-bar>
    <v-navigation-drawer v-if="isLogged" class="small-devices" v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="primary white--text">
          <v-list-item @click="goToStatistics">
            <v-list-item-icon>
              <v-icon>mdi-chart-pie</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Estadísticas</v-list-item-title>
          </v-list-item>

          <v-list-item @click="goToConfig">
            <v-list-item-icon>
              <v-icon>mdi-cog</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Configuración</v-list-item-title>
          </v-list-item>
          <v-list-item @click="goToBackUp">
            <v-list-item-icon>
              <v-icon>mdi-backup-restore</v-icon>
            </v-list-item-icon>
            <v-list-item-title>BackUp</v-list-item-title>
          </v-list-item>
          <v-list-item @click="goToSync">
            <v-list-item-icon>
              <v-icon>mdi-sync</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Sincronizar</v-list-item-title>
          </v-list-item>
        </v-list-item-group>

      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  data: () => ({
    isLogged: false,
    drawer: false,
    allowedViews: ['HomeView', 'ConfigView', 'StatisticsView', 'SyncView', 'BackUpView'],

  }),
  created() {
    if (this.allowedViews.includes(this.$route.name)) {
      this.isLogged = true;
    }
  },
  watch: {
    $route(to) {
      if (this.allowedViews.includes(to.name)) {
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
    },
  },
  methods: {
    goToStatistics() {
      this.$router.push({ name: 'StatisticsView' });
    },
    goToConfig() {
      this.$router.push({ name: 'ConfigView' });
    },
    goToBackUp() {
      this.$router.push({ name: 'BackUpView' });
    },
    goToSync() {
      this.$router.push({ name: 'SyncView' });
    },
  },

}
</script>
<style scoped>
.v-toolbar__title {
  font-size: 2.8rem;
  font-weight: bold;
}

span {
  font-weight: bold;
}
</style>