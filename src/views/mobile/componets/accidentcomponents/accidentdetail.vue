<template>
  <div class="detailcontainer">
    <div class="detailheader">
      <header>事故详情</header>
    </div>
    <div class="detailbody">
      <p>煤业公司：<span>{{detailobj.accidentcom}}</span></p>
      <p>事故时间：<span>{{detailobj.accidentdate}}</span></p>
      <p>事故经过：{{detailobj.accidentdetail}}</p>
    </div>
    <el-button @click="handleUpdate">事故责任追究</el-button>
    <pdf
      ref="pdf"
      :src="url"
    />
  </div>
</template>

<script>

import { accidents } from '@/api/accidentapi/accidentsapi'
import pdf from 'vue-pdf'

export default {
  name: 'Accidentdetail',
  components: {
    pdf
  },
  data() {
    return {
      isVisible: false,
      detailobj: [],
      fileType: 'pdf',
      url: ''
    }
  },
  created() {

  },
  mounted() {
    this.initdata()
  },
  methods: {
    initdata() {
      accidents(this.$route.params).then(response => {
        this.detailobj = response.data[0]
        this.url = this.detailobj['notificationfile']
        console.log(this.url)
      })
    },
    handleUpdate() {
      window.open(this.url, '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/mobile_detail.scss";
</style>
