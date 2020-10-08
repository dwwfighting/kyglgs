<template>
  <el-row>
    <el-col :span="24">
      <div ref="issues" :style="{height:'600px',width:'100%' ,background:'#ffffff'}"/>
    </el-col>

    <!--    <el-col :span="12"><div ref="issues2"  :style="{height:'200px',width:'50%' ,background:'#ffffff'}" /></el-col>-->
  </el-row>
</template>

<script>

  import 'echarts/theme/wonderland'

  export default {
    name: "issues",
    data() {


      return {}
    },
    created() {

    },
    methods: {
      init() {
        var myChart = this.$echarts.init((this.$refs.issues), 'wonderland')

        var series = [];
        for (var i = 0; i < this.$store.state.basechartdata.rankaccidentalldata['source'].length - 1; i++) {
          series.push(
            {
              type: 'bar',
              seriesLayoutBy: 'row',
              label:{
                show:true,
                position:'top'
              }
            }
          );
        }
        for (var i = 0; i < this.$store.state.basechartdata.rankaccidentalldata['source'][0].length - 1; i++) {
          series.push(
            {
              type: 'bar',
              xAxisIndex: 1,
              yAxisIndex: 1,
              label:{
                show:true,
                position:'top'
              }
            }
          );
        }

        var option = {
          grid: [
            {
              left: '2%',
              right: 15,
              top: '13%',
              height: '35%'
            },
            {
              left: '2%',
              right: 15,
              // top: '55%',
              bottom: '7%',
              height: '35%'
            }
          ],
          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'horizontal',
            padding: [20, 10],
            align: 'auto',
            itemWidth: 20,
            width: '100%',
            textStyle: {
              color: '#000000',
            },
            　　selected:{
　　　　"All":true,  //图例为‘全部’的一项默认置灰
        "二班":false,
        "白班":false,
                "零点班":false,
                "义棠煤业公司":false,
                "倡源煤业公司":false,
                "城峰煤业公司":false,
                "青云煤业公司":false,
                "安益煤业公司":false
　　}
          },


          title: {
            text: '事故班次分析',
            left: 'center',
            textStyle: {
              fontSize: 14,
              color: '#030504',
            },
            top: 0,
          },
          dataset: this.$store.state.basechartdata.rankaccidentalldata,
          xAxis:
            [
              {type: 'category', gridIndex: 1, axisLabel: {interval: 0, color: 'black'}},
              {type: 'category', gridIndex: 0, axisLabel: {interval: 0, color: 'black'}}
            ],

          yAxis: [
            {gridIndex: 1},
            {gridIndex: 0}
          ],

          series:series


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
