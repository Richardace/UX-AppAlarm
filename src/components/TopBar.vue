<template>
  <div>
    <v-app-bar color="primary" dark height="100" class="px-3">
      <v-img v-if="isLogged" max-height="70" max-width="70" src="@/assets/logoAppAlarm.png"></v-img>
      <v-toolbar-title class="mx-auto">App Alarm</v-toolbar-title>
      <div v-if="isLogged">
        <span class="mr-2">User123</span>
        <v-avatar size="36px">
        <img alt="user" src="@/assets/profile.png">
      </v-avatar>
    </div>
      
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  data: () => ({
    isLogged: false,
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

}
</script>
<style scoped>
.v-toolbar__title {
  font-size: 2.8rem;
  font-weight: bold;
}
span{
  font-weight: bold;
}
</style>