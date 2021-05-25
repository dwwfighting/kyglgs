<template>
  <el-row>
    <el-col :span="24">
      <div ref="issues" :style="{height:'300px',width:'100%' ,background:'#ffffff'}"/>
    </el-col>

    <!--    <el-col :span="12"><div ref="issues2"  :style="{height:'200px',width:'50%' ,background:'#ffffff'}" /></el-col>-->
  </el-row>
</template>

<script>

  import 'echarts/theme/wonderland'

  export default {
    name: "issues",
    mounted() {
      this.$nextTick(() => {
        this.init()

      })
    },
    data() {
      return {
      }
    },
    created() {
    },
    methods: {
      init() {
        var myChart = this.$echarts.init((this.$refs.issues), 'wonderland')
        var series = [];
        for (var i = 0; i <  this.$store.state.basechartdata.superchecktimeanalyze['source'][0].length - 1; i++) {
          series.push(
              {
                type: 'bar',
              },
          );
        }
        // console.log(this)
        var option = {
        legend: {
                    orient: 'horizontal',
                    padding: [20, 10] ,
                    align:'auto',
                    itemWidth:35,
                    width :'100%',
                },
          grid: {
            left: '10%',
            bottom: '10%',
            right: '5%',
            top: '15%',
          },
          tooltip: {
            trigger: 'item'
          },
          title: {
            text: '上级检查次数分析',
            left: 'center',
            textStyle: {
              fontSize: 14,
              color: '#4c5f5c',
            },
            top: 0,
          },

          dataset: this.$store.state.basechartdata.superchecktimeanalyze,
          xAxis:
            {
              type: 'category',
              gridIndex: 0,
            }
          ,
          yAxis: {
            type: 'value'
          },


          series:series

          // These series are in the first grid.


        };

        myChart.setOption(option);

      window.addEventListener("resize", () => {
            myChart.resize();
      })

      }
    }
  }
</script>

<style scoped>

</style>
