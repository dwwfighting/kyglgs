<template>
  <div>
    <div style="background-color: #08354b">

      <nut-tab @tab-switch="tabSwitch">

        <nut-tab-panel tab-title="统计分析">
          <el-row>

            <el-col :span="24">

              <div class="xpanel-wrapper">
                <div class="xpanel">
                  <departcheckchart />
                </div>
              </div>

              <div class="xpanel-wrapper">
                <div class="xpanel">
                  <departissuescatchart />
                </div>
              </div>

            </el-col>

          </el-row>

        </nut-tab-panel>

        <nut-tab-panel tab-title="历史记录">

          <el-row>
            <div>
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
          </el-row>

        </nut-tab-panel>

        <nut-tab-panel tab-title="上级罚款">

              <div class="xpanel-wrapper">
                <div class="xpanel">
                  <departcheckchart />
                </div>
              </div>

        </nut-tab-panel>

      </nut-tab>
    </div>

  </div>

</template>

<script>
import departcheckchart from '#/indexdatacharts/checkcharts/departcheckchart'
import departissuescatchart from '#/indexdatacharts/checkcharts/departissuescatchart'
import { get_checkrecord } from '@/api/checkrecordapi/checkreportapi'
import axios from 'axios'

export default {
  name: 'Mobilecheck',
  components: {
    departcheckchart,
    departissuescatchart
  },
  data() {
    return {}
  },
  mounted() {
    this.initdata()
  },
  methods: {
    initdata() {
      axios.all([get_checkrecord(this.listQuery)])
        .then(axios.spread((checkrecord) => {
          this.$store.commit('basechartdata/init_checkrecord_data', checkrecord.data)
        }))
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/styles/datavisualization/visualization.scss";
  /deep/ .nut-tab-part {
    margin: 0 auto;
    background-color: #08354b !important;
    .nut-tab {
      background-color: rgba(0, 0, 0, 0);
      padding: 0;
      margin: 0;
      width: 100%;
      height: 100%;

      a {
        font-size: 14px;
      }

      .nut-tab-title {
        height: 35px;
      }

      .nut-tab-active {
        background-color: #086a8b;
        border-bottom: 1px solid #ededed;
        width: 100%;
        a {
          color: #fff;
          font-size: 14px;
        }
      }

      .nut-tab-item {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0);
      }

    }

  }
</style>
