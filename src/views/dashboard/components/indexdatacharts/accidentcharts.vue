<template>
  <div class="analysiscontainer">
    <el-row>
      <div class="analysistable">
        <el-row>
          <p v-for="(v ,i ) in safedays">{{i}}安全无事故{{v}}天</p>
          <p>共发生{{accidentalldata}}起{{accidentallpeople}}人次安全事故</p>
        </el-row>
      </div>
      <div class="analysischarts">

        <el-row :gutter="6">

          <el-col :lg="12" :xl="12" :sm="24">
          <accidentnum v-show=true :accidentdata="accidentnum1" :title="['事故数据分析']"/>
          </el-col>

          <div class="analysissm">
          <el-col :lg="12" :xl="12" :sm="24">
            <accidentnum v-show=true :accidentdata="accidentcatnum1" :title="['事故类型分析']"/>
          </el-col>
          </div>
        </el-row>
      </div>





      <div class="analysischarts">
        <el-row>
          <rankaccidentbar/>
        </el-row>
      </div>

      <div class="analysischarts">
        <el-row>
          <accidentweekfre/>
        </el-row>
      </div>

      <div class="analysischarts">


        <el-row>
          <accidentnumbar/>
        </el-row>


      </div>


    </el-row>
  </div>
</template>

<script>
  import accidentnum from "./accidentchart/accidentnum";
  import accidentnumbar from "./accidentchart/accidentnumbar";
  import rankaccidentbar from "./accidentchart/rankaccidentbar";
  import accidentweekfre from "./accidentchart/accidentweekfre";
  import{mapState} from 'vuex'
  export default {
    name: "accidentsindex",
    components: {accidentnum, accidentnumbar, rankaccidentbar,accidentweekfre},
    data() {
      return {
        safedays:this.$store.state.basechartdata.safetime
      }
    },
     computed: mapState({
      accidentalldata: (state) => state.basechartdata.accidentnum,
      accidentnum1: (state) => state.basechartdata.accidentdata,
      accidentcatnum1: (state) => state.basechartdata.accidentcatdata,
      accidentallpeople:(state) => state.basechartdata.accidentallpeople
    }),
    created() {
    }
  }
</script>

<style lang="scss" scoped>

  @import "./src/styles/issuesreport/css/issuesreportstatistics";


</style>
