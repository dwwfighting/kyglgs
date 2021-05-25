
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
import mobile_layout from '@/layout/mobile_layout'
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
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
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
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '一矿一档图表', icon: 'dashboard', affix: true }
    }
    ]
  },
  {
    // 数据', '事故', '文书', '罚款', '检查', '全国', '资源', '视频'
    path: '/m',
    component: mobile_layout,
    hidden: true,
    redirect: '/m/m_data',
    children: [{
      path: 'm_data',
      name: 'm_data',
      component: () => import('@/views/mobile/componets/mobile_data'),
      meta: { title: '关注', icon: 'dashboard' }
    },
    {
      path: 'm_accident',
      component: () => import('@/views/mobile/mobil_index'),
      redirect: 'm_accident/m_accidents/',
      meta: { title: '事故' },
      children: [
        {
          path: 'm_accidents',
          name: 'm_accidents',
          component: () => import('@/views/mobile/componets/mobile_accident'),
          meta: { title: '事故' }
        },
        {
          path: 'm_accidents/:id',
          name: 'accidentdetail',
          component: () => import('@/views/mobile/componets/accidentcomponents/accidentdetail'),
          meta: { title: '事故详情' }
        }
      ]
    },
    {
      path: 'm_complusive',
      name: 'm_complusive',
      component: () => import('@/views/mobile/componets/mobile_complusive'),
      meta: { title: '文书' }
    },
    {
      path: 'm_penlty',
      name: 'm_penlty',
      component: () => import('@/views/mobile/componets/mobile_penlty'),
      meta: { title: '考核' }
    },
    {
      path: 'm_check',
      name: 'm_check',
      component: () => import('@/views/mobile/componets/mobile_check'),
      meta: { title: '检查' }
    },
    {
      path: 'm_global',
      name: 'm_global',
      component: () => import('@/views/mobile/componets/mobile_global'),
      meta: { title: '全国' }
    },
    {
      path: 'm_source',
      name: 'm_source',
      component: () => import('@/views/mobile/componets/mobile_source'),
      meta: { title: '资源' }
    },
    {
      path: 'm_vedio',
      name: 'm_vedio',
      component: () => import('@/views/mobile/componets/mobile_vedio'),
      meta: { title: '视频' }
    }
    ]
  },

  // {
  //   path: '/m',
  //   component: mobile_layout,
  //   hidden: true,
  //   children: [{
  //     path: 'index',
  //     name: 'mobileindex',
  //     component: () => import('@/views/dashboard/mobil_index'),
  //     meta: { title: '一矿一档手机端', icon: 'dashboard' }
  //   }
  //   ]
  // },
  // {
  //   path: '/companies',
  //   component: Layout,
  //   redirect: '/companies/index',
  //   meta: {
  //     title: 'componies',
  //     icon: 'form'
  //   },
  //   children: [{
  //     path: 'componies',
  //     name: 'componies',
  //     component: () => import('@/views/companies/index'),
  //     meta: { title: '煤业公司', icon: 'form' }
  //   }
  //   ]
  // },
  // {
  //   path: '/bebetter',
  //   component: Layout,
  //   // redirect: '/totalreport/',
  //   name: 'totalreport',
  //   children: [{
  //     path: 'index',
  //     name: 'Totalreport',
  //     component: () => import('@/views/totalreport/index'),
  //     meta: { title: '隐患排查目标考核', icon: 'table' }
  //   }]
  // },
  // {
  //   path: '/variation',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Variationindex',
  //       component: () => import('@/views/variation/index'),
  //       meta: { title: '变化管理（维护中）', icon: 'form' }
  //     }
  //   ]
  // },
  //
  // {
  //   path: '/nested',
  //   component: Layout,
  //   redirect: '/nested/menu1',
  //   name: 'Nested',
  //   meta: {
  //     title: '班组建设（维护中）',
  //     icon: 'peoples'
  //   },
  //   children: [
  //     {
  //       path: 'menu1',
  //       component: () => import('@/views/nested/menu1/index'), // Parent router-view
  //       name: 'Menu1',
  //       meta: { title: 'Menu1' },
  //       children: [
  //         {
  //           path: 'menu1-1',
  //           component: () => import('@/views/nested/menu1/menu1-1'),
  //           name: 'Menu1-1',
  //           meta: { title: 'Menu1-1' }
  //         },
  //         {
  //           path: 'menu1-2',
  //           component: () => import('@/views/nested/menu1/menu1-2'),
  //           name: 'Menu1-2',
  //           meta: { title: 'Menu1-2' },
  //           children: [
  //             {
  //               path: 'menu1-2-1',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
  //               name: 'Menu1-2-1',
  //               meta: { title: 'Menu1-2-1' }
  //             },
  //             {
  //               path: 'menu1-2-2',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
  //               name: 'Menu1-2-2',
  //               meta: { title: 'Menu1-2-2' }
  //             }
  //           ]
  //         },
  //         {
  //           path: 'menu1-3',
  //           component: () => import('@/views/nested/menu1/menu1-3'),
  //           name: 'Menu1-3',
  //           meta: { title: 'Menu1-3' }
  //         }
  //       ]
  //     },
  //     {
  //       path: 'menu2',
  //       component: () => import('@/views/nested/menu2/index'),
  //       meta: { title: 'menu2' }
  //     }
  //   ]
  // },
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
      // {
      //   path: 'issuesreport1',
      //   name: 'Issuesreport1',
      //   component: () => import('@/views/reportcenter/issuesreport1'),
      //   meta: { title: '隐患排查报表1', icon: 'table' }
      // },
      // {
      //   path: 'variareport',
      //   name: 'Variareport',
      //   component: () => import('@/views/reportcenter/variareport'),
      //   meta: { title: '变化管理报表', icon: 'table' }
      // },
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
        meta: { title: '行业标准', icon: 'table' }
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
    path: '/issuesreform',
    component: Layout,
    name: 'issuesreform',
    meta: { title: '隐患排查治理', icon: 'example' },
    children: [
      {
        path: 'issuesentry',
        name: 'issuesentry',
        component: () => import('@/views/issuesentry/issuesentry'),
        meta: { title: '隐患排查治理', icon: 'table' }
      }
    ]
  },
  {
    path: 'backend-link',
    component: Layout,
    children: [
      {
        path: 'http://115.29.149.143:8080/admin',
        meta: { title: '后台维护', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

// eslint-disable-next-line no-undef
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
