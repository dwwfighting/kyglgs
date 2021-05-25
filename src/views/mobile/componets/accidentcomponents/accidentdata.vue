<template>
  <div class="datapresentation">
    <div class="datapreheader">
      <sticky :sticky-top="50">

        <div @click="timeselect">
          <nut-button
            small
            type="light"
          >
            <span>19-21 <i class="el-icon-caret-bottom" /></span>
          </nut-button>
        </div>
      </sticky>
    </div>
    <div class="hor-panel">
      <nut-scroller @jump="jump()">
        <div v-for="(item, index) of itemnum" slot="list" :key="index" class="nut-hor-list-item">
          <accidentscroller>
            <div slot="item-text">共发生</div>
            <div slot="item-total">asdfasdf</div>
          </accidentscroller>
        </div>
      </nut-scroller>
    </div>
    <div class="datapresentationbody">
      <ul>
        <li v-for="(value, index) in datalist" :key="value.id" @click="get_detail(value.id)">

          <div class="data_header">
            <span>{{ value.accidentdate | getfinaldate }}</span>
          </div>
          <div class="data_body">
            <span>{{ value.accidentcom }}</span>
            <span>{{ value.wounded }}</span>
            <span>{{ value.accidentarea }}</span>
            <span>{{ value.accidentcate }}</span>
            <span>{{ value.injuredpart }}</span>
            <span>{{ value.injuredclass }}</span>
          </div>

        </li>
      </ul>
      <div class="data_header" @click="loaddata"><p>{{ message }}</p></div>
      <div />
    </div>
    <nut-datepicker
      :is-visible="isVisible"
      type="date"
      title="请选择月份"
      default-value="2021-05-02"
      @close="switchPicker('isVisible')"
      @choose="setChooseValue"
    />
  </div>
</template>

<script>
import { accidents, get_accidents } from '@/api/accidentapi/accidentsapi'
import Sticky from '@/components/Sticky'
import axios from 'axios'
import accidentscroller from './accidentscroller'
function getFullDate(targetDate) {
  var D, y, m, d
  if (targetDate) {
    D = new Date(targetDate)
    y = D.getFullYear()
    m = D.getMonth() + 1
    d = D.getDate()
  }
  m = m > 9 ? m : '0' + m
  d = d > 9 ? d : '0' + d
  return y + '-' + m + '-' + d
}

export default {
  name: 'Accidentdata',
  components: { Sticky, accidentscroller },
  filters: {
    getfinaldate(value) {
      return value.replace('T', ' ')
    }
  },
  data() {
    return {
      isVisible: false,
      date: null,
      datalist: [],
      listData: '',
      lastyear_res: null,
      count: null,
      nextpage: null,
      message: '点击加载',
      listQuery: {
        page: 1,
        limit: 10,
        start_date: '',
        end_date: ''
      },
      handler: function(e) {
        e.preventDefault()
      }
    }
  },
  computed: {
    itemnum() {
      let num = 0
      if (this.lastyear_res) {
        num += 2
      }
      const arrayboj = this.listData.accidentcomnum
      if (arrayboj) {
        num = arrayboj.length + 2
      }
      console.log(num)
      return new Array(num)
    }
  },
  watch: {
    // maskShow: function(newvs, oldvs) { // picker关闭没有回调函数，所以侦听该属性替代
    //   if (newvs) {
    //     this.closeTouch()
    //   } else {
    //     this.openTouch()
    //   }
    // }
  },
  mounted() {
    this.initdata()
  },
  methods: {
    get_detail(id) {
      this.$router.push({ name: 'accidentdetail', params: { id }})
    },
    initdata() {
      axios.all([accidents(this.listQuery), get_accidents(this.listQuery)])
        .then(axios.spread((accidents, get_accidents) => {
          this.datalist = accidents.results
          this.nextpage = accidents.links.next
          this.count = accidents.count
          this.listData = get_accidents.data
          this.lastyear_res = get_accidents.lastyear_res
        }))
        .catch(err => {
          console.log(err)
        })
    },
    timeselect() {
      this.isVisible = true
    },
    switchPicker(param) {
      this[`${param}`] = !this[`${param}`]
    },
    setChooseValue(param) {
      this.date = param[3]
      console.log(this.date)
      var sel_date = new Date(this.date)
      var endOfMonth = new Date(sel_date.getFullYear(), sel_date.getMonth() + 1, 0).getDate()
      var endDate = getFullDate(sel_date.setDate(endOfMonth))// 当月最后一天
      var starDate = getFullDate(sel_date.setDate(1))// 当月第一天
      this.listQuery.start_date = starDate
      this.listQuery.end_date = endDate
      this.listQuery.page = 1
      this.listQuery.limit = 15
      this.initdata()
      console.log(this.count)
      setTimeout(() => {
        if (this.count <= 15) {
          this.message = '以显示所有数据'
        } else {
          this.message = '点击加载数据'
        }
      }, 500)
    },
    loaddata() {
      var loading = this.$loading({
        lock: true,
        text: '数据加载中',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      setTimeout(() => {
        if (this.nextpage) {
          this.listQuery.page += 1
          accidents(this.listQuery).then(response => {
            loading.close()
            for (let i = 0; i < response.results.length; i++) {
              this.datalist.push(response.results[i])
            }
            this.nextpage = response.links.next
          })
        } else {
          loading.close()
          this.message = '已到底线'
        }
      }, 1000)
    },

    /* 解决iphone页面层级相互影响滑动的问题*/
    closeTouch: function() { /*  弹层出现时调用  */
      document.getElementsByTagName('body')[0].addEventListener('touchmove',
        this.handler, { passive: false })// 阻止默认事件
      console.log('closeTouch haved happened.')
    },
    openTouch: function() { /*  弹层关闭时调用  */
      document.getElementsByTagName('body')[0].removeEventListener('touchmove',
        this.handler, { passive: false })// 打开默认事件
      console.log('openTouch haved happened.')
    },
    openPicker() { /* 弹层出现 */
      this.closeTouch()
    },
    closePicker() { /* 弹层关闭   */
      this.openTouch()
    }
  }

}
</script>

<style lang="scss" scoped>
  @import "@/styles/mobilescss/datashow.scss";

</style>
