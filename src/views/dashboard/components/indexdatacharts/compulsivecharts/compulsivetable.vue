<template>
  <el-row>
    <div class="compulsivecontiner">
      <div class="x_panel">
        <div class="x_title">
          <div class="panel_toolbox animate__animated animate__fadeIn">
            <span>{{ compulsivetotal }}条结果</span>
            <el-dropdown trigger="click" @command="handleCommand">
              <span class="el-dropdown-link">
                <i class="el-icon-arrow-down el-icon--right" />
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="hasformdata">已闭合</el-dropdown-item>
                <el-dropdown-item command="unformdata">未闭合</el-dropdown-item>
                <el-dropdown-item divided command="ajdepart">安检处</el-dropdown-item>
                <el-dropdown-item command="headofstation">驻矿站长</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="clearfix" />
        </div>
        <div class="complusivecontent">
          <el-table
            v-if="isRouterAlive"
            :data="compulsiveinfo"
            style="width: 100%;background:rgba(11,11,11,0.1);"
            stripe
            max-height="265"
            :default-sort="{prop: 'compulsivedate', order: 'descending'}"
            :header-cell-style="tableRowClassName"
            :cell-style="{padding:2+'px',backgroundColor:'#08354B',color:'#ffffff',}"
            @row-click="rowhandle"
          >
            <el-table-column
              prop="compulsivedate"
              label="下发日期"
              sortable
              align="center"
              min-width="120"
            />
            <el-table-column
              prop="compulsivedepment__organizationname"
              label="下发部门"
              align="center"
              min-width="120"
            />
            <el-table-column
              prop="compulsivecom__organizationname"
              label="被强制单位"
              sortable
              align="center"
              min-width="120"
            />
            <el-table-column
              prop="reformresult"
              label="闭合情况"
              align="center"
            />
          </el-table>
        </div>
      </div>
    </div>
    <!--    <div class="compulsiveheader">-->
    <!--      <span  @click="getunformdata">未闭合</span>-->
    <!--      <span  @click="getformdata">已闭合</span>-->
    <!--&lt;!&ndash;      <span >|</span>&ndash;&gt;-->
    <!--      <span >{{ tatalsum }}条结果</span>-->
    <!--&lt;!&ndash;      <span >|</span>&ndash;&gt;-->
    <!--      <span >升序</span>-->
    <!--      <span >降序</span>-->
    <!--    </div>-->

    <!--    <div>-->
    <!--      <el-col>-->
    <!--        <el-table-->
    <!--          v-if="isRouterAlive"-->
    <!--          :data="unformdata"-->
    <!--          style="width: 100%;height: 100%;background:rgba(11,11,11,0.1)"-->
    <!--          height="276px"-->
    <!--          :default-sort="{prop: 'compulsivedate', order: 'descending'}"-->
    <!--          :header-cell-style="tableRowClassName"-->
    <!--          :cell-style="{padding:0+'px'}"-->
    <!--          border-->
    <!--          @row-click="rowhandle"-->
    <!--        >-->
    <!--          <el-table-column-->
    <!--            prop="compulsivedate"-->
    <!--            label="下发日期"-->
    <!--            sortable-->
    <!--            width="100"-->
    <!--          />-->
    <!--          <el-table-column-->
    <!--            prop="compulsivedepment__coalcompanyname"-->
    <!--            label="下发部门"-->
    <!--            sortable-->
    <!--            width="100"-->
    <!--          />-->
    <!--          <el-table-column-->
    <!--            prop="compulsivecom__coalcompanyname"-->
    <!--            label="被强制单位"-->
    <!--          />-->
    <!--          <el-table-column-->
    <!--            prop="reformresult"-->
    <!--            label="闭合情况"-->
    <!--          />-->
    <!--        </el-table>-->
    <!--      </el-col>-->
    <!--    </div>-->

    <el-dialog title="文书详情" center :visible.sync="centerDialogVisible">
      <el-row :gutter="8">
        <el-col :lg="12">

          <ul>
            <li v-for="(item,key) in compulsivedetail" :key="key">
              <p><span>{{compulsivedetailkey[0]}}：</span>{{ item.compulsiveserial }}</p>
              <p><span>{{compulsivedetailkey[1]}}：</span>{{ item.compulsivedate }}</p>
              <p><span class="compulsivecom">{{compulsivedetailkey[2]}}：</span>{{ item.compulsivecom }}</p>
              <p><span>{{compulsivedetailkey[3]}}：</span>{{ item.compulsivedepment}}</p>
              <p><span>{{compulsivedetailkey[4]}}：</span>{{ item.compulsivereason }}</p>
            </li>
          </ul>
          <div class="compulsivetrace">
            <p><span class="el-icon-picture-outline" @click="getimg">原件</span></p>
            <p><span class="el-icon-attract" >跟踪</span></p>
            <p><span class="el-icon-attract" >复查</span></p>
            <p><span class="el-icon-attract" >闭合</span></p>
          </div>
        </el-col>

        <el-col :lg="12">
          <compulsivetimline :compulsivetimedata="compulsivetimedata">
            <h3 slot="first">{{ gridData.compulsivedate }}</h3>
            <p slot="firstcontent">{{ firstdata }}下达文书</p>
          </compulsivetimline>
        </el-col>

      </el-row>
    </el-dialog>
    <!--    <el-dialog :visible.sync="imageVisible" center title="文书闭合原件">-->
    <!--      &lt;!&ndash;        <template  slot-scope="scope">&ndash;&gt;-->

    <!--      <img v-if="state === 'imgshow'" width="100%" :src="imgurl" alt="文书闭合原件">-->
    <!--      <div v-else-if="state === 'textshow'">-->
    <!--        <p>该文书暂未上报闭合材料</p>-->
    <!--        &lt;!&ndash;             <el-upload&ndash;&gt;-->
    <!--        &lt;!&ndash;              class="upload-demo"&ndash;&gt;-->
    <!--        &lt;!&ndash;              action="https://jsonplaceholder.typicode.com/posts/"&ndash;&gt;-->
    <!--        &lt;!&ndash;              :on-preview="handlePreview"&ndash;&gt;-->
    <!--        &lt;!&ndash;              :on-remove="handleRemove"&ndash;&gt;-->
    <!--        &lt;!&ndash;              :before-remove="beforeRemove"&ndash;&gt;-->
    <!--        &lt;!&ndash;              multiple&ndash;&gt;-->
    <!--        &lt;!&ndash;              :limit="3"&ndash;&gt;-->
    <!--        &lt;!&ndash;              :on-exceed="handleExceed"&ndash;&gt;-->
    <!--        &lt;!&ndash;              :file-list="fileList">&ndash;&gt;-->
    <!--        &lt;!&ndash;              <el-button size="small" type="primary">点击上传</el-button>&ndash;&gt;-->
    <!--        &lt;!&ndash;              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>&ndash;&gt;-->
    <!--        &lt;!&ndash;            </el-upload>&ndash;&gt;-->
    <!--      </div>-->
    <!--      &lt;!&ndash;        </template>&ndash;&gt;-->

    <!--    </el-dialog>-->
    <!--    <el-col :span="12"><div ref="issues2"  :style="{height:'200px',width:'50%' ,background:'#ffffff'}" /></el-col>-->
  </el-row>

</template>

<script>

import compulsivetimline from './compulsivetimline'
import { get_complusives_detail, get_complusiveimg } from '@/api/complusive/complusive'
import { mapState } from 'vuex'
// import {comprehenList}  from '@/api/totalreport/totalreport'

export default {
  name: 'Compulsivetable',
  components: { compulsivetimline },
  data() {
    return {
      headerspan: true,
      compulsiveheader: true,
      unformdata: undefined,
      imageVisible: false,
      oridata: '',
      isRouterAlive: true,
      centerDialogVisible: false,
      gridData: '',
      compulsivetimedata: '',
      compulsiveimgdata: '',
      compulsivedetail: '',
      firstdata: '',
      imgid: '',
      state: '',
      imgurl: '',
      compulsivedetailkey:['文书编号','下达时间','被强制单位','下达处室','文书内容']
    }
  },
  computed: mapState({
    compulsivetotal: state => state.basechartdata.complusives_data['compulsivetotal'],
    compulsiveinfo: state => state.basechartdata.complusives_data['compulsiveinfo']
  }),
  watch: {
    compulsivetotal() {
      this.$nextTick(() => {
        this.unformdata = this.$store.state.basechartdata.compulsiveinfo
        this.oridata = this.$store.state.basechartdata.compulsiveinfo
        this.reload()
      })
    }
  },
  created() {
    this.oridata = this.compulsiveinfo
  },
  filter(id, definition) {
  },
  methods: {
    reload() {
      this.isRouterAlive = false
      this.$nextTick(() => {
        this.isRouterAlive = true
      })
    },
    getimg() {
      this.imageVisible = true
      get_complusiveimg(this.imgid).then(response => {
        this.compulsiveimgdata = response.data
        console.log(this.compulsiveimgdata)
        if (this.compulsiveimgdata['0']) {
          this.imgurl = this.compulsiveimgdata['0'].reformimg
          this.state = 'imgshow'
        } else {
          this.state = 'textshow'
        }
        // Just to simulate the time of the request
      })
    },
    firstformat(data, dep) {
      var a = /[a-z]/i
      // eslint-disable-next-line no-unused-vars
      var firststr = ''
      if (a.test(data)) {
        // eslint-disable-next-line no-return-assign
        return firststr = dep + '驻矿站长'
      }
      return dep + '处室'
    },
    rowhandle(row, column, event) {
      // this.gridData.length = 0
      const compulsiveserial = row.compulsiveserial
      this.centerDialogVisible = true

      this.gridData = row
      this.imgid = this.gridData.id
      this.firstdata = this.firstformat(this.gridData.compulsiveserial, this.gridData.compulsivedepment__organizationname)
      get_complusives_detail({ 'compulsiveserial': compulsiveserial }).then(response => {
        // console.log(response)
        this.compulsivedetail = response.data
        // Just to simulate the time of the request
      })
    },
    handleCommand(command) {
      eval('this.' + command + '()')
    },
    hasformdata() {
      console.log('-------')
      console.log(this.compulsiveinfo)
      let unformdatasum = 0
      const unreformarr = []
      Object.keys(this.compulsiveinfo).forEach((key) => {
        if (this.compulsiveinfo[key]['reformresult'] == null || this.compulsiveinfo[key]['reformresult'] === '' || this.compulsiveinfo[key]['reformresult'].indexOf('中') > -1) {
          unreformarr.push(this.compulsiveinfo[key])
          unformdatasum += 1
        }
      })
      this.compulsiveinfo = unreformarr
      // this.unformdata = unreformarr
    },
    getformdata() {
      let formdatasum = 0
      const reformarr = []
      Object.keys(this.oridata).forEach((key) => {
        if (this.oridata[key]['reformresult'] != null && this.oridata[key]['reformresult'].indexOf('已整改') > -1) {
          reformarr.push(this.oridata[key])
          formdatasum += 1
        }
      })
      this.tatalsum = formdatasum
      this.unformdata = reformarr
    },

    rowstyle({ row, rowIndex }) {
      return 'background:#F3F4F7;color:#555;height:16px'
    },

    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 0) {
        return 'background:#08354B;color:#fff;font-size:12px;margin:0;padding:0;text-align:center'
      } else if (rowIndex !== 1) {
        return 'background:#08354B;color:#fff;font-size:12px;margin:0;padding:0;text-align:center'
      }
      return 'background:#08354B;color:#fff;font-size:12px;margin:0;padding:0;text-align:center'
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/styles/compulsivecss/compulsivetable.scss";

</style>
