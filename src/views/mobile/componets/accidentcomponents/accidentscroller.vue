<template>

  <div>
    <dl>
      <dt><slot name="item-text" /></dt>
      <dt><slot name="item-total" /></dt>
    </dl>
  </div>

</template>

<script>
export default {
  name: 'Accidentscroller',
  props: {

  }
}
</script>

<style scoped>

</style>
