<template>
  <header>
    <div class="bg__container" data-lax-translate-y=" 0 0 , vh 500"  ref="bg">
          <img class="bg" src="../assets/header.jpg" alt />
    </div>
    <img class="logo lax" ref="logo" data-lax-translate-y=" 0 0 , vh -200" src="../assets/logo.png" alt />
  </header>
</template>

<script>
import lax from "lax.js";
export default {
  mounted: function() {
    lax.addElement(this.$refs.logo) // add your element to lax when it mounts
    lax.addElement(this.$refs.bg) // add your element to lax when it mounts
 }
};
</script>

<style lang="scss" scoped>
header {
  position: relative;
  height: 80vh;
  z-index: -999;

  // border: 1px solid black;
  // background-image: url('../assets/header.jpg')
  .bg__container{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -970;
    .bg {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  }
  .logo {
    position: absolute;
    width: 20%;
    left: 0;
    bottom: 2vh;
  }
 
}
</style>