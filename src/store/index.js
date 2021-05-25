import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'
import organization from './modules/organization'
import basechartdata from '@/store/modules/basechartdata'
import globalaccident from '@/store/modules/globalaccident'
import tagsView from '@/store/modules/tagsView'
import permission from '@/store/modules/permission'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
    globalaccident,
    organization,
    basechartdata,
    tagsView,
    permission
  },
  getters
})

export default store
