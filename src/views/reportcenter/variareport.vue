<template>
  <div class="app-container">
    <div class="filter-container">


        <!--饿了么的input组件   placeholder设置默认值 :是v-bind缩写，绑定到了i18n国际化的table.title
		      v-model  双向绑定 到下面vue声明的变量 listQuery.title中
		      @keyup.enter.native="handleFilter"  @是v-on缩写 当回车按键弹起的时候触发handleFilter方法，native阻止input默认事情
        -->

      <el-input v-model="listQuery.variacontent" placeholder="内容搜索"   style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />

<!--      &lt;!&ndash;饿了么的select 组件 v-model  双向绑定 当listQuery.importance的值等于 el-option的key值时默认选中 &ndash;&gt;-->

      <el-select v-model="listQuery.variatiocompany" placeholder="煤业公司" clearable style="width: 150px" class="filter-item">
        <el-option v-for="item in variatiocompanyoption" :key="item.key" :label="item.display_name" :value="item.key" />
      </el-select>

      <el-select v-model="listQuery.variationcat" placeholder="变化分类" clearable style="width: 150px" class="filter-item">
        <el-option v-for="item in variationcatoption" :key="item.key" :label="item.display_name" :value="item.key" />
      </el-select>

      <el-select v-model="listQuery.variationclass" placeholder="变化分级" clearable style="width: 150px" class="filter-item">
        <el-option v-for="item in variationclassoption" :key="item.key" :label="item.display_name" :value="item.key" />
      </el-select>


      <el-select v-model="listQuery.varcatdetail" placeholder="变化专业" clearable class="filter-item" style="width: 150px">
        <el-option v-for="item in varcatdetailoption" :key="item.key" :label="item.display_name" :value="item.key" />
      </el-select>

      <el-select v-model="listQuery.sort" style="width: 140px" class="filter-item" @change="handleFilter">
        <el-option v-for="item in sortOptions" :key="item.key" :label="item.label" :value="item.key" />
      </el-select>



      <!--饿了么的button 组件   v-waves使用水波纹特效 type设置样式  icon设置图标 @click触发方法-->
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        搜索
      </el-button>

      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleCreate">
        添加
      </el-button>

      <el-button v-waves :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download" @click="handleDownload">
        导出
      </el-button>

      <el-button v-waves :loading="downloadLoading" class="filter-item" type="primary"  icon="el-icon-s-data"  @click="handleDownload">
        统计分析
      </el-button>
<!--      <el-checkbox v-model="showReviewer" class="filter-item" style="margin-left:15px;" @change="tableKey=tableKey+1">-->
<!--        {{ table.reviewer}}-->
<!--      </el-checkbox>-->

    </div>

    <el-table
      :key="tableKey"
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%;"
      @sort-change="sortChange"
    >


<!--      <el-table-column type="index" align="center" :show-overflow-tooltip="false" sortable width="50" label="序号"></el-table-column>-->
      <el-table-column label="序号" prop="id" sortable="custom" align="center" width="80" :class-name="getSortClass('id')">
<!--        <template slot-scope="{row}">-->
<!--          <span>{{ row.id}}</span>-->
<!--        </template>-->
      </el-table-column>


      <el-table-column label="所属公司" width="110px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.variatiocompany1 }}</span>
        </template>
      </el-table-column>

     <el-table-column label="变化内容" >
        <template slot-scope="{row}">
          <span class="link-type" @click="handleUpdate(row)">{{ row.variacontent }}</span>
        </template>
      </el-table-column>


      <el-table-column label="变化分级" width="90px"  align="center">
        <template slot-scope="{row}">
          <span >{{ row.variationclass1}}</span>
<!--          <el-tag>{{ row.type }}</el-tag>-->
        </template>
      </el-table-column>



      <el-table-column label="变化分类" width="110px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.variationcat1}}</span>
        </template>
      </el-table-column>

      <el-table-column label="变化专业" width="110px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.varcatdetail1}}</span>
        </template>
      </el-table-column>

      <el-table-column label="变化开始时间" width="110px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.variastartdate | Time }}</span>
        </template>
      </el-table-column>

      <el-table-column label="变化进展" width="110px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.variaprogress}}</span>
        </template>
      </el-table-column>


      <el-table-column label="变化状态" width="110px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.variastatus1}}</span>
        </template>
      </el-table-column>
  </el-table>
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form ref="dataForm"  :model="temp" label-position="left" label-width="70px" style="width: 400px; margin-left:50px;">
        <el-form-item  label='变化分类' >
          <el-select v-model="temp.variationcat" class="filter-item" placeholder="Please select">
            <el-option v-for="item in variationcatoption" :key="item.key" :label="item.display_name" :value="item.key" />
          </el-select>
        </el-form-item>

        <el-form-item label='变化分级'  prop="variationclass1">
          <el-select v-model="temp.variationclass" class="filter-item" placeholder="Please select">
            <el-option v-for="item in variationclassoption" :key="item.key" :label="item.display_name" :value="item.key" />
          </el-select>
        </el-form-item>

        <el-form-item label='变化专业' prop="varcatdetail">
          <el-select v-model="temp.varcatdetail" class="filter-item" placeholder="Please select">
            <el-option v-for="item in varcatdetailoption" :key="item.key" :label="item.display_name" :value="item.key" />
          </el-select>
        </el-form-item>

<!--        <el-form-item prop="timestamp">-->
<!--          <el-date-picker v-model="temp.timestamp" type="datetime" placeholder="Please pick a date" />-->
<!--        </el-form-item>-->
        <el-form-item  label='变化内容' prop="variacontent">
          <el-input v-model="temp.variacontent" />
        </el-form-item>

        <el-form-item label='变化状态'>
          <el-select  v-model="temp.variastatus" class="filter-item" placeholder="Please select">
            <el-option v-for="item in variastatusoption" :key="item.key" :label="item.display_name" :value="item.key" />
          </el-select>
        </el-form-item>
<!--        <el-form-item >-->
<!--          <el-rate v-model="temp.importance" :colors="['#99A9BF', '#F7BA2A', '#FF9900']" :max="3" style="margin-top:8px;" />-->
<!--        </el-form-item>-->
        <el-form-item label='意见备注'>
          <el-input  v-model="temp.variaremark" :autosize="{ minRows: 2, maxRows: 4}" type="textarea" placeholder="请输入备注" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">
         退出
        </el-button>
        <el-button type="primary" @click="dialogStatus==='create'?createData():updateData()">
          确定
        </el-button>
      </div>
    </el-dialog>

    <el-dialog :visible.sync="dialogPvVisible" title="Reading statistics">
      <el-table :data="pvData" border fit highlight-current-row style="width: 100%">
        <el-table-column prop="key" label="Channel" />
        <el-table-column prop="pv" label="Pv" />
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogPvVisible = false">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>

import { getvaria, updatevaria } from '@/api/variationmanage/variation'
import waves from '@/directive/waves' // waves directive
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination'
const varcatdetailoption = [
  { key: '1', display_name: '生产' },
  { key: '2', display_name: '地质' },
  { key: '3', display_name: '机电' },
  { key: '4', display_name: '通风' },
  { key: '5', display_name: '供电' },
  { key: '6', display_name: '监测监控' },
  { key: '7', display_name: '通讯' },
  { key: '8', display_name: '运输' },
  { key: '9', display_name: '环境' }
]
const variationcatoption = [
  { key: '1', display_name: '可预测性' },
  { key: '2', display_name: '突发性' }
]
const variationclassoption = [
  { key: '1', display_name: '一级变化' },
  { key: '2', display_name: '二级变化' },
  { key: '3', display_name: '三级变化' }
]
const variastatusoption = [
  { key: 'ongoing', display_name: '变化中' },
  { key: 'end', display_name: '已结束' },
  { key: 'changing', display_name: '变化更改' }
]



const variatiocompanyoption = [
  { key: '8', display_name:  '义棠煤业公司'},
  { key: '9', display_name:  '倡源煤业公司'},
  { key: '10', display_name: '城峰煤业公司'},
  { key: '11', display_name: '青云煤业公司'},
  { key: '12', display_name: '安益煤业公司'},
  { key: '13', display_name: '瑞东煤业公司'}
]

// arr to obj, such as { CN : "China", US : "USA" }
// const calendarTypeKeyValue = calendarTypeOptions.reduce((acc, cur) => {
//   acc[cur.key] = cur.display_name
//   return acc
// }, {})

export default {
  name: 'ComplexTable',
  components: { Pagination},
  directives: { waves },
  filters: {
     Time(value) {
      var dateee = new Date(value).toJSON();
      var date = new Date(+new Date(dateee)+8*3600*1000).toISOString().replace(/T/g,' ').replace(/\.[\d]{3}Z/,'')
      return date
    },
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    },
    typeFilter(type) {
      return calendarTypeKeyValue[type]
    }
  },
  data() {
    return {
      tableKey: 0,
      list: null,
      total: 0,
      listLoading: true,
      variationclassoption,
      variationcatoption,
      varcatdetailoption,
      variastatusoption,
      variatiocompanyoption,
      listQuery: {
        page: 1,
        limit: 10,
        variationcat:undefined,
        variationclass:undefined,
        varcatdetail:undefined,
        variatiocompany:undefined,
        variacontent: undefined,
        sort: '+id'
      },
      sortOptions: [{ label: '升序', key: '+id' }, { label: '降序', key: '-id' }],
      showReviewer: false,
      user:{name:'dww'},
      temp: {
        id: undefined,
        variationcat:undefined,
        variationclass:undefined,
        varcatdetail:undefined,
        variaremark: '',
        // timestamp: new Date(),
        variacontent: '',
        variastatus: undefined,
      },
      dialogFormVisible: false,
      dialogStatus: '',
      textMap: {
        update: '更新',
        create: '创建'
      },
      dialogPvVisible: false,
      pvData: [],
      // rules: {
        // type: [{ required: true, message: 'type is required', trigger: 'change' }],
        // timestamp: [{ type: 'date', required: true, message: 'timestamp is required', trigger: 'change' }],
        // title: [{ required: true, message: 'title is required', trigger: 'blur' }]
      // },
      downloadLoading: false
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      getvaria(this.listQuery).then(response => {
        this.list = response.results
        this.total = response.count
        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 500)
      })
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    handleModifyStatus(row, status) {
      this.$message({
        message: '操作成功',
        type: 'success'
      })
      row.status = status
    },
    sortChange(data) {
      const { prop, order } = data
      if (prop === 'id') {
        this.sortByID(order)
      }
    },
    sortByID(order) {
      if (order === 'ascending') {
        this.listQuery.sort = '+id'
      } else {
        this.listQuery.sort = '-id'
      }
      this.handleFilter()
    },
    resetTemp() {
      this.temp = {
        id: undefined,
        importance: 1,
        remark: '',
        timestamp: new Date(),
        title: '',
        status: 'published',
        type: ''
      }
    },
    handleCreate() {
      this.resetTemp()
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
  //   createData() {
  //     this.$refs['dataForm'].validate((valid) => {
  //       if (valid) {
  //         this.temp.id = parseInt(Math.random() * 100) + 1024 // mock a id
  //         this.temp.author = 'vue-element-admin'
  //         createArticle(this.temp).then(() => {
  //           this.list.unshift(this.temp)
  //           this.dialogFormVisible = false
  //           this.$notify({
  //             title: '成功',
  //             message: '创建成功',
  //             type: 'success',
  //             duration: 2000
  //           })
  //         })
  //       }
  //     })
  //   },
    handleUpdate(row) {
      this.temp = Object.assign({}, row) // copy obj
      // this.temp.timestamp = new Date(this.temp.timestamp)
      // console.log(this.temp)
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    updateData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          const tempData = Object.assign({}, this.temp)
          console.log(tempData)
          console.log(typeof (tempData))
          // tempData.timestamp = +new Date(tempData.timestamp) // change Thu Nov 30 2017 16:41:05 GMT+0800 (CST) to 1512031311464
          updatevaria(tempData).then((res) => {
            const index = this.list.findIndex(v => v.id === this.temp.id)//这句代码不懂，v.id 什么意思
            // console.log(index)
            this.$set(this.list,index,res.data)
            // this.list.splice(index, 1, this.temp)
            // console.log(this.temp)
            // console.log(this.list)
            this.dialogFormVisible = false
            this.$notify({
              title: '成功',
              message: '更新成功',
              type: 'success',
              duration: 2000
            })
          })
        }
      })
    },
  //   handleDelete(row, index) {
  //     this.$notify({
  //       title: '成功',
  //       message: '删除成功',
  //       type: 'success',
  //       duration: 2000
  //     })
  //     this.list.splice(index, 1)
  //   },
  //   handleFetchPv(pv) {
  //     fetchPv(pv).then(response => {
  //       this.pvData = response.data.pvData
  //       this.dialogPvVisible = true
  //     })
  //   },


    //导出和导入，完善标题拼接，标题搜索，条件过滤
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['timestamp', 'title', 'type', 'importance', 'status']
        const filterVal = ['timestamp', 'title', 'type', 'importance', 'status']
        const data = this.formatJson(filterVal)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: 'table-list'
        })
        this.downloadLoading = false
      })
    },
    formatJson(filterVal) {
      return this.list.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    },
    getSortClass: function(key) {
      const sort = this.listQuery.sort
      return sort === `+${key}` ? 'ascending' : 'descending'
    }
  }
}
</script>
<style lang="scss" scoped>

.filter-container {
  padding-bottom: 10px;
}
.link-type,
.link-type:focus {
  color: #337ab7;
  cursor: pointer;
  &:hover {
    color: rgb(32, 160, 255);
  }
}

</style>
