<template>

  <div>
    <el-row>
      <el-col :span="24">
        <span v-show="false">{{ accidentcomnum }}</span>
        <div ref="departchecktimeanalyze" :style="{height:'200px',width:'100%' }" />
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <div ref="comissuesnum" :style="{height:'200px',width:'100%' }" />
      </el-col>
    </el-row>

  </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/theme/sakura'
import { mapState } from 'vuex'

export default {
  name: 'Issues',

  watch: {
    accidentcomnum() {
      this.$nextTick(() => {
        this.init()
        this.initissues()
      })
    }
  },
  computed: mapState({
    accidentcomnum: (state) => state.basechartdata.checkrecord_data['depart_check_statistics']
  }),

  methods: {
    init() {
      var myChart = echarts.init((this.$refs.departchecktimeanalyze), 'sakura')
      var dicttmp = { source: this.$store.state.basechartdata.checkrecord_data['depart_check_statistics'] }
      var option = {
        backgroundColor: 'rgba(253,253,255,0)',
        legend: {
          orient: 'horizontal',
          padding: [20, 10],
          align: 'auto',
          itemWidth: 20,
          width: '100%'
        },
        grid: {
          left: 4,
          bottom: 5,
          right: 4,
          top: '15%',
          containLabel: true
        },
        tooltip: {
          trigger: 'item'
        },
        title: {
          text: '处室检查次数分析',
          left: 'center',
          textStyle: {
            fontSize: 12,
            color: '#ffffff'
          },
          top: 0
        },
        dataset: dicttmp,
        xAxis:
            {
              type: 'category',
              axisLabel: {
                formatter: function(value, index) {
                  if (value.indexOf('煤业公司') > -1) {
                    value = value.slice(0, 2)
                    return value
                  } else {
                    return value
                  }
                },
                color: '#ffffff'
              }
            },
        yAxis: {
          type: 'value',
          axisLabel: { color: '#ffffff' },
          splitLine: {
            lineStyle: {
              type: 'dashed'
            },
            show: true
          }
        },

        series:
            [
              {
                type: 'bar',
                barWidth: 20,
                label: {
                  show: true,
                  position: 'insideTop'
                }
              }
            ]
      }

      myChart.setOption(option)
      window.addEventListener('resize', () => {
        myChart.resize()
      })
    },
    initissues() {
      var myChart = echarts.init((this.$refs.comissuesnum), 'sakura')
      var dicttmp = { source: this.$store.state.basechartdata.checkrecord_data['depart_check_issues'] }
      var option = {
        backgroundColor: 'rgba(253,253,255,0)',
        legend: {
          orient: 'horizontal',
          padding: [20, 10],
          align: 'auto',
          itemWidth: 10,
          width: '100%'
        },
        grid: {
          left: 4,
          bottom: 5,
          right: 4,
          top: '15%',
          containLabel: true
        },
        tooltip: {
          trigger: 'item'
        },
        title: {
          text: '处室检查隐患条数分析',
          left: 'center',
          textStyle: {
            fontSize: 12,
            color: '#ffffff'
          },
          top: 0
        },
        dataset: dicttmp,
        xAxis:
          {
            type: 'category',
            axisLabel: {
              formatter: function(value, index) {
                if (value.indexOf('煤业公司') > -1) {
                  value = value.slice(0, 2)
                  return value
                } else {
                  return value
                }
              },
              color: '#ffffff'
            }
          },
        yAxis: {
          axisLabel: { color: '#ffffff' },
          splitLine: {
            lineStyle: {
              type: 'dashed'
            },
            show: true
          }
        },
        series:
            [
              {
                type: 'bar',
                barWidth: 20,
                label: {
                  show: true,
                  position: 'insideTop'
                }
              }
            ]
      }

      myChart.setOption(option, true)
      window.addEventListener('resize', () => {
        myChart.resize()
      })
    }
  }

}
</script>

<style scoped>

</style>
