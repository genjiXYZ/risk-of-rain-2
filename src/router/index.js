import Vue from 'vue'
import VueRouter from 'vue-router'
import Character from '../views/Character.vue'
import Item from '../views/Item.vue'

import Monster from '../views/Monster.vue'

import Secret from '../views/Secret.vue'

import Music from '../views/Music.vue'


const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}


// window.console.log(originalPush)

Vue.use(VueRouter)

const routes = [
  //重定向
  {path:'/',
redirect:'/character'},
  {
    path: '/character',
    component: Character
  },
  {
    path: '/item',
    component: Item
  },
  {
    path: '/monster',
    component: Monster
  },
  {
    path: '/secret',
    component: Secret
  },
  {
    path: '/music',
    component: Music
  },

  
 

  
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
