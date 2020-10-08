<template>
  <el-row>
    <el-col :span="24">
      <div ref="departchecktimeanalyze" :style="{height:'300px',width:'100%' ,background:'#ffffff'}"/>
    </el-col>

    <!--    <el-col :span="12"><div ref="issues2"  :style="{height:'200px',width:'50%' ,background:'#ffffff'}" /></el-col>-->
  </el-row>
</template>

<script>

  import 'echarts/theme/sakura'

  export default {
    name: "issues",

    methods: {
      init() {
        var myChart = this.$echarts.init((this.$refs.departchecktimeanalyze), 'sakura')
        // console.log(this)
        var option = {
          legend: {
            orient: 'horizontal',
            padding: [20, 10],
            align: 'auto',
            itemWidth: 35,
            width: '100%',
          },
          grid: {
            left: 4,
            bottom: 10,
            right: 4,
            top: '15%',
            containLabel: true
          },
          tooltip: {
            trigger: 'item'
          },
          title: {
            text: '处室检查次数分析',
            left: 'center',
            textStyle: {
              fontSize: 14,
              color: '#4c5f5c',
            },
            top: 0,
          },
          dataset: this.$store.state.basechartdata.departchecktimeanalyze,
          xAxis:
            {
              type: 'category',
              axisLabel: {interval: 0, color: 'black'}
            }
          ,
          yAxis: {
            type: 'value'
          },

          series:
            [
              {
                type: 'bar',
                label: {
                  show: true,
                  position: 'insideTop',
                }
              },

            ]
          // These series are in the first grid.


        };

        myChart.setOption(option);
      window.addEventListener("resize", () => {
            myChart.resize();
      })

      }
    },
    mounted() {
      this.$nextTick(() => {
        this.init()
      })
    },
  }
</script>

<style scoped>

</style>
