<template>
  <div class="analysiscontainer">
    <el-row>

      <div class="analysistable">
        <el-row>
          <p>处室检查次数{{departchecktime}}次</p>
        </el-row>
      </div>
      <div class="analysischarts">
        <el-row>
          <departcheckchart  v-if="ckdepatcode=='11001'"/>
        </el-row>
      </div>
<!--      <div class="analysischarts">-->
<!--        <el-row>-->
<!--          <departissueschart  v-if="ckdepatcode=='11001'"/>-->
<!--        </el-row>-->
<!--      </div>-->
      <div class="analysischarts">
        <el-row>
          <departissuescatchart v-if="ckdepatcode=='11001'"/>
        </el-row>
      </div>
      <div class="analysistable">
        <el-row>
          <p>上级检查次数{{superchecktime}}次</p>
        </el-row>
      </div>
      <div class="analysischarts">
        <el-row>
          <supercheckchart v-if="cksupercode=='11001'"/>
        </el-row>
      </div>
      <div class="analysischarts">
        <el-row>
          <superissueschart v-if="cksupercode=='11001'"/>
        </el-row>
      </div>
      <div class="analysischarts">
        <el-row>
          <superissuescat v-if="cksupercode=='11001'"/>
        </el-row>
      </div>


    </el-row>
  </div>
</template>

<script>
  import {mapState} from "vuex";
  import departcheckchart from "./checkcharts/departcheckchart";
  import departissueschart from "./checkcharts/departissueschart";
  import departissuescatchart from "./checkcharts/departissuescatchart";
  import supercheckchart from "./checkcharts/supercheckchart";
  import superissueschart from "./checkcharts/superissueschart";
  import superissuescat from "./checkcharts/superissuescat";

  export default {
    name: "checkindexcharts",
    components: {
      departcheckchart,
      departissueschart,
      departissuescatchart,
      supercheckchart,
      superissueschart,
      superissuescat
    },
    computed: mapState({
      departchecktime: (state) => state.basechartdata.departchecktime,
      superchecktime: (state) => state.basechartdata.superchecktime,
      ckdepatcode: (state) => state.basechartdata.ckdepatcode,
      cksupercode: (state) => state.basechartdata.cksupercode
    }),
  }
</script>

<style lang="scss" scoped>
  @import "./src/styles/issuesreport/css/issuesreportstatistics";

  .checkcontainer {

  }

  .checkcontainer .checkbody {
    margin-bottom: 6px;
    background-color: white;
  }

  .checkcontainer .issuerbody {
    background-color: white;
  }
</style>
