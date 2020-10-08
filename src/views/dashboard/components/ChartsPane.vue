<template>

    <div :class="className" :style="{height:height,width:'100%'}" />

</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
var xData = function() {
          var data = [];
          for (var i = 1; i < 13; i++) {
              data.push(i + "月份");
          }
          return data;
      }();
export default {

  props: {
    piedata: {
      type:Array,
      default:''
    },
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '500px'
    }
  },
  data() {
    return {
      chart:null,
      list:this.piedata
    }
  },
  created() {




    console.log(this.list)
  },
  mounted() {

    this.$nextTick(() => {
      this.initChart()
    })
      },
    methods: {




    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.chart.setOption({

    title: {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                {value: 335, name: '直接访问'},
                {value: 310, name: '邮件营销'},
                {value: 234, name: '联盟广告'},
                {value: 135, name: '视频广告'},
                {value: 1548, name: '搜索引擎'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]



      })
    }


    }
}


</script>

<style scoped>

</style>
