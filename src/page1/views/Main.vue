<template>
  <div class="page-one-ctn">
    <a href="http://127.0.0.1:8080/page2.html">前往page2页面</a>
    <br/>
    <a href="http://127.0.0.1:8080/page3.html">前往page3页面</a>
    <br/>
    <router-link to="/page1-test">test页面</router-link>
    <h1 class="header">page1-main</h1>
    <br/>
    <div class="header">{{ filterDemoValue | dateFormat }}</div>
    <Main/>
  </div>
</template>

<script>
import Main from '@/page1/components/Main'

export default {
  data () {
    return {
      filterDemoValue: 'filter-demo'
    }
  },
  components: {
    Main
  }
}
</script>

<style lang='scss'>
.page-one-ctn {
  .header{
    padding: 0;
    margin: 0;
    padding-left: 20px;
  }
}
</style>
