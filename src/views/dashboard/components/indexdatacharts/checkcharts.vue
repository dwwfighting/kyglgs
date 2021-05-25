<template>
  <div>
    <el-row :gutter="4">
      <el-col :lg="8" :xl="8" :xs="24" :sm="24" :md="24">
<!--        <p style="background-color: #ffffff">处室检查次数{{ departchecktime }}次</p>-->
        <departcheckchart  />
      </el-col>
      <el-col :lg="16" :xl="16" :xs="24" :sm="24" :md="24">
        <departissuescatchart  />
      </el-col>

    </el-row>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
import departcheckchart from './checkcharts/departcheckchart'
import departissuescatchart from './checkcharts/departissuescatchart'

export default {
  name: 'Checkindexcharts',
  components: {
    departcheckchart,
    departissuescatchart
  }
  // computed: mapState({
  //   departchecktime: (state) => state.basechartdata.departchecktime,
  //   superchecktime: (state) => state.basechartdata.superchecktime,
  //   ckdepatcode: (state) => state.basechartdata.ckdepatcode,
  //   cksupercode: (state) => state.basechartdata.cksupercode
  // })
}
</script>

<style lang="scss" scoped>

</style>
