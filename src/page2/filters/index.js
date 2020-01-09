import Vue from 'vue'

Vue.filter('dateFormat', (date, format) => {
  return date + '- -' + format
})
