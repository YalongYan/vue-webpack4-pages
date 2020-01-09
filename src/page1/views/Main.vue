<template>
  <div class="page-one-ctn">
    <router-link to="/page1-test">test页面</router-link>
    <h1 class="header">page1-main</h1>
    <Main/>
  </div>
</template>

<script>
import Main from '@/page1/components/Main'

export default {
  data () {
    return {
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
