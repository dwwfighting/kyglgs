<template>
  <el-row>
    <el-col :span="24"><div ref="accidentnum" :style="{height:'200px',width:'100%' ,background:'#ffffff'}" /></el-col>

    <!--    <el-col :span="12"><div ref="issues2"  :style="{height:'200px',width:'50%' ,background:'#ffffff'}" /></el-col>-->
  </el-row>
</template>

<script>

import 'echarts/theme/walden'

export default {
  name: 'Penaltycompie',
  data() {
    return {
      option: {
        title: {
          text: '处室罚款占比',
          left: 'center',
          textStyle: {
            fontSize: 14
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{c} ({d}%)'
        },
        dataset: this.$store.state.basechartdata.penaltycomcat,
        legend: {
          orient: 'vertical',
          padding: [20, 10],
          align: 'left',
          itemWidth: 35,
          width: '100%',
          left: '10',
          top: '12%'
        },
        series: [
          {
            type: 'pie',
            radius: '70%',

            center: ['60%', '60%'],
            datasetIndex: 0

            // dimensions: ['公司名称', '数值'],
          }
        ]
      }

    }
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
      var myChart = this.$echarts.init((this.$refs.accidentnum), 'walden')
      myChart.setOption(this.option)
      window.addEventListener('resize', () => {
        myChart.resize()
      })
    }

  }

}
</script>

<style scoped>

</style>
