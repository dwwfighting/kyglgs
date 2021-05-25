<template>
  <div >
  <el-row>
    <el-col :span="24">
      <span v-show="false">{{ accidentcomnum }}</span>
      <div ref="accidentnum" :style="{height:'137px',width:'100%' }" />
    </el-col>

    <el-dialog title="事故分析图表" center :visible.sync="dialogTableVisible">
      <div ref="accidentdetail" :style="{height:'300px',width:'100%'}" />
    </el-dialog>

    <!--    <el-col :span="12"><div ref="issues2"  :style="{height:'200px',width:'50%' ,background:'#ffffff'}" /></el-col>-->
  </el-row>
  </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/theme/dark'
import { mapState } from 'vuex'

export default {
  name: 'Accidentnum',
  // props: ['accidentdata', 'title'],
  data() {
    return {
      dialogTableVisible: false,
      formLabelWidth: '120px'
    }
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

  // mounted() {
  //   this.$nextTick(() => {
  //     this.init()
  //   })
  // },

  methods: {
    detailinit(clickdata) {
      var myChart1 = echarts.init((this.$refs.accidentdetail), 'dark')
      var yxisdata = Object.keys(this.$store.state.basechartdata.accident_data['accidentdfdetails'])
      if (yxisdata.indexOf(clickdata) > -1) {
        // eslint-disable-next-line no-redeclare
        var titletext = clickdata + '事故类型分析'
        // eslint-disable-next-line no-redeclare
        var datasetobj = this.$store.state.basechartdata.accident_data['accidentdfdetails']
        var ydata = yxisdata.indexOf(clickdata)
        var encode = { x: 0, y: ydata }
        // eslint-disable-next-line no-redeclare
        var series = [
          {
            type: 'bar',
            barWidth: 20,
            encode: encode,
            label: {
              show: true,
              position: 'top',
              color: '#fff'
            }
          }
        ]
      }

      var option = {
        backgroundColor: 'rgba(100,255,255,0)',
        title: {
          text: titletext,
          left: 'center',
          textStyle: {
            fontSize: 14,
            color: '#fdfdff'
          }
        },
        dataset: {
          source: datasetobj
        },
        xAxis: {
          type: 'category'
        },
        yAxis: {},
        // tooltip: {
        //   formatter: '{c}({d}%)'
        // },
        grid: {
          left: '2%',
          right: '2%',
          bottom: '3%',
          top: '25%',
          containLabel: true
          // bordercolor:'#333'
        },
        toolbox: {
          show: true,
          itemSize: 24,
          itemGap: 2
        },

        legend: {
          orient: 'horizontal',
          padding: [25, 10],
          align: 'auto',
          itemWidth: 10,
          itemHeight: 10,
          width: '100%',
          formatter: function(params) {
            if (params.indexOf('煤业公司') > -1) {
              params = params.slice(0, 2)
              return params
            }
          },
          textStyle: {
            fontSize: 12
          }
        },
        series: series
      }
      myChart1.setOption(option, true)
      window.addEventListener('resize', () => {
        myChart1.resize()
      })
    },
    init() {
      var myChart = echarts.init((this.$refs.accidentnum), 'dark')
      var dicttmp = { source: this.$store.state.basechartdata.accident_data['accidentcomnum'] }
      var option = {
        backgroundColor: 'rgba(100,255,255,0)',
        title: {
          text: '事故次数分析',
          left: 'center',
          textStyle: {
            fontSize: 14,
            color: '#ffffff'
          }
        },
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
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: '2%',
          right: '2%',
          bottom: '3%',
          top: '25%',
          containLabel: true
        },
        toolbox: {
          show: true,
          itemSize: 12,
          itemGap: 2
        },
        dataset: dicttmp,
        legend: {
          orient: 'horizontal',
          padding: [20, 10],
          align: 'auto',
          itemWidth: 20,
          width: '100%'
        },
        series: [
          {
            type: 'bar',
            barWidth: 15,
            // seriesLayoutBy: 'row',
            label: {
              show: true,
              position: 'insideTop',
              color: '#ffffff'
            }
          }
        ]
      }
      myChart.setOption(option, true)
      window.addEventListener('resize', () => {
        myChart.resize()
      })

      myChart.on('click', (params) => {
        var clickdata = params.name
        this.dialogTableVisible = true
        this.$nextTick(() => {
          this.detailinit(clickdata)
        })
      })
    }
  }

}
</script>
<style lang="scss" scoped >
/deep/.el-dialog{
  background-color: #08354b;
  .el-dialog__title{
    color: #ffffff
  }
}
</style>
