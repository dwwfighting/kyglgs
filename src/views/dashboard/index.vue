<template>
  <div class="">
    <el-row>
      <sticky :z-index="10">
        <el-menu
          :default-active="show"
          class="el-menu-demo"
          mode="horizontal"
          text-color="#fff"
          active-text-color="#ffd04b"
          background-color="#21314d"
          @select="handleSelect"
        >

          <!--          <el-menu-item index="data">数据可视</el-menu-item>-->
          <!--          <el-menu-item index="stand">全国事故</el-menu-item>-->
          <el-menu-item index="datavisualization">数据可视化</el-menu-item>
          <el-menu-item index="stand">全国事故</el-menu-item>
<!--                    <el-menu-item index="issues">隐患排查考核</el-menu-item>-->
          <!--        <el-menu-item index="iloveclass">班组建设</el-menu-item>-->
          <!--        <el-menu-item index="majorissues">较大问题</el-menu-item>-->
        </el-menu>
        <div class="search-head">
          <el-date-picker
            v-model="timefilter"
            type="daterange"
            size="mini"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyy-MM-dd"
            @change="setDate"
          />
        </div>
      </sticky>
    </el-row>

    <!--    <keep-alive>-->
    <!--      <datavisualization v-if="show==='data'" />-->
    <!--    </keep-alive>-->
    <!--    <majorissues v-if="show==='issues'" />-->
    <visualization v-if="show==='datavisualization'" :timerange="listQuery" />
    <tabletemp v-if="show==='stand'" />
  </div>

</template>

<script>
import tabletemp from './components/tabletemp'
// import majorissues from './components/majorissues'
import visualization from './components/visualization'
import Sticky from '@/components/Sticky'
import axios from 'axios'
import { get_accidents } from '@/api/accidentapi/accidentsapi'
import { get_complusives } from '@/api/complusive/complusive'
import { get_checkrecord } from '@/api/checkrecordapi/checkreportapi'
import { get_penalties } from '@/api/penaltyapi/penaltyapi'

export default {
  name: 'Index',
  components: {
    tabletemp,
    visualization,
    Sticky
  },
  data() {
    return {
      show: 'datavisualization',
      timefilter: '',
      listQuery: {
        start_date: '',
        end_date: ''
      }
    }
  },
  computed: {},
  beforeCreate() {
    this.$store.dispatch('organization/get_organization')
    this.$store.dispatch('globalaccident/get_globalaccident')
  },
  mounted() {
    this.initdata()
  },
  created() {
    this.aliyuntest()
  },
  methods: {
    handleSelect(key, key2) {
      this.show = key
    },
    initdata() {
      axios.all([get_accidents(this.listQuery), get_complusives(this.listQuery), get_checkrecord(this.listQuery), get_penalties(this.listQuery)])
        .then(axios.spread((accidents, complusives, checkrecord, penalties) => {
          this.$store.commit('basechartdata/init_accident_data', { accidents: accidents.data, lastyear_res: accidents.lastyear_res })
          this.$store.commit('basechartdata/init_complusives_data', complusives.data)
          this.$store.commit('basechartdata/init_checkrecord_data', checkrecord.data)
          this.$store.commit('basechartdata/init_penalties_data', penalties.data)
        }))
        .catch(err => {
          console.log(err)
        })
    },
    aliyuntest() {
      axios.get('http://localhost:8000/api/aliyunapi/', {
        firstName: 'Fred',
        lastName: 'Flintstone'
      }).then(function(response) {
        console.log(response)
      }).catch(function(error) {
        console.log(error)
      })
    },
    setDate(value) {
      if (value === null) {
        this.timefilter = ''
        this.initdata(this.listQuery)
      }
      // if (typeof(this.timefilter) == "undefined"|| this.timefilter == null )  return;
      this.listQuery.start_date = this.timefilter[0]
      this.listQuery.end_date = this.timefilter[1]
      this.initdata(this.listQuery)
    }

  }
}
</script>

<style lang="scss" scoped>
  @import "@/styles/datavisualization/visualizationindex.scss";

</style>
