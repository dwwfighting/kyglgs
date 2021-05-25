<template>
  <div class="tab-bar">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Tabbar'
}
</script>

<style lang="scss" >
  .tab-bar{
    display: flex;
    background-color: #043948;
    position: fixed;
    bottom: 0px;
    width: 100%;
    box-shadow: 0px -1px 1px rgba(100,100,100,0.4);
  }
</style>
