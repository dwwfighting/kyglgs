<template>
  <div class="card">
    <nav>
      <svg
        class="arrow"
        version="1.1"
        viewBox="0 0 512 512"
        width="512px"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <polygon points="352,115.4 331.3,96 160,256 331.3,416 352,396.7 201.5,256 " stroke="#727272" /></svg>
      <slot name="header" />
    </nav>
    <div class="photo">
      <div />
      <ul>
        <li
          v-for="(value,index) in drawdata"
          :key="index"
          :class="{active:index==isActive} "
          @click="chooseClick(index)"
        >
          <div class="card1">
            <span class="card1index">{{ index+1 }}</span>
          </div>
          <div class="card2">
            <p>
              <label>处罚单位：</label><span>{{ value.penaltydepment }}</span>
            </p>
            <p>
              <label>检查日期：</label><span>{{ value.checkdate }}</span>
              <label>处罚日期：</label><span>{{ value.penaltydate }}</span>
            </p>
            <p>
              <label>罚款涉及：</label>
              <span v-for="(item,key) in value.penaltycat" :key='key' class="referto"> {{ item }} </span>
            </p>
            <p>
              <label>罚款金额：</label><span>{{ value.penaltyamount }}</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div class="description">
      <h3>罚款原因</h3>
      <h4>距上一次同样原因相隔**天</h4>
      <p :key="index" style="font-size: 18px;color:#000000;text-align: left" v-for="(value,index) in array">{{ value}}</p>
      <button>增加关注</button>
      <button>已阅人员</button>
    </div>
  </div>

</template>

<script>

export default {
  name: 'Penaltycompie',
  props: ['drawdata'],
  data() {
    return {
      isActive: 0,
      array: []
    }
  },
  watch: {
    drawdata() {
      this.$nextTick(() => {
        this.array = []
        this.isActive = 0
        this.array.push(this.drawdata[0].penaltyreason)
      })
    }
  },
  created() {
  },
  mounted() {
    this.$nextTick(() => {
      console.log(this.drawdata)
    })
  },
  methods: {
    chooseClick(index) {

      this.array = []
      this.isActive = index
      this.array.push(this.drawdata[index].penaltyreason)
    }
  }
  // watch: {
  //   accidentalldata() {
  //     setTimeout(() => {
  //       this.$nextTick(() => {
  //         this.init()
  //       })
  //     }, 500)
  //   }
  // }
}

</script>

<style lang="scss" scoped>
  @import "@/styles/drawerinfo/drawerinfo.scss";
</style>
