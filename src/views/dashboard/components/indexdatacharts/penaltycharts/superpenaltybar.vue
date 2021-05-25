<template>
  <el-row>
    <el-col :span="24">
      <div ref="comsupernum" :style="{height:'400px',width:'100%' ,background:'#ffffff'}" />
    </el-col>
  </el-row>
</template>

<script>

import 'echarts/theme/vintage'

export default {
  name: 'Penaltycompie',
  data() {
    return {}
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.init()
      })
    })
  },
  methods: {
    init() {
      var myChart = this.$echarts.init((this.$refs.comsupernum), 'vintage')
      var series = []
      for (var i = 0; i < this.$store.state.basechartdata.comsupernum['source'][0].length - 1; i++) {
        series.push(
          {
            type: 'bar',
            stack: '合计',
            barWidth: 40,
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
          text: '上级罚款' + this.$store.state.basechartdata.superpentotal + '元',
          left: 'center',
          textStyle: {
            fontSize: 14,
            color: '#4c5f5c'
          },
          top: 0
        },
        dataset: this.$store.state.basechartdata.comsupernum,
        xAxis: {
          type: 'category',
          axisLabel: {
            interval: 0,
            color: 'black',
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
        yAxis: {},
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
