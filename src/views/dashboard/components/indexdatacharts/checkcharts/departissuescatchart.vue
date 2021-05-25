<template>
  <el-row>
    <el-col :span="24">
      <span v-show="false">{{ depart_check_issues }}</span>
      <div ref="issues" :style="{height:'400px',width:'100%' }" />
    </el-col>

    <!--    <el-col :span="12"><div ref="issues2"  :style="{height:'200px',width:'50%' ,background:'#ffffff'}" /></el-col>-->
  </el-row>
</template>

<script>
import echarts from 'echarts'
import 'echarts/theme/shine'
import { mapState } from 'vuex'

export default {
  name: 'Departissuescatchart',
  data() {
    return {
    }
  },
  watch: {
    depart_check_issues() {
      this.$nextTick(() => {
        this.init()
      })
    }
  },
  computed: mapState({
    depart_check_issues: (state) => state.basechartdata.checkrecord_data['depart_check_issues']
  }),


  methods: {
    init() {
      var myChart = echarts.init((this.$refs.issues), 'shine')
      var series = []
      var legenddata = Object.keys(this.$store.state.basechartdata.checkrecord_data['depart_check_line']).slice(1)
      for (var i = 0; i < legenddata.length; i++) {
        series.push(
          {
            name: legenddata[i],
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: this.$store.state.basechartdata.checkrecord_data['depart_check_line'][legenddata[i]]
          },
        )
      }
      var option = {
        backgroundColor: 'rgba(100,255,255,0)',
        title: {
          text: '处室检查隐患分析' + ' 共查问题' + '条',

          left: 'center',
          textStyle: {
            fontSize: 14,
            color: '#ffffff'
          },
          top: 0
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          orient: 'horizontal',
          padding: [25, 150],
          align: 'auto',
          itemWidth: 15,
          color: '#ffffff',
          data: legenddata,
          textStyle: {
            color: '#ffffff'
          }
        },
        grid: {
          left: '2%',
          right: '3%',
          bottom: '3%',
          top: '18%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
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
          },
          data: this.$store.state.basechartdata.checkrecord_data['depart_check_line']['checkrecord__checkedcoalcompany__organizationname']
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
