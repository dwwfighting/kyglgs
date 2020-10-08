<template>
  <div class="dashboard-editor-container">
    <el-row style="text-align: center">
       <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1">概述</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="3" >消息中心</el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">更多</a></el-menu-item>
      </el-menu>
    </el-row>
    <template>

<!--            <div class="father">-->
<!--                <h3>这里是父组件</h3>-->
<!--                <child>-->
<!--                    <div class="tmpl">-->
<!--                      <span>菜单1</span>-->
<!--                      <span>菜单2</span>-->
<!--                      <span>菜单3</span>-->
<!--                      <span>菜单4</span>-->
<!--                      <span>菜单5</span>-->
<!--                      <span>菜单6</span>-->
<!--                    </div>-->
<!--                </child>-->
<!--            </div>-->
    <div class="father">
        <h3>这里是父组件</h3>

            <div class="tmpl" slot="up">
              <span>菜单1</span>
              <span>菜单2</span>
              <span>菜单3</span>
              <span>菜单4</span>
              <span>菜单5</span>
              <span>菜单6</span>
            </div>
      <test>
           <div class="tmpl">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>6</span>
            </div>
            <div class="no-name">我是嵌在子组件内不具有属性名的标签</div>
            <div class="tmpl" slot="down">
              <span>asdf</span>
              <span>asdf</span>
              <span>asdf</span>
              <span>asdf</span>
              <span>菜单5</span>
              <span>菜单6</span>
            </div>
        </test>
    </div>
    </template>
    <template v-if="false">

    <el-row>
        <el-tabs v-model="activeName" stretch class="dashboard-tabs" @tab-click="handleClick">
          <el-tab-pane label="隐患排查目标考核" name="first"></el-tab-pane>
          <el-tab-pane label="变化管理" name="second"></el-tab-pane>
          <el-tab-pane label="班组建设" name="third"></el-tab-pane>
        </el-tabs>
    </el-row>

    <el-row style="padding: 5px" gutter="8">
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 8}">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <el-col span="12">
              <p>实施中的变化</p>
              <p class="minor-text">共有{{aa}}</p>
            </el-col>
            <el-col  span="12">
              <el-button class="detail-class" style="float:right" type="text">查看详细<i class="el-icon-d-arrow-right"></i></el-button>
            </el-col>
          </div>

          <div>
            <varia-table/>
          </div>

        </el-card>

      </el-col>

     <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 16}">
        <ChartsPane />
      </el-col>
    </el-row>



    <el-row style="padding:5px" gutter="8">
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 8}">
       <CalendarChart />
      </el-col>

     <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 8}">
        <box-card />
      </el-col>

     <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 8}">
        <Navbar/>
      </el-col>

    </el-row>

    </template>

  </div>

</template>

<script>

import BoxCard from './components/BoxCard'
import ChartsPane from './components/ChartsPane'
import RaddarChart from "./components/RaddarChart";
import CalendarChart from "./components/CalendarChart";
import VariaTable from './components/VariaTable'
import test from "./components/test1"
export default {
  name: 'Index',
  components: {
    BoxCard,
    ChartsPane,
    VariaTable,
    RaddarChart,
    CalendarChart,
    test
  },

  created() {
    // const req=require.context('./components',false, /\.vue$/)
    // console.dir(req)
    // console.log(req.keys())
    // console.log('id:',req.id)
  },
  data() {
    return {
      activeIndex:"1",
      aa: "电风扇",
      activeName:"second",
      posts:[{id:1,title:'a1',content:'b1',publish:'2020'},{id:2,title:'a2',content:'b2',publish:'2021'}],
      postfontsize:1,
    }
  },

}
</script>

<style lang="scss" scoped>
/deep/.el-menu-demo{
    display: block;
    font-size: 28px !important;
  }
.box-card {
  /deep/ .el-card__header {
    padding: 0px 0px 0px 20px;
    font-size: 1.125rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    color: white;
    background-color: #FFA726;

    .minor-text{
      font-size: 0.95rem;
    }
    .detail-class{
      height: 100%;
      color: white;
    }
  }
  /deep/.el-card__body{
    padding: 0;
    font-size: 1.125rem;
  }

}


/deep/.el-tabs__item{

    font-size: 16px ;
}

.dashboard-editor-container {
  padding: 5px;
  background-color: #eeeeee;
  position: relative;

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
