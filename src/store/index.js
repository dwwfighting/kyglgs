import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'
import superorgbasedata from './modules/superorgbasedata'
import basechartdata from "@/store/modules/basechartdata";

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
    superorgbasedata,
    basechartdata
  },
  getters
})

export default store
