<template>


  <div class="app-container">
    <el-form :ref="form"  :model="form"  label-width="120px">


      <el-row>
        <el-row>
          <el-form-item label="变化序号">
          <el-input v-model="form.variatioserial"/>
        </el-form-item>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="变化公司">
              <el-radio-group v-model="form.variatiocompany">
                <el-radio-button label="义棠"></el-radio-button>
                <el-radio-button label="倡源"></el-radio-button>
                <el-radio-button label="城峰"></el-radio-button>
                <el-radio-button label="青云"></el-radio-button>
                <el-radio-button label="安益"></el-radio-button>
                <el-radio-button label="瑞东"></el-radio-button>
              </el-radio-group>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item  label="变化分级" class="postInfo-container-item">
              <el-rate
                v-model="form.variationclass"
                :max="3"
                :colors="['#FF9900','#F7BA2A','#99A9BF']"
                style="display:inline-block"
              ></el-rate>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="变化分类">
              <el-radio-group v-model="form.variationcat">
                <el-radio-button label="突发性变化"></el-radio-button>
                <el-radio-button label="可预测性变化"></el-radio-button>
              </el-radio-group>
            </el-form-item>
          </el-col>

        </el-row>


        <el-row>

          <el-col :span="24">
            <el-form-item label="变化专业">
              <el-radio-group v-model="form.varcatdetail">
                <el-radio-button label="通风"></el-radio-button>
                <el-radio-button label="机电"></el-radio-button>
                <el-radio-button label="运输"></el-radio-button>
                <el-radio-button label="供电"></el-radio-button>
                <el-radio-button label="通讯"></el-radio-button>
                <el-radio-button label="生产"></el-radio-button>
                <el-radio-button label="地质"></el-radio-button>
                <el-radio-button label="环境"></el-radio-button>
                <el-radio-button label="监测监控"></el-radio-button>
              </el-radio-group>
            </el-form-item>
          </el-col>

        </el-row>

        <el-row>
          <el-col :span="6">
            <el-form-item label="开始时间">

              <div class="block">
                <el-date-picker
                  v-model="form.variaenddate"
                  type="datetime"
                  placeholder="选择日期时间"
                  default-time="12:00:00">
                </el-date-picker>
              </div>

            </el-form-item>


          </el-col>

          <el-col :span="6">
            <el-form-item style="width: 100%" label="结束时间">

              <div class="block">
                <el-date-picker
                  v-model="form.variacontent"
                  type="datetime"
                  placeholder="选择日期时间"
                  default-time="12:00:00">
                </el-date-picker>
              </div>

            </el-form-item>


          </el-col>


        </el-row>

        <el-row>
          <el-col :span="6">
            <el-form-item label="采取措施">
              <el-input v-model="form.variaprogress" type="input"/>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="施工队组">
              <el-input v-model="form.variaconstruction" type="input"/>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="跟班领导">
              <el-input v-model="form.followupleader" type="input"/>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="分管领导">
              <el-input v-model="form.leaderincharge" type="input"/>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="变化内容">
          <el-input v-model="form.variacontent" type="textarea"/>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit()">Create</el-button>
          <el-button @click="onCancel">Cancel</el-button>
        </el-form-item>

      </el-row>
    </el-form>

  </div>
</template>

<script>
  import { createvaria } from '@/api/variationmanage/variation'
  import axios from 'axios'
  export default {
    name: 'variation',
    data() {
      return {
        form: {

        }
      }
    },
    methods: {
      onSubmit() {
        // let formData = JSON.stringify(this.form)
        // console.log(formData)
        // axios.post('http://127.0.0.1:8000/api/createvaria/',this.form).then(response=>{console.log(response)})
        createvaria(this.form).then(response => {
          this.results = response.data
        }, response => {
          console.log('error')
        })
      },
      onCancel() {
        this.$message({
          message: 'cancel!',
          type: 'warning'
        })
      }
    }
  }
</script>

<style scoped>
  .line {
    text-align: center;
  }
</style>

