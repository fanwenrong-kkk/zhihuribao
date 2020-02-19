import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from'../views/About.vue'
import Mine from '../views/Mine.vue'
import Pinglun from '../views/Pinglun.vue'

Vue.use(VueRouter)

const routes = [
	{
		
	
	path: '/',
	component: Mine,
	
	
	component: Pinglun,
	path: '/',
	component: About,
	path: '/',
	component: Home,
	path: '/',
	}
  // {
	 //  //首页
  //   path: '/Home',
  //   component: Home
  // },
  // {
	 //  //我的
  //   path: '/Mine',
  //   name: 'Mine',
  //   component: () => import('../views/Mine.vue')
  // },
  // {
	 //  //文章 详情
  //   path: '/About',
  //   name: 'About',
  //   component: () => import( '../views/About.vue')
  // },
  // {
	 //  //评论
  //   path: '/',
  //   name: 'Pinglun',
  //   component: () => import('../views/Pinglun.vue')
  // },
  
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
