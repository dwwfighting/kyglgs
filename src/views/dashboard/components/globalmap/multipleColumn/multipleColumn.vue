<!-- 折线图 -->

<template>
  <div class="multipleColumn">
    <v-filter v-if="myChart._dom" :my-chart="myChart" />
    <div class="main" />
  </div>

</template>

<script>
import echarts from 'echarts'
import filter from '../filter/filter'
import { mapGetters } from 'vuex'
import 'echarts/theme/dark'
export default {
  components: {
    'v-filter': filter
  },

  data() {
    return {
      legendArr: [],
      color: this.$store.state.globalaccident.color,
      styleArr: [],
      myChart: {}
    }
  },
  computed: {
    ...mapGetters(
      ['globalaccident_cat']
    )
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    this.myChart = echarts.init(document.querySelector('.multipleColumn .main'), 'dark')
    var dicttmp = { source: this.globalaccident_cat }
    this.myChart.setOption({
      backgroundColor: 'rgba(100,255,255,0)',
      title: {
        text: '全国事故类型分析',
        left: 'center',
        textStyle: {
          fontSize: 20,
          color: '#ffffff'
        }
      },
      grid: {
        left: '2%',
        right: '2%',
        bottom: '5%',
        top: '10%',
        containLabel: true
      },
      tooltip: {
        trigger: 'axis'
      },

      toolbox: {
        show: false
      },
      // color: this.color,
      calculable: true,
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
      dataset: dicttmp,
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
    })
    this.init()
  },

  methods: {
    init() {
      // this.legendArr = this.myChart.getOption().series
      // this.legendArr.forEach((data) => {
      //   data.selected = true
      // })
      // this.$root.charts.push(this.myChart)
      window.addEventListener('resize', function() {
        this.myChart.resize()
      }.bind(this))
    }
  }

}

</script>
<style lang="stylus" scoped>
.multipleColumn
  height 1000px
  background-size 100% 100%
  .main
    width 100%
    height 100%
    margin-top -20px
</style>
