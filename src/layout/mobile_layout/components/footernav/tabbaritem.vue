<template>

  <div class="tab-bar-item" @click="itemclick">
    <div v-if="isActive"><slot name="item-icon" /></div>
    <div v-else><slot name="item-icon-active" /></div>
    <div :style="activestyle"> <slot name="item-text" /></div>
  </div>

</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    activecolor: {
      type: String,
      default: '#d4237a'
    }
  },
  data() {
    return {
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path)
    },
    activestyle() {
      return this.isActive ? {} : { color: this.activecolor }
    }
  },
  methods: {
    itemclick() {
      console.log(this.path)
      console.log(this.$route.path)
      this.$router.push(this.path)
    }
  }
}
</script>

<style lang="scss" >
  .tab-bar-item{
    flex:1;
    -webkit-box-flex: 1;
    text-align: center;
    height: 49px;
    color: #fff;
    padding: 6px 0;
  }

</style>
