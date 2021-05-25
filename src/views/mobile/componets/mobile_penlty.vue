<template>

  <div style="background-color: #08354b">

    <nut-tab @tab-switch="tabSwitch">

      <nut-tab-panel tab-title="安检处考核">
        <el-row v-if="flag === 0 ">
          <el-col :span="24">

            <div class="xpanel-wrapper">
              <div class="xpanel">
                <penaltycombar />
              </div>
            </div>

            <div class="xpanel-wrapper">
              <div class="xpanel">
                <twopies />
              </div>
            </div>

          </el-col>

        </el-row>
      </nut-tab-panel>

      <nut-tab-panel tab-title="标准化考核"><span v-if="flag === 1 " style="color: white">标准化考核结果待补充</span></nut-tab-panel>

      <nut-tab-panel tab-title="上级罚款">
        <el-row v-if="flag === 2 ">

          <el-col :span="24">

            <div class="xpanel-wrapper">
              <div class="xpanel">
                <penaltycombar />
              </div>
            </div>

            <div class="xpanel-wrapper">
              <div class="xpanel">
                <twopies />
              </div>
            </div>

          </el-col>

        </el-row>
      </nut-tab-panel>

    </nut-tab>

  </div>

</template>

<script>
import penaltycombar from '#/indexdatacharts/penaltycharts/penaltycombar'
import twopies from '#/indexdatacharts/penaltycharts/twopies'
import { get_penalties } from '@/api/penaltyapi/penaltyapi'
import axios from 'axios'
export default {
  name: 'Mobilepenlty',
  components: {
    penaltycombar,
    twopies
  },
  data() {
    return {
      flag: false
    }
  },
  created() {
    this.initdata()
  },
  mounted() {
    this.$nextTick(() => {
      this.flag = 0
    })
  },
  methods: {
    initdata() {
      axios.all([get_penalties(this.listQuery)])
        .then(axios.spread((penalties) => {
          this.$store.commit('basechartdata/init_penalties_data', penalties.data)
        }))
        .catch(err => {
          console.log(err)
        })
    },
    tabSwitch: function(index, event) {
      console.log(index)
      this.flag = index
    }
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
  .body-container{
  margin: 0 10px 45px 10px;
  z-index: 1;
}

  .flex-content {
    /*line-height: 45px;*/
    i {
      width: 100%;
      height: 100%;
    }
  }

/deep/.nut-tab-part{
  margin: 0 auto;
  background-color: #08354b!important;
  .nut-tab{
    background-color: rgba(0,0,0,0);
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    position: relative;
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
