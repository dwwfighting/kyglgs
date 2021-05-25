<template>
  <div class="container">
    <section class="hero">
      <el-row :gutter="8">
        <el-col :lg="6" :md="6">
          <div class="hero__categories">
            <div class="hero__categories__all">
              <i class="el-icon-s-fold" />
              <span>学习中心</span>
            </div>
            <el-tree
              ref="tree"
              class="filter-tree"
              :data="treedata"
              node-key="id"
              :props="defaultProps"
              default-expand-all
              :highlight-current="true"
              :filter-node-method="filterNode"
              @current-change="checkfunc"
            />
          </div>
        </el-col>
        <el-col :lg="18" :md="18">

          <div class="hero__search">
            <div class="hero__search__form">
              <form >
                  <el-select v-model="value" placeholder="请选择" class="select-style"  >
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                <input type="text" v-model="listQuery.search" placeholder="请输入查找关键字">
                <button type="submit" class="site-btn" @click="search_criteriapolicydetail">SEARCH</button>
              </form>
            </div>
            <div class="hero__search__phone">
              <span>收藏</span>
              <span>历史</span>
              <span>题库</span>
            </div>
          </div>

          <el-table
              :data="tabledata"
              style="width: 100%"
              :cell-class-name="rowClass"
            >
              <el-table-column  min-width="500px">
                <template slot-scope="{row}">
                  <div  @click="handleUpdate(row)">
                    <img class="criteriaimg" :src="row.criteriapolicyimg">
                    <span >{{ row.criteriapolicytitle }}</span>
                    <span >发布时间：{{ row.criteriapublishdate }}</span>
                    <span >实施时间：{{ row.criteriareformdate }}</span>
                    <span >版本号：{{ row.criteriaversion }}</span>
                    <span >发布单位：{{ row.published_unit }}</span>
                  </div>
                </template>
              </el-table-column>

            </el-table>

          <pagination
                    v-show="total > 0"
                    class="msg-pagination-container"
                    :total="total"
                    :page-sizes="[5, 10, 15, 20]"
                    :page.sync="listQuery.page"
                    :limit.sync="listQuery.limit"
                    @pagination="get_criteriapolicydetail"
            />
        </el-col>
      </el-row>
    </section>
  </div>
</template>

<script>
import { get_criteriapolicy, criteriapolicydetai } from '@/api/criteriapolicy/criteriapolicy'
import Pagination from '@/components/Pagination'
export default {
  name: 'Baseregulation',
  components: { Pagination },
  data() {
    return {
      filterText: '',
      treedata: [],
      tabledata: [],
      options: [{
        value: '选项1',
        label: '以综合查询'
      }, {
        value: '选项2',
        label: '以发布时间'
      }, {
        value: '选项3',
        label: '以实施时间'
      }, {
        value: '选项4',
        label: '以发布单位'
      }, {
        value: '选项5',
        label: '以版本号'
      }],
      value: '选项1',
      specialty: '综合',
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      listQuery: {
        page: 1,
        limit: 5
      },
      total: 0
    }
  },

  watch: {
    filterText(val) {
      this.$refs.tree.filter(val)
    }
  },
  created() {
    this.get_tree()
    this.get_criteriapolicydetail()
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    get_tree() {
      get_criteriapolicy().then(response => {
        this.treedata = response.result
      })
    },
    search_criteriapolicydetail(){
      if (this.listQuery['professional']) {
        delete this.listQuery['professional']
      }
       this.listQuery['page'] = 1
       this.listQuery['limit'] = 5
       this.specialty = '综合'
      console.log(this.listQuery)
       criteriapolicydetai(this.listQuery).then(response => {
        this.tabledata = response.results
        this.total = response.count
      })
    },
    get_criteriapolicydetail() {
      console.log(this.listQuery)
      criteriapolicydetai(this.listQuery).then(response => {
        this.tabledata = response.results
        this.total = response.count
      })
    },
    checkfunc(checkedNodes, checkedKeys) {
      console.log(checkedNodes)

      this.specialty = checkedNodes.label
      this.listQuery['page'] = 1
      this.listQuery['limit'] = 5
      if (this.listQuery['search']) {
        delete this.listQuery['search']
      }
      this.listQuery['professional'] = checkedNodes.id

      criteriapolicydetai(this.listQuery).then(response => {
        this.total = response.count
        this.tabledata = response.results
      })
    },
     rowClass({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        return 'rgb196'
     }
    },
    handleUpdate(row) {
      window.open(row.criteriapolicyfile, '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/styles/rebuildchartindex.scss";
  @import '@/styles/learning/index.scss';

  /*.components-container div {*/
  /*  margin: 10px;*/
  /*}*/

  /*.el-row {*/
  /*  margin-bottom: 250px;*/
  /*  .row-border {*/
  /*    box-shadow: 8px 8px 5px rgba(0, 0, 0, .2);*/
  /*  }*/

  /*  !*.el-row div:hover {*!*/
  /*  !*  box-shadow: 3px 3px 5px rgba(0,0,0,.2);*!*/
  /*  !*}*!*/
  /*  &:last-child {*/
  /*    margin-bottom: 0;*/
  /*  }*/

  /*}*/
</style>
