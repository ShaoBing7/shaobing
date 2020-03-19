<template>
  <div>
    <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px" class="demo-ruleForm">
      <el-form-item label="所属类别" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item label="类别名称" prop="region">
        <el-input v-model="ruleForm.region" />
      </el-form-item>
      <el-form-item label="类别编号" prop="count">
        <el-input v-model="ruleForm.count" />
      </el-form-item>
      <el-form-item label="类别图标" prop="icon">
        <el-input v-model="ruleForm.icon" />
      </el-form-item>
      <el-form-item label="品类在售状态" prop="delivery">
        <el-switch v-model="ruleForm.delivery" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { addList } from '@/api/store'
export default {
  data() {
    return {
      ruleForm: {
        name: '',
        region: '',
        delivery: false,
        count: '',
        icon: ''
      },
      rules: {
        name: [
          { required: true, message: '尚未输入', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择类别名称', trigger: 'blur' }
        ],
        count: [
          { required: true, message: '请选择类别编号', trigger: 'blur' }
        ],
        icon: [
          { required: true, message: '请选择类别图标', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      addList({ ...this.ruleForm }).then((res) => {
        console.log(res)
      })
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
