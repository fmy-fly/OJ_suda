import HomeView from '@/views/HomeView.vue'
import searchView from '@/views/searchView.vue'
import AdminView from '@/views/AdminView.vue'
import AboutView from '@/views/AboutView.vue'
import NoAuthView from '@/views/NoAuthView.vue'

export const routes = [

  {
    path: '/',
    name: '浏览题目',
    component: searchView,

  },

  {
    path: '/admin',
    name:"管理员",
    component : AdminView,
    meta : {
      access:"canAdmin"
    }
  },

  {
    path:"/noAuth",
    name:"没有权限",
    component : NoAuthView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView,
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
  },
];
