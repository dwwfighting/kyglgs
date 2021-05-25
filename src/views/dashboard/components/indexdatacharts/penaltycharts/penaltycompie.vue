<template>
  <el-row>
    <span v-show="false">{{ accidentalldata }}</span>
    <el-col :span="24">
      <div ref="accidentnum" :style="{height:'400px',width:'100%' ,background:'#ffffff'}" />
    </el-col>

    <!--    <el-col :span="12"><div ref="issues2"  :style="{height:'200px',width:'50%' ,background:'#ffffff'}" /></el-col>-->
  </el-row>
</template>

<script>

import 'echarts/theme/walden'
import { mapState } from 'vuex'

export default {
  name: 'Penaltycompie',
  data() {
    return {}
  },
  watch: {
    accidentalldata() {
      this.$nextTick(() => {
        this.init()
      })
    }
  },
  computed: mapState({
    accidentalldata: (state) => state.basechartdata.compenaltydepart.source
  }),
  methods: {
    init() {
      var myChart = this.$echarts.init((this.$refs.accidentnum), 'walden')
      var series = []
      for (var i = 0; i < this.$store.state.basechartdata.compenaltydepart['source'][0].length - 1; i++) {
        series.push(
          {
            type: 'bar',
            stack: '合计',
            barWidth: 30,
            label: {
              show: true,
              position: 'inside'
            }
          }
        )
      }
      var option = {
        grid: {
          left: '12%',
          right: '3%',
          top: '13%',
          bottom: '7%'
        },
        tooltip: {},
        legend: {
          orient: 'horizontal',
          padding: [20, 10],
          align: 'auto',
          itemWidth: 20,
          width: '100%',
          textStyle: {
            color: '#000000'
          }
        },
        title: {
          text: '处室罚款' + this.$store.state.basechartdata.departpentotal + '元',
          left: 'center',
          textStyle: {
            fontSize: 14,
            color: '#4c5f5c'
          },
          top: 0
        },
        dataset: this.$store.state.basechartdata.compenaltydepart,
        xAxis: {},
        yAxis: { type: 'category', axisLabel: { interval: 0, color: 'black' }},
        series: series
      }
      myChart.setOption(option)
      window.addEventListener('resize', () => {
        myChart.resize()
      })
    }
  }

}
</script>

<style scoped>

</style>
