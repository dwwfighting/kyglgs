<template>
  <div class="dashboard-editor-container">
    <el-row style="text-align: center">

      <el-menu
        :default-active="show"
        class="el-menu-demo"
        mode="horizontal"
        text-color="#fff"
        active-text-color="#ffd04b"
        background-color="#21314d"
        @select="handleSelect"
      >
        <el-menu-item index="data">数据可视</el-menu-item>
        <el-menu-item index="stand">标准化</el-menu-item>
        <el-menu-item index="issues">隐患排查考核</el-menu-item>
        <el-menu-item index="iloveclass">班组建设</el-menu-item>
         <el-menu-item index="majorissues">较大问题</el-menu-item>
      </el-menu>
    </el-row>
    <keep-alive>
    <test v-if="show=='data'"/>
    </keep-alive>
    <tabletemp v-if="show=='stand'"/>
    <issuescheck v-if="show=='issues'"/>
    <iloveclass v-if="show=='iloveclass'"/>
    <majorissues v-if="show=='majorissues'"/>
  </div>

</template>

<script>
  // import { getmaindata } from '@/api/indexrebuild/index'
  import BoxCard from './components/BoxCard'
  import ChartsPane from './components/ChartsPane'
  import RaddarChart from './components/RaddarChart'
  import CalendarChart from './components/CalendarChart'
  import VariaTable from './components/VariaTable'
  import Companies from './components/companies/Companies'
  import test from './components/test1'
  import CheckRecord from './components/checkrecord'
  import barchar from './components/BarChart'
  import tabletemp from "./components/tabletemp";
  import issuescheck from "./components/issuescheck";
  import iloveclass from "./components/iloveclass";
  import majorissues from "./components/majorissues";

  export default {
    name: 'Index',
    components: {
      BoxCard,
      ChartsPane,
      VariaTable,
      RaddarChart,
      CalendarChart,
      test,
      barchar,
      CheckRecord,
      Companies,
      tabletemp,
      issuescheck,
      iloveclass,
      majorissues
      // NotificationCount
    },
    data() {
      return {
        activeIndex: this.show,
        activeName: 'second',
        posts: [{id: 1, title: 'a1', content: 'b1', publish: '2020'}, {
          id: 2,
          title: 'a2',
          content: 'b2',
          publish: '2021'
        }],
        show:'data',
        postfontsize: 1,
        status: ''
      }
    },
    created() {
      },
    computed:{
      },
    methods: {
    handleSelect(key, key2) {
      this.show = key
    },
    },
  }
</script>

<style lang="scss" scoped>
  @import "@/styles/rebuildindex.scss";

  /deep/ .el-tabs__item {
    font-size: 16px;
  }

  .dashboard-editor-container {
    padding: 0px;
    background-color: #eeeeee;
    position: relative;
    /*background: url("../../styles/img/bg.jpg");*/

  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>
