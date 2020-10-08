<template>
  <el-row>
    <el-col :span="24"><div ref="issues"  :style="{height:'200px',width:'100%' ,background:'#ffffff'}" /></el-col>

<!--    <el-col :span="12"><div ref="issues2"  :style="{height:'200px',width:'50%' ,background:'#ffffff'}" /></el-col>-->
  </el-row>
</template>

<script>
    import  'echarts/theme/wonderland.js'

    export default {
        name: "issues",
        mounted() {
          this.$nextTick(() => {
            this.init()

          })
        },
        data(){
          return{
            superdemo:this.$store.state.tempstore.data
          }
        },
        created() {
           // console.log(this.superdemo)
          },
      methods: {
          init() {
            var myChart = this.$echarts.init((this.$refs.issues),'wonderland')
            var cellSize = [80, 80];
            var pieRadius = 30;

function getVirtulData() {
    echarts.number.parseD
    var date = + echarts.number.parseDate('2017-02-01');
    var end = + echarts.number.parseDate('2017-03-01');
    var dayTime = 3600 * 24 * 1000;
    var data = [];
    for (var time = date; time < end; time += dayTime) {
        data.push([
            echarts.format.formatTime('yyyy-MM-dd', time),
            echarts.floor(Math.random() * 10000)
        ]);
    }
    return data;
}

function getPieSeries(scatterData, chart) {
    return echarts.util.map(scatterData, function (item, index) {
        var center = chart.convertToPixel('calendar', item);
        return {
            id: index + 'pie',
            type: 'pie',
            center: center,
            label: {
                normal: {
                    formatter: '{c}',
                    position: 'inside'
                }
            },
            radius: pieRadius,
            data: [
                {name: '工作', value: Math.round(Math.random() * 24)},
                {name: '娱乐', value: Math.round(Math.random() * 24)},
                {name: '睡觉', value: Math.round(Math.random() * 24)}
            ]
        };
    });
}

function getPieSeriesUpdate(scatterData, chart) {
    return myChart.util.map(scatterData, function (item, index) {
        var center = chart.convertToPixel('calendar', item);
        return {
            id: index + 'pie',
            center: center
        };
    });
}

var scatterData = getVirtulData();
            // console.log(this)
            var that=this
        var option = {
         tooltip : {},
    legend: {
        data: ['工作', '娱乐', '睡觉'],
        bottom: 20
    },
    calendar: {
        top: 'middle',
        left: 'center',
        orient: 'vertical',
        cellSize: cellSize,
        yearLabel: {
            show: false,
            textStyle: {
                fontSize: 30
            }
        },
        dayLabel: {
            margin: 20,
            firstDay: 1,
            nameMap: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
        },
        monthLabel: {
            show: false
        },
        range: ['2017-02']
    },
    series: [{
        id: 'label',
        type: 'scatter',
        coordinateSystem: 'calendar',
        symbolSize: 1,
        label: {
            normal: {
                show: true,
                formatter: function (params) {
                    return myChart.format.formatTime('dd', params.value[0]);
                },
                offset: [-cellSize[0] / 2 + 10, -cellSize[1] / 2 + 10],
                textStyle: {
                    color: '#000',
                    fontSize: 14
                }
            }
        },
        data: scatterData
    }]
};

var pieInitialized;
setTimeout(function () {
    pieInitialized = true;
    myChart.setOption({
        series: getPieSeries(scatterData, myChart)
    });
}, 10);

app.onresize = function () {
    if (pieInitialized) {
        myChart.setOption({
            series: getPieSeriesUpdate(scatterData, myChart)
        });
    }
        };

            myChart.setOption(option);
          }


        }
    }
</script>

<style scoped>

</style>
