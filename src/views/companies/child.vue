<template>
    <div class="child">
      <span>子菜单</span>

<!--      <slot :data="menu"></slot>-->
      <slot name="bottom"></slot>
      <slot name="top">dddd</slot>

<!--      <slot></slot>-->
    </div>
</template>

<script>
    export default {
        name: "child",
        data(){
          return{
            menu:['menu1','menu2','menu3','menu4']
          }
        },
        methods:{
          ddd(){
            alert('aaa')
          }
        }
    }
</script>

<style scoped>
.child{
  background-color: #0B628D;
}
</style>
