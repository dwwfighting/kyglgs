<template>
  <!-- inspired by:
  https://codepen.io/darcyvoutt/pen/ogPrpK
-->
  <section class="block-content t-block-teal l-block-spacing">
    <div class="l-contained">
      <header class="heading-group">
        <h2>时间线</h2>
      </header>
      <ul class="timeline-list">
        <li>
          <div class="content">
            <slot name="first" />
            <slot name="firstcontent" />
          </div>
        </li>
        <li v-for="(value,index) in compulsivetimedata" :key="index">
          <div class="content">
            <h3>{{ value.tracedate }}</h3>
            <p>
              {{ value.tracepeople }}通过{{ value.tracemode }}询问;反馈信息:{{ value.traceresult }}
            </p>
          </div>
        </li>

      </ul>

    </div>

  </section>
</template>

<script>
export default {
  name: 'Compulsivetimline',
  props: ['compulsivetimedata'],
  created() {
  }
}
</script>

<style lang="scss" scoped>
  @import "@/styles/compulsivecss/compulsivetime.scss";
</style>

