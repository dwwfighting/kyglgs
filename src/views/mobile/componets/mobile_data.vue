<template>
  <div>
    <div style="background-color: #08354b">
      <div style="margin-top:5px">
        <nut-swiper
          ref="demo1"
          :pagination-visible="true"
          direction="horizontal"
          :swiper-data="dataItem"
          :loop="true"
        >
          <div v-for="(item,index) in dataItem" :key="index" class="nut-swiper-slide gray">
            <!--              <span>page{{item.name}}</span>-->
            <img :src="item.imgSrc" style="max-width:100%; max-height:100%">
          </div>
        </nut-swiper>
      </div>
    </div>

  </div>

</template>

<script>
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('aaa')
//   }, 3000)
// }).then(res => {
//   console.log(res, '第一层的10行处理代码')
//   return new Promise((resolve) => {
//     resolve(res + '111')
//   })
// }).then(res => {
//   console.log(res, '第二层的10行处理代码')
//   return new Promise(resolve => {
//     resolve(res + '222')
//   })
// }).then(res => {
//   console.log(res, '第三层的10行处理代码')
// })

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('aaa')
//   }, 3000)
// }).then(res => {
//   console.log(res, '第一层的10行处理代码')
//   return Promise.resolve(res + '111')
// }).then(res => {
//   console.log(res, '第二层的10行处理代码')
//   return Promise.resolve(res + '222')
// }).then(res => {
//   console.log(res, '第三层的10行处理代码')
// })

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('aaa')
//   }, 3000)
// }).then(res => {
//   console.log(res, '第一层的10行处理代码')
//   return Promise.reject(res + 'error')
// }).then(res => {
//   console.log(res, '第二层的10行处理代码')
//   return Promise.resolve(res + '222')
// }).then(res => {
//   console.log(res, '第三层的10行处理代码')
// }).catch(
//   err => {
//     console.log(err)
//   }
// )

export default {
  name: 'MobileData',
  components: {
  },
  data() {
    return {
      dataItem: [{
        name: '图例一',
        imgSrc: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170905%2F9b8bf08ffd414e19b8b121621b52b1ff.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623810498&t=4dde46c4ea6d8c1d83e6045d5e6ac0c4'
      }, {
        name: '图例二',
        imgSrc: 'https://img1.baidu.com/it/u=177157980,1075184857&fm=26&fmt=auto&gp=0.jpg'
      },
      {
        name: '图例三',
        imgSrc: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.jnjxsh.com%2Fuploads%2Fallimg%2F200522%2F04030L4R_0.png&refer=http%3A%2F%2Fwww.jnjxsh.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623810938&t=ed7d2de9e9de75ad63f6fc849bf24f9e'
      }
      ]
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
   @import "@/styles/datavisualization/visualization.scss";
  .nut-hor-list {
    .nut-hor-list-item {
      width:100px;
      padding-left: 5px;
    }

  }

  .flex-content {
    /*line-height: 45px;*/
    i {
      width: 100%;
      height: 100%;
    }
  }

</style>
