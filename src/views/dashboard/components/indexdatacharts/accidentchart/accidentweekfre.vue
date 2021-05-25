<template>
  <el-row>
    <el-col :span="24">
      <span v-show="false">{{ accidentcomnum }}</span>
      <div ref="issues" :style="{height:'300px',width:'100%'}" />
    </el-col>

    <!--    <el-col :span="12"><div ref="issues2"  :style="{height:'200px',width:'50%' ,background:'#ffffff'}" /></el-col>-->
  </el-row>
</template>

<script>
import echarts from 'echarts'
import 'echarts/theme/dark'
import { mapState } from 'vuex'

export default {
  name: 'Issues',
  data() {
    return {}
  },
  watch: {
    accidentcomnum() {
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
    accidentcomnum: (state) => state.basechartdata.accident_data['accidentcomnum']
  }),
  methods: {
    init() {
      var myChart = echarts.init((this.$refs.issues), 'dark')
      var series = []
      // console.log(this.$store.state.basechartdata.accidentweekfre['source'][0])
      var legendshow = {}
      for (var i = 0; i < this.$store.state.basechartdata.accident_data['accidentdfweekfre'].columns.length - 1; i++) {
        if (this.$store.state.basechartdata.accident_data['accidentdfweekfre'].columns[i] !== 'All') {
          legendshow[this.$store.state.basechartdata.accident_data['accidentdfweekfre'].columns[i]] = false
        }
        series.push(
          {
            type: 'bar',
            barWidth: 10,
            label: {
              show: true,
              position: 'top'
            }
          }
        )
      }

      var option = {
        backgroundColor: 'rgba(100,255,255,0)',
        grid: {
          left: '5%',
          bottom: '10%',
          right: '5%',
          top: '15%'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'horizontal',
          padding: [30, 10],
          align: 'auto',
          itemWidth: 20,
          width: '100%',
          textStyle: {
            color: '#ffffff'
          },
          formatter: function(params) {
            if (params.indexOf('煤业公司') > -1) {
              params = params.slice(0, 2)
              return params
            } else {
              return '全部'
            }
          },
          selected: legendshow
        },

        title: {
          text: '事故星期分析',
          left: 'center',
          textStyle: {
            fontSize: 14,
            color: '#ffffff'
          },
          top: 0
        },
        dataset: {
          dimensions: this.$store.state.basechartdata.accident_data['accidentdfweekfre'].columns,
          source: this.$store.state.basechartdata.accident_data['accidentdfweekfre'].data
        },
        xAxis:
            {
              type: 'category',
              axisLabel: {
                interval: 0,
                color: '#ffffff',
                formatter: function(value, index) {
                  if (!isNaN(value)) {
                    return '周' + (' 一二三四五六日').substr(value, 1)
                  }
                }
              }
            },
        yAxis: {},
        series: series

        // These series are in the first grid.

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
