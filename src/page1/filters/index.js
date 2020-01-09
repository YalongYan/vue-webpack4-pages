import Vue from 'vue'

Vue.filter('dateFormat', (val) => {
  return val + '---' + 'I am good'
})
