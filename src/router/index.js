import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
	path: '/',
	name: 'Home',
	component: Home
},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
	},
	{
		path: '/display',
		name: 'Display',
		component: () => import('../views/Display.vue')
	},
	{
		path: '/news',
		name: 'News',
		component: () => import('../views/News.vue')
	},
	{
		path: '/cultural',
		name: 'Cultural',
		component: () => import('../views/Cultural.vue')
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('../views/Account/Login.vue')
	},
	{
		path: '/register',
		name: 'Register',
		component: () => import('../views/Account/Register.vue')
	},
	{
		path: '/contact',
		name: 'Contact',
		component: () => import('../views/Footer/Contact.vue')
	},
	{
		path: '/help',
		name: 'Help',
		component: () => import('../views/Footer/Help.vue')
	},
	{
		path: '/suggest',
		name: 'Suggest',
		component: () => import('../views/Footer/Suggest.vue')
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router