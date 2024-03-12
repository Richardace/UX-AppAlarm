<template>
  <v-app class="px-3">
    <TopBar></TopBar>
    <div class="background-image pa-9">
      <viewsOptions></viewsOptions>
      <div :class="{ 'view-container': isLogged }">
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
  top: 0;
  left: 0;
  background-image: url('@/assets/fondoApp.png');
  background-size: 65%;
  background-position: center;
  background-repeat: no-repeat;
}

button{
  text-transform: capitalize !important;
}

/* For small devices */


@media (max-width: 700px) {
  .big-devices {
    display: none;
  }

  .small-devices {
    display: block;
  }

  .view-container {
    height: 100%;
  }

  
  .view-container {
    height: 100vh;
    border: 1px solid #D9D9D9 !important;
  }
  .form-sm-devices
  {
    width: 100% !important;
  }

}

/* For big devices */
@media (min-width: 700px) {
  .big-devices {
    display: block;
  }

  .small-devices {
    display: none;
  }

  .view-container {
    height: 90%;
    border: 1px solid #D9D9D9 !important;
  }
  

}
</style>