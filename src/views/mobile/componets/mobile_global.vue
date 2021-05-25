<template>




    <nut-tab @tab-switch="tabSwitch" :is-scroll="true"  :wrapper-height="aaa" :def-index="0">
      <nut-tab-panel tab-title="事故快报">
        <div >
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf5</p>
          <p>asdf4</p>
          <p>asdf3</p>
          <p>asdf2</p>
          <p>asdf1</p>
        </div>
      </nut-tab-panel>
      <nut-tab-panel tab-title="统计分析">页签2</nut-tab-panel>
      <nut-tab-panel tab-title="文件政策">页签3</nut-tab-panel>
      <nut-tab-panel tab-title="页签4">页签4</nut-tab-panel>
      <nut-tab-panel tab-title="页签5">页签5</nut-tab-panel>
    </nut-tab>


</template>

<script>
    import Sticky from '@/components/Sticky'
    export default {
      name: "mobile_accident",
      components: {Sticky},
      data(){
          return{

          }
      },
      computed:{
        aaa:function () {
          return 100
        }
      }
    }
</script>

<style lang="scss" scoped>
/deep/.nut-tab-part{
  margin: 0 auto;
  background-color: #ffffff !important;
  .nut-tab{
    background-color: rgba(0,0,0,0);
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
   a{
     font-size: 14px;
   }
    .nut-tab-title{
      height: 35px;
    }
  .nut-tab-active{
    background-color: #086a8b;
    border-bottom: 1px solid #ededed;
    a{
      color: #fff;
      font-size: 14px;
    }
  }
  .nut-tab-item{
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0);
  }

}

  }
</style>
