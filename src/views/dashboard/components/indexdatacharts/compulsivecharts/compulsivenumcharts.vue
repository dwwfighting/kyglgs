<template>
  <el-row>
    <el-col :span="24">
      <div ref="compulsive" :style="{height:'300px',width:'100%' ,background:'#ffffff'}"/>
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
      return {}
    },
    created() {
    },
    methods: {
      init() {
        var myChart = this.$echarts.init((this.$refs.compulsive), 'wonderland')
        var legenddata = Object.keys(this.$store.state.basechartdata.compulsivedepart).slice(1)
        var series = [];
        for (var i = 0; i < legenddata.length; i++) {

          series.push(
            {
              name: legenddata[i],
              type: 'bar',
                   label:{
                     show:true,
                     position:'insideTop',
                   },
              data: this.$store.state.basechartdata.compulsivedepart[legenddata[i]]

            },
          );
        }
        var option = {
          title: {
            text: '共下发文书'+this.$store.state.basechartdata.compulsivetotal+'份',
            subtextStyle: {
              top: '10'
            },
            left: 'center',
            textStyle: {
              fontSize: 14,
              color: '#4c5f5c',
            },
            top: 0,
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            orient: 'horizontal',
            padding: [20, 10],
            align: 'auto',
            itemWidth: 35,
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
            // boundaryGap: false,
            data: this.$store.state.basechartdata.compulsivedepart['compulsivecom__coalcompanyname']
          },
          yAxis: {
            type: 'value'
          },
          series: series
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
