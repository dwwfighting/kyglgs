<template>

  <section >
    <transition name="fade-transform" mode="out-in">
      <router-view />
    </transition>
  </section>

</template>

<script>


export default {
  name: 'MobilIndex',
  components: {},
  data() {
    return {}
  },
  created() {
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
  @import "@/styles/datavisualization/visualization.scss";

  .nut-hor-list {
    .nut-hor-list-item {
      width: 100px;
      padding-left: 5px;
    }

  }

  .flex-content {
    /*line-height: 45px;*/
    i {
      width: 100%;
      height: 100%;
    }
  }

</style>
