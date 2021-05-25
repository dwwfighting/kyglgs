<template>
  <el-row>
    <span v-show="false">{{ accidentcomnum }}</span>
    <el-col :span="24">
      <div ref="accidentnum" :style="{height:'300px',width:'100%' }" />
    </el-col>
    <!--    <el-col :span="12"><div ref="issues2"  :style="{height:'200px',width:'50%' ,background:'#ffffff'}" /></el-col>-->
  </el-row>
</template>

<script>

import echarts from 'echarts'
import 'echarts/theme/roma'
import { mapState } from 'vuex'

export default {
  name: 'Accidentnum',
  data() {
    return {
      gridData: '',
      option: {}
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
  methods: {
    init() {
      var myChart = echarts.init((this.$refs.accidentnum), 'roma')
      var dicttmp = { source: this.$store.state.basechartdata.accident_data['accidentcomnum'] }

      var option = {
        title: {
          text: '事故次数占比',
          left: 'center',
          textStyle: {
            fontSize: 14,
            color: '#ffffff'
          }
        },
        tooltip: {
          formatter: '{c}({d}%)'
        },
        grid: {
          // left: '2%',
          // right: '2%',
          // bottom: '3%',
          // top: '10%',
          // containLabel: true
          // bordercolor:'#333'
        },
        toolbox: {
          show: true,
          itemSize: 24,
          itemGap: 2
        },
        dataset: dicttmp,
        legend: {
          orient: 'vertical',
          // padding: [0, 0],
          align: 'auto',
          itemWidth: 10,
          itemHeight: 10,
          width: '100%',
          left: '20px',
          top: '32%',
          formatter: function(params) {
            if (params.indexOf('煤业公司') > -1) {
              params = params.slice(0, 2)
              return params
            }
          },
          textStyle: {
            fontSize: 12,
            color: '#ffffff'
          }
        },
        series: [
          {
            type: 'pie',
            radius: '65%',
            roseType: 'radius',
            center: ['60%', '50%'],
            label: {
              show: true,
              position: 'outside',
              formatter: function(params) {
                var value = params.name
                var valueper = params.percent
                if (value.indexOf('煤业公司') > -1) {
                  value = value.slice(0, 2)
                  return value + valueper + '%'
                }
                // console.log(params.name)
                // str =  params.data.flag+ params.name+params.percent
                // return str
              }
            }
          }
        ]
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
