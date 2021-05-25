<template>
  <div>
    <nut-scroller @jump="jump()">
      <div
        v-for="(item, index) of routes"
        slot="list"
        :key="index"
        class="nut-hor-list-item"
        :class="{active:index==isactived}"
        @click="actived(index)"
      >
        <router-link :to="{path:item.path}">

          <dl style="height: 50px;width: 50px">

            <dt>{{ item.title }}</dt>

          </dl>
<!--          <router-view></router-view>-->
        </router-link>

      </div>
    </nut-scroller>
    <div style="background-color:#fff;width: 45px;height: 50px;z-index: 3333" class="searchicon" @click="searchshow"><nut-icon class="searchicon1" type="search" size="20px" /></div>
    <input class="search_box" type="search" :class="[isShow==true?'search_box_active':'search_box_active1']" placeholder="Search...">
  </div>
</template>

<script>
export default {
  name: 'Navbarmenu',
  data() {
    return {
      listData: '',
      show1: false,
      isA: true,
      isB: false,
      isactived: '',
      isShow: false
    }
  },
  // 数据', '事故', '文书', '罚款', '检查', '全国', '资源', '视频'
  computed: {
    routes() {
      const m_routers = this.$router.options.routes
      var m_menu = []
      m_routers.forEach(function(value, key) {
        if (value.path === '/m') {
          value['children'].forEach(function(value, key) {
            var m_obj = {}
            m_obj['path'] = '/m/' + value.path
            m_obj['title'] = value['meta']['title']
            m_menu.push(m_obj)
          })
        }
      })
      console.log(m_menu)
      return m_menu
    }
  },
  created() {
  },
  methods: {
    actived(index) {
      this.isactived = index
    },
    mainclick() {
      // console.log(this.$route)
    },
    searchshow() {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style lang="scss" scoped>
$nav_bg: #860255; // purple
$nav_bg2: #EF4B3F ; // Orange
$search_bg: rgba(0,0,0,0.1) ; // Search box
$search_bg_hover: rgba(0,0,0,0.3) ; // Search box

  .nut-scroller {
    /deep/ .nut-hor-list {
      width: calc(100% + 200px);
    }
    .nut-hor-list-item {
      width: 50px;
      text-align: center;
      color: #181818;
      font-size: 16px;
    }
  }
  .active {
    background-color: #086a8b;

    dt {
      color: #fff;
    }
  }
  .searchicon{
    position: absolute;
    top: 0px;
    right: 0px;
    .searchicon1{
      position: relative;
      top:15px;
      left: 14px;
}
  }

  input[type=search]{
    background: transparent;
    border: none;
    border-radius:0;
    border-bottom: 3px solid #086a8b;
    -webkit-appearance: none;
  }
  input.search_box, {
    position: absolute;
    font-size: 16px;
    color: #000000;
    background-color: #ffffff;
    /*line-height: 50px;*/
    /*height: 50px;*/
    /*-ms-line-height:20px;*/
    /*top: 50px;*/
    right: -100%;
    width:  calc(100% - 90px);
    padding: 15px 0 14px 20px;
    transition: all .3s;
  }
  .search_box_active{
    top: 0px !important;
    right: 40px !important;
    transition: all .3s;
  }
  .search_box_active1{
    top: 0px !important;
    right: -100% !important;
    transition: all .3s;
  }
  input:focus{
    outline: none;
  }

  input::-webkit-input-placeholder {
    color: #fff;
  }

  input[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none;
    height: 1px;
    width: 15px;
    background: transparent;
    border-radius: 50%;

    &::before{
    content: '+';
    color: #fff;
    font-weight: bold;
    -webkit-transform: rotate(45deg);
    /*font-size: 21px;*/
    position: absolute;
    top: -10px;
    }

  }

</style>
