<template>
  <el-row>
    <el-col :span="24">
      <span v-show="false">{{ accidentcomnum }}</span>
      <div ref="accidentnum" :style="{height:'136px',width:'100%' }" />
    </el-col>

    <el-dialog title="事故分析图表" center :visible.sync="dialogTableVisible">
      <div ref="accidentdetail" :style="{height:'300px',width:'100%' }" />
    </el-dialog>

    <!--    <el-col :span="12"><div ref="issues2"  :style="{height:'200px',width:'50%' ,background:'#ffffff'}" /></el-col>-->
  </el-row>
</template>

<script>
import echarts from 'echarts'
import 'echarts/theme/dark'
import { mapState } from 'vuex'

export default {
  name: 'Accidentcatnum',

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
  computed: mapState({
    accidentcomnum: (state) => state.basechartdata.accident_data['accidentcomnum']
  }),
  mounted() {
     this.$nextTick(() => {
        this.init()
      })
    },
  // created() {
  //   this.$nextTick(() => {
  //     this.init()
  //   })
  // },

  methods: {
    detailinit(clickdata) {
      var myChart1 = echarts.init((this.$refs.accidentdetail), 'dark')
      var axisdata = this.$store.state.basechartdata.accident_data['accidentdfdetails'].accidentcate__catname
      var yxisdata = Object.keys(this.$store.state.basechartdata.accident_data['accidentdfdetails'])
      if (axisdata.indexOf(clickdata) > -1) {
        var titletext = clickdata + '事故各煤业分析'
        var axisindex = axisdata.indexOf(clickdata)
        var datasetobj = Object.values(this.$store.state.basechartdata.accident_data['accidentdfdetails'])
        var dimensions = yxisdata.slice(1)
        var arr = []
        for (var i = 1; i < datasetobj.length; i++) {
          arr.push(datasetobj[i][axisindex])
        }
        var series = [
          {
            type: 'bar',
            barWidth: 20,
            data: arr,
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
            color: '#ffffff'
          }
        },
        dataset: {
          source: datasetobj
        },
        xAxis: {
          type: 'category',
          data: dimensions,
          axisLabel: { color: '#ffffff' }
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
      var dicttmp = { source: this.$store.state.basechartdata.accident_data['accidentcatnum'] }
      var option = {
        backgroundColor: 'rgba(100,255,255,0)',
        title: {
          text: '事故类型分析',
          left: 'center',
          textStyle: {
            fontSize: 14,
            color: '#ffffff'
          }
        },
        xAxis:
            {
              type: 'category',
              axisLabel: { color: '#ffffff' }
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
              position: 'top',
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
<style  lang="scss" scoped >
/deep/.el-dialog{
  background-color: #08354b;
  .el-dialog__title{
    color: #ffffff
  }
}
</style>
