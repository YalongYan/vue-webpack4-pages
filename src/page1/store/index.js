import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 定义state，并将listName设置为一个空数组
const state = {
  treeData: [],
  tree_result: { name: '', id: '' }
}
// 定义mutations，可以传参，用于设置state里的listName
const mutations = {
  set_selectItem: (state, id) => {
    var _id = id
    function getArray (arr) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === _id) {
          arr[i].checked = true
          state.tree_result.name = arr[i].name
          state.tree_result.id = arr[i].id
        } else if (arr[i].children && arr[i].children.length !== 0) {
          arr[i].checked = false
          getArray(arr[i].children)
        } else {
          arr[i].checked = false
        }
      }
    }
    getArray(state.treeData)
  },
  set_loadNewItem: (state, Obj) => {
    var _id = Obj.id
    var childObj = Obj.arr
    function getArray (arr) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === _id) {
          var level = arr[i].level
          if (childObj.length === 0) {
            arr[i].hasChildren = false
          } else {
            arr[i].hasChildren = true
            for (let j = 0; j < childObj.length; j++) {
              childObj[j].level = level + 1
            }
            arr[i].children = childObj
            setTimeout(function () {
              arr[i].open = !arr[i].open
            }, 100)
          }
        } else if (arr[i].children && arr[i].children.length !== 0) {
          getArray(arr[i].children)
        }
      }
    }
    getArray(state.treeData)
  },
  set_state: (state, newData) => {
    state.treeData = newData
  }
}
// 定义getters，用于获取出state里的对象
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
