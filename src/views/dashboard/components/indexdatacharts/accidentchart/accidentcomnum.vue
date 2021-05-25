<template>
  <el-row>
    <el-col :span="24">
      <div ref="accidentcomnum" :style="{height:'300px',width:'100%' ,background:'#ffffff'}" />
    </el-col>

    <!--    <el-col :span="12"><div ref="issues2"  :style="{height:'200px',width:'50%' ,background:'#ffffff'}" /></el-col>-->
  </el-row>
</template>

<script>

import 'echarts/theme/walden'

export default {
  name: 'Accidentnum',
  props: ['accidentdata', 'title'],
  data() {
    return {
      option: {}
    }
  },
  mounted() {
  },

  methods: {
    init() {
      var myChart = this.$echarts.init((this.$refs.accidentcomnum), 'walden')
      var option = {
        title: {
          text: this.title,
          left: 'center',
          textStyle: {
            fontSize: 14,
            color: '#030504'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{c} ({d}%)'
        },
        toolbox: {
          show: true,
          itemSize: 12,
          itemGap: 2,
          feature: {
            myweek: {
              show: true,
              icon: 'path://M525.4 721.2H330.9c-9 0-18.5-7.7-18.5-18.1V311c0-9 9.3-18.1 18.5-18.1h336.6c9.3 0 18.5 9.1 18.5 18.1v232.7c0 6 8.8 12.1 15 12.1 6.2 0 15-6 15-12.1V311c0-25.6-25.3-48.9-50.1-48.9h-335c-26.2 0-50.1 23.3-50.1 48.9v389.1c0 36.3 20 51.5 50.1 51.5h197.6c6.2 0 9.3-7.5 9.3-15.1 0-6-6.2-15.3-12.4-15.3zM378.8 580.6c-6.2 0-12.3 8.6-12.3 14.6s6.2 14.6 12.3 14.6h141.4c6.2 0 12.3-5.8 12.3-13.4 0.3-9.5-6.2-15.9-12.3-15.9H378.8z m251.6-91.2c0-6-6.2-14.6-12.3-14.6H375.7c-6.2 0-12.4 8.6-12.4 14.6s6.2 14.6 12.4 14.6h240.8c6.2 0.1 13.9-8.5 13.9-14.6z m-9.2-120.5H378.8c-6.2 0-12.3 8.6-12.3 14.6s6.2 14.6 12.3 14.6h240.8c7.7 0 13.9-8.6 13.9-14.6s-6.2-14.6-12.3-14.6z m119.4 376.6L709 714.1c9.2-12 14.6-27 14.6-43.2 0-39.4-32.1-71.4-71.8-71.4-39.7 0-71.8 32-71.8 71.4s32.1 71.4 71.8 71.4c16.3 0 31.3-5.4 43.4-14.5l31.6 31.5c3.8 3.8 10 3.8 13.8 0 3.8-3.8 3.8-10 0-13.8z m-88.8-23.6c-28.3 0-51.3-22.8-51.3-51s23-51 51.3-51c28.3 0 51.3 22.8 51.3 51s-23 51-51.3 51z', // 图标
              title: '切换',
              onclick: function(option) {
                refreshData(option)
              }
            },
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }

        },
        dataset: this.accidentdata,
        legend: {
          orient: 'horizontal',
          padding: [25, 10],
          align: 'auto',
          itemWidth: 25,
          width: '100%',
          textStyle: {
            color: '#000000'
          }

        },
        series: [
          {
            type: 'pie',
            radius: '53%',
            center: ['50%', '60%'],
            datasetIndex: 0,
            label: {
              show: true,
              formatter: '{c}起 {d}%'
            }
          }
        ]
      }

      myChart.setOption(option)
      window.addEventListener('resize', () => {
        myChart.resize()
      })
      var refreshData = (data) => {
        myChart.setOption({
          title: {
            text: '同期对比'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a}{c}'
          },
          legend: {
            data: ['事故次数', '轻伤人数']
          },
          xAxis: [
            {
              type: 'category',
              data: ['2020年三季度', '2019年三季度']
            }

          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [{
            name: '事故次数',
            type: 'bar',
            data: [15, 25],
            label: {
              show: true

            }
          },
          {
            name: '轻伤人数',
            type: 'bar',
            data: [15, 26],
            label: {
              show: true
            }
          }]
        })
      }
    }

  }

}
</script>

<style scoped>

</style>
