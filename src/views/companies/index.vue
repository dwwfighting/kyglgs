<template>
<div>
  <div class="father">
    <h3>这里是父组件</h3>
    <child>
<!--        <template slot-scope="menu1">-->
<!--          <div v-for="item in menu1.data">-->
<!--            {{item}}-->
<!--          </div>-->
<!--        </template>-->

      <div class="temp" slot="top">
        <span>menu1</span>
        <span>menu2</span>
        <span>menu3</span>
      </div>

       <div class="temp" slot="bottom">
        <span>menu4</span>
        <span>menu5</span>
        <span>menu6</span>
      </div>

      <div class="temp" >
        <span>menu7</span>
        <span>menu8</span>
        <span>menu9</span>
      </div>

    </child>
  </div>

</div>
</template>

<script>
import child from "./child"
    export default {
        name: "index",
        components:{ child }
    }
</script>

<style scoped>
.father{
  background-color: #2accc8;
}
</style>
