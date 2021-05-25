<template>
  <div class="accidentoperation">
    <div class="menu">
      <ol>
        <li class="menu-item" @click="globalanalyse"><a>统计</a></li>
        <li class="menu-item">
          <a>分析</a>
          <ol class="sub-menu">
            <li class="menu-item"><a @click="isacitve('classactive')">班次</a></li>
            <li class="menu-item"><a @click="isacitve('weekfreq')">星期</a></li>
            <li class="menu-item"><a>频率</a></li>
          </ol>
        </li>

        <li class="menu-item">
          <a>对比</a>
          <ol class="sub-menu">
            <li class="menu-item"><a @click="onyearonyear">同比</a></li>
            <li class="menu-item"><a>环比</a></li>
          </ol>
        </li>
        <li class="menu-item">
          <a>特殊</a>
          <ol class="sub-menu">
            <li class="menu-item" @click="multidata"><a>一起多人</a></li>
            <li class="menu-item"><a>未上报</a></li>
          </ol>
        </li>
      </ol>
      <div v-if="state === 'multiaccicents'">
        <div v-if="Object.keys(this.multiaccicentsdata).length != 0" class="animate__animated animate__fadeIn">
          <p v-for="(value,index) in multiaccicentsdata" :key="index">
            {{ value.date }}  {{ value.accidentcom__organizationname }}发生1起{{ value.accidentcate__catname }}人次事故
          </p>
        </div>

        <div v-else>
          <p class="animate__animated animate__fadeIn">
            时间段内无单起多人受伤事故
          </p>
        </div>

      </div>
      <div v-if="state === 'globalanalyse'" class="animate__animated animate__fadeIn">
        <p>共发生{{ accidentallnum }}起{{ accidentallpeople }}人次安全事故</p>
        <p v-if="compulsivetotal">共下发{{ compulsivetotal }}份文书</p>
        <p v-if="departpenaltytotal">处室共罚款{{ departpenaltytotal }}元</p>
        <p v-if="superpenaltytotal">上级共罚款{{ superpenaltytotal }}元</p>
        <p v-if="departchecktotalnum">安检处共组织检查{{ departchecktotalnum }}次</p>
        <p v-if="depart_check_issuesnum">安检处共查隐患{{ depart_check_issuesnum }}条</p>
      </div>
      <div v-if="state === 'onyearoneyear'" class="animate__animated animate__fadeIn">
        <div v-if="lastyear_res">
          <p>同比共发生{{ lastyear_res.accidentallnum }}起{{ lastyear_res.accidentallpeople }}人次安全事故</p>
          <div v-if="lastyear_res['accidentduplicatecomnum'].length !== 0">
            <p v-for="(value,index)  in lastyear_res['accidentduplicatecomnum']" :key="index" class="animate__animated animate__fadeIn">
              {{ value.date }}  {{ value.accidentcom__organizationname }}发生1起{{ value.accidentcate__catname }}人次事故
            </p>
            <p v-if="lastyear_res['accidentduplicatecomnum']['0'] === undefined">
              同期无单起多人受伤事故
            </p>
          </div>
          <p>同比事故次数{{ valueFilter( globalaccidentonyearonnum ) }}</p>
          <p>同比受伤人数{{ valueFilter( globalaccidentonyearonpeople ) }}</p>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'Accidentoperation',
  data() {
    return {
      state: 'globalanalyse',
      dialogTableVisible: false,
      active: true
    }
  },
  watch: {
  },
  computed: {
    ...mapState({
      accidentallnum: state => state.basechartdata.accident_data['accidentallnum'],
      accidentallpeople: state => state.basechartdata.accident_data['accidentallpeople'],
      multiaccicentsdata: state => state.basechartdata.accident_data['accidentduplicatecomnum'],
      lastyear_res: state => state.basechartdata.lastyear_res,
      compulsivetotal: state => state.basechartdata.complusives_data['compulsivetotal'],
      departpenaltytotal: state => state.basechartdata.penalties_data['departpenaltytotal'],
      superpenaltytotal: state => state.basechartdata.penalties_data['superpenaltytotal'],
      departchecktotalnum: state => state.basechartdata.checkrecord_data['departchecktotalnum'],
      depart_check_issuesnum: state => state.basechartdata.checkrecord_data['depart_check_issuesnum']
    }),
    ...mapGetters(
      ['globalaccidentonyearonnum', 'globalaccidentonyearonpeople']
    )
  },
  methods: {
    valueFilter(value) {
      let newvalue = ''
      if (value < 0) {
        value = Number(value * 100).toFixed(1)
        newvalue = '下降' + (-value).toString()
        return newvalue
      } else {
        value = Number(value * 100).toFixed(1)
        newvalue = '上升' + (value).toString()
        return newvalue
      }
    },

    multidata() {
      // this.multiaccicentsdata = this.$store.state.basechartdata.multiaccidents\
      this.state = 'multiaccicents'
    },
    globalanalyse() {
      this.state = 'globalanalyse'
    },
    onyearonyear() {
      this.state = 'onyearoneyear'
      if (!this.lastyear_res.accidentallnum) {
        this.open3()
      }
    },
    open3() {
      this.$message({
        message: '请选择要比较的时间段',
        type: 'warning'
      })
    },
    isacitve(classactive) {
      this.$emit('child-event', classactive)
    }
  }
}
</script>

<style lang="scss" scoped>

  @import "@/styles/accident/accidentoperation.sass";

  p{
    text-align:center;
    padding: 5px 0;
    border-bottom:1px solid rgba(128, 128, 128,0.5);
    color: #fff
  }

</style>
