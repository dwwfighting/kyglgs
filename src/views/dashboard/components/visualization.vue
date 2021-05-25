<template>
  <div class="components-container">

    <div id="container" class="body-container">

      <el-row :gutter="8">
        <el-col :lg="8" :xs="24" :sm="24" :md="24">

          <div class="xpanel-wrapper">
            <div class="xpanel">
              <accidentoperation @child-event="aaa" />
            </div>
          </div>
          <div class="xpanel-wrapper">
            <div class="xpanel">
              <accidentoperation />
            </div>
          </div>
        </el-col>

        <el-col :lg="8" :xs="24" :sm="24" :md="24">
          <div class="xpanel-wrapper">
            <div class="xpanel">
              <accidentnum />
            </div>
          </div>

          <div class="xpanel-wrapper">
            <div class="xpanel">
              <accidentcatnum />
            </div>
          </div>
          <div class="xpanel-wrapper">
            <div class="xpanel">
              <accidentnumpie />
            </div>
          </div>
        </el-col>

        <el-col :lg="8" :xs="24" :sm="24" :md="24">

          <div class="xpanel-wrapper">
            <div class="xpanel">
              <accidentmonthline />
            </div>
          </div>

          <div v-if="isactive==='classactive'" class="xpanel-wrapper">
            <div class="xpanel">
              <rankaccidentbar />
            </div>
          </div>

          <div v-if="isactive==='weekfreq'" class="xpanel-wrapper">
            <div class="xpanel">
              <accidentweekfre />
            </div>
          </div>
        </el-col>
      </el-row>

      <el-row :gutter="8">
        <el-col :lg="8" :xs="24" :sm="24" :md="8">
          <div class="xpanel-wrapper">
            <div class="xpanel">
              <Compulbar />
            </div>
          </div>
        </el-col>

        <el-col :lg="16" :xs="24" :sm="24" :md="16">
          <div class="xpanel-wrapper">
            <div class="xpanel">
              <compulsivetable />
            </div>
          </div>
        </el-col>
      </el-row>

      <el-row :gutter="8">
        <el-col :lg="12" :xs="24" :sm="24" :md="12">
          <div class="xpanel-wrapper">
            <div class="xpanel">
              <penaltycombar />
            </div>
          </div>
        </el-col>

        <el-col :lg="12" :xs="24" :sm="24" :md="12">
          <div class="xpanel-wrapper">
            <div class="xpanel">
              <twopies v-bind="$attrs" v-on="$listeners" />
            </div>
          </div>
        </el-col>
      </el-row>

      <el-row :gutter="8">
        <el-col :lg="12" :xs="24" :sm="24" :md="12">
          <div class="xpanel-wrapper">
            <div class="xpanel">
              <departcheckchart />
            </div>
          </div>
        </el-col>

        <el-col :lg="12" :xs="24" :sm="24" :md="12">
          <div class="xpanel-wrapper">
            <div class="xpanel">
              <departissuescatchart />
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import accidentmonthline from './indexdatacharts/accidentchart/accidentmonthline'
import accidentweekfre from './indexdatacharts/accidentchart/accidentweekfre'
import accidentoperation from './indexdatacharts/accidentchart/accidentoperation'
import accidentnum from './indexdatacharts/accidentchart/accidentnum'
import accidentcatnum from './indexdatacharts/accidentchart/accidentcatnum'
import accidentnumpie from './indexdatacharts/accidentchart/accidentnumpie'
import rankaccidentbar from './indexdatacharts/accidentchart/rankaccidentbar'
import Compulbar from './indexdatacharts/compulsivecharts/compulsivebar'
import compulsivetable from './indexdatacharts/compulsivecharts/compulsivetable'
import penaltycombar from './indexdatacharts/penaltycharts/penaltycombar'
import twopies from './indexdatacharts/penaltycharts/twopies'
import departcheckchart from './indexdatacharts/checkcharts/departcheckchart'
import departissuescatchart from './indexdatacharts/checkcharts/departissuescatchart'
// import departissuescatchart1 from './indexdatacharts/checkcharts/departissuescatchart1'
export default {
  name: 'Visualization',
  components: {
    accidentmonthline,
    accidentweekfre,
    accidentoperation,
    accidentnum,
    accidentcatnum,
    accidentnumpie,
    rankaccidentbar,
    Compulbar,
    compulsivetable,
    penaltycombar,
    twopies,
    departcheckchart,
    departissuescatchart
    // departissuescatchart1
  },
  data() {
    return {
      isactive: 'classactive'
    }
  },
  created() {

  },
  methods: {
    aaa(data) {
      this.isactive = data
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/styles/datavisualization/visualization.scss";
</style>
