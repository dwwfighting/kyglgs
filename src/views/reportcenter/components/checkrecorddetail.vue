<template>

  <div class="app-container">

    <el-row>

      <el-button > <span>{{ checkrecorddetail.checkdate }}{{ checkrecorddetail.supercheckunit1 }}{{ checkrecorddetail.checkedcoalcompany1 }}</span></el-button>
      <el-button >清除所有过滤器</el-button>
      <el-input placeholder="内容搜索" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-button  size="medium" class="filter-item" type="primary" icon="el-icon-download" >
        导出
      </el-button>
    </el-row>

    <el-row style="margin-top: 10px">
      <el-col :span="24">
        <el-table
          :data="checkrecorddetail.checkrecord"
          style="width: 100%"
          show-summary
          border
          highlight-current-row
          height="600"
        >
          <el-table-column
            type="selection"
            width="55"
          />

          <el-table-column
            type="index"
            label="序号"
            align="center"
            width="50"
          />

          <el-table-column min-width="700" label="隐患描述">
            <template slot-scope="scope">
              <span>{{ scope.row.issues }}</span>
            </template>
          </el-table-column>

          <el-table-column
            label="隐患类别"
            width="80"
            align="center"
          >
            <template slot-scope="scope">
              <!--          <i class="el-icon-time"></i>-->
              <span>{{ scope.row.issuescate }}</span>
            </template>
          </el-table-column>

          <el-table-column
            label="隐患等级"
            width="80"
            align="center"
          >
            <template slot-scope="scope">
              <el-tag effect="dark" :type="scope.row.issuesclassify1 | statusFilter">
                {{ scope.row.issuesclassify1 | formatissuesclass }}
              </el-tag>
            </template>
          </el-table-column>

          <el-table-column
            label="整改结果"
            width="80"
            align="center"
          >
            <template slot-scope="scope">
              <!--          <i class="el-icon-time"></i>-->
              <el-tag effect="dark" :type="scope.row.reformresult | reformresultFilter">
                {{ scope.row.reformresult }}
              </el-tag>
              <!--          <span >{{ scope.row.reformresult}}</span>-->
            </template>
          </el-table-column>

          <el-table-column
            label="复查结果"
            width="80"
            align="center"
          >

            <template slot-scope="scope">
              <!--          <i class="el-icon-time"></i>-->
              <span>{{ scope.row.review }}</span>
            </template>
          </el-table-column>

          <el-table-column
            label="销号结果"
            width="80"
            align="center"
          >

            <template slot-scope="scope">
              <!--          <i class="el-icon-time"></i>-->
              <span>{{ scope.row.removeissue }}</span>
            </template>
          </el-table-column>

          <el-table-column
            label="扣分"
            width="50"
            align="center"
          >

            <template slot-scope="scope">
              <!--          <i class="el-icon-time"></i>-->
              <span>{{ scope.row.score }}</span>
            </template>
          </el-table-column>

          <el-table-column align="center" min-width="150" label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="6">
        检查记录
      </el-col>
    </el-row>
  </div>

</template>

<script>
import { retrievecheckrecord } from '@/api/reportcenter/issuesreport'
export default {
  name: 'Checkrecorddetail',
  filters: {
    statusFilter(status) {
      const statusMap = {
        A级一般安全隐患: '',
        B级一般安全隐患: 'warning',
        C级重大安全生产隐患: 'danger'
        // draft: 'info',
        // deleted: 'danger'
      }
      return statusMap[status]
    },
    formatissuesclass(value) {
      if (value === 'A级一般安全隐患') {
        return '一般'
      }
      if (value === 'B级一般安全隐患') {
        return '较大'
      }
      if (value === 'C级重大安全生产隐患') {
        return '重大'
      }
    },
    reformresultFilter(value) {
      const resutlMap = {
        已整改: '',
        未到期: 'warning',
        整改中: 'success',
        未整改: 'danger'
        // draft: 'info',
        // deleted: 'danger'
      }
      return resutlMap[value]
    }
  },
  data() {
    return {
      checkrecorddetail: []

    }
  },

  created() {
    const id = this.$route.params && this.$route.params.id
    this.getcherecorddetail(id)
  },

  methods: {
    getcherecorddetail(id) {
      retrievecheckrecord(id).then(response => {
        this.checkrecorddetail = response.data
      })
    }
  }
}
</script>

<style scoped>

</style>
