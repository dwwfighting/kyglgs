<template>
  <div class="analysiscontainer">
    <el-row :gutter="4">
      <el-col :lg="12" :xl="12" :xs="24" :sm="24" :md="24">
        <penaltycombar  />
      </el-col>
      <el-col :lg="12" :xl="12" :xs="24" :sm="24" :md="24">
        <twopies v-bind="$attrs" v-on="$listeners" />
      </el-col>

<!--      <el-col :lg="8" :xl="8" :xs="24" :sm="24" :md="24">-->
<!--        <superpenaltybar v-if="superpenaltycode=='11001'" />-->
<!--      </el-col>-->
    </el-row>
  </div>
</template>

<script>
import twopies from './penaltycharts/twopies'
import penaltycombar from './penaltycharts/penaltycombar'

export default {
  name: 'Penaltyindex',
  components: { penaltycombar, twopies },
  data() {
    return {

    }
  }

}
</script>

<style lang="scss" scoped>
  .el-row {
    margin-bottom: 4px;

    &:last-child {
      margin-bottom: 0;
    }
  }

</style>
