<template>
  <div>
    <el-menu :default-active="this.$router.path" active-text-color="#ffd04b" background-color="#545c64" class="el-menu-demo" mode="horizontal" text-color="#fff" @select="handleSelect">
      <el-submenu v-for="(date,index) in results" :key="index" :index="String(index)">
        <template slot="title">{{ date.coalcompanyname }}</template>
        <el-menu-item v-for="(menu,key) in MenuOptions" :index="index+'_'+key">{{ menu.key }}</el-menu-item>
      </el-submenu>
    </el-menu>
    <el-tabs v-if="a1.indexOf('_0')>=0" v-model="activeName" type="card" style="margin-top:10px;">
      <el-tab-pane v-for="item in tabdata" :key="item.key" :label="item.evaluationtype" :name="String(item.id)">
        <!--        <keep-alive>-->
        <tab-pane v-if="activeName==item.id" :datadetail="item.evaluationsserial" />
        <!--        </keep-alive>-->
      </el-tab-pane>
    </el-tabs>
    <el-tabs v-if="a1.indexOf('_1')>=0" key="2" v-model="activeName1" type="card" style="margin-top:10px;" @tab-click="show_childPage">
      <el-tab-pane v-for="item in tabdata1" :key="item.key" :label="item.label" :name="String(item.key)">
        <compu-pane v-if="activeName1=='compulsive'" key='compulsive' :compulsive1="compulsive" />
        <pena-pane v-if="activeName1=='penalty'" key='penalty' :penalty1="penalty" />
        <accident-pane v-if="activeName1=='accident'" key='accident' :accident1="accident" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { tablist, comprehenList,  accidentList } from '@/api/totalreport/totalreport'
import { get_penalty_query } from "@/api/penaltyapi/penaltyapi"
import {companyList} from '@/api/indexrebuild/totalreport'
import tabPane from './components/TabPane'
import compuPane from './components/CompuPane'
import penaPane from './components/PenaPane'
import accidentPane from './components/AccidentPane'
export default {
  name: 'Totalreport',
  components: { tabPane, compuPane, penaPane, accidentPane },
  data() {
    return {
      activeIndex2: '1',
      results: [],
      aa: [],
      MenuOptions: [
        { label: 'Evaluation', key: '隐患排查治理' },
        { label: 'Safetycomprehensive', key: '安全综合项' },
        { label: 'Standardization', key: '安全生产标准化' },
        { label: 'Variation', key: '变化管理' },
        { label: 'Construction', key: '班组建设' }
      ],
      activeName: '',
      activeName1: '',
      a1: '',
      tabdata1: [
        { label: '文书情况', key: 'compulsive' },
        { label: '罚款情况', key: 'penalty' },
        { label: '事故情况', key: 'accident' }
      ],
      tabdata: [],
      compulsive: [],
      penalty: [],
      accident: [],
      comprehenQuery: {}
    }
  },
  watch: {
    activeName(val) {
      this.$router.push(`${this.$route.path}?tab=${val}`)
    }
    // tabdata:{
    //   handler(newValue, oldValue) {
    //     console.log('aaaa'); // 监听器，监听对象
    //   },
    //   immediate:true
    // }

  },
  created() {
    this.getData()
  },
  mounted() {
  },
  methods: {
    show_childPage(tab, event) {
      // console.log(event)
      this.comprehenQuery['item'] = tab.name

      if (this.activeName1 == 'compulsive') {
        comprehenList(this.comprehenQuery).then(response => {
          this.compulsive = response.data
        }, response => {
          console.log('error')
        })
      } else if (this.activeName1 == 'penalty') {
        get_penalty_query(this.comprehenQuery).then(response => {
          this.penalty = response.data
        }, response => {
          console.log('error')
        })
      } else if (this.activeName1 == 'accident') {
        accidentList(this.comprehenQuery).then(response => {
          this.accident = response.data
        }, response => {
          console.log('error')
        })
      }
    },
    handleSelect(key, key2) {
      this.comprehenQuery['com'] = Number(key2[0]) + 8
      this.a1 = key
      tablist(key).then(response => {
        this.tabdata = response.data.data
      }, response => {
        console.log('error')
      })
    },
    getData() {
      companyList('my').then(response => {
        this.results = response.data
      }, response => {
        console.log('error')
      })
    }
  }
  //   watch:{
  //   results: {
  //     handler(newName, oldName) {
  //       alert(newName)
  //   },
  //   deep: true,
  //   immediate: true}
  // }
}
</script>

<style>
  .el-menu--horizontal > .el-submenu {
    padding: 5px;
    font-size: 18px;
  }

  .tab-container {
    margin: 100px;
  }
</style>

