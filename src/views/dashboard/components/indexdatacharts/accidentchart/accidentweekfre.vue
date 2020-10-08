<template>
  <el-row>
    <el-col :span="24">
      <div ref="issues" :style="{height:'300px',width:'100%' ,background:'#ffffff'}"/>
    </el-col>

    <!--    <el-col :span="12"><div ref="issues2"  :style="{height:'200px',width:'50%' ,background:'#ffffff'}" /></el-col>-->
  </el-row>
</template>

<script>

  import 'echarts/theme/shine'

  export default {
    name: "issues",
    data() {


      return {}
    },
    created() {

    },
    methods: {
      init() {
        var myChart = this.$echarts.init((this.$refs.issues), 'shine')

        var series = [];
        for (var i = 0; i < this.$store.state.basechartdata.accidentweekfre['source'][0].length - 1; i++) {
          series.push(
            {
              type: 'bar',
              label:{
                show:true,
                position:'top'
              }
            }
          );
        }


        var option = {
              grid:{
                left:'2%',
                bottom:'10%',
                right:'2%',
                top:'15%',
              },
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
            }
          },


          title: {
            text: '事故星期分析',
            left: 'center',
            textStyle: {
              fontSize: 14,
              color: '#4c5f5c',
            },
            top: 0,
          },
          dataset: this.$store.state.basechartdata.accidentweekfre,
              xAxis:
               {
                  type: 'category',
                  axisLabel: {
                 color: 'black',
                    formatter: function (value, index) {
                         if(!isNaN(value)){
                            return "周"+(" 一二三四五六日").substr(value,1);
                         }
                  }
                  }
                }
              ,
              yAxis: {
                 type:'value'
              },

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
