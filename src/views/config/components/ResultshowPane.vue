<template>
  <div >
    <el-alert class="tipclass"
    :title="item[0].evaluationsserial+item[0].status" v-for="(item,key) in createdata"
    type="success"   effect="light" show-icon >
  </el-alert>
  </div>


</template>


<script>

export default {

  name:'ResultshowPane',
  props: ['createdata'],

  data() {
    return {
      datashow1:this.createdata,
    }
  },
  created() {

  },

  computed: {

  },
  methods: {
  },
  watch:{
    createdata(){
      console.log(this.datashow1)
    }
  }
}
</script>

<style scoped>
.tipclass{
  margin-top: 25px;

}

</style>
