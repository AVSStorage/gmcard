import Vue from 'vue'
import Vuex from 'vuex'
import { mutations, STORAGE_KEY } from './mutations'
import * as actions from './actions'
import plugins from './plugins';
import * as getters from './getters'
Vue.use(Vuex);



export default new Vuex.Store({
  state: {
    textFieldData: []
  },
  getters,
  actions,
  mutations,
  plugins
})

