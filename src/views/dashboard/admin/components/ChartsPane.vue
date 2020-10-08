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
      default: '600px'
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

backgroundColor: "#344b58",
    "title": {
        "text": "隐患排查统计分析",
        x: "45%",

        textStyle: {
            color: '#fff',
            fontSize: '22'
        },
        subtextStyle: {
            color: '#90979c',
            fontSize: '16',

        },
    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow",
            textStyle: {
                color: "#fff"
            }

        },
    },
    "grid": {
        "borderWidth": 0,
        "top": 110,
        "bottom": 95,
        textStyle: {
            color: "#fff"
        }
    },
    "legend": {
        x: '40%',
        top: '5%',
        textStyle: {
            color: '#90979c',
        },
    },


    "calculable": true,
    "xAxis": [{
        "type": "category",
        "axisLine": {
            lineStyle: {
                color: '#90979c'
            }
        },
        "splitLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "splitArea": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,

        },
        "data": xData,
    }],
    "yAxis": [{
        "type": "value",
        "splitLine": {
            "show": false
        },
        "axisLine": {
            lineStyle: {
                color: '#90979c'
            }
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,

        },
        "splitArea": {
            "show": false
        },

    }],
    "dataZoom": [{
        "show": true,
        "height": 30,
        "xAxisIndex": [
            0
        ],
        bottom: 30,
        "start": 10,
        "end": 80,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
        handleStyle:{
            color:"#d3dee5",

        },
           textStyle:{
            color:"#fff"},
           borderColor:"#90979c"


    }, {
        "type": "inside",
        "show": true,
        "height": 15,
        "start": 1,
        "end": 35
    }],
    "series": [{
            "name": "义棠",
            "type": "bar",
            "stack": "总量",
            "barMaxWidth": 35,
            "barGap": "10%",
            "itemStyle": {
                "normal": {
                    "color": "rgba(255,144,128,1)",
                    "label": {
                        "show": true,
                        "textStyle": {
                            "color": "#fff"
                        },
                        "position": "inside",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                709,
                1917,
                2455,
                2610,
                1719,
                1433,
                1544,
                3285,
                5208,
                3372,
                2484,
                4078
            ],
        },

        {
            "name": "倡源",
            "type": "bar",
            "stack": "总量",
            "itemStyle": {
                "normal": {
                    "color": "rgba(0,191,100,1)",
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "position": "inside",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                327,
                1776,
                507,
                1200,
                800,
                482,
                204,
                1390,
                1001,
                951,
                381,
                220
            ]
        },

        {
            "name": "城峰",
            "type": "bar",
            "stack": "总量",
            "itemStyle": {
                "normal": {
                    "color": "rgba(0,151,183,1)",
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "position": "inside",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                327,
                1776,
                507,
                1200,
                800,
                482,
                204,
                1390,
                1001,
                951,
                381,
                220
            ]
        },

        {
            "name": "青云",
            "type": "bar",
            "stack": "总量",
            "itemStyle": {
                "normal": {
                    "color": "rgba(104,191,183,44)",
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "position": "inside",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                327,
                1776,
                507,
                1200,
                800,
                482,
                204,
                1390,
                1001,
                951,
                381,
                220
            ]
        },

        {
            "name": "安益",
            "type": "bar",
            "stack": "总量",
            "itemStyle": {
                "normal": {
                    "color": "rgba(155,191,11,1)",
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "position": "inside",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                327,
                1776,
                507,
                1200,
                800,
                482,
                204,
                1390,
                1001,
                951,
                381,
                220
            ]
        },

        {
            "name": "瑞东",
            "type": "bar",
            "stack": "总量",
            "itemStyle": {
                "normal": {
                    "color": "rgba(252,130,48,11)",
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "position": "inside",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                327,
                1776,
                507,
                1200,
                800,
                482,
                204,
                1390,
                1001,
                951,
                381,
                220
            ]
        },

      // {
      //       "name": "总数",
      //       "type": "line",
      //       symbolSize:10,
      //       symbol:'circle',
      //       "itemStyle": {
      //           "normal": {
      //               "color": "rgba(252,230,48,1)",
      //               "barBorderRadius": 0,
      //               "label": {
      //                   "show": true,
      //                   "position": "top",
      //                   formatter: function(p) {
      //                       return p.value > 0 ? (p.value) : '';
      //                   }
      //               }
      //           }
      //       },
      //       "data": [
      //           1036,
      //           3693,
      //           2962,
      //           3810,
      //           2519,
      //           1915,
      //           1748,
      //           4675,
      //           6209,
      //           4323,
      //           2865,
      //           4298
      //       ]
      //   },
    ]
      })
    }






    //    initChart(){
    //         this.chart = echarts.init(this.$el,'macarons');
    //         console.log(this.chart)
    //         this.setOptions();
    //       },
    //    setOptions()
    //       {
    //
    //         this.chart.setOption({
    //           title: {
    //             text: 'ECharts 入门示例'
    //           },
    //           tooltip: {},
    //           xAxis: {
    //             data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
    //           },
    //           yAxis: {},
    //           series: [{
    //             name: '销量',
    //             type: 'bar',
    //             data: [5, 20, 36, 10, 10, 20]
    //     }]
    //   })
    // }
    }
}


</script>

<style scoped>

</style>
