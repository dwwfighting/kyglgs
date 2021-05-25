<!-- 层叠柱状图 -->

<template>
  <div class="line">
    <!--    <v-header :name="name" :legend-arr="legendArr" :my-chart="myChart" />-->
    <!--    <v-filter v-if="myChart._dom" :my-chart="myChart" />-->

    <div class="sign">
      <h1 v-show="showRentPrise" id="loadingH1">全国事故概况<span id="loading">.</span></h1>
      <div class="">

        <vue-typed-js v-if="show" :strings="[accidentstr]">
          <h3 class="typing" />
        </vue-typed-js>

        <vue-typed-js v-if="show" :strings="[acceleration_type]" :start-delay="1500">
          <h3 class="typing" />
        </vue-typed-js>

        <vue-typed-js v-if="show" :strings="[accidentstr1]" :start-delay="3000">
          <h3 class="typing" />
        </vue-typed-js>

        <vue-typed-js v-if="show" :strings="[globalac_seriousnessstr]" :start-delay="4500">
          <h3 ref="seriousnessstr" class="typing" />
        </vue-typed-js>

        <vue-typed-js v-if="show1" :strings="[accidentstr2]" :start-delay="16000">
          <h3 class="typing" />
        </vue-typed-js>

      </div>

    </div>

  </div>

</template>

<script>

// import header from '../header/header'
// import filter from '../filter/filter'
import { mapGetters } from 'vuex'
export default {
  components: {
    // 'v-header': header,
    // 'v-filter': filter
  },
  data() {
    return {
      legendArr: [],
      color: this.$store.state.color,
      myChart: {},
      name: '全国事故轮训显示',
      showRentPrise: true,
      show: false,
      show1: false,
      detailshow: false,
      accidentstr: '',
      accidentstr1: '',
      accidentstr2: '',
      acceleration_type: '',
      globalac_seriousnessstr: ''
    }
  },
  // watch:{
  //   accidentstr1(){
  //     this.aaa()
  //   }
  // },
  created() {

  },
  mounted() {
    this.init()
  },
  computed: {
    ...mapGetters(
      ['globalaccienttotal', 'globalaccidentinjure', 'globalaccidenttrapped', 'globalac_seriousness', 'globalac_seriousness_num']
    )
  },
  methods: {
    accidentdetail() {
      const accidentstr = '>2020年11月15日至今全国共发生' + this.globalaccienttotal + '起事故'
      const accidentstr1 = '>2020年11月15日至今全国共' + this.globalaccidentinjure + '人伤亡'
      const accidentstr2 = '>2020年11月15日至今全国共' + this.globalaccidenttrapped + '人失联'
      const globalac_seriousness = this.globalac_seriousness
      const globalac_seriousnessstr = this.globalac_seriousness_num
      var str = ''
      var str1 = ''
      for (var item in globalac_seriousness) {
        str += globalac_seriousness[item]['ac_type'] + globalac_seriousness[item]['value'] + '起' + '  '
      }
      for (var item in globalac_seriousnessstr) {
        str1 += globalac_seriousnessstr[item]['事故时间'] + ' ' + globalac_seriousnessstr[item]['city'] + ' ' + globalac_seriousnessstr[item]['事故类型'] + ' ' +
            '伤亡' + globalac_seriousnessstr[item]['伤亡人数'] + '人' + ' ' + globalac_seriousnessstr[item]['事故简述'] + '<br/>'
      }
      this.acceleration_type = str
      this.globalac_seriousnessstr = str1
      this.accidentstr = accidentstr
      this.accidentstr1 = accidentstr1
      this.accidentstr2 = accidentstr2
      this.show = true
      this.show1 = true
      // this.$nextTick(() => {
      //   console.log(this.$refs)
      //   if (str1.length == this.$refs.seriousnessstr.strings[0].length){
      //     this.show1 = true
      //   }
      // })
    },

    init() {
      var initDot = document.getElementById('loading')
      var loading = setInterval(function() {
        if (initDot.innerHTML.length === 5) {
          initDot.innerHTML = ''
        } else {
          initDot.innerHTML += '.'
        }
      }, 350) // Dot Speed

      setTimeout(() => {
        // console.log('aaa')
        this.accidentdetail()
      }, 0)
    }
  }

}

</script>
<style lang="scss" scoped>

  @import "@/styles/datavisualization/visualization1.scss";

</style>
