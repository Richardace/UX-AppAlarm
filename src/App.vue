<template>
  <v-app class="px-3">
    <TopBar></TopBar>
    <div class="background-image pa-9">
      <viewsOptions></viewsOptions>
      <div :class="{ 'view-container':  isLogged}">
        <router-view></router-view>
      </div>

    </div>
  </v-app>
</template>

<script>
import TopBar from './components/TopBar';
import viewsOptions from './components/viewsOptions';

export default {
  name: 'App',

  components: {
    TopBar,
    viewsOptions,
  },

  data: () => ({
    allowedViews: ['HomeView', 'ConfigView', 'StatisticsView', 'SyncView', 'BackUpView'],
    isLogged: false,
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
    }
  }
}
</script>

<style>
.background-image {
  size: 65%;
  width: 100%;
  height: 100%;
  max-height: 90vh;
  top: 0;
  left: 0;
  background-image: url('@/assets/fondoApp.png');
  background-size: 65%;
  background-position: center;
  background-repeat: no-repeat;
}

.view-container {
  height: 90%;
  border: 1px solid #D9D9D9 !important;
}
</style>