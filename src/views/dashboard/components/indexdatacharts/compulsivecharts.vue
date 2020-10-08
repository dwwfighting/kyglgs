<template>
  <div class="analysiscontainer">
    <el-row>

      <div class="analysistable">
        <el-row>
          <p>文书下发情况</p>
        </el-row>
      </div>
      <div class="analysischarts">
        <el-row>
          <compulsivenumcharts  />
        </el-row>
      </div>



    </el-row>
  </div>
</template>

<script>
  import compulsivenumcharts from "./compulsivecharts/compulsivenumcharts";
    export default {
        name: "compulsiveindex",
        components:{compulsivenumcharts}
    }
</script>

<style scoped lang="scss">
 @import "./src/styles/issuesreport/css/issuesreportstatistics";
</style>
