<template>
  <div class="home">
    <div class="filter"></div>
    <Nav />

    <router-view></router-view>
  </div>
</template>

<script>
import Nav from "./Home/nav";

export default {
  components: {
    Nav
  }
};
</script>

<style lang="scss"  scoped>
.home {
  width: 100%;
  height: 100vh;

  position: relative;
}

.filter {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -990;
  width: 100%;
  height: 100%;
  @include backdrop;
}
</style>