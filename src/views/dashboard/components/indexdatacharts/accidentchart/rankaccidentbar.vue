<template>
  <el-row>
    <el-col :span="24">
      <span v-show="false">{{ accidentcomnum }}</span>
      <div ref="issues" :style="{height:'300px',width:'100%' }" />
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
      // console.log(this.$store.state.basechartdata.rankaccidentalldata['source'])
      for (var i = 0; i < this.$store.state.basechartdata.accident_data['rankaccident'].columns.length - 1; i++) {
        series.push(
          {
            type: 'bar',
            barWidth: 10,
            label: {
              show: true,
              position: 'top'
            }
          },
        )
      }

      var option = {
        backgroundColor: 'rgba(100,255,255,0)',
        grid: {
          left: '2%',
          right: '2%',
          bottom: '3%',
          top: '25%',
          containLabel: true
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'horizontal',
          padding: [20, 10],
          align: 'auto',
          itemWidth: 20,
          width: '100%',
          textStyle: {
            fontSize: 12,
            color: '#ffffff'
          },
          formatter: function(params) {
            if (params.indexOf('煤业公司') > -1) {
              params = params.slice(0, 2)
              return params
            } else {
              return '全部'
            }
          }
        },

        title: {
          text: '事故班次分析',
          left: 'center',
          textStyle: {
            fontSize: 14,
            color: '#ffffff'
          },
          top: 0
        },
        dataset: {
          dimensions:this.$store.state.basechartdata.accident_data['rankaccident'].columns ,
          source: this.$store.state.basechartdata.accident_data['rankaccident'].data
        },
        xAxis:
            {
              type: 'category'
            },
        yAxis: {},
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

<style scoped>

</style>
