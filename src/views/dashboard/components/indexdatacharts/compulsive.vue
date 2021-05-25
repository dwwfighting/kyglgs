<template>
  <div class="analysiscontainer">
    <el-row>
      <div class="analysischarts">
        <el-row :gutter="4">
          <el-col :lg="8" :xl="8" :xs="24" :sm="24" :md="24">
            <Compulbar />
          </el-col>
          <el-col :lg="8" :xl="8" :xs="24" :sm="24" :md="24">
            <compulsivetable />
          </el-col>
          <el-col :lg="8" :xl="8" :xs="24" :sm="24" :md="24">
<!--            <compulsivecat />-->
          </el-col>
        </el-row>
      </div>
    </el-row>
  </div>
</template>

<script>
import Compulbar from './compulsivecharts/compulsivebar'
import compulsivetable from './compulsivecharts/compulsivetable'
import compulsivecat from './compulsivecharts/compulsivecat'
export default {
  name: 'Compulsive',
  components: { compulsivetable, compulsivecat, Compulbar }
}
</script>

<style scoped lang="scss">
 /*@import "./src/styles/issuesreport/css/issuesreportstatistics";*/
</style>
