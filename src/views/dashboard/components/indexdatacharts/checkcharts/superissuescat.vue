<template>
  <el-row>
    <el-col :span="24">
      <div ref="superissuescat" :style="{height:'200px',width:'100%' ,background:'#ffffff'}"/>
    </el-col>

    <!--    <el-col :span="12"><div ref="issues2"  :style="{height:'200px',width:'50%' ,background:'#ffffff'}" /></el-col>-->
  </el-row>
</template>

<script>

  import 'echarts/theme/wonderland'


  export default {
    name: "accidentnum",

    data() {
      return {
        option: {
          title: {
            text: '上级检查隐患分级分析',
            subtext:'上级共查隐患'+this.$store.state.basechartdata.supercheckissuescatnum+'条',
            left: 'center',
            top:'0',
            textStyle: {
              fontSize: 14,
            },
            subtextStyle:{
                 color: '#000000'  ,
                 verticalAlign:'bottom',
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: '{c} ({d}%)'
          },
          dataset: this.$store.state.basechartdata.supercheckcatanalyze,
          legend: {
            orient: 'vertical',
            padding: [50, 10],
            align: 'left',
            itemWidth: 15,
            width: '100%',
            left: '10',
            top: '12%'
          },
          series: [
            {
              type: 'pie',
              radius: '50%',
              center: ['55%', '60%'],
              datasetIndex: 0,
              label: {
                formatter: '{c}  {per|{d}%}  ',
                backgroundColor: '#eee',
                // borderColor: '#000000',
                borderWidth: 1,
                borderRadius: 1,
                // shadowBlur:3,
                // shadowOffsetX: 2,
                // shadowOffsetY: 2,
                // shadowColor: '#999',
                // padding: [0, 7],
                rich: {

                  per: {
                    color: '#eee',
                    backgroundColor: '#334455',
                    padding: [4, 4],
                    borderRadius: 0,

                  }
                }
              },
            }
          ]
        }

      }
    },

    methods: {
      init() {
        var myChart = this.$echarts.init((this.$refs.superissuescat), 'wonderland')
        myChart.setOption(this.option);
    window.addEventListener("resize", () => {
            myChart.resize();
      })
      },

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
