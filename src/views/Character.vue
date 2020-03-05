<template>
  <div class="character">
    <ul class="characterSelect">
      <li
        v-for="(item, index) in this.cnName"
        :key="index"
        @click="changeView(index);  showSkill()"
      >
        <img :src="avatarImgUrl(item)" alt />
        <span>{{item}}</span>
      </li>
    </ul>

    <ul class="skill">
      <li v-for="(nameItem,nameIndex) in skillArray.slice(1)" :key="nameIndex">
        <span>{{nameItem}}</span>

        <span class="skilldes" v-html="skillDescription[nameIndex]"></span>
      </li>
    </ul>

    <ul class="property">
      <li>{{cnName[nth]}}</li>
      <li>
        <img :src="showImgUrl()" alt />
      </li>

      <li>解锁方式</li>

      <li></li>

      <li>生命值</li>

      <li>
        <span></span>
        <span></span>
      </li>

      <li>
        <span></span>
        <span></span>
      </li>
      <li>
        <span></span>
        <span></span>
      </li>
    </ul>
  </div>
</template>

<script>
import characterMsg from "@/assets/characterMsg.json";

//______________________test

const str = JSON.stringify(characterMsg);

const regex = /\w+_BODY_NAME":"(\w*-*\w*|[\u4e00-\u9fa5]*)"/gm;

// let nihao = des.innerHTML.replace(reg,(v)=>{
// return `<span>${1}</span>`})

export default {
  data() {
    return {
      skillArray: [], //处理后数组
      skillDescription: [],
      color: ["red", "green", "blue", "yellow", "pink"],

      nth: "0",
      msg: characterMsg.strings,
      cnName: [
        "指挥官",
        "雇佣兵",
        "工程师",
        "女猎人",
        "工匠",
        "MUL-T",
        "雷克斯",
        "装弹手",
        "呛鼻毒师"
      ],
      unlock: [],

      enNameList: [
        "COMMANDO",
        "MERC",
        "ENGI",
        "HUNTRESS",
        "MAGE",
        "TOOLBOT",
        "TREEBOT",
        "LOADER",
        "CROCO"
      ]
    };
  },
  computed: {},
  methods: {
    //根据动态导入图片
    avatarImgUrl(name) {
      let Path = require(`../assets/characterAvatar/${name}.png`);
      return Path;
    },
    showImgUrl() {
      let Path = require(`../assets/characterShow/${
        this.enNameList[this.nth]
      }.png`);
      window.console.log(Path);
      return Path;
    },

    //改变nth
    changeView(index) {
      window.console.log(index);
      this.nth = index;
    },
    showSkill() {
      this.skillArray = []; //默认重置 技能名称
      this.skillDescription = [];//默认重置 技能描述

      let name = this.enNameList[this.nth];
      let data = this.msg[name]; //选择当先英雄数据

      let str = JSON.stringify(data); //格式转换
    
      const regName = /NAME":"(.*?)"/g; //匹配技能名称
      const regedName = str.matchAll(regName);

      //push  到skillArray  matchAll  方法 返回一个可迭代对象
      for (const iterator of regedName) {
        // window.console.dir(iterator);
        this.skillArray.push(iterator[1]);
      }
      ///--------------------------

      const regDescription = /DESCRIPTION":"(.*?)"/g; //匹配技能描述
      const regedSkill = str.matchAll(regDescription);
      
      for (const iterator of regedSkill) {
      
        const regFilter = /<style=cIsDamage>(.*?)<\/style>/g; //匹配damage  字段
        let des = iterator[1];  

        let DmgFilter = des.replace(regFilter, (v, p1) => {
          window.console.log(p1);
          return `<span style="color:#E5C962"> ${p1}</span> `
        });
        // window.console.log(`dmg              `+DmgFilter);

        const regFilter2 = /<style=cIsUtility>(.*?)<\/style>/ ///匹配utility 字段
      
    let utilityFilter = DmgFilter.replace(regFilter2,(v,p1)=>{
       return `<span class="utility">${p1}</span>`
     })
        this.skillDescription.push(utilityFilter);
        window.console.log(utilityFilter);
      }
    }
  },

  created() {
    this.showSkill();
  }
};
</script>

<style lang="scss" scoped>
.character {
  max-width: 120rem;
  margin: 0 auto;
  font-size: $l;
  color: white;
  padding-top: 5rem;
  border: 1px solid black;
  display: flex;
  justify-content: space-evenly;

  .characterSelect {
    width: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    overflow-y: auto;

    li {
      width: 25rem;
      font-size: $s;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      backdrop-filter: brightness(60%);
      padding: 1rem 1.5rem;
      cursor: pointer;
      border-top: 1px solid white;
      &:last-child {
        border-bottom: 1px solid white;
      }
      &:hover {
        color: orange;
      }
      img {
        width: 4rem;
        margin-left: 2rem;
      }
      span {
        margin-left: 2rem;
      }
    }
  }

  .skill {
    font-size: $s;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    backdrop-filter: brightness(60%);
    li {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      border: 1px solid black;
      height: 9rem;

      span:nth-child(1) {
        line-height: 9rem;
        border: 1px solid white;
        min-width: 15rem;
      }

      span:nth-child(2) {
        width: 40rem;

        margin-left: 5rem;
      }
    }
  }

  .property {
    img {
      max-width: 30rem;
    }
  }


}
</style>