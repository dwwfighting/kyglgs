<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  created: function() {
    // 在页面加载时读取sessionStorage
    if (sessionStorage.getItem('store')) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem('store'))))
    }
    // 在页面刷新时将store保存到sessionStorage里
    window.addEventListener('beforeunload', () => {
      console.log(this.$store.state)
      sessionStorage.setItem('store', JSON.stringify(this.$store.state))
    })
  },
  mounted() {
    if (this._isMobile()) {
      this.$router.replace('/m/m_data')
    } else {
      this.$router.replace('/')
    }
  },
  methods: {
    _isMobile() {
      const flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag
    }
  }
}
</script>
