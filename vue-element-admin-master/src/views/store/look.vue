<template>
  <div>
    <el-button type="primary" @click="addForm('ruleForm')">添加一级类别</el-button>
    <el-dropdown :hide-on-click="false">
      <span class="el-dropdown-link">
        <el-checkbox v-model="checked" />

        11<i class="el-icon-arrow-down el-icon--right" />
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
        <el-dropdown-item disabled>双皮奶</el-dropdown-item>
        <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>

</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      checked: true
    }
  },
  created() {
    this.getOptions()
  },
  methods: {
    getOptions() {
      axios.get('http://localhost:3000/fellow/')
        .then((res) => {
          // 请求返回的数据
          console.log(res)
          // 赋值
          this.objData = res
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
<style  scoped>

    .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
