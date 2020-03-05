<template>
  <nav>
    <div class="container">

      <button class="navButton" 
      v-for="(item,index) in items" :key="index"
      @click="   turnTo(item.id)"
    
      >{{item.name}}</button>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: "character", name: "角色" },
        { id: "item", name: "物品" },
        { id: "monster", name: "怪物" },
        { id: "music", name: "音乐" },
        { id: "secret", name: "隐藏" }
      ]
    };
  },
  methods: {
    turnTo(id) {
      this.$router.push(`/${id}`)
    }
  }
  
};
</script>

<style lang="scss" scoped>
nav {
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border: 1px solid black;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .navButton {
      position: relative;
      z-index: 1;
      width: 15%;
      height: 4rem;
      font-size: $l;
      cursor: pointer;
      background-color: #042747;

      overflow: hidden;
      border: none;
      outline: none;
      color: white;
      overflow: hidden;
      white-space: nowrap;
      &::before {
        z-index: -1;
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #fc2f70;
        transform-origin: center left;
        transform: scaleX(0);
        transition: transform 0.16s ease-in-out;
      }
      &:hover::before {
        transform: scaleX(1);
      }
      &:active {
        transform: scale(0.9);
      }
    }
  }
}
</style>