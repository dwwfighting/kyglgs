<template>
  <div>
    <div class="horizontal-container">
      <div ref="scroll" class="scroll-wrapper">
        <div class="scroll-content">
          <div v-for="(item, index) in emojis" :key="index" class="scroll-item">{{ item }}</div>
        </div>
      </div>
    </div>
    <div style="margin: 20px">
      <el-row :gutter="15">

        <el-col :lg="8" :xs="24" :sm="24" :md="12">
          <div style="background-color: #08354b" class="xpanel-wrapper">
            <div class="xpanel">
              <todolist />
            </div>
          </div>
        </el-col>

        <el-col :lg="12" :xs="24" :sm="24" :md="12">
          <div style="background-color: #576bff" class="xpanel-wrapper">
            <div class="xpanel">
              <issuesform />
            </div>
          </div>
        </el-col>

        <el-col :lg="4" :xs="24" :sm="24">
          <div style="background-color: #ff0019" class="xpanel-wrapper">
            <div class="xpanel">
              asdasdf
            </div>
          </div>
        </el-col>

      </el-row>
    </div>
  </div>
</template>

<script>
import issuesform from './components/issuesform'
import todolist from './components/todolist'
import BScroll from '@better-scroll/core'
const bs = new BScroll('.div')
export default {
  name: 'Issuesentry',
  components: {
    issuesform,
    todolist
  },
  data() {
    return {
      emojis: [
        'as', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf'
      ]
    }
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    this.bs.destroy()
  },
  methods: {
    init() {
      this.bs = new BScroll(this.$refs.scroll, {
        scrollX: true,
        probeType: 3 // listening scroll event
      })
      this.bs.on('scrollStart', () => {
        console.log('scrollStart-')
      })
      this.bs.on('scroll', ({ y }) => {
        console.log('scrolling-')
      })
      this.bs.on('scrollEnd', () => {
        console.log('scrollingEnd')
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.horizontal-container
  .scroll-wrapper
    position relative
    width 100%
    margin 0 auto
    white-space nowrap
    border 3px solid #42b983
    border-radius 5px
    overflow hidden
    .scroll-content
      display inline-block
    .scroll-item
      height 50px
      line-height 50px
      font-size 24px
      display inline-block
      text-align center
      padding 0 10px
</style>
