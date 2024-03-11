<template>
  <v-app>
    <TopBar></TopBar>
    <div class="background-image">
      <router-view></router-view>

    </div>
  </v-app>
</template>

<script>
import TopBar from './components/TopBar';

export default {
  name: 'App',

  components: {
    TopBar,
  },

  data: () => ({
    //
  }),
};
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
</style>