<template>
  <div class="issuecontainer">
    <div class="issueshead">
      <el-row>
        <el-row>
          <div>
            <el-menu
              class="el-menu-demo"
              mode="horizontal"
              background-color="#21314d"
              text-color="#fff"
              active-text-color="#ffd04b"
            >
              <el-menu-item index="1">隐患排查</el-menu-item>
              <el-menu-item index="2">安全生产标准化</el-menu-item>
              <el-menu-item index="3">班组建设</el-menu-item>
              <el-menu-item index="4">变化管理</el-menu-item>
              <el-menu-item index="5">事故文书</el-menu-item>
            </el-menu>
          </div>
        </el-row>
        <el-row>
          <i style="font-size:18px;margin:10px 20px;color: white" class="el-icon-s-unfold" @click="show = !show">过滤</i>
          <el-collapse-transition>
            <div v-show="show" class="cation-content">
              <div class="cation-middle">
                <dl class="cation-list">
                  <dt class="supercheck">上级检查</dt>
                  <dd>
                    <el-checkbox
                      v-model="provinceAll"
                      :indeterminate="isIndeterminate1"
                      @change="handleCheckAllprovince"
                    >
                       {{provinces.label}}
                    </el-checkbox>
                    <el-checkbox-group v-model="checkedprovince" @change="handleCheckedprovinceChange">
                      <el-checkbox v-for="(item,key) in provinces.children" :key="item.id" style="width: 150px" :label="item.id">
                        {{ item.organizationname }}
                      </el-checkbox>
                    </el-checkbox-group>
                  </dd>
                  <dd>
                    <el-checkbox v-model="citiesAll" :indeterminate="isIndeterminate2" @change="handleCheckAllcities">
                      {{cities.label}}
                    </el-checkbox>
                    <el-checkbox-group v-model="checkedCities" @change="handleCheckedcitiesChange">
                      <el-checkbox v-for="(item,key) in cities.children" :key="item.id" style="width: 150px" :label="item.id">
                        {{ item.organizationname }}
                      </el-checkbox>
                    </el-checkbox-group>
                  </dd>
                  <dd>
                    <el-checkbox
                      v-model="districtsAll"
                      :indeterminate="isIndeterminate3"
                      @change="handleCheckAlldistricts"
                    >
                     {{counties.label}}
                    </el-checkbox>
                    <el-checkbox-group v-model="checkeddistricts" @change="handleCheckeddistrictsChange">
                      <el-checkbox v-for="(item,key) in counties.children" :key="item.id" style="width: 150px" :label="item.id">
                        {{ item.organizationname }}
                      </el-checkbox>
                    </el-checkbox-group>
                  </dd>
                </dl>
                <dl class="cation-list">
                  <dt>处室检查</dt>
                  <dd>
                    <el-checkbox
                      v-model="departmentAll"
                      :indeterminate="isIndeterminate4"
                      @change="departmentCheckAllChange"
                    >
                      {{departments.label}}
                    </el-checkbox>
                    <el-checkbox-group v-model="checkeddepartment" @change="handleCheckeddepartChange">
                      <el-checkbox
                        v-for="(item,key) in departments.children"
                        :key="item.id"
                        style="width: 100px"
                        :label="item.id"
                      >
                        {{ item.organizationname }}
                      </el-checkbox>
                    </el-checkbox-group>
                  </dd>
                </dl>
                <dl class="cation-list">
                  <dt>煤业公司</dt>
                  <dd>
                    <el-checkbox
                      v-model="componiesAll"
                      :indeterminate="isIndeterminate5"
                      @change="componiesCheckAllChange"
                    >
                      {{companies.label}}
                    </el-checkbox>
                    <el-checkbox-group v-model="checkedcomponies" @change="handleCheckedcomponies">
                      <el-checkbox v-for="(item,key) in companies.children" :key="item.id" style="width:100px" :label="item.id">
                        {{ item.organizationname}}
                      </el-checkbox>
                    </el-checkbox-group>
                  </dd>
                </dl>
                <div class="selectorcommit">
                  <el-button type="primary" size="mini" @click="confirmhandle">清除选择</el-button>
                  <el-button type="primary" size="mini" @click="confirmhandle">确定</el-button>
                </div>
              </div>
            </div>
          </el-collapse-transition>
        </el-row>
      </el-row>
    </div>

    <div class="issuemain">
      <div class="issuecheckmain">
        <el-row :gutter="6">
          <el-col :xl="15" :lg="15" :xs="24" :sm="24" :md="24">
            <div class="issuecheckmaintable">
              <el-row style="vertical-align: central;padding:5px 0px;font-size: 1.25em;">
                <div class="" style="text-align: center;margin: 0 auto">
                  <h4>
                    检查记录表
                  </h4>
                  <div style=" display: inline-block;float:right">
                    <i class="el-icon-edit" />
                    <i class="el-icon-share" />
                    <i class="el-icon-delete" />
                  </div>
                </div>
              </el-row>
              <el-divider />
              <el-row>
                <el-col :lg="5" :md="12" :sm="12" :xl="5">
                  <el-input
                    v-model="listQuery.search"
                    size="small"
                    placeholder="多条件搜索使用,分割"
                    class="filter-item"
                    @keyup.enter.native="multisearch"
                  />
                </el-col>

                <el-col style="text-align: right;" :lg="19" :md="12" :sm="12" :xl="19">
                  <el-date-picker
                    v-model="timefilter"
                    type="daterange"
                    size="small"
                    align="right"
                    unlink-panels
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    value-format="yyyy-MM-dd"
                    @change="setDate"
                  />

                  <!--纳入考核批量复查部分
                    -->
                  <!--              <el-dropdown @command="batchoption">-->
                  <!--                <el-button type="primary">-->
                  <!--                  批量操作<i class="el-icon-arrow-down el-icon--right"></i>-->
                  <!--                </el-button>-->
                  <!--                <el-dropdown-menu slot="dropdown">-->
                  <!--                  <el-dropdown-item command="joineva">加入考核</el-dropdown-item>-->
                  <!--                  <el-dropdown-item command="cleareva">不予考核</el-dropdown-item>-->
                  <!--                  <el-dropdown-item command="batchreview">批量复查</el-dropdown-item>-->
                  <!--                </el-dropdown-menu>-->
                  <!--              </el-dropdown>-->

                  <!--              <el-dropdown type="primary">-->
                  <!--                <el-button type="primary">-->
                  <!--                  其他操作<i class="el-icon-arrow-down el-icon--right"></i>-->
                  <!--                </el-button>-->
                  <!--                <el-dropdown-menu slot="dropdown">-->
                  <!--                  <el-dropdown-item>下载</el-dropdown-item>-->
                  <!--                  <el-dropdown-item>打印</el-dropdown-item>-->
                  <!--                  <el-dropdown-item>最大化</el-dropdown-item>-->
                  <!--                </el-dropdown-menu>-->
                  <!--              </el-dropdown>-->

                  <!--              <el-dropdown trigger="click">-->
                  <!--                <el-button type="primary">-->
                  <!--                  消息中心<i class="el-icon-arrow-down el-icon--right"></i>-->
                  <!--                </el-button>-->
                  <!--                <el-dropdown-menu slot="dropdown">-->
                  <!--                  <el-dropdown-item class="clearfix">-->
                  <!--                    重大安全隐患-->
                  <!--                    <el-badge class="mark" :value="12"/>-->
                  <!--                  </el-dropdown-item>-->
                  <!--                  <el-dropdown-item class="clearfix">-->
                  <!--                    未整改隐患-->
                  <!--                    <el-badge class="mark" :value="3"/>-->
                  <!--                  </el-dropdown-item>-->
                  <!--                  <el-dropdown-item class="clearfix">-->
                  <!--                    未复查检查-->
                  <!--                    <el-badge class="mark" :value="3"/>-->
                  <!--                  </el-dropdown-item>-->
                  <!--                </el-dropdown-menu>-->
                  <!--              </el-dropdown>-->

                </el-col>
              </el-row>
              <el-divider />
              <el-row>
                <el-col :span="24">
                  <el-table
                    ref="mytable"
                    :key="tableKey"
                    v-loading="listLoading"
                    :data="list"
                    border
                    fit
                    height="840"
                    highlight-current-row
                    style="width: 100%;"
                    :header-cell-style="{background:'#34495e',color:'#ccd1cf'}"
                    :cell-style="{padding:0+'px'}"
                    :row-style="{height:38+'px'}"
                    @selection-change="handleSelectionChange"
                  >
                    <el-table-column
                      type="selection"
                      width="40"
                    />

                    <el-table-column
                      type="index"
                      label="序号"
                      align="center"
                      width="50"
                    />
                    <!--      <el-table-column type="index" align="center" :show-overflow-tooltip="false" sortable width="50" label="序号"></el-table-column>-->
                    <!--        <el-table-column label="序号" prop="id" sortable="custom" align="center" width="80">-->
                    <!--          <template slot-scope="{row}">-->
                    <!--            <span>{{ row.id }}</span>-->
                    <!--          </template>-->
                    <!--        </el-table-column>-->

                    <el-table-column label="检查日期" width="93px" align="center">
                      <template slot-scope="scope">
                        <span>{{ scope.row.checkdate }}</span>
                      </template>
                    </el-table-column>

                    <el-table-column show-overflow-tooltip label="检查单位" min-width="160px" align="center">
                      <template slot-scope="{row}">
                        <span v-if="row.checkunit1" class="link-type" @click="handleUpdate(row)">{{ row.checkunit1 }}</span>
                        <span v-if="row.supercheckunit1" class="link-type" @click="handleUpdate(row)">{{ row.supercheckunit1 }}</span>
                        <span
                          :style="row.evaluation==true?'font-size:18px;padding: 0px 3px;color: #259b68' :'font-size:18px;padding: 0px 3px;color: red'"
                          :class="row.evaluation==true ? 'el-icon-document-remove' : 'el-icon-document-add'"
                        />
                      </template>
                    </el-table-column>

                    <el-table-column label="被检查公司" width="105px" align="center">

                      <template slot-scope="{row}">
                        <router-link :to="'/reportcenter/checkrecordedit/'+row.id" class="link-type">
                          <span>{{ row.checkedcoalcompany1 }}</span>
                        </router-link>
                      </template>
                    </el-table-column>

                    <el-table-column show-overflow-tooltip label="检查类型" min-width="135" align="center">
                      <template slot-scope="{row}">
                        <span>{{ row.checktype }}</span>
                      <!--          <el-tag>{{ row.type }}</el-tag>-->
                      </template>
                    </el-table-column>

                    <el-table-column label="隐患" width="50px" align="center">
                      <template slot-scope="{row}">
                        <span>{{ row.dangerrecordnum }}</span>
                      </template>
                    </el-table-column>

                    <!--                  <el-table-column label="整改" v-if='show' width="50px" align="center">-->
                    <!--                    <template slot-scope="{row}">-->
                    <!--                      <span>{{ row.reformresult }}</span>-->
                    <!--                    </template>-->
                    <!--                  </el-table-column>-->

                    <el-table-column v-if="show" label="一般" width="50px" align="center">
                      <template slot-scope="{row}">
                        <span>{{ row.issuesclassify1A }}</span>
                      </template>
                    </el-table-column>
                    <!--                  <el-table-column v-if="show" label="较大" width="50px" align="center">-->
                    <!--                    <template slot-scope="{row}">-->
                    <!--                      <span>{{ row.issuesclassify1B }}</span>-->
                    <!--                    </template>-->
                    <!--                  </el-table-column>-->

                    <el-table-column label="重大隐患" width="80px" align="center">
                      <template slot-scope="{row}">
                        <span :class="row.issuesclassify1C>0?'inColor':'outColor'">{{ row.issuesclassify1C }}</span>
                      </template>
                    </el-table-column>

                    <el-table-column label="重大风险" width="80px" align="center">
                      <template slot-scope="{row}">
                        <span :class="row.seriousrisksum>0?'inColor':'outColor'">{{ row.seriousrisksum }}</span>
                      </template>
                    </el-table-column>

                    <el-table-column label="操作" min-width="102px" align="center" class-name="small-padding fixed-width">
                      <template slot-scope="{row}">

                        <router-link :to="'/reportcenter/checkrecordedit/'+row.id">
                          <span style="font-size:18px;padding: 0px 3px;color: red" class="el-icon-edit" />
                        </router-link>

                        <router-link :to="'/reportcenter/checkrecordedit/'+row.id">
                          <span style="font-size:18px;padding: 0px 3px;" class="el-icon-s-check" />
                        </router-link>

                        <span
                          style="font-size:18px;padding: 0px 3px;color: #1db2f5"
                          class="el-icon-picture"
                          @click="reviewpic(row.reviewpic,dialogTableVisible)"
                        />

                      </template>

                    </el-table-column>
                  <!--      <el-table-column label="变化进展" width="110px" align="center">-->
                  <!--        <template slot-scope="{row}">-->
                  <!--          <span>{{ row.variaprogress}}</span>-->
                  <!--        </template>-->
                  <!--      </el-table-column>-->

                  <!--      <el-table-column label="变化状态" width="110px" align="center">-->
                  <!--        <template slot-scope="{row}">-->
                  <!--          <span>{{ row.variastatus1}}</span>-->
                  <!--        </template>-->
                  <!--      </el-table-column>-->

                  </el-table>
                  <pagination
                    v-show="total>0"
                    class="msg-pagination-container"
                    :background="isBackground"
                    :total="total"
                    :page.sync="listQuery.page"
                    :limit.sync="listQuery.limit"
                    @pagination="getList"
                  />
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>

</template>

<script>

import { getcheckrecordlist } from '@/api/reportcenter/issuesreport'
import waves from '@/directive/waves' // waves directive
import Pagination from '@/components/Pagination'
import { mapGetters } from 'vuex' // secondary package based on el-pagination

export default {
  name: 'Issuesreport',
  components: { Pagination },
  directives: { waves },
  filters: {
    Time(value) {
      var dateee = new Date(value).toJSON()
      var date = new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
      return date
    },
    persentFilter(value) {
      return value + '%'
    },
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      dialogTableVisible: false,
      tableKey: 0,
      listLoading: true,
      total: 0,
      superchecknum: 0,
      departchecknum: 0,
      issuesnum: 0,
      // logo:require("./static/images/logo.png"),
      echarshow: true,
      commonnum: 0,
      majornum: 0,
      seriousnum: 0,
      show: true,
      isBackground: true,
      checkAll: false,
      provinceAll: false,
      citiesAll: false,
      districtsAll: false,
      departmentAll: false,
      componiesAll: false,
      isIndeterminate: false,
      isIndeterminate1: false,
      isIndeterminate2: false,
      isIndeterminate3: false,
      isIndeterminate4: false,
      isIndeterminate5: false,
      provinceOptions: [],
      provinceOptions1: [],
      province: [],
      citiesOptions: [],
      citiesOptions1: [],
      checkedprovince: [],
      checkedCities: [],
      multipleSelection: { evaluation: undefined, checkdate: undefined, chkrecordserial: undefined, id: [] },
      batchupdateid: [],
      checkeddepartment: [],
      checkedcomponies: [],
      districtsOptions: [],
      districtsOptions1: [],
      departmentOptions: [],
      componiesOptions: [],
      checkeddistricts: [],

      districts: [],
      list: null,
      sublist: null,
      timefilter: '',
      listQuery: {
        page: 1,
        limit: 20,
        starttime: '',
        endtime: '',
        search: ''
      },
      loading: false,
      downloadLoading: false,
      isActive: false
    }
  },
  computed: {
    ...mapGetters(
      ['companies','departments','provinces', 'cities','counties']
    )
  },

  created() {
    this.getsuperorg()
    this.getList()
  },

  mounted: function() {
  // 可用于设置自适应屏幕，根据获得的可视宽度（兼容性）判断是否显示
    const w = document.documentElement.offsetWidth || document.body.offsetWidth
    if (w < 1240) {
      this.show = false
    }
  },
  methods: {
    tableRowStyle({ row, rowIndex }) {
      return 'background-color:pink'
    },
    tableRowClassName({ row, rowIndex }) {
      // console.log(row.seriousrisksum)
      if (row.seriousrisksum > 0) {
        return 'warning-row'
      } else {
        return 'success-row'
      }
      // eslint-disable-next-line no-unreachable
      return null
    },
    multisearch() {
      this.getList()
    },
    reviewpic($event, row, status) {
      console.log(row)
      console.log(row.reviewpic)
      this.$nextTick(() => {
        console.log(this.$refs.currentrevirepic)
      })

      // this.$refs.currentrevirepic
      this.dialogTableVisible = true
    },
    handleSelectionChange(val) {
      // alert(val)
      // this.multipleSelection = val;
      for (let i = 0; i < val.length; i++) {
        if (this.multipleSelection.id.indexOf(val[i].id) === -1) {
          this.multipleSelection.id.push(val[i].id)
        }
        // if(this.multipleSelection.id.indexOf((val[i].id)!=-1)) {
        //   alert('aaa')
        //   this.multipleSelection.id.slice(i,1)
        // }
      }
      // console.log(this.multipleSelection);
    },
    // checkOne(val){
    //  if(val){
    // 	   this.$refs.maytable.toggleSelection(val);
    //   }else{
    //       this.$refs.maytable.clearSelection(val);
    //   }
    // },
    handleCheckAllChange(val) {
      this.checkedprovince = val ? this.provinceOptions1 : []
      this.checkedCities = val ? this.citiesOptions1 : []
      this.checkeddistricts = val ? this.districtsOptions1 : []
    },
    confirmhandle(e) {
      var superliststr = JSON.stringify(this.checkedprovince).replace(/\[|]/g, '') +
          ',' + JSON.stringify(this.checkedCities).replace(/\[|]/g, '') + ',' + JSON.stringify(this.checkeddistricts).replace(/\[|]/g, '')
      var departliststr = JSON.stringify(this.checkeddepartment).replace(/\[|]/g, '')
      var componiesliststr = JSON.stringify(this.checkedcomponies).replace(/\[|]/g, '')
      // console.log(superliststr)
      // console.log(this.checkeddistricts)

      this.$nextTick(() => {
        // console.log(this.$refs.supercheck)
      })
      if (superliststr.length > 2 && departliststr.length > 1) {
        // alert('asf')
      }

      if (superliststr.length > 2) {
        // alert('cc')
        this.listQuery.supercheckunit__in = superliststr
      } else {
        this.listQuery.supercheckunit__in = undefined
      }
      if (departliststr.length > 1) {
        this.listQuery.checkunit__in = departliststr
      } else {
        this.listQuery.checkunit__in = undefined
      }
      if (componiesliststr.length > 0) {
        this.listQuery.checkedcoalcompany__in = componiesliststr
      } else {
        this.listQuery.checkedcoalcompany__in = undefined
      }
      this.getList(this.listQuery)
      // console.log(this.checkeddistricts)
      // console.log(this.checkedCities)
    },

    handleCheckAllprovince(val) {
      // alert(val)
      // console.log(this.provinceOptions)
      this.checkedprovince = val ? this.provinceOptions1 : []
      this.isIndeterminate1 = false
      // alert(this.checkedprovince)
    },
    handleCheckAllcities(val) {
      // console.log(val)
      this.checkedCities = val ? this.citiesOptions1 : []
      this.isIndeterminate2 = false
    },
    handleCheckAlldistricts(val) {
      this.checkeddistricts = val ? this.districtsOptions1 : []
      this.isIndeterminate3 = false
    },
    departmentCheckAllChange(val) {
      this.checkeddepartment = val ? this.departmentOptions : []
      this.isIndeterminate4 = false
    },
    componiesCheckAllChange(val) {
      this.checkedcomponies = val ? this.componiesOptions : []
      this.isIndeterminate5 = false
    },
    handleCheckedprovinceChange(value) {
      const checkedCount = value.length
      this.provinceAll = checkedCount === this.province.length
      this.isIndeterminate1 = checkedCount > 0 && checkedCount < this.province.length
      // alert(this.provinceAll)
    },
    handleCheckedcitiesChange(value) {
      // console.log(value)
      const checkedCount = value.length
      this.citiesAll = checkedCount === this.cities.length
      this.isIndeterminate2 = checkedCount > 0 && checkedCount < this.cities.length
    },
    handleCheckeddistrictsChange(value) {
      const checkedCount = value.length
      this.districtsAll = checkedCount === this.districts.length
      this.isIndeterminate3 = checkedCount > 0 && checkedCount < this.districts.length
    },
    handleCheckeddepartChange(val) {
      const checkedCount = val.length
      this.departmentAll = checkedCount === this.department.length
      this.isIndeterminate4 = checkedCount > 0 && checkedCount < this.department.length
    },
    handleCheckedcomponies(val) {
      const checkedCount = val.length
      this.componiesAll = checkedCount === this.componies.length
      this.isIndeterminate5 = checkedCount > 0 && checkedCount < this.componies.length
    },

    getsuperorg() {
      for (var i = 0; i < this.superiororg.length; i++) {
        if (this.superiororg[i].superorganization_tree == 3 && this.superiororg[i].superiororgname != '晋中市') {
          this.provinceOptions.push(this.superiororg[i])
          this.provinceOptions1.push(this.superiororg[i].id)
          this.province = this.provinceOptions
        } else if (this.superiororg[i].superorganization_tree == 12 && this.superiororg[i].superiororgname != '介休市') {
          // alert(this.superiororg.length)
          this.citiesOptions.push(this.superiororg[i])
          this.citiesOptions1.push(this.superiororg[i].id)
          this.cities = this.citiesOptions
        } else if (this.superiororg[i].superorganization_tree == 13) {
          // alert(this.superiororg.length)
          this.districtsOptions.push(this.superiororg[i])
          this.districtsOptions1.push(this.superiororg[i].id)
          this.districts = this.districtsOptions
        }
      }
      // eslint-disable-next-line no-redeclare
      for (var i = 0; i < this.department.length; i++) {
        this.departmentOptions.push(this.department[i].id)
      }
      // eslint-disable-next-line no-redeclare
      for (var i = 0; i < this.componies.length; i++) {
        this.componiesOptions.push(this.componies[i].id)
      }
    },
    setDate(value) {
      if (value == null) {
        this.timefilter = ''
        this.getList()
      }
      // if (typeof(this.timefilter) == "undefined"|| this.timefilter == null )  return;
      this.listQuery.starttime = this.timefilter[0]
      this.listQuery.endtime = this.timefilter[1]
      this.getList()
    },
    getList() {
      this.listLoading = true
      getcheckrecordlist(this.listQuery).then(response => {
        if (response.message === '无数据') {
          this.list = null
          this.total = 0
          this.listLoading = false
        } else {
          this.list = response.results.data
          this.total = response.count
          // console.log(this.list,this.total,this.sublist, this.issuessubtable)
          // console.log(this.list)
          setTimeout(() => {
            this.listLoading = false
          }, 20)
        }
      })
    }

  }
}
</script>
<style lang="scss" scoped>
  @import "@/styles/issuesreport/reportcenter.scss";
</style>
