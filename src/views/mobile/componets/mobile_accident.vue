<template>

    <div>
      <nut-tab :is-scroll="true" @tab-switch="tabSwitch">
        <nut-tab-panel tab-title="历史数据">
          <div v-if="flag === 0"  >
            <el-row>
              <el-col :span="24">
                <accidentdata />
              </el-col>
            </el-row>
          </div>
        </nut-tab-panel>

        <nut-tab-panel tab-title="统计分析">
          <div v-if="flag === 1" >
            <el-row>
              <el-col :span="24">
                <div class="xpanel-wrapper">
                  <div class="xpanel">
                    <accidentnum />
                  </div>
                </div>

                <div class="xpanel-wrapper">
                  <div class="xpanel">
                    <accidentcatnum />
                  </div>
                </div>

                <div class="xpanel-wrapper">
                  <div class="xpanel">
                    <accidentnumpie />
                  </div>
                </div>

                <div class="xpanel-wrapper">
                  <div class="xpanel">
                    <accidentmonthline />
                  </div>
                </div>

                <div class="xpanel-wrapper">
                  <div class="xpanel">
                    <rankaccidentbar />
                  </div>
                </div>

                <div class="xpanel-wrapper">
                  <div class="xpanel">
                    <accidentweekfre />
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </nut-tab-panel>

        <nut-tab-panel tab-title="同比数据">
          <el-row v-if="flag === 2 ">

            <el-col :span="24">

            </el-col>

          </el-row>
        </nut-tab-panel>

        <nut-tab-panel tab-title="环比数据">
          <el-row v-if="flag === 3 ">

            <el-col :span="24">

              <div class="xpanel-wrapper">
                <div class="xpanel">
                  <accidentmonthline />
                </div>
              </div>

            </el-col>

          </el-row>
        </nut-tab-panel>

        <nut-tab-panel tab-title="未上报">
          <el-row v-if="flag === 4 ">

            <el-col :span="24">

              <div class="xpanel-wrapper">
                <div class="xpanel">
                  <accidentmonthline />
                </div>
              </div>

            </el-col>

          </el-row>
        </nut-tab-panel>

      </nut-tab>

    </div>

</template>

<script>
import accidentmonthline from '#/indexdatacharts/accidentchart/accidentmonthline'
import accidentweekfre from '#/indexdatacharts/accidentchart/accidentweekfre'
import accidentcatnum from '#/indexdatacharts/accidentchart/accidentcatnum'
import accidentnumpie from '#/indexdatacharts/accidentchart/accidentnumpie'
import rankaccidentbar from '#/indexdatacharts/accidentchart/rankaccidentbar'
import accidentnum from '#/indexdatacharts/accidentchart/accidentnum'
import accidentdata from './accidentcomponents/accidentdata'
import { get_accidents } from '@/api/accidentapi/accidentsapi'
import axios from 'axios'
export default {
  name: 'MobileAccident',
  components: {
    accidentmonthline,
    accidentweekfre,
    accidentnum,
    accidentcatnum,
    accidentnumpie,
    rankaccidentbar,
    accidentdata
  },
  data() {
    return {
      flag: false,
      isVisible3: true,
      date3: null
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
      axios.all([get_accidents(this.listQuery)])
        .then(axios.spread((accidents) => {
          this.$store.commit('basechartdata/init_accident_data', { accidents: accidents.data, lastyear_res: accidents.lastyear_res })
        }))
        .catch(err => {
          console.log(err)
        })
    },
    tabSwitch: function(index, event) {
      this.flag = index
      if (index === 2) {
        this.isVisible3 = true
      }
    },
    setChooseValue3(param) {
      this.date3 = [...[param[0][3], param[1][3]]]
      console.log(this.date3)
    },
    switchPickerClose(param) {
      console.log('close:' + param)
    }
  }
}
</script>

<style lang="scss" scoped>
   @import "@/styles/datavisualization/visualization.scss";

/deep/.nut-tab-part{
  overflow: hidden;
  margin: 0 auto;
  zoom: 1;
  .nut-tab{
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
    padding: 0;
    /*background-color: #08354b;*/
  }

}

  }
</style>
