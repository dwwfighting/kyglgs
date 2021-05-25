<template>
  <div  style="width: 100%">
  <el-table  :data="list" height="130" v-loading="pictLoading"   highlight-current-row border  style="width: 100%" @cell-click="rowdetailfun" >
    <el-table-column class="evaser" prop="evaluationsserial" align="center" label="考核序号" width="140"></el-table-column>
    <el-table-column prop="evacom" label="被考核公司" align="center" width="106"></el-table-column>
    <el-table-column prop="evaluationtype" label="考核类型" align="center" width="120"></el-table-column>
    <el-table-column prop="insideAnum"  label="处室一般隐患"  align="center" width="106"></el-table-column>
    <el-table-column prop="insideBnum" label="处室较大隐患" align="center" width="106"></el-table-column>
    <el-table-column prop="insideCnum" label="处室重大隐患" align="center" width="106"></el-table-column>
    <el-table-column prop="outsideAnum" label="上级一般隐患"  align="center" width="106"></el-table-column>
    <el-table-column prop="outsideBnum" label="上级较大隐患" align="center" width="106"></el-table-column>
    <el-table-column prop="outsideCnum" label="上级重大隐患" align="center" width="106"></el-table-column>
    <el-table-column prop="evaluationdeduct" label="扣分" align="center" width="60"></el-table-column>
    <el-table-column prop="modulation" label="系数调整分" align="center" width="94"></el-table-column>
    <el-table-column prop="evaluationscore" label="考核得分" align="center" width="94"></el-table-column>
    <el-table-column prop="modulation" label="系数调整分" align="center" width="94"></el-table-column>
    <el-table-column prop="penalty" label="罚款金额" align="center" width="94"></el-table-column>
 </el-table>

<el-table  :data="rowdetail" style="width: 100%;">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-table  ref='expandref' :data="props.row.checkrecord"  show-summary :show-header=true  :default-sort = "{prop:'reformresult'}">
            <el-table-column type="selection" width="60"></el-table-column>
            <el-table-column type="index" align="center" :show-overflow-tooltip="false" width="50" label="id"></el-table-column>
            <el-table-column prop="issues" show-overflow-tooltip :show-overflow-tooltip="false" width="600" label="隐患内容"></el-table-column>
            <el-table-column prop="issuesclassify1" align="center" width="140" :show-overflow-tooltip="false" label="隐患分级"></el-table-column>
            <el-table-column prop="issuescate" align="center" width="100" :show-overflow-tooltip="false" label="隐患类别"></el-table-column>
            <el-table-column prop="reformresult" sortable align="center" width="100" :show-overflow-tooltip="false" label="整改结果"></el-table-column>
            <el-table-column prop="removeissue" align="center" width="100" type="color:red" :show-overflow-tooltip="false" label="是否销号"></el-table-column>
            <el-table-column prop="score"  align="center" width="100" :show-overflow-tooltip="false" label="扣分情况"></el-table-column>
           <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleupdate(scope.$index, scope.row)">更新</el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
           </template>
         </el-table-column>
        </el-table>
      </template>
    </el-table-column>
    <el-table-column
      label="检查时间"
      prop="checkdate">
    </el-table-column>
    <el-table-column
      label="检查类型"
      prop="checktype">
    </el-table-column>
    <el-table-column
      label="隐患问题数量"
      prop="dangerrecordnum">
    </el-table-column>
    <el-table-column
      label="已整改"
      prop="reformresult">
    </el-table-column>
  </el-table>


<el-dialog title="更新数据" :visible.sync="dialogFormVisible">
  <el-form :ref="form" :model="form">
<!--    <el-form-item label="隐患类别" :label-width="formLabelWidth">-->
<!--      <el-select v-model="updataform.issuescate" clearable placeholder="请选择隐患类别">-->
<!--        <el-option  :key="menu.id" :label="menu.issuecategories_text" v-for="(menu,key) in form.issuescate" :value="menu.issuecategories_text"></el-option>-->
<!--      </el-select>-->
<!--    </el-form-item>-->
    <el-form-item label="隐患分级" :label-width="formLabelWidth">
      <el-select v-model="form.issuesclassify1" clearable placeholder="请选择隐患分级">
        <el-option  :key="key" :label="menu.issuesclassify1name" v-for="(menu,key) in form.issuesclassify1" :value="menu.issuesclassify1name"></el-option>
      </el-select>
    </el-form-item>
<!--    <el-form-item label="整改结果" :label-width="formLabelWidth">-->
<!--      <el-select v-model="updataform.reformresult" placeholder="请选择整改结果">-->
<!--        <el-option label="已整改" value="0"></el-option>-->
<!--        <el-option label="整改中" value="1"></el-option>-->
<!--        <el-option label="未到期" value="2"></el-option>-->
<!--      </el-select>-->
<!--    </el-form-item>-->
<!--    <el-form-item label="销号记录" :label-width="formLabelWidth">-->
<!--      <el-select v-model="updataform.removeissue" placeholder="请选择销号记录">-->
<!--        <el-option label="已销号" value="0"></el-option>-->
<!--        <el-option label="未销号" value="1"></el-option>-->
<!--      </el-select>-->
<!--    </el-form-item>-->
    <el-form-item label="扣分" :label-width="formLabelWidth">
      <el-input size="medium" v-model="form.score" autocomplete="off" ></el-input>
    </el-form-item>
  </el-form>

  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="createissues">确 定</el-button>
  </div>
</el-dialog>


<!--    <el-table  height="250" border style="width: 100%">-->
<!--    <el-table-column prop="id" label="" width="180"></el-table-column>-->
<!--    <el-table-column prop="id" label="日期" width="180"></el-table-column>-->
<!--    <el-table-column prop="id" label="日期" width="180"></el-table-column>-->
<!--    <el-table-column prop="name" label="姓名" width="180"></el-table-column>-->
<!--    <el-table-column prop="address" label="地址"></el-table-column>-->
<!--     <el-table-column width="120px" label="Importance">-->
<!--       <template slot-scope="scope">-->
<!--          <el-button size="mini" type="primary">编辑</el-button>-->
<!--        </template>-->
<!--    </el-table-column>-->
<!--  </el-table>-->
  </div>
</template>


<script>
import { fetchList,statciList,issuescateList,issuesclass,updataissue } from '@/api/totalreport/totalreport'
import qs from 'qs'
// import table from "../../../../mock/table";

export default {
  // filters: {
  //   statusFilter(status) {
  //     const statusMap = {
  //       published: 'success',
  //       draft: 'info',
  //       deleted: 'danger'
  //     }
  //     return statusMap[status]
  //   }
  // },
  name:'tabdetail',
  props: ['datadetail'],
  // props: {
  // datadetail: {
  //       type: Object, // 数据类型
  //       default: null, // 初始值
  //     },
  // },
  data() {
    return {
      pictLoading:false,
      activeName:false,
      describe:'',
      rowdetail:[],
      success:'',
      list:[],
      chartData:[],
      loading: false,
      issuescate:'',
      issuesclass:'',
      listQuery: {
        month: this.datadetail,
      },
      dialogFormVisible:false,
      formLabelWidth: '120px',
      form: {},
      updataeddata:[],
      issuesid:'',
      score:'',
      getRowKeys(row) {
        console.log(row.id)
        // console.log(this.updataeddata)
             return row.id;
            },
      // common_table_info:[],
       updataform: {
          issuescate: '',
          reformresult: '',
          issuesclassify1: '',
          removeissue: '',
          score: '',
        },
    }
  },
  created() {
    this.getData()
    // issuescateList().then(response => {
    //       this.form.issuescate = response.data.results
    //     }, response => {
    //       console.log('error')
    //     })
    // issuesclass().then(response => {
    //       this.form.issuesclassify1 = response.data.results
    //     }, response => {
    //       console.log('error')
    //     })
    // console.log(this.listQuery)
  },
  mounted() {
  },
  methods: {
    expandChange(row, expandedRows) {

          // console.log(row)
          // console.log(expandedRows)
          // Array.prototype.remove = function(val) {
          //   let index = this.indexOf(val);
          //   if (index > -1) {
          //     this.splice(index, 1);
          //   }
          },

    createissues() {
        updataissue(this.issuesid,this.form.score).then(response => {
          console.log(this.$refs.expandref.data)
          console.log(this.updataeddata)
          this.updataeddata=response.data

          // console.log(this.updataeddata)
          this.$set(this.$refs.expandref.data,this.form.index,this.updataeddata)
          console.log(this.rowdetail[0])
          this.dialogFormVisible=false
          // console.log(this.form.index)
          // console.log(this.rowdetail.score)
          // console.log(this.form.index)
          // console.log(this.rowdetail)
          // this.rowdetail.$set(this.rowdetail[this.form.index].checkrecord,this.form.index,{score:this.updataeddata.score});
          // this.form.score=this.updataeddata.score
          // this.$set(this.list,'score',)
        }, response => {
          console.log('error')
        })
      },
     handleupdate(index, row) {
        this.dialogFormVisible = true
        this.issuesid=row.id
        this.form = Object.assign({}, row)
        this.form.index=index
        // console.log(index,row)
        // console.log(this.form)
        // this.form.score=row.score
        // this.form.checkrecord=row.checkrecord
        // this.form.issues=row.issues
      },
      handleDelete(index, row) {
        console.log(index, row);
      },

    getData() {
        fetchList(this.listQuery).then(response => {
          this.list = response.data
          // console.log(this.list)
        }, response => {
          console.log('error')
        })
      },

    rowdetailfun (row,column,event,cell){
      let query={com: row.evaluationcom,ser:row.evaluationsserial,checkdep:column.property};
      statciList(query).then(response => {
          this.rowdetail = response.data
        }, response => {
          console.log('error')
        })
      this.activeName=true
    }
  },
  // watch:{
    // datadetail: {
    //   handler(val) {
    //     // let list1 = [];
    //     // for(var i in val){
    //     //   list1.push(val[i]);
    //     // }
    //   this.list=val
    // },
  //   immediate: true}
  // }
}
</script>

<style scoped>


</style>
