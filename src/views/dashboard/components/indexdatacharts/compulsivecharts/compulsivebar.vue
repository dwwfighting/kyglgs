<template>
  <el-row>
    <el-col>
      <span v-show="false">{{ accidentalldata }}</span>
      <div ref="compulsive" :style="{height:'300px',width:'100%' }" />
    </el-col>

    <!--    <el-col :span="12"><div ref="issues2"  :style="{height:'200px',width:'50%' ,background:'#ffffff'}" /></el-col>-->
  </el-row>
</template>

<script>

import echarts from 'echarts'
import 'echarts/theme/dark'
import { mapState } from 'vuex'

export default {
  name: 'Compulsivebar',
  data() {
    return {
      // compulsivenum: this.$store.state.basechartdata.compulsivetotal
    }
  },
  computed: mapState({
    accidentalldata: (state) => state.basechartdata.complusives_data['compulsivedepart']
  }),
  watch: {
    accidentalldata() {
      this.$nextTick(() => {
        this.init()
      })
    }
  },

  methods: {
    init() {
      var myChart = echarts.init((this.$refs.compulsive), 'dark')
      var legenddata = Object.keys(this.$store.state.basechartdata.complusives_data['compulsivedepart']).slice(1)
      var series = []
      for (var i = 0; i < legenddata.length; i++) {
        series.push(
          {
            name: legenddata[i],
            barWidth: 15,
            type: 'bar',
            label: {
              show: true,
              position: 'insideTop',
              color: '#ffffff'
            },
            data: this.$store.state.basechartdata.complusives_data['compulsivedepart'][legenddata[i]]
          },
        )
      }
      var option = {
        backgroundColor: 'rgba(100,255,255,0)',
        title: {
          text: '共下发文书' + this.$store.state.basechartdata.complusives_data['compulsivetotal'] + '份',
          subtextStyle: {
            top: '10'
          },
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
          padding: [25, 10],
          align: 'auto',
          itemWidth: 25,
          data: legenddata
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          top: '18%',
          containLabel: true
        },
        xAxis: {
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
          },
          interval: 0,
          data: this.$store.state.basechartdata.complusives_data['compulsivedepart']['compulsivecom__organizationname']
        },
        yAxis: {
          type: 'value',
          axisLabel: { color: '#ffffff' }
        },
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
