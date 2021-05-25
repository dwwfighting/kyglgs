<template>
  <div>
    <el-row>
      <el-col :span="24">
        <span v-show="false">{{ departpenaltytotal }}</span>
        <div  ref="accidentnum" :style="{height:'400px',width:'100%' }" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/theme/vintage'
import { mapState } from 'vuex'

export default {
  name: 'Penaltycombar',

  data() {
    return {
    }
  },

  watch: {
    departpenaltytotal() {
      this.$nextTick(() => {
        this.init()
      })
    }
  },
  mounted() {
     this.$nextTick(() => {
        this.init()
      })
    },
  computed: mapState({
    departpenaltytotal: (state) => state.basechartdata.penalties_data['com_depart_penalty']
  }),
  created() {
  },
  methods: {
    init() {
      var myChart = echarts.init((this.$refs.accidentnum), 'vintage')
      var dicttmp = { source: this.$store.state.basechartdata.penalties_data['com_depart_penalty'] }
      var series = []
      for (var i = 0; i < Object.keys(this.$store.state.basechartdata.penalties_data['com_depart_penalty']).length - 1; i++) {
        series.push(
          {
            type: 'bar',
            stack: '合计',
            barWidth: 45,
            label: {
              show: true,
              position: 'inside'
            }
          },
        )
      }
      var option = {
        backgroundColor: 'rgba(100,255,255,0)',
        grid: {
          left: '10%',
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
            color: 'rgba(255,255,255,0.69)'
          }
        },
        title: {
          text: '处室罚款' + this.$store.state.basechartdata.penalties_data['departpenaltytotal'] + '元',
          left: 'center',
          textStyle: {
            fontSize: 14,
            color: '#ffffff'
          },
          top: 0
        },
        dataset: dicttmp,
        xAxis: {
          type: 'category',
          // data: this.$store.state.basechartdata.penalties_data['com_depart_penalty'].penaltycom__organizationname,
          axisLabel: {
            interval: 0,
            color: '#ffffff',
            formatter: function(value, index) {
              if (value.indexOf('煤业公司') > -1) {
                value = value.slice(0, 2)
                return value
              } else {
                return value
              }
            }
          }
        },
        yAxis: {
          axisLabel: { color: '#ffffff' }
        },
        series: series
      }
      myChart.setOption(option, true)
      window.addEventListener('resize', () => {
        myChart.resize()
      })
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
