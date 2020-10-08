<template>
    <div >
          <div class="x_panel">
                <div class="x_title">
                     <div><h2>检查记录<small>Custom design</small></h2></div>
                     <el-dropdown>
                        <span class="el-dropdown-link">
                         <i class="el-icon-setting" /> <i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                          <el-dropdown-item>处室检查</el-dropdown-item>
                          <el-dropdown-item>上级检查</el-dropdown-item>
                        </el-dropdown-menu>
                      </el-dropdown>
                  </div>

                  <div class="x_content">

<!--                    <p >Add class <code>bulk_action</code> to table for bulk actions options on row select</p>-->

                    <el-table
                      ref="filterTable"
                      :data="tableData"
                      style="width: 100%">
                      <el-table-column
                        prop="date"
                        label="日期"
                        sortable
                        width="180"
                        column-key="date"
                        :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
                        :filter-method="filterHandler"
                      >
                      </el-table-column>
                      <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                      </el-table-column>
                      <el-table-column
                        prop="address"
                        label="地址"
                        :formatter="formatter">
                      </el-table-column>
                      <el-table-column
                        prop="tag"
                        label="标签"
                        width="100"
                        :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
                        :filter-method="filterTag"
                        filter-placement="bottom-end">
                        <template slot-scope="scope">
                          <el-tag
                            :type="scope.row.tag === '家' ? 'primary' : 'success'"
                            disable-transitions>{{scope.row.tag}}
                          </el-tag>
                        </template>
                      </el-table-column>
                    </el-table>


                  </div>
                </div>
              </div>
</template>

<script>
import { companyList, tablist, comprehenList, penaltyList, accidentList } from '@/api/totalreport/totalreport'
export default {
  name: "checkrecord",
  data() {
    return {
      tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          tag: '家'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          tag: '公司'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          tag: '家'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          tag: '公司'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          tag: '家'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          tag: '公司'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          tag: '家'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          tag: '公司'
        },{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          tag: '家'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          tag: '公司'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          tag: '家'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          tag: '公司'
        }
        ]
    }
  },
  created() {
    console.log(this.list)
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
 @import "@/styles/rebuildindex.scss";

</style>
