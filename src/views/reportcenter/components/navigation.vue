<template>



<div class="container">

<!--  <header>-->
<!--    <slot name="header" v-bind:user="user"> {{user.name}}</slot>-->
<!--  </header>-->

<!--  <main>-->
<!--    <p>第二部分</p>-->
    <slot v-bind:user="user"></slot>
<!--  </main>-->
<!--  <footer>-->
<!--    <slot name="footer"></slot>-->
<!--  </footer>-->
 </div>




</template>

<script>
    export default {
        name: "Navigationlink",
        data(){
          return{
            url:'http://www.baidu.com',
            user:{name:'dww',age:16},
          }
        }
    }
</script>

<style scoped>

</style>
