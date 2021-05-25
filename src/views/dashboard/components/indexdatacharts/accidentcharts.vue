<template>
  <div class="grid-accident">
    <el-row :gutter="4">
      <el-col :lg="4" :xs="12" :sm="12" :md="12">
        <div class="grid-accident">
          <p>安全生产日</p>
          <!--          <p v-for="(v,i) in safedays1" :key="i"> {{ i }}安全无事故{{ v }}天 </p>-->
          <p>共发生{{ accidentallnum }}起{{ accidentallpeople }}人次安全事故</p>
        </div>
      </el-col>
      <el-col :lg="4" :xs="12" :sm="12" :md="12">
        <accidentoperation />
      </el-col>
      <el-col :lg="4" :xs="24" :sm="12" :md="12">
        <accidentnum />
      </el-col>
      <el-col :lg="4" :xs="24" :sm="12" :md="12">
        <accidentnumpie />
      </el-col>
      <el-col :lg="8" :xs="24" :sm="24" :md="24">
        <accidentcatnum />
      </el-col>
    </el-row>

    <el-row :gutter="4">
      <el-col :lg="8" :xl="8" :xs="24" :sm="24" :md="24">
        <rankaccidentbar />
      </el-col>
      <el-col :lg="8" :xl="8" :xs="24" :sm="24" :md="24">
        <accidentweekfre />
      </el-col>
      <el-col :lg="8" :xl="8" :xs="24" :sm="24" :md="24">
        <accidentmonthline />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import accidentnum from './accidentchart/accidentnum'
import accidentmonthline from './accidentchart/accidentmonthline'
import rankaccidentbar from './accidentchart/rankaccidentbar'
import accidentweekfre from './accidentchart/accidentweekfre'
import accidentoperation from './accidentchart/accidentoperation'
import accidentnumpie from './accidentchart/accidentnumpie'
import accidentcatnum from './accidentchart/accidentcatnum'
import { mapState } from 'vuex'
export default {
  name: 'Accidentsindex',
  components: { accidentnum, accidentmonthline, rankaccidentbar, accidentweekfre, accidentoperation, accidentnumpie, accidentcatnum },
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
      accidentallnum: state => state.basechartdata.accident_data['accidentallnum'],
      accidentallpeople: state => state.basechartdata.accident_data['accidentallpeople']
    })
  },
  created() {

  },

  methods: {
  }
}
</script>

<style lang="scss" scoped>

 .el-col{
   @media  (max-width: 1200px){
      margin-bottom: 4px;
   }
   &:last-child {
      margin-bottom: 0;
    }
 }
 .el-row {
    margin-bottom: 4px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .grid-accident{
    height: 160px;
    p{
      background-color: #ffffff;
      text-align:center;
      padding: 2px 0;
      border-bottom:1px solid rgba(128, 128, 128,0.5);

    }
    p:first-child {
      background-color: #F67280;
      font-size: 1em;
    }
  }
  @media only (min-width: 1200px)  and (max-width: 1500px)  {
      .grid-accident p{
         font-size: 0.65em;
      }

    }
  /*@import "./src/styles/issuesreport/css/issuesreportstatistics";*/

</style>
