<template>
  <div type="flex" class="row-bg">
    <el-row :gutter="10">
      <el-col :span="6">
        <div class="grid-content bg-purple">

          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>煤业公司</span>
              <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div v-for="(value,key) in minecompanies" :key="key" class="text item">
              <a href="http://www.baidu.com"> {{ value.coalcompanyname }}</a>
              <router-view/>
            </div>
          </el-card>

        </div>
      </el-col>

      <el-col :span="12">
        <div class="grid-content bg-purple">

        <Dynamicdata/>

        </div>
      </el-col>

      <el-col :span="6">
        <div class="grid-content bg-purple">
           <todo-list />
        </div>
      </el-col>

    </el-row>

    <el-row :gutter="10">

      <el-col :span="6">
        <div class="grid-content bg-purple">
         <issues/>

        </div>
      </el-col>

      <el-col :span="6">
        <div class=" grid-content bg-purple">
           <penalty/>
        </div>
      </el-col>

      <el-col :span="6">
        <div class="grid-content bg-purple">
          <issues />
        </div>
      </el-col>

      <el-col :span="6">
        <div class="grid-content bg-purple">
          <issues />
        </div>
      </el-col>
    </el-row>

  </div>
  <!--     <div id='main' :style="{width: '500px', height: '500px'}" />-->

</template>

<script>
import Dynamicdata from './components/dynamicdata'
import TodoList from './components/TodoList'
import issues from './components/issues'
import penalty from './components/Penalty'
import BarChart from './components/BarChart'
import {mapState} from 'vuex'

  export default {
    name:'companies',
    components:{Dynamicdata,TodoList,issues,penalty,BarChart},
    data() {
      return {

      }
    },
    computed:{
     minecompanies(){
        return this.$store.state.superorgbasedata.minecompanies
        // set(){}
      }
      },
    created() {
       // companyList('my').then(response=>{
       //   this.minecompanies=response.data
       //   console.log(this.minecompanies)
       // },response=>{
       //   console.log('error')
       // })
      // this.getdata()
      },
    // computed:mapState(['minecompanies']),
    // methods: {
    //  getdata(){
    //    // this.$store.dispatch('tempstore/getcompanies')
    //    this.$store.commit('tempstore/addminecompanies',this.minecompanies)
    //  },
    //
    //   },

  }


</script>

<style lang="css" scoped>
  /*@import "~@/styles/companies/css/app.css";*/

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    margin-top: 10px;
    min-height: 155px;
    height: 400px;
    background-color: white;
  }

</style>
