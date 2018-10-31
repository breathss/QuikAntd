export default [
   // app
   {
    path: '/',
    component: '../layouts/BasicLayout',
    //Routes: ['src/pages/Authorized'],
    //authority: ['admin', 'user'],
    routes: [
      { path: '/', redirect: '/dashboard' },
      {
        name:'主页',
        path:'/dashboard',
        component: '../layouts/HomeLayout',
        routes:[
          { path: '/dashboard', redirect: '/dashboard/home' },
          { path: '/dashboard/home', component: './Dashboard/HomePage' },
          { path: '/dashboard/mine', component: './Dashboard/MinePage' },
        ]
      },
      /**
       * 项目相关目录
       */
      {
        name:'项目相关业',
        path:'/project',
       // component: '../layouts/HomeLayout',
        routes:[]
      },
      { path: '/detail/:id',component: './Project/DetailPage' },
      { path: '/support/:id',component: './Project/SuppertPage' },
      { path: '/buy/:id',component: './Project/BuyPage' },
      
      
       {
        component: '404',
      },
    ]
},
// 首页菜单
{
  name:'主页',
  path:'/dashboard',
  component: '../layouts/HomeLayout',
  routes:[
    { path: '/dashboard', redirect: '/dashboard/home' },
    { path: '/dashboard/home', component: './Dashboard/HomePage' },
    { path: '/dashboard/mine', component: './Dashboard/MinePage' },
  ]
},
];
