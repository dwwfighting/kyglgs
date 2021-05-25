<template>
  <div class="app-container">
{{id}}
  </div>
</template>

<script>
export default {


  name: 'Detail',
  data() {
    return {
      id: this.$route.query.id
    }
  },
  created() {

  },
  methods: {}
}
</script>
