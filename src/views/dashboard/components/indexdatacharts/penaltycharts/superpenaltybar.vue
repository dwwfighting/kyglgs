<template>
  <el-row>
    <el-col :span="24">
      <div ref="comsupernum" :style="{height:'500px',width:'100%' ,background:'#ffffff'}"/>
    </el-col>

    <!--    <el-col :span="12"><div ref="issues2"  :style="{height:'200px',width:'50%' ,background:'#ffffff'}" /></el-col>-->
  </el-row>
</template>

<script>

  import 'echarts/theme/inspired'


  export default {
    name: "penaltycompie",
    data() {
      return {}
    },
    methods: {
      init() {
        var myChart = this.$echarts.init((this.$refs.comsupernum), 'inspired')
        var series = [];
        for (var i = 0; i < this.$store.state.basechartdata.comsupernum['source'][0].length-1; i++) {
          series.push(
            {
            type: 'bar',
            label:{
              show:true,
              position:'inside'
            }
          }
          );
        }
        var option = {
          grid: {
            left: '8%',
            right: '3%',
            top: '13%',
            bottom: '7%'
          },
          tooltip: {},
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
            text: '上级罚款' + this.$store.state.basechartdata.superpentotal + '元',
            left: 'center',
            textStyle: {
              fontSize: 14,
              color: '#4c5f5c',
            },
            top: 0,
          },
          dataset: this.$store.state.basechartdata.comsupernum,
          xAxis: {},
          yAxis: {type: 'category', axisLabel: {interval: 0, color: 'black',}},
          series: series
        }
        myChart.setOption(option);
              window.addEventListener("resize", () => {
            myChart.resize();
      })
      }
    },
    mounted() {
      this.$nextTick(() => {
        setTimeout(() => {
          this.init()
        });
      })
    },

  }
</script>

<style scoped>

</style>
