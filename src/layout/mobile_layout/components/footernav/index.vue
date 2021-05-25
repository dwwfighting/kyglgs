<template>
  <div>
    <tabbar>
      <tabbaritem path="/m/m_data" activecolor="#d4237a">
        <svg-icon slot="item-icon" icon-class="home" />
        <svg-icon slot="item-icon-active" icon-class="homeactive" />
        <div slot="item-text">首页</div>
      </tabbaritem>

      <tabbaritem path="#" activecolor="#d4237a">
        <svg-icon slot="item-icon" icon-class="category" />
        <svg-icon slot="item-icon-active" icon-class="categoryactive" />
        <div slot="item-text">分类</div>
      </tabbaritem>

      <tabbaritem path="#" activecolor="#d4237a">
        <svg-icon slot="item-icon" icon-class="hearts" />
        <svg-icon slot="item-icon-active" icon-class="heartsactive" />
        <div slot="item-text">关注</div>
      </tabbaritem>

      <tabbaritem path="#" activecolor="#d4237a">
        <svg-icon slot="item-icon" icon-class="setting" />
        <svg-icon slot="item-icon-active" icon-class="settingactive" />
        <div slot="item-text">设置</div>
      </tabbaritem>

    </tabbar>

    <nut-calendar
      :is-visible.sync="isVisible3"
      :default-value="date3"
      type="range"
      :start-date="null"
      :end-date="null"
      :animation="`nutSlideUp`"
      @close="switchPickerClose('isVisible3')"
      @choose="setChooseValue3"
    />
  </div>
</template>

<script>
import tabbar from './tabbar'
import tabbaritem from './tabbaritem'

export default {
  name: 'Index',
  components: {
    tabbar,
    tabbaritem
  },
  data() {
    return {
      isVisible3: false,
      date3: null
    }
  },
  methods: {
    timefilter() {
      this.isVisible3 = true
    },
    setChooseValue3(param) {
      this.date3 = [...[param[0][3], param[1][3]]]
      console.log(this.date3)
    },
    switchPickerClose(param) {
      console.log('close:' + param)
    }
  }
}
</script>

<style lang="scss">

</style>
