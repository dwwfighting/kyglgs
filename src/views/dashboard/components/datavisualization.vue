<template>

  <div class="container">

<!--    <div class="head">-->
<!--      <sticky :z-index="10" class-name="sub-navbar">-->
<!--        <el-row>-->
<!--          <el-col>-->
<!--            &lt;!&ndash;              <el-button-group>&ndash;&gt;-->
<!--            &lt;!&ndash;                <el-button size="mini" @click="aliyuntest">阿里云测试</el-button>&ndash;&gt;-->
<!--            &lt;!&ndash;              </el-button-group>&ndash;&gt;-->
<!--            &lt;!&ndash;              <el-input&ndash;&gt;-->
<!--            &lt;!&ndash;                style="width: 20%"&ndash;&gt;-->
<!--            &lt;!&ndash;                size="mini"&ndash;&gt;-->
<!--            &lt;!&ndash;                placeholder="请输入内容"&ndash;&gt;-->
<!--            &lt;!&ndash;                prefix-icon="el-icon-search"&ndash;&gt;-->
<!--            &lt;!&ndash;              />&ndash;&gt;-->
<!--            <el-date-picker-->
<!--              v-model="timefilter"-->
<!--              type="daterange"-->
<!--              size="mini"-->
<!--              align="right"-->
<!--              unlink-panels-->
<!--              range-separator="至"-->
<!--              start-placeholder="开始日期"-->
<!--              end-placeholder="结束日期"-->
<!--              value-format="yyyy-MM-dd"-->
<!--              @change="setDate"-->
<!--            />-->
<!--          </el-col>-->
<!--        </el-row>-->
<!--      </sticky>-->
<!--    </div>-->

    <div class="chartsbody">
      <div class="chartscontainer">
        <el-row>
          <accidentcharts class="row-border" />
        </el-row>

        <el-row>
          <compulsivecharts class="row-border" />
        </el-row>

        <el-row>
          <penaltycharts :timerange="listQuery" class="row-border" />
        </el-row>

        <el-row>
          <checkcharts class="row-border" />
        </el-row>

      </div>
    </div>

  </div>

</template>

<script>

import axios from 'axios'
import { get_accidents } from '@/api/accidentapi/accidentsapi'
import { get_complusives } from '@/api/complusive/complusive'
import { get_checkrecord } from '@/api/checkrecordapi/checkreportapi'
import { get_penalties } from '@/api/penaltyapi/penaltyapi'
// import { aliyunapi } from '@/api/aliyunapi/aliyunapi'
import accidentcharts from './indexdatacharts/accidentcharts'
import penaltycharts from './indexdatacharts/penaltycharts'
import compulsivecharts from './indexdatacharts/compulsive'
import checkcharts from './indexdatacharts/checkcharts'
import Sticky from '@/components/Sticky'
// import drawerinfo from './indexdatacharts/penaltycharts/twopies/drawerinfo'

export default {
  name: 'Datavisualization',
  components: { Sticky, accidentcharts, checkcharts, penaltycharts, compulsivecharts },
  data() {
    return {
      isRouterAlive: true,
      timefilter: '',
      listQuery: {
        start_date: '',
        end_date: ''

      },
      input4: {
        text: '已经成为一众工装达人凹造型的利器。二战时期的经典传奇复刻，在尊重原始沙漠靴的基础上更加注重城市生活的习惯',
        tag_flag: 'true'
      }
    }
  },
  beforeCreate() {
    this.$store.dispatch('organization/get_organization')
  },
  created() {
    this.initdata()
  },

  methods: {
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
      axios.post('http://localhost:8000/api/aliyunapi/', {
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

  @import "@/styles/rebuildchartindex.scss";

  :root {
    --red: tomato;
    --bgColor: bisque;
  }
  .components-container div {
    margin: 10px;
  }

  .time-container {
    display: inline-block;
  }

  .el-row {
    margin-bottom: 12px;

    .row-border{
      box-shadow: 8px 8px 5px rgba(0,0,0,.2);
    }
    /*.el-row div:hover {*/
    /*  box-shadow: 3px 3px 5px rgba(0,0,0,.2);*/
    /*}*/
    &:last-child {
      margin-bottom: 0;
    }

  }

</style>
