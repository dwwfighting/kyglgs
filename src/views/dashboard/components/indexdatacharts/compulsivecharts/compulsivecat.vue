<template>
  <el-row>
    <el-col :span="24">
      <span v-show="false">{{ accidentalldata }}</span>
      <div ref="issues" :style="{height:'300px',width:'100%' ,background:'#ffffff'}" />
    </el-col>

    <!--    <el-col :span="12"><div ref="issues2"  :style="{height:'200px',width:'50%' ,background:'#ffffff'}" /></el-col>-->
  </el-row>
</template>

<script>

import echarts from 'echarts'
import 'echarts/theme/shine'
import { mapState } from 'vuex'

export default {
  name: 'Compulsivecat',

  data() {
    return {}
  },
  computed: mapState({
    accidentalldata: (state) => state.basechartdata.compulsivetotal
  }),

  watch: {
    accidentalldata() {
      this.$nextTick(() => {
        this.init()
      })
    }
    // dialogTableVisible (){
    //   console.log('aaa')
    // },
  },
  mounted() {
    this.$nextTick(() => {
      this.init()
    })
  },

  created() {
  },
  methods: {
    init() {
      var myChart = echarts.init((this.$refs.issues), 'shine')
      var series = []
      var legenddata = Object.keys(this.$store.state.basechartdata.compulsivecat).slice(1)
      for (var i = 0; i < legenddata.length; i++) {
        series.push(
          {
            name: legenddata[i],
            type: 'line',
            stack: '总量',
            data: this.$store.state.basechartdata.compulsivecat[legenddata[i]]
          },
        )
      }
      var option = {
        title: {
          text: '共下发文书' + this.$store.state.basechartdata.compulsivetotal + '份',
          left: 'center',
          textStyle: {
            fontSize: 14,
            color: '#4c5f5c'
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
          data: legenddata
        },
        grid: {
          left: '5%',
          right: '5%',
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
            }
          },
          data: this.$store.state.basechartdata.compulsivecat.compulsivecom__coalcompanyname
        },
        yAxis: {
          type: 'value'
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
