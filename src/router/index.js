import Vue from 'vue'
import VueRouter from 'vue-router'

const Repostory = () => import('../views/repostory/Repostory')
const Historys = () => import('../views/history/Historys')

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path: '',
      redirect: '/repostory'
    },
    {
      path: '/repostory',
      component: Repostory
    },
    {
      path: '/historys',
      component: Historys
    }
  ],
  mode: 'history'
})


