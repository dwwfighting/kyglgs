<template>
  <div>
<!--    {{ data }}-->
    <button @click="handleUpdate">dddd</button>
    <pdf
      ref="pdf"
      :src="url"
    />

  </div>
</template>

<script>
import { checkrecord } from '@/api/checkrecordapi/checkreportapi'
import { accidents } from '@/api/accidentapi/accidentsapi'
import pdf from 'vue-pdf'
export default {
  name: 'Todolist',
  components: {
    pdf
  },
  data() {
    return {
      data: '',
      detailobj: [],
      url: null
    }
  },
  created() {
    checkrecord({ 'to_dolist': 1 }).then(response => {
      this.data = response.data
    })
  },
  mounted() {
    this.initdata()
  },
  methods: {
    initdata() {
      accidents({ id: 349 }).then(response => {
        this.detailobj = response.data
        this.url = this.detailobj[0]['notificationfile']
        console.log(this.detailobj[0]['notificationfile'])
      })
    },
    handleUpdate(row) {
      window.open(this.url, '_blank')
    }

  }
}
</script>

<style scoped>

</style>
