<template>
  <div class="analysiscontainer">
    <el-row>
      <div class="analysistable">
        <el-row>
          <p>上级和处室共罚款{{penalytotal}}元</p>
        </el-row>
      </div>
      <div class="analysischarts">
        <el-row>
          <penaltycompie v-if="departpenaltycode=='11001'" />
        </el-row>
      </div>
      <div class="analysischarts">
        <el-row>
            <penaltycombar v-if="departpenaltycode=='11001'"/>
        </el-row>
      </div>

      <div class="analysistable">
        <el-row>
          <p>上级共罚款{{superpentotal}}元</p>
        </el-row>
      </div>
       <div class="analysischarts">
        <el-row>
          <superpenaltybar v-if="superpenaltycode=='11001'"/>
        </el-row>
      </div>
    </el-row>
  </div>
</template>

<script>
 import penaltycompie from "./penaltycharts/penaltycompie";
 import penaltycombar from "./penaltycharts/penaltycombar";
 import superpenaltybar from "./penaltycharts/superpenaltybar";
 import {mapState} from "vuex";
  export default {
    name: "penaltyindex",
    components:{penaltycompie,penaltycombar,superpenaltybar},
    data() {
      return {
        penalytotal: this.$store.state.basechartdata.pentotal,
        departpentotal: this.$store.state.basechartdata.departpentotal,
        superpentotal: this.$store.state.basechartdata.superpentotal,
      }
    },
     computed: mapState({
      departpenaltycode: (state) => state.basechartdata.departpenaltycode,
      superpenaltycode: (state) => state.basechartdata.superpenaltycode,
    }),
  }
</script>

<style lang="scss" scoped>
  @import "./src/styles/issuesreport/css/issuesreportstatistics";

  .penaltycontainer {
    background-color: white;
    margin-bottom: 6px;
  }

</style>
