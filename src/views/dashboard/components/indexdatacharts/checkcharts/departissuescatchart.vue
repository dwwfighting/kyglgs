<template>
  <el-row>
    <el-col :span="24">
      <div ref="issues" :style="{height:'400px',width:'100%' ,background:'#ffffff'}"/>
    </el-col>

    <!--    <el-col :span="12"><div ref="issues2"  :style="{height:'200px',width:'50%' ,background:'#ffffff'}" /></el-col>-->
  </el-row>
</template>

<script>

  import 'echarts/theme/shine'

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
        var myChart = this.$echarts.init((this.$refs.issues), 'shine')
        var series = [];
        var legenddata=Object.keys(this.$store.state.basechartdata.departlinecom).slice(1)

        for (var i = 0; i < legenddata.length; i++) {
          series.push(
            {
              name: legenddata[i],
              type: 'line',
              stack: '总量',
              areaStyle: {},
              data: this.$store.state.basechartdata.departlinecom[legenddata[i]]
            },

          );
        }
        var option = {
          title: {
             text: '处室检查隐患分析'+' 共查问题'+this.$store.state.basechartdata.departissuestotal+'条',

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
            padding: [25, 150],
            align: 'auto',
            itemWidth: 15,
            data:legenddata
          },
          grid: {
            left: '2%',
            right: '3%',
            bottom: '3%',
            top:'18%',
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
            data: this.$store.state.basechartdata.departlinecom.checkrecord__checkedcoalcompany__coalcompanyname
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
