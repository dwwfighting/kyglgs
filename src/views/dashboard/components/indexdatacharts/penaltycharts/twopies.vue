<template>
  <el-row>
    <el-col :span="24">
      <span v-show="false">{{ departpenaltytotal }}</span>
      <!--      <p style="background-color: #ffffff">上级和处室共罚款{{ penalytotal }}元</p>-->
      <div ref="twopies" :style="{height:'400px',width:'100%'}" />
    </el-col>
    <el-drawer
      size="75%"
      title="我是标题"
      :visible.sync="dialogTableVisible"
      :with-header="false"
    >
      <drawerinfo :drawdata="results">
        <span slot="header">{{ drawdata.penaltycom }}--{{ drawdata.relatedcat }}相关罚款</span>
      </drawerinfo>
    </el-drawer>
  </el-row>
</template>

<script>
import echarts from 'echarts'
import { get_thermodynamic_penalties } from '@/api/penaltyapi/penaltyapi'
import 'echarts/theme/vintage'
import drawerinfo from './twopies/drawerinfo'
import { mapState } from 'vuex'

export default {
  name: 'Penaltycompie',
  components: { drawerinfo },
  props:['timerange'],
  data() {
    return {
      dialogTableVisible: false,
      direction: 'rtl',
      drawdata: {},
      results: ''
    }
  },
  computed: mapState({
    departpenaltytotal: (state) => state.basechartdata.penalties_data['com_depart_penalty']
  }),
  watch: {
    departpenaltytotal() {
      setTimeout(() => {
        this.$nextTick(() => {
          this.init()
        })
      }, 500)
    }
  },

  methods: {
    getdrawinfoData() {
      get_thermodynamic_penalties(this.drawdata).then(response => {
        this.results = response.data
      }, response => {
        console.log('error')
      })
    },
    init() {
      var myChart = echarts.init((this.$refs.twopies), 'vintage')
      var penaltycat = this.$store.state.basechartdata.penalties_data['penaltycatli']
      var companies = this.$store.state.basechartdata.penalties_data['companiesli']
      var thermodynamicarr = this.$store.state.basechartdata.penalties_data['penaltythermodynamic']
      var thermodynamic = []
      thermodynamicarr.forEach(function(value, key) {
        var temparr = []
        var firstindex = ''
        var secondindex = ''
        firstindex = penaltycat.indexOf(value.penaltycat__issuecategories_text)
        secondindex = companies.indexOf(value.penaltycom__organizationname)
        temparr.push(firstindex, secondindex)
        temparr.push(value.penaltycat)
        thermodynamic.push(temparr)
      })

      var data1 = thermodynamic
      data1 = data1.map(function(item) {
        return [item[1], item[0], item[2] || '-']
      })
      var colors = ['#FFAE57', '#FF7853', '#EA5151', '#CC3F57', '#9A2555']
      var option = {
        backgroundColor: 'rgba(253,253,255,1)',
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false }
          },
          right: '20'
        },
        grid: {
          height: '80%',
          top: '10%',
          right: '8%',
        },
        xAxis: {
          type: 'category',
          data: companies,
          axisLabel: {
            interval: 0,
            color: 'black'
          },
          splitArea: {
            show: true
          }
        },
        yAxis: {
          type: 'category',
          data: penaltycat,
          splitArea: {
            show: true
          }
        },
        title: {
          text: '罚款原因热力图',
          left: 'center',
          textStyle: {
            fontSize: 14
          }
        },
        visualMap: {
            min: 0,
            max: 10,
            calculable: true,
            orient: 'vertical',
            right: '3',
            bottom: '8%'
        },
        series: [
        {
          name: 'piecesofwaste',
          type: 'heatmap',
          data: data1,
          label: {
            show: true
          },
          // emphasis: {
          //   itemStyle: {
          //     shadowBlur: 10,
          //     shadowColor: 'rgba(0, 0, 0, 0.5)'
          //   }
          // }
        }
        ]
      }

      myChart.off('click')
      myChart.on('click', { seriesName: 'piecesofwaste' }, (params) => {
        console.log(params)
        this.drawdata = {}
        this.drawdata['penaltycom'] = params.name
        this.drawdata['relatedcat'] = penaltycat[params.value[1]]
        this.drawdata['start_date'] = this.timerange.start_date
        this.drawdata['end_date'] = this.timerange.end_date
        console.log(this.drawdata)
        this.getdrawinfoData()
        this.dialogTableVisible = true
      })
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
