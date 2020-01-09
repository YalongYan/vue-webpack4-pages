<template>
  <div>
    <a href="http://127.0.0.1:8080/page1.html">前往page1页面</a>
    <br/>
    <a href="http://127.0.0.1:8080/page3.html">前往page3页面</a>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    <img class="img" :src="img1">
    <img class="img" :src="renameimg2">
  </div>
</template>
<script>
import img1 from '@/assets/img/1.jpg'
import img2 from '@/assets/img/2.jpg'

  export default {
    data() {
      return {
        img1,
        renameimg2 :img2,
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    }
  }
</script>
<style lang='scss'>
.img{
  width: 350px;
  height: 220px;
}
</style>
