<template>
  <div style="position:absolute;width:100%;height: 100%;">
    <div class="dashboard">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <div class="flex-container column">
        <div class="item one" style="transform: translate(-30.4%,-33.5%) scale(0.33)" @click="clickChart('1')">
          <multipleColumn />
        </div>
        <div class="item two" style="transform: translate(-30.4%,0.5%) scale(0.33)" @click="clickChart('2')">
          <column />
        </div>
        <div class="item three" style="transform: translate(-30.4%,34.5%) scale(0.33)" @click="clickChart('3')">
          <v-line />
        </div>
        <div class="item four active" style="transform: translate(35.7%, 0) scale(1)" @click="clickChart('4')">
          <point />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import multipleColumn from './globalmap/multipleColumn/multipleColumn'
import column from './globalmap/column/column'
import line from './globalmap/line/line'
import point from './globalmap/point/point'
export default {
  components: {
    column,
    multipleColumn,
    'v-line': line,
    point
  },
  data() {
    return {
      items: []
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    resize() {
      this.$root.charts.forEach((myChart) => {
        myChart.resize()
      })
    },
    init() {
      this.items = document.querySelectorAll('.flex-container .item')
      console.log(this.items)
      for (let i = 0; i < this.items.length; i++) {
        this.items[i].dataset.order = i + 1
      }
    },
    clickChart(clickIndex) {
      const activeItem = document.querySelector('.flex-container .active')
      const activeIndex = activeItem.dataset.order
      const clickItem = this.items[clickIndex - 1]
      if (activeIndex === clickIndex) {
        return
      }
      activeItem.classList.remove('active')
      clickItem.classList.add('active')
      this.setStyle(clickItem, activeItem)
    },
    setStyle(el1, el2) {
      const transform1 = el1.style.transform
      const transform2 = el2.style.transform
      el1.style.transform = transform2
      el2.style.transform = transform1
    }
  }
}

</script>

<style lang="scss" scoped>
 @import "@/styles/datavisualization/globalaccident.scss";
</style>
