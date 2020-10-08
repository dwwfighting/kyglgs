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
        superdemo: this.$store.state.basechartdata.superchecktimeanalyze,
      }
    },
    created() {
    },
    methods: {
      init() {
        var myChart = this.$echarts.init((this.$refs.issues), 'wonderland')
        // console.log(this)
        var option = {
          title: {
            text: '上级隐患数量分析',
            left: 'center',
            textStyle: {
              fontSize: 14,
              color: '#4c5f5c',
            },
            top: 0,
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            // function (value) {
            //      console.log(value)
            //      if (value.data > 0) {
            //        return -value.data;
            //      }
            //    }

          },
          legend: {
            data: ['检查次数', '一般隐患'],
            orient: 'horizontal',
            padding: [20, 10],
            align: 'auto',
            itemWidth: 35,
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'value',
              axisLabel: {
                show: true,//不显示坐标轴的数字
                formatter: function (value) {
                  if (value < 0) {
                    return -value;
                  }
                  if (value >= 0) {
                    return value;
                  }
                }
              }
            }
          ],
          yAxis: [
            {
              type: 'category',
              axisTick: {
                show: false
              },
              data: this.$store.state.basechartdata.supercheckissueslr.checkedcoalcompany__coalcompanyname
            }
          ],
          series: [

            {
              name: '一般隐患',
              type: 'bar',
              stack: '总量',
              label: {
                show: true,
              },
              data: this.$store.state.basechartdata.supercheckissueslr['A级一般安全隐患']
            },
            {
              name: '重大安全隐患',
              type: 'bar',

              label: {
                show: true,
                formatter: function (value) {
                  if (value.data < 0) {
                    return -value.data;
                  }
                },
              },
              data: this.$store.state.basechartdata.supercheckissueslr['C级重大安全生产隐患']
            },
            {
              name: '重大安全风险',
              type: 'bar',

              label: {
                show: true,
                formatter: function (value) {
                  if (value.data < 0) {
                    return -value.data;
                  }
                },
              },
              data: this.$store.state.basechartdata.supercheckissueslr['重大安全风险']
            },
            {
              name: '检查次数',
              type: 'bar',
              stack: '总量',
              label: {
                show: true,
                formatter: function (value) {
                  if (value.data < 0) {
                    return -value.data;
                  }
                },
              },
              data: this.$store.state.basechartdata.supercheckissueslr.supercheckunit__superiororgname
            },

          ]
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
