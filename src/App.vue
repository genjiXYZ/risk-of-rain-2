<template>
  <div id="app">
    <Header class="" />

    <Home class="" />


    <div class="test"></div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

import Home from "./components/Home.vue";

// import {jq} from "jquery"
// import {parralx} from 'jquery-parallax.js'


import lax from "lax.js";
export default {

  
  components: {
    Header,
    Home
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  z-index: -1000;
background-color: #094979;
}


// .test{
//   width: 100vw;
//   height: 20vh;
//   background-color: red;
// }
</style>
