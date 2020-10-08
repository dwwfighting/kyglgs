<template>
  <div>
    <el-row>
            <el-table :data="list" border style="width: 100%">
              <el-table-column prop="id" align="center" label="序号" width="50"></el-table-column>
              <el-table-column prop="variatiocompany1" label="所属公司" align="center" width="110"></el-table-column>
              <el-table-column prop="variationclass1" label="变化分级" align="center" width="80"></el-table-column>
              <el-table-column prop="variationcat1" label="变化分类" align="center" width="110"></el-table-column>
              <el-table-column prop="varcatdetail1" label="变化专业" align="center" width="80"></el-table-column>
              <el-table-column prop="variacontent" label="变化内容"></el-table-column>
              <el-table-column prop="variastartdate" label="开始时间" align="center" width="162"></el-table-column>
              <el-table-column prop="variastatus1" label="变化状态" align="center" width="80"></el-table-column>
              <el-table-column prop="variaprogress" show-overflow-tooltip label="变化进展" align="center" width="125"></el-table-column>
              <el-table-column prop="variaconstruction" show-overflow-tooltip label="施工队组" align="center" width="90"></el-table-column>
              <el-table-column prop="followupleader" show-overflow-tooltip label="跟班领导" align="center" width="120"></el-table-column>
              <el-table-column prop="leaderincharge" show-overflow-tooltip label="分管领导" align="center" width="80"></el-table-column>
            </el-table>
    </el-row>
  </div>
</template>

<script>
  import {getvaria} from '@/api/variationmanage/variation'
  import vueSeamless from 'vue-seamless-scroll'

  export default {

    // filters: {
    //   statusFilter(status) {
    //     const statusMap = {
    //       success: 'success',
    //       pending: 'danger'
    //     }
    //     return statusMap[status]
    //   },
    //   orderNoFilter(str) {
    //     return str.substring(0, 30)
    //   }
    // },
    name: 'VariaTable',
    data() {
      return {
        list: null,
        listQuery: {
        page: 1,
        limit: 10,
        type:'dashboardvaria',
      },
      }
    },
    created() {
      this.fetchData()
    },
    // computed: {
    //   classOption: function () {
    //     return {
    //       step: 0.5,
    //       limitMoveNum: 5,
    //     }
    //   }
    // },
    methods: {
      fetchData() {
        getvaria(this.listQuery).then(response => {
          // console.log(response.data.results)
          this.list = response.data.results
        }).catch(error => {
          console.log(error)
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  .seamless-warp {
    height: 229px;
    overflow: hidden;
  }
.item{
  list-style:none
}
  .tabtop13 {
    margin-top: 13px;
  }

  .tabtop13 td {
    background-color: #ffffff;
    height: 25px;
    line-height: 150%;
  }

  .font-center {
    text-align: center
  }

  .btbg {
    background: #e9faff !important;
  }

  .btbg1 {
    background: #f2fbfe !important;
  }

  .btbg2 {
    background: #f3f3f3 !important;
  }

  .biaoti {
    font-family: 微软雅黑;
    font-size: 26px;
    font-weight: bold;
    border-bottom: 1px dashed #CCCCCC;
    color: #255e95;
  }

  .titfont {

    font-family: 微软雅黑;
    font-size: 16px;
    font-weight: bold;
    color: #255e95;
    background: no-repeat 15px center;
    background-color: #e9faff;
  }

  .tabtxt2 {
    font-family: 微软雅黑;
    font-size: 14px;
    font-weight: bold;
    text-align: right;
    padding-right: 10px;
    color: #327cd1;
  }

  .tabtxt3 {
    font-family: 微软雅黑;
    font-size: 14px;
    padding-left: 15px;
    color: #000;
    margin-top: 10px;
    margin-bottom: 10px;
    line-height: 20px;
  }


</style>
