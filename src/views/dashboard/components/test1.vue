<template>
<div>

  <div class="container">

    <div class="head">

 <sticky :z-index="10" class-name="sub-navbar">

   <el-row>

        <el-col >
            <el-button-group>
              <el-button type="primary" @click="monthclick">月度</el-button>
              <el-button type="primary" @click="quarclick">季度</el-button>
              <el-button type="primary" @click="yearclick">年度</el-button>
            </el-button-group>
          <el-date-picker
            v-model="timefilter"
            type="daterange"
            size="small"
            align="center"
            unlink-panels
            @change="setDate"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyy-MM-dd"
          >
          </el-date-picker>
        </el-col>
      </el-row>
    </sticky>










    </div>
    <div class="chartsbody">
      <div class="chartscontainer">

        <el-row :gutter="6">
          <el-col :lg="24" :xl="24" :xs="24" :sm="24" :md="24">
            <accidentcharts v-if="accidentcode=='10001' && isRouterAlive"/>
          </el-col>

          <el-col :lg="24" :xl="24" :xs="24" :sm="24" :md="24">

            <el-row>
              <penaltycharts v-if="penaltycode=='10001' && isRouterAlive "/>

            </el-row>

            <el-row>

              <compulsivecharts v-if="compulsivecode=='10001'&& isRouterAlive"/>


            </el-row>


          </el-col>


          <el-col :lg="24" :xl="24" :xs="24" :sm="24" :md="24">
            <checkcharts v-if="checkcode=='10001' && isRouterAlive  "/>

          </el-col>

        </el-row>


      </div>
    </div>

  </div>

</div>
</template>

<script>
  import {mapState} from 'vuex'
  import accidentcharts from "./indexdatacharts/accidentcharts";
  import penaltycharts from "./indexdatacharts/penaltycharts";
  import compulsivecharts from "./indexdatacharts/compulsivecharts";
  import checkcharts from "./indexdatacharts/checkcharts";
  import Sticky from '@/components/Sticky'
  export default {
    name: "button-counter",
    components: {accidentcharts, penaltycharts, compulsivecharts, checkcharts,Sticky},

    data() {
      return {
        img: require('@/styles/img/bg.jpg'),
        isRouterAlive: true,
        timefilter: '',
        listQuery: {
          starttime: '',
          endtime: '',
          // supercheckunit: undefined
        },
      }
    },
    mounted() {

          this.initdata()

    },
    created() {

    },
    computed: mapState({
      accidentcode: (state) => state.basechartdata.accode,
      checkcode: (state) => state.basechartdata.ckcode,
      penaltycode: (state) => state.basechartdata.pycode,
      watchmaxnoaccident: (state) => state.basechartdata.safetime,
      compulsivecode:(state)=>state.basechartdata.compulcode

    }),
    methods: {
      reload() {
        this.isRouterAlive = false;            //先关闭，
        this.$nextTick(function () {
          this.isRouterAlive = true;         //再打开
        })
      },

      monthclick(){
        this.listQuery.starttime = '2020-8-27'
        this.listQuery.endtime = '2020-9-25'
        this.initdata(this.listQuery)
      },

      quarclick(){
        this.listQuery.starttime = '2020-6-26'
        this.listQuery.endtime = '2020-9-25'
        this.initdata(this.listQuery)

      },

      yearclick(){
        var date = new Date();
        var seperator1 = "-";
        var year = date.getFullYear();

        var month = date.getMonth() + 1;

        var strDate = date.getDate();

        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = year + seperator1 + month + seperator1 + strDate;

        this.listQuery.starttime = '2019-12-27'
        this.listQuery.endtime = currentdate
        this.initdata(this.listQuery)
      },
      initdata(param) {
        this.$store.dispatch('superorgbasedata/get_allsuper', param)
        this.$store.dispatch('basechartdata/get_allbasecharts', param)
      },

      setDate(value) {
        if (value == null) {
          this.timefilter = ''
          this.initdata(this.listQuery)
        }
        // if (typeof(this.timefilter) == "undefined"|| this.timefilter == null )  return;
        this.listQuery.starttime = this.timefilter[0]
        this.listQuery.endtime = this.timefilter[1]
        this.initdata(this.listQuery)
      },
    },
    watch: {
      watchmaxnoaccident(val, oldVal) {//普通的watch监听
        this.reload()
      },
    }
  }
</script>

<style  lang="scss">
  @import "~@/styles/issuesreport/css/style.css";
  @import "@/styles/rebuildchartindex.scss";
.components-container div {
  margin: 10px;
}

.time-container {
  display: inline-block;
}
  .chartsbody {

  }




</style>
