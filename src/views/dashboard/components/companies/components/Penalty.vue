<template>
  <div ref="issues"  :style="{height:'400px',width:'100%'}" />
</template>

<script>
    export default {
        name: "Penalty",
        mounted() {
          this.init()
        },
        methods: {
          init() {
            var myChart = this.$echarts.init(this.$refs.issues)
            var option = {
              legend: {},
              tooltip: {},
              title: {
                  text: '罚款情况',
                  left: 'center',
                  top: 20,
              },
              dataset: {
                source: [
                  ['product', '2012', '2013', '2014', '2015'],
                  ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
                  ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
                  ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]
                ]
              },
              xAxis: [
                {type: 'category', gridIndex: 0},

              ],
              yAxis: [
                {gridIndex: 0},
              ],

              series: [
                // These series are in the first grid.
                {type: 'bar', seriesLayoutBy: 'row'},
                {type: 'bar', seriesLayoutBy: 'row'},
                {type: 'bar', seriesLayoutBy: 'row'},

              ]
            };


            myChart.setOption(option);
          }


        }
    }
</script>

<style scoped>

</style>
