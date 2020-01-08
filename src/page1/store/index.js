import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  treeData: []
}
const mutations = {
  set_state: (state, newData) => {
    state.treeData = newData
  }
}
const getters = {
  get_treeData: state => {
    return state.treeData
  }
}

export default new Vuex.Store({
  getters,
  state,
  mutations
})
