import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// let head = document.getElementsByTagName('head');
// let meta = document.createElement('meta');
// meta.name = 'referrer';
// //根据实际情况修改referrer的值，可选值参考上文
// meta.content = 'origin-when-cross-origin';
// head[0].appendChild(meta);
/* Layout */
import Layout from '@/layout'

// import componentsRouter from './modules/components'
// import chartsRouter from './modules/charts'
// import tableRouter from './modules/table'
// import nestedRouter from './modules/nested'
/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 // * meta : {
 //    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component:Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/indexrebuild'),
      meta: { title: '一矿一档图表', icon: 'dashboard' }
    },
    ]
  },
    {
    path: '/companies',
    component:Layout,
    redirect: '/companies/index',
    meta: {
      title: 'componies',
      icon: 'form'
    },
    children: [{
      path: 'componies',
      name: 'componies',
      component: () => import('@/views/companies/index'),
      meta: { title: '煤业公司', icon: 'form' }
    },
    ]
  },
  {
    path: '/bebetter',
    component: Layout,
    // redirect: '/totalreport/',
    name: 'totalreport',
    children: [{
      path: 'index',
      name: 'Totalreport',
      component: () => import('@/views/totalreport/index'),
      meta: { title: '隐患排查目标考核', icon: 'table' }
    }]
  },
  {
    path: '/variation',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Variationindex',
        component: () => import('@/views/variation/index'),
        meta: { title: '变化管理（维护中）', icon: 'form' }
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: '班组建设（维护中）',
      icon: 'peoples'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: 'menu2' }
      }
    ]
  },
    {
    path: '/reportcenter',
    component: Layout,
    name: 'Reportcenter',
    meta: { title: '报表中心', icon: 'table' },
    children: [
     {
        path: 'checkrecordedit/:id(\\d+)',
        component: () => import('@/views/reportcenter/checkrecordedit'),
        name: 'EditCheckrecord',
        meta: { title: 'editcheckrecord', noCache: true, activeMenu: '/reportcenter/issuesreport' },
        hidden: true
      },

      {
        path: 'issuesreport',
        name: 'Issuesreport',
        component: () => import('@/views/reportcenter/issuesreport'),
        meta: { title: '隐患排查报表', icon: 'table' }
      },
     {
        path: 'issuesreport1',
        name: 'Issuesreport1',
        component: () => import('@/views/reportcenter/issuesreport1'),
        meta: { title: '隐患排查报表1', icon: 'table' }
      },
      {
        path: 'variareport',
        name: 'Variareport',
        component: () => import('@/views/reportcenter/variareport'),
        meta: { title: '变化管理报表', icon: 'table' }
      },
      {
        path: 'constructionrp',
        name: 'Construction',
        component: () => import('@/views/reportcenter/constructionrp'),
        meta: { title: '班组建设报表', icon: 'table' }
      }
    ]
  },
    {
    path: '/learning',
    component: Layout,
    name: 'Learning',
    meta: { title: '学习资料', icon: 'example' },
    children: [
      {
        path: 'baseregulation',
        name: 'baseregulation',
        component: () => import('@/views/learning/baseregulation'),
        meta: { title: '煤安规程', icon: 'table' }
      },
      {
        path: 'aqstandard',
        name: 'aqstandard1',
        component: () => import('@/views/learning/aqstandard'),
        meta: { title: 'AQ标准', icon: 'tree' }
      },
      {
        path: 'videosource',
        name: 'videosource',
        component: () => import('@/views/learning/videosource'),
        meta: { title: '视频资料', icon: 'tree' }
      }
    ]
  },
  {
    path: '/config',
    component: Layout,
    redirect: '/config/issueconfig',
    name: 'config',
    meta: { title: '配置维护', icon: 'example' },
    children: [
      {
        path: 'issueconfig',
        name: 'Issueconfig',
        component: () => import('@/views/config/issueconfig'),
        meta: { title: '隐患排查自动生成', icon: 'table' }
      },
      {
        path: 'variation',
        name: 'Variation',
        component: () => import('@/views/config/variation'),
        meta: { title: '变化管理配置页', icon: 'tree' }
      },
      {
        path: 'resourceupload',
        name: 'resourceupload',
        component: () => import('@/views/config/resourceupload'),
        meta: { title: '资料上传', icon: 'tree' }
      }
      // {
      //   path: 'illegal',
      //   name: 'Illegal',
      //   component: () => import('@/views/illegal/index'),
      //   meta: { title: '三违情况', icon: 'tree' }
      // },
      // {
      //   path: 'accident',
      //   name: 'Accident',
      //   component: () => import('@/views/accident/index'),
      //   meta: { title: '事故情况', icon: 'tree' }
      // },
      // {
      //   path: 'fine',
      //   name: 'Fine',
      //   component: () => import('@/views/fine/index'),
      //   meta: { title: '罚款情况', icon: 'tree' }
      // },
      // {
      //   path: 'enforcement',
      //   name: 'Enforcement',
      //   component: () => import('@/views/enforcement/index'),
      //   meta: { title: '文书情况', icon: 'tree' }
      // }
    ]
  },



  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'http://www.kjnyjt.com',
        meta: { title: '凯嘉官网', icon: 'link' }
      }
    ]
  },
  {
    path: 'backend-link',
    component: Layout,
    children: [
      {
        path: 'http://192.168.5.214:8000/admin',
        meta: { title: '后台维护', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
