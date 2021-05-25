<template>
  <div class="map">
    <!--      <div class="chart" style="width: 100%;height: 500px;" />-->
    <div ref="accidentnum" :style="{height:'700px',width:'100%' }" />
  </div>
</template>

<script>

import echarts from 'echarts'
import 'echarts/theme/dark'
import axios from 'axios'
// import china from 'echarts/map/js/china'
export default {

  name: 'Globalmap',
  data() {
    return {
    }
  },
  created() {
    this.$nextTick(() => {
      this.init()
    })
  },

  methods: {
    getCityData() {
      const provincedata = [{ name: '山西', value: [123, 456] }]
      axios.get('data/globalaccident.json').then((res) => {
        // console.log(res.data.city)
        Object.keys(res.data).forEach(function(key) {
          console.log(key)
        })
      })
      return provincedata
    },
    init() {
      // var myChart = echarts.init(document.querySelector('.map .chart'))
      var myChart = echarts.init((this.$refs.accidentnum))
      var provincedata = this.getCityData()
      // eslint-disable-next-line no-unused-vars
      var geoCoordMap = {
        '上海': [121.4648, 31.2891],
        '东莞': [113.8953, 22.901],
        '东营': [118.7073, 37.5513],
        '中山': [113.4229, 22.478],
        '临汾': [111.4783, 36.1615],
        '临沂': [118.3118, 35.2936],
        '丹东': [124.541, 40.4242],
        '丽水': [119.5642, 28.1854],
        '新疆': [86.9236, 41.5883],
        '佛山': [112.8955, 23.1097],
        '保定': [115.0488, 39.0948],
        '甘肃': [103.9901, 36.3043],
        '北京': [116.4551, 40.4539],
        '北海': [109.314, 21.6211],
        '江苏': [120.2062, 32.9208],
        '广西': [108.479, 24.1152],
        '江西': [116.0046, 28.6633],
        '南通': [121.1023, 32.1625],
        '厦门': [118.1689, 24.6478],
        '台州': [121.1353, 28.6688],
        '安徽': [117.29, 32.0581],
        '内蒙古': [111.4124, 41.4901],
        '咸阳': [108.4131, 34.8706],
        '黑龙江': [127.9688, 46.868],
        '唐山': [118.4766, 39.6826],
        '嘉兴': [120.9155, 30.6354],
        '大同': [113.7854, 39.8035],
        '天津': [117.4219, 39.4189],
        '山西': [112.3352, 37.9413],
        '威海': [121.9482, 37.1393],
        '宁波': [121.5967, 29.6466],
        '宝鸡': [107.1826, 34.3433],
        '宿迁': [118.5535, 33.7775],
        // '江苏': [119.3000,31.5582],
        '广东': [114.5107, 23.8196],
        '廊坊': [116.521, 39.0509],
        '延安': [109.1052, 36.4252],
        '张家口': [115.1477, 40.8527],
        '徐州': [117.5208, 34.3268],
        '德州': [116.6858, 37.2107],
        '惠州': [114.6204, 23.1647],
        '四川': [103.9526, 30.7617],
        '扬州': [119.4653, 32.8162],
        '承德': [117.5757, 41.4075],
        '西藏': [91.1865, 30.1465],
        '无锡': [120.3442, 31.5527],
        '日照': [119.2786, 35.5023],
        '云南': [101.9199, 25.0663],
        '浙江': [119.5313, 29.8773],
        '枣庄': [117.323, 34.8926],
        '柳州': [109.3799, 24.9774],
        '株洲': [113.5327, 27.0319],
        '湖北': [113.0896, 31.3628],
        '汕头': [117.1692, 23.3405],
        '江门': [112.6318, 22.1484],
        '辽宁': [123.1238, 42.1216],
        '沧州': [116.8286, 38.2104],
        '河源': [114.917, 23.9722],
        '泉州': [118.3228, 25.1147],
        '泰安': [117.0264, 36.0516],
        '泰州': [120.0586, 32.5525],
        '山东': [117.1582, 36.8701],
        '济宁': [116.8286, 35.3375],
        '海口': [110.3893, 19.8516],
        '淄博': [118.0371, 36.6064],
        '淮安': [118.927, 33.4039],
        '深圳': [114.5435, 22.5439],
        '清远': [112.9175, 24.3292],
        '温州': [120.498, 27.8119],
        '渭南': [109.7864, 35.0299],
        '湖州': [119.8608, 30.7782],
        '湘潭': [112.5439, 27.7075],
        '滨州': [117.8174, 37.4963],
        '潍坊': [119.0918, 36.524],
        '烟台': [120.7397, 37.5128],
        '玉溪': [101.9312, 23.8898],
        '珠海': [113.7305, 22.1155],
        '盐城': [120.2234, 33.5577],
        '盘锦': [121.9482, 41.0449],
        '河北': [115.4995, 38.6006],
        '福建': [118.0543, 26.5222],
        '秦皇岛': [119.2126, 40.0232],
        '绍兴': [120.564, 29.7565],
        '聊城': [115.9167, 36.4032],
        '肇庆': [112.1265, 23.5822],
        '舟山': [122.2559, 30.2234],
        '苏州': [120.6519, 31.3989],
        '莱芜': [117.6526, 36.2714],
        '菏泽': [115.6201, 35.2057],
        '营口': [122.4316, 40.4297],
        '葫芦岛': [120.1575, 40.578],
        '衡水': [115.8838, 37.7161],
        '衢州': [118.6853, 28.8666],
        '青海': [97.4038, 35.8207],
        '陕西': [109.1162, 34.2004],
        '贵州': [106.6992, 26.7682],
        '连云港': [119.1248, 34.552],
        '邢台': [114.8071, 37.2821],
        '邯郸': [114.4775, 36.535],
        '河南': [113.4668, 34.6234],
        '鄂尔多斯': [108.9734, 39.2487],
        '重庆': [107.7539, 30.1904],
        '金华': [120.0037, 29.1028],
        '铜川': [109.0393, 35.1947],
        '宁夏': [106.3586, 38.1775],
        '镇江': [119.4763, 31.9702],
        '吉林': [125.8154, 44.2584],
        '湖南': [111.8823, 28.2568],
        '长治': [112.8625, 36.4746],
        '阳泉': [113.4778, 38.0951],
        '青岛': [120.4651, 36.3373],
        '韶关': [113.7964, 24.7028],
        '海南': [109.8500, 19.7028],
        '台湾': [120.7964, 24.1528]
      }

      var series = [
        {
          name: '发生次数',
          type: 'map',
          map: 'china',
          zoom: 1.152,
          // top: '30',
          zlevel: 1,
          left: 'center',
          align: 'left',
          label: {
            normal: {
              show: true
            },
            emphasis: {
              show: true
            }
          },
          itemStyle: {
            normal: {
              borderColor: '#112b3b', // 省市边界线
              // borderColor: '#a7e4e6', // 省市边界线
              shadowColor: 'rgba(24,24,24,0.8)',
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 120
            },
            emphasis: {
              areaColor: '#086a8b',
              borderColor: '#086a8b'
            }
          },
          data: [{
            name: '山西',
            value: 35
          }]
        },
        {
          name: '伤亡人数',
          type: 'map',
          map: 'china',
          zoom: 1.152,
          // top: '30',
          zlevel: 1,
          left: 'center',
          align: 'left',
          label: {
            normal: {
              show: true
            },
            emphasis: {
              show: true
            }
          },
          itemStyle: {
            normal: {
              borderColor: '#112b3b', // 省市边界线
              // borderColor: '#a7e4e6', // 省市边界线
              shadowColor: 'rgba(24,24,24,0.8)',
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 120
            },
            emphasis: {
              areaColor: '#086a8b',
              borderColor: '#086a8b'
            }
          },
          data: [{
            name: '山西',
            value: 12
          }]
        }
      ]
      var option = {
        tooltip: {
          triggerOn: 'mousemove',
          trigger: 'item',
          formatter: function(params) {
            var res = params.name + '<br/>'
            var myseries = option.series
            for (var i = 0; i < myseries.length; i++) {
              for (var j = 0; j < myseries[i].data.length; j++) {
                if (myseries[i].data[j].name == params.name) {
                  res += myseries[i].name + ' : ' + myseries[i].data[j].value + '</br>'
                }
              }
            }
            return res
          }
        },
        title: {
          text: '全国煤矿安全事故分布图',
          subtext: '数据来源煤矿安全网',
          left: 'center',
          top: '40px',
          textStyle: {
            color: '#fff'
          }
        },
        backgroundColor: 'rgba(14,40,50,0.88)',

        visualMap: [
          {
          // 图例值控制
            show: true,
            type: 'piecewise',
            seriesIndex: 0,
            inRange: {
              color: ['#FFAE57', '#FF7853', '#EA5151', '#CC3F57', '#9A2555']
            },
            textStyle: {
              color: '#fff'
            },
            pieces: [{
              min: 30
            }, // 不指定 max，表示 max 为无限大（Infinity）。
            {
              min: 10,
              max: 30
            },
            {
              min: 3,
              max: 10
            },
            {
              max: 3
            }
            ],

            showLabel: true,
            calculable: true
          }
        ],
        geo: {
          map: 'china',
          show: true,
          roam: false, // 是否允许缩放
          layoutCenter: ['50%', '50%'], // 地图位置
          layoutSize: '120%',
          itemStyle: {
            normal: {
              // areaColor: '#ff1322',
              show: 'true',
              color: '#086a8b', // 地图背景色
              borderWidth: 2,
              borderColor: '#a7e4e6', // 省市边界线
              shadowColor: 'rgba(8,106,139,0.6)',
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 120
            },
            emphasis: {
              show: 'true',
              color: 'rgba(255, 43, 61, 0.9)' // 悬浮背景
            }
          }
        },
        // legend: {
        //     orient: 'vertical',
        //     top: '30',
        //     left: 'center',
        //     align: 'right',
        //     data: [
        //     ],
        //     textStyle: {
        //         color: '#fff',
        //         fontSize: 20,
        //     },
        //     itemWidth: 50,
        //     itemHeight: 30,
        //     selectedMode: 'multiple'
        // },
        series: series
      }

      myChart.setOption(option, true)

      window.addEventListener('resize', () => {
        myChart.resize()
      })
    }
  }
}
</script>

<style scoped>

</style>
