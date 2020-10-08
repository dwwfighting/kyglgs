<template>
  <div>
    <el-form  ref="form" :model="sizeForm" label-width="150px" size="mini">

      <el-form-item label="evaluationsserial">
        <el-input v-model="sizeForm.evaluationsserial"></el-input>
      </el-form-item>

      <el-form-item label="evaluationcom">
        <el-input v-model="sizeForm.evaluationcom"></el-input>
      </el-form-item>

       <el-form-item label="evaluationtype">
        <el-input v-model="sizeForm.evaluationtype"></el-input>
      </el-form-item>

            <el-form-item label="insideAnum">
        <el-input v-model="sizeForm.insideAnum"></el-input>
      </el-form-item>
            <el-form-item label="insideBnum">
        <el-input v-model="sizeForm.insideBnum"></el-input>
      </el-form-item>
            <el-form-item label="insideCnum">
        <el-input v-model="sizeForm.insideCnum"></el-input>
      </el-form-item>

      <el-form-item size="large">
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>


</div>

</template>

<script>

  import {createEvaluation} from '@/api/totalreport/totalreport';
    export default {
        // name: "index",
    data() {
          return {
            sizeForm: {
              evaluationsserial: '',
              evaluationcom: '',
              evaluationtype: '',
              insideAnum: '',
              insideBnum: '',
              insideCnum: '',
            }
          };
    },
    methods: {
      onSubmit() {
        console.log(this.sizeForm)
       createEvaluation(this.sizeForm).then(response => {
          this.createdata = response.data
         console.log(this.createdata)
          }, response => {
              console.log('error')
          })
      }
    }


    }
</script>

<style scoped>

</style>
