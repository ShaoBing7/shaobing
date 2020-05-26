import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

const routes = [
  {
    path: '/jurisdiction',
    component:Layout,
    alwaysShow: true,
    name: 'jurisdiction',
    meta: { title: 'jurisdiction', icon: 'zip' },
    children: [
      {
        path: 'add',
        component: () => import('@/views/jurisdiction/add'),
        name: 'storeadd',
        meta: { title: '用户列表', icon: 'pdf' }
      }
      // {
      //   path: 'look',
      //   component: () => import('@/views/store/look'),
      //   name: 'storelook',
      //   meta: { title: '查看商品类别', icon: 'pdf' }
      // }
    ]
  },
  // {
  //   path: '/add',
  //   name: 'add',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "add" */ '../views/add.vue'),
  // },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
