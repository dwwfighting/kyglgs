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
              active-text-color="#ffd04b">
              <el-menu-item index="1">隐患排查</el-menu-item>
              <el-menu-item index="2">安全生产标准化</el-menu-item>
              <el-menu-item index="3">班组建设</el-menu-item>
              <el-menu-item index="3">变化管理</el-menu-item>
              <el-menu-item index="4">事故文书</el-menu-item>
            </el-menu>
          </div>
        </el-row>
        <el-row>
          <i style="font-size:18px;margin:10px 20px;color: white" @click="show = !show" class="el-icon-s-unfold">过滤</i>
          <el-collapse-transition>
            <div class="cation-content" v-show="show">
              <div class="cation-middle">
                <dl class="cation-list">
                  <dt class="supercheck">上级检查</dt>
                  <dd>
                    <el-checkbox v-model="provinceAll" :indeterminate="isIndeterminate1"
                                 @change="handleCheckAllprovince">
                      山西省
                    </el-checkbox>
                    <el-checkbox-group v-model="checkedprovince" @change="handleCheckedprovinceChange">
                      <el-checkbox v-for="(item,key) in province" :key="item.id" style="width: 150px" :label="item.id">
                        {{item.superiororgname}}
                      </el-checkbox>
                    </el-checkbox-group>
                  </dd>
                  <dd>
                    <el-checkbox v-model="citiesAll" :indeterminate="isIndeterminate2" @change="handleCheckAllcities">
                      晋中市
                    </el-checkbox>
                    <el-checkbox-group v-model="checkedCities" @change="handleCheckedcitiesChange">
                      <el-checkbox v-for="(item,key) in cities" :key="item.id" style="width: 150px" :label="item.id">
                        {{item.superiororgname}}
                      </el-checkbox>
                    </el-checkbox-group>
                  </dd>
                  <dd>
                    <el-checkbox v-model="districtsAll" :indeterminate="isIndeterminate3"
                                 @change="handleCheckAlldistricts">
                      介休市
                    </el-checkbox>
                    <el-checkbox-group v-model="checkeddistricts" @change="handleCheckeddistrictsChange">
                      <el-checkbox v-for="(item,key) in districts" :key="item.id" style="width: 150px" :label="item.id">
                        {{item.superiororgname}}
                      </el-checkbox>
                    </el-checkbox-group>
                  </dd>
                </dl>
                <dl class="cation-list">
                  <dt>处室检查</dt>
                  <dd>
                    <el-checkbox v-model="departmentAll" :indeterminate="isIndeterminate4"
                                 @change="departmentCheckAllChange">
                      全选
                    </el-checkbox>
                    <el-checkbox-group v-model="checkeddepartment" @change="handleCheckeddepartChange">
                      <el-checkbox v-for="(item,key) in department" :key="item.id" style="width: 100px"
                                   :label="item.id">
                        {{item.coalcompanyname}}
                      </el-checkbox>
                    </el-checkbox-group>
                  </dd>
                </dl>
                <dl class="cation-list">
                  <dt>煤业公司</dt>
                  <dd>
                    <el-checkbox v-model="componiesAll" :indeterminate="isIndeterminate5"
                                 @change="componiesCheckAllChange">
                      全选
                    </el-checkbox>
                    <el-checkbox-group v-model="checkedcomponies" @change="handleCheckedcomponies">
                      <el-checkbox v-for="(item,key) in componies" :key="item.id" style="width:100px" :label="item.id">
                        {{item.coalcompanyname}}
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
          <el-col  :xl="15" :lg="15" :xs="24" :sm="24" :md="24">
            <div class="issuecheckmaintable">
            <el-row style="vertical-align: central;padding:5px 0px;font-size: 1.25em;">
                  <div class="" style="text-align: center;margin: 0 auto">
                    <h4>
                      检查记录表
                    </h4>
                    <div style=" display: inline-block;float:right">
                      <i class="el-icon-edit"></i>
                      <i class="el-icon-share"></i>
                      <i class="el-icon-delete"></i>
                    </div>
                  </div>
                </el-row>
            <el-divider></el-divider>
            <el-row >
                  <el-col :lg="5" :md="12" :sm="12" :xl="5">
                    <el-input v-model="listQuery.search" size="small" placeholder="多条件搜索使用,分割"
                              class="filter-item"
                              @keyup.enter.native="multisearch"/>
                  </el-col>

                  <el-col style="text-align: right;" :lg="19" :md="12" :sm="12" :xl="19">
                    <el-date-picker
                      v-model="timefilter"
                      type="daterange"
                      size="small"
                      align="right"
                      unlink-panels
                      @change="setDate"
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                      value-format="yyyy-MM-dd"
                    >
                    </el-date-picker>

                    <!--纳入考核批量复查部分
                    -->
                    <!--              <el-dropdown @command="batchoption">-->
                    <!--                <el-button type="primary">-->
                    <!--                  批量操作<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
                    <!--                </el-button>-->
                    <!--                <el-dropdown-menu slot="dropdown">-->
                    <!--                  <el-dropdown-item command="joineva">加入考核</el-dropdown-item>-->
                    <!--                  <el-dropdown-item command="cleareva">不予考核</el-dropdown-item>-->
                    <!--                  <el-dropdown-item command="batchreview">批量复查</el-dropdown-item>-->
                    <!--                </el-dropdown-menu>-->
                    <!--              </el-dropdown>-->

                    <!--              <el-dropdown type="primary">-->
                    <!--                <el-button type="primary">-->
                    <!--                  其他操作<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
                    <!--                </el-button>-->
                    <!--                <el-dropdown-menu slot="dropdown">-->
                    <!--                  <el-dropdown-item>下载</el-dropdown-item>-->
                    <!--                  <el-dropdown-item>打印</el-dropdown-item>-->
                    <!--                  <el-dropdown-item>最大化</el-dropdown-item>-->
                    <!--                </el-dropdown-menu>-->
                    <!--              </el-dropdown>-->

                    <!--              <el-dropdown trigger="click">-->
                    <!--                <el-button type="primary">-->
                    <!--                  消息中心<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
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
            <el-divider></el-divider>
            <el-row>
              <el-col :span="24">
                <el-table
                  ref='mytable'
                  :key="tableKey"
                  v-loading="listLoading"
                  :data="list"
                  border
                  fit
                  height="840"
                  highlight-current-row
                  style="width: 100%;"
                  @selection-change="handleSelectionChange"
                  :header-cell-style="{background:'#34495e',color:'#ccd1cf'}"
                  :cell-style="{padding:0+'px'}"
                  :row-style="{height:38+'px'}"
                >
                  <el-table-column
                    type="selection"
                    width="40">
                  </el-table-column>

                  <el-table-column
                    type="index"
                    label="序号"
                    align="center"
                    width="50">
                  </el-table-column>
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
                        :class="row.evaluation==true ? 'el-icon-document-remove' : 'el-icon-document-add'"></span>
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
                      <span :class="row.issuesclassify1C>0?'inColor':'outColor'">{{ row.issuesclassify1C  }}</span>
                    </template>
                  </el-table-column>

                  <el-table-column label="重大风险" width="80px" align="center">
                    <template slot-scope="{row}">
                      <span :class="row.seriousrisksum>0?'inColor':'outColor'">{{ row.seriousrisksum  }}</span>
                    </template>
                  </el-table-column>

                  <el-table-column label='操作' min-width="102px" align="center" class-name="small-padding fixed-width">
                    <template slot-scope="{row,$index}">

                      <router-link :to="'/reportcenter/checkrecordedit/'+row.id">
                        <span style="font-size:18px;padding: 0px 3px;color: red" class="el-icon-edit"></span>
                      </router-link>

                      <router-link :to="'/reportcenter/checkrecordedit/'+row.id">
                        <span style="font-size:18px;padding: 0px 3px;" class="el-icon-s-check"></span>
                      </router-link>

                      <span style="font-size:18px;padding: 0px 3px;color: #1db2f5" class="el-icon-picture"
                            @click="reviewpic(row.reviewpic,dialogTableVisible)"></span>


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
                <pagination v-show="total>0" class="msg-pagination-container" :background="isBackground" :total="total"
                            :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList"/>
              </el-col>
            </el-row>
            </div>
          </el-col>



          <el-col  :xl="9" :lg="9" :xs="24" :sm="24" :md="24">
            <el-row>
                <issuesreportstatistics v-bind="senddata"/>
            </el-row>
            <el-row >
              <el-col :span="24">
<!--                <issues v-if="echarshow"/>-->
              </el-col>
            </el-row>

            <el-row class="reportrow">
              <el-col :span="24">
                <!--              <issuesreportstatistics/>-->
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24" class="reportrow">
                <!--              <issues v-if="echarshow"/>-->
              </el-col>
            </el-row>

          </el-col>


        </el-row>
      </div>

      <el-row class="rowclass" :gutter="10">
        <el-col :xl="15" :lg="24" :xs="24" :sm="24" :md="24">
          <el-row type="flex" justify="end" align="middle">

            <el-col :span="12">
              <div class="grid-content bg-purple">
                <div class="grid-content">
                  <span>检查隐患分类统计表</span>
                </div>
              </div>
            </el-col>

            <el-col :span="12">
              <el-dropdown trigger="click">
                  <span class="el-dropdown-link">
                    更多操作<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item icon="el-icon-sort">切换图表</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-s-data">数据分析</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-s-data">预测分析</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>


            <!--            <el-col :span="12">-->
            <!--              <div >-->
            <!--                <el-dropdown trigger="click">-->
            <!--                <span class="el-dropdown-link">-->
            <!--                  更多操作<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
            <!--                </span>-->
            <!--                  <el-dropdown-menu slot="dropdown">-->
            <!--                    <el-dropdown-item icon="el-icon-sort">切换图表</el-dropdown-item>-->
            <!--                    <el-dropdown-item icon="el-icon-s-data">数据分析</el-dropdown-item>-->
            <!--                  </el-dropdown-menu>-->
            <!--                </el-dropdown>-->
            <!--              </div>-->
            <!--            </el-col>-->
          </el-row>
          <el-divider></el-divider>

          <el-row>

            <el-col :span="6">
              <el-dropdown class="iconclass" @command="handleCommand">
                <span class="el-dropdown-link">
                  <i class="el-icon-setting el-icon--left"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item icon="el-icon-download" command="download">下载</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-printer" v-print="'#printTest'" command="printss">打印
                  </el-dropdown-item>
                  <el-dropdown-item icon="el-icon-rank" command="maxsize">最大</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>

            <el-row>
              <el-col :span="24">
                <el-table
                  id="printTest"
                  v-loading="listLoading"
                  :data="sublist"
                  stripe
                  key="item"
                  max-height="100%"
                  :row-style="{height:'35px'}"
                  :cell-style="{padding:0}"
                  border
                  @cell-click="sublisthandle"
                >

                  <el-table-column prop="item" min-width="77px" width="" align="center" label="项目">

                  </el-table-column>

                  <el-table-column align="center" min-width="77px" label="义棠">
                    <template slot-scope="{row}">
                      <span>{{ row.data[8]}}</span>
                      <el-tag size="medium" v-if="row.persentage !==undefined">{{row.persentage[8] | persentFilter}}
                      </el-tag>
                      <el-tag size="medium" type="success" v-if="row.commonpersentage !==undefined">
                        {{row.commonpersentage[8] | persentFilter}}
                      </el-tag>
                      <el-tag size="medium" type="danger" v-if="row.majorpersentage !==undefined">
                        {{row.majorpersentage[8] | persentFilter}}
                      </el-tag>
                    </template>
                  </el-table-column>
                  <el-table-column align="center" min-width="77px" label="倡源">
                    <template slot-scope="{row}">
                      <span>{{ row.data[9]}}</span>
                      <el-tag size="medium" v-if="row.persentage !==undefined">{{row.persentage[9] | persentFilter}}
                      </el-tag>
                      <el-tag size="medium" type="success" v-if="row.commonpersentage !==undefined">
                        {{row.commonpersentage[9] | persentFilter}}
                      </el-tag>
                      <el-tag size="medium" type="danger" v-if="row.majorpersentage !==undefined">
                        {{row.majorpersentage[9] | persentFilter}}
                      </el-tag>
                    </template>
                  </el-table-column>
                  <el-table-column align="center" min-width="77px" label="城峰">
                    <template slot-scope="{row}">
                      <span>{{ row.data[10]}}</span>
                      <el-tag size="medium" v-if="row.persentage !==undefined">{{row.persentage[10] | persentFilter}}
                      </el-tag>
                      <el-tag size="medium" type="success" v-if="row.commonpersentage !==undefined">
                        {{row.commonpersentage[10] | persentFilter}}
                      </el-tag>
                      <el-tag size="medium" type="danger" v-if="row.majorpersentage !==undefined">
                        {{row.majorpersentage[10] | persentFilter}}
                      </el-tag>
                    </template>
                  </el-table-column>
                  <el-table-column align="center" min-width="77px" label="青云">
                    <template slot-scope="{row}">
                      <span>{{ row.data[11]}}</span>
                      <el-tag size="medium" v-if="row.persentage !==undefined">{{row.persentage[11] | persentFilter}}
                      </el-tag>
                      <el-tag size="medium" type="success" v-if="row.commonpersentage !==undefined">
                        {{row.commonpersentage[11] | persentFilter}}
                      </el-tag>
                      <el-tag size="medium" type="danger" v-if="row.majorpersentage !==undefined">
                        {{row.majorpersentage[11] | persentFilter}}
                      </el-tag>
                    </template>
                  </el-table-column>
                  <el-table-column align="center" min-width="77px" label="安益">
                    <template slot-scope="{row}">
                      <span>{{ row.data[12]}}</span>
                      <el-tag size="medium" v-if="row.persentage !==undefined">{{row.persentage[12] | persentFilter}}
                      </el-tag>
                      <el-tag size="medium" type="success" v-if="row.commonpersentage !==undefined">
                        {{row.commonpersentage[12] | persentFilter}}
                      </el-tag>
                      <el-tag size="medium" type="danger" v-if="row.majorpersentage !==undefined">
                        {{row.majorpersentage[12] | persentFilter}}
                      </el-tag>
                    </template>
                  </el-table-column>
                  <el-table-column align="center" min-width="77px" label="瑞东">
                    <template slot-scope="{row}">
                      <span>{{ row.data[13]}}</span>
                      <el-tag size="medium" v-if="row.persentage !==undefined">{{row.persentage[13] | persentFilter}}
                      </el-tag>
                      <el-tag size="medium" type="success" v-if="row.commonpersentage !==undefined">
                        {{row.commonpersentage[13] | persentFilter}}
                      </el-tag>
                      <el-tag size="medium" type="danger" v-if="row.majorpersentage !==undefined">
                        {{row.majorpersentage[13] | persentFilter}}
                      </el-tag>
                    </template>
                  </el-table-column>
                  <el-table-column prop="total" min-width="74" align="center" label="合计"></el-table-column>
                </el-table>


              </el-col>
            </el-row>
            <el-row class="rowclass">
              <el-col :span="24">
                <el-table
                  v-loading="listLoading"
                  :data="issuessubtable"
                  stripe
                  key="item"
                  max-height="100%"
                  :row-style="{height:'33px'}"
                  :cell-style="{padding:0}"

                  border
                  @cell-click="sublisthandle"
                >

                  <el-table-column prop="item" min-width="77px" width="" align="center" label="项目">

                  </el-table-column>

                  <el-table-column align="center" min-width="77px" label="义棠">
                    <template slot-scope="{row}">
                      <span>{{ row.data[8]}}</span>
                      <el-tag size="medium" v-if="row.persentage !==undefined">{{row.persentage[8]}}%</el-tag>
                      <el-tag size="medium" type="success" v-if="row.commonpersentage !==undefined">
                        {{row.commonpersentage[8]}}%
                      </el-tag>
                      <el-tag size="medium" type="danger" v-if="row.majorpersentage !==undefined">
                        {{row.majorpersentage[8]}}%
                      </el-tag>
                    </template>
                  </el-table-column>
                  <el-table-column align="center" min-width="77px" label="倡源">
                    <template slot-scope="{row}">
                      <span>{{ row.data[9]}}</span>
                      <el-tag size="medium" v-if="row.persentage !==undefined">{{row.persentage[9]}}%</el-tag>
                      <el-tag size="medium" type="success" v-if="row.commonpersentage !==undefined">
                        {{row.commonpersentage[9]}}%
                      </el-tag>
                      <el-tag size="medium" type="danger" v-if="row.majorpersentage !==undefined">
                        {{row.majorpersentage[9]}}%
                      </el-tag>
                    </template>
                  </el-table-column>
                  <el-table-column align="center" min-width="77px" label="城峰">
                    <template slot-scope="{row}">
                      <span>{{ row.data[10]}}</span>
                      <el-tag size="medium" v-if="row.persentage !==undefined">{{row.persentage[10]}}%</el-tag>
                      <el-tag size="medium" type="success" v-if="row.commonpersentage !==undefined">
                        {{row.commonpersentage[10]}}%
                      </el-tag>
                      <el-tag size="medium" type="danger" v-if="row.majorpersentage !==undefined">
                        {{row.majorpersentage[10]}}%
                      </el-tag>
                    </template>
                  </el-table-column>
                  <el-table-column align="center" min-width="77px" label="青云">
                    <template slot-scope="{row}">
                      <span>{{ row.data[11]}}</span>
                      <el-tag size="medium" v-if="row.persentage !==undefined">{{row.persentage[11]}}%</el-tag>
                      <el-tag size="medium" type="success" v-if="row.commonpersentage !==undefined">
                        {{row.commonpersentage[11]}}%
                      </el-tag>
                      <el-tag size="medium" type="danger" v-if="row.majorpersentage !==undefined">
                        {{row.majorpersentage[11]}}%
                      </el-tag>
                    </template>
                  </el-table-column>
                  <el-table-column align="center" min-width="77px" label="安益">
                    <template slot-scope="{row}">
                      <span>{{ row.data[12]}}</span>
                      <el-tag size="medium" v-if="row.persentage !==undefined">{{row.persentage[12]}}%</el-tag>
                      <el-tag size="medium" type="success" v-if="row.commonpersentage !==undefined">
                        {{row.commonpersentage[12]}}%
                      </el-tag>
                      <el-tag size="medium" type="danger" v-if="row.majorpersentage !==undefined">
                        {{row.majorpersentage[12]}}%
                      </el-tag>
                    </template>
                  </el-table-column>
                  <el-table-column align="center" min-width="77px" label="瑞东">
                    <template slot-scope="{row}">
                      <span>{{ row.data[13]}}</span>
                      <el-tag size="medium" v-if="row.persentage !==undefined">{{row.persentage[13]}}%</el-tag>
                      <el-tag size="medium" type="success" v-if="row.commonpersentage !==undefined">
                        {{row.commonpersentage[13]}}%
                      </el-tag>
                      <el-tag size="medium" type="danger" v-if="row.majorpersentage !==undefined">
                        {{row.majorpersentage[13]}}%
                      </el-tag>
                    </template>
                  </el-table-column>
                  <el-table-column prop="total" min-width="74" align="center" label="合计"></el-table-column>
                </el-table>


              </el-col>
            </el-row>
          </el-row>

        </el-col>
        <el-col :xl="9" :lg="24" :xs="24" :sm="24" :md="24">
<!--          <issues v-if="echarshow"/>-->

        </el-col>
        <!--        <el-col :lg="12" :xs="24" :sm="24" :md="24">-->
        <!--          <issues v-if="echarshow"/>-->


        <!--        </el-col>-->
        <!--        <el-col :lg="12" :xs="24" :sm="24" :md="24">-->
        <!--          <issues v-if="echarshow"/>-->

        <!--        </el-col>-->
        <!--        <el-col :lg="12" :xs="24" :sm="24" :md="24">-->
        <!--          <issues v-if="echarshow"/>-->

        <!--        </el-col>-->
      </el-row>

      <el-dialog :visible.sync="dialogTableVisible" title="Reading statistics">

        <img ref="currentrevirepic"
             :src="'//localhost:8000/media/2020/08/checkrecordimg/%E5%9F%8E%E5%B3%B0_4pukZMW.jpg'"/>

        <!--      <span slot="footer" class="dialog-footer">-->
        <!--        <el-button type="primary" @click="dialogPvVisible = false">{{ $t('table.confirm') }}</el-button>-->
        <!--      </span>-->
      </el-dialog>

    </div>
  </div>


</template>

<script>

  import {getcheckrecordlist, batchupdate} from '@/api/reportcenter/issuesreport'
  import issuesreportstatistics from "./components/issuesreportstatistics";
  import waves from '@/directive/waves' // waves directive
  import {parseTime} from '@/utils'
  import Pagination from '@/components/Pagination' // secondary package based on el-pagination

  // import Sticky from '@/components/Sticky' // 粘性header组件

  // const provinceOptions = [];
  // const calendarTypeKeyValue = calendarTypeOptions.reduce((acc, cur) => {
  //   acc[cur.key] = cur.display_name
  //   return acc
  // }, {})
  export default {
    name: 'ComplexTable',
    components: {Pagination, issuesreportstatistics},
    directives: {waves},
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
      },
      typeFilter(type) {
        return calendarTypeKeyValue[type]
      }
    },
    data() {
      return {
        dialogTableVisible: false,
        tableKey: 0,
        listLoading: true,
        total: 0,
        ddddd: this.$store.state.basechartdata.accidentnum,
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
        multipleSelection: {evaluation: undefined, checkdate: undefined, chkrecordserial: undefined, id: []},
        batchupdateid: [],
        checkeddepartment: [],
        checkedcomponies: [],
        districtsOptions: [],
        districtsOptions1: [],
        departmentOptions: [],
        componiesOptions: [],
        checkeddistricts: [],
        cities: [],
        districts: [],
        list: null,
        sublist: null,
        issuessubtable: null,
        superiororg: this.$store.state.superorgbasedata.superiororg,
        department:this.$store.state.superorgbasedata.deparmentbase,
        timefilter: '',
        listQuery: {
          page: 1,
          limit: 20,
          starttime: '',
          endtime: '',
          search: ''
          // supercheckunit: undefined
        },
        // companies:minecompanies,
        loading: false,
        componies: this.$store.state.superorgbasedata.minecompanies,
        downloadLoading: false,
        isActive: false,
        senddata: {}
      }
    },
    created() {
      this.getsuperorg()
      this.getList()
    },
    computed: {
      // minecompanies() {
      //   return this.$store.state.tempstore.minecompanies
      // }
    },
    methods: {
      tableRowStyle({row, rowIndex}) {
        console.log(row)
        console.log(rowIndex)
        return "background-color:pink"
      },
      tableRowClassName({row, rowIndex}) {
        // console.log(row.seriousrisksum)
        if (row.seriousrisksum > 0) {
          return 'warning-row';
        } else {
          return 'success-row';
        }
        return '';
      },
      multisearch() {
        this.getList()
      },
      reviewpic($event, row, status) {

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
      batchoption(command) {
        if (command == 'joineva') {
          this.multipleSelection.evaluation = 1
          // this.multipleSelection.chkrecordserial="20200812YMSU"
          const tempData = Object.assign({}, this.multipleSelection)
          // console.log(typeof (JSON.stringify(this.multipleSelection)))
          // console.log(this.multipleSelection)
          // console.log(typeof (this.multipleSelection))
          batchupdate(this.multipleSelection).then(response => {
            // console.log(response)
            // Just to simulate the time of the request
            setTimeout(() => {
              this.listLoading = false
            }, 1 * 1000)
          })
        }
        if (command == 'cleareva') {
          this.multipleSelection.evaluation = 0
          // this.multipleSelection.chkrecordserial="20200812YMSU"
          const tempData = Object.assign({}, this.multipleSelection)
          // console.log(typeof (JSON.stringify(this.multipleSelection)))
          // console.log(this.multipleSelection)
          // console.log(typeof (this.multipleSelection))
          batchupdate(this.multipleSelection).then(response => {
            alert('asdfasdfasdf')
            // console.log(response)
            // Just to simulate the time of the request
            setTimeout(() => {
              this.listLoading = false
            }, 1.5 * 1000)
          })
        }
      },
      sublisthandle(row, column, event, cell) {
        // console.log(row)
        // console.log(column)
        // console.log(event)
        // console.log(cell)
      },
      handleCommand(command) {

        if (command == 'download') {
          import('@/vendor/Export2Excel').then(excel => {
            const tHeader = ['项目', '义棠煤业', '倡源煤业', '城峰煤业', '青云煤业', '安益煤业', '瑞东煤业', '合计']
            const filterVal = ['item', "data8", 'data9', 'data10', 'data11', 'data12', 'data13', 'total']
            const data = this.formatJson(filterVal)
            excel.export_json_to_excel({
              header: tHeader,
              data,
              filename: 'table-list'
            })
            this.downloadLoading = false
          })
        }
      },
      formatJson(filterVal) {
        // console.log(filterVal)
        return this.sublist.map(v => filterVal.map(j => {
            // console.log(v[j])
            if (j === "data8") {
              // console.log(v[j])
              // alert(x)
              return v['data']['8']
            }
            if (j === 'data9') {
              return v['data']['9']
            }
            if (j === 'data10') {
              return v['data']['10']
            }
            if (j === 'data11') {
              return v['data']['11']
            }
            if (j === 'data12') {
              return v['data']['12']
            }
            if (j === 'data13') {
              return v['data']['13']
            } else {
              return v[j]
            }
          }
        ))
      },
      mouseEnter() {
        this.isActive = true
      },
      handleCheckAllChange(val) {
        this.checkedprovince = val ? this.provinceOptions1 : []
        this.checkedCities = val ? this.citiesOptions1 : []
        this.checkeddistricts = val ? this.districtsOptions1 : []
      },
      confirmhandle(e) {
        var superliststr = JSON.stringify(this.checkedprovince).replace(/\[|]/g, '')
          + ',' + JSON.stringify(this.checkedCities).replace(/\[|]/g, '') + ',' + JSON.stringify(this.checkeddistricts).replace(/\[|]/g, '')
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
        for (var i = 0; i < this.department.length; i++) {
            this.departmentOptions.push(this.department[i].id)
          }
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
          if (response.data.message == "nodata" || response.data.code == 201) {
            this.list = []
            this.sublist = []
            this.issuessubtable = []

          } else if (response.data != '' || response.data.results != '' || response.data.results.code == 200) {
            this.list = response.data.results.data
            this.sublist = response.data.results.subtable
            this.total = response.data.count
            this.issuessubtable = response.data.results.issuessubtable
            this.senddata = response.data.results.otherdata

          }

          // console.log(this.list,this.total,this.sublist, this.issuessubtable)
          // console.log(this.list)
          setTimeout(() => {
            this.listLoading = false
          }, 1 * 500)
        })
      },

    },

    mounted: function () {
      //可用于设置自适应屏幕，根据获得的可视宽度（兼容性）判断是否显示
      let w = document.documentElement.offsetWidth || document.body.offsetWidth;
      if (w < 1240) {
        this.show = false;
      }
    }
  }
</script>
<style lang="scss" scoped>

  @import "~@/styles/issuesreport/css/reportcenter.scss";
  @import "~@/styles/issuesreport/css/style.css";

  .grid-content {
    height: 40px;
    vertical-align: middle;
  }

  .grid-content span {
    font-size: 18px;
    line-height: 40px;
  }

  .msg-pagination-container {
    padding: 5px 5px;
    background-color: #34495e;
  }

  .msg-pagination-container span.el-pagination__total {
    /*对页数的样式进行修改*/
    color: #FFF;
  }

  .el-dropdown-link {
    font-size: 16px;
    cursor: pointer;
    color: #2a3f54;
    text-align: right;
    display: inline;
  }

  .stickclass {
    background-color: #b4bccc;
  }

  /*.filter-container {*/
  /*  padding-bottom: 10px;*/
  /*}*/

  .link-type,
  .link-type:focus {
    color: #337ab7;
    cursor: pointer;

    &:hover {
      color: rgb(32, 160, 255);
    }
  }


  .iconclass {
    padding: 6px 6px;
    position: absolute;
    align-content: center;
    left: 5px;
    top: 5px;
    border-radius: 6px;
    font-size: 20px;
    background: #000000;
    opacity: 0.48;
    z-index: 999;
  }

  .rowclass {
    margin-top: 10px;
  }

  .el-tag {
    padding: 0px 6px;
  }

  .el-divider {
    margin: 8px 0px;
  }

  .inColor {
    color: #ff1b00;
    font-size: 16px;
  }

  .outColor {
    color: #000000
  }

  .el-date-editor {
    width: 260px;
    /*font-size: 11px;*/
  }

  .supercheck {
    float: left;
    width: 84px;
    font-weight: 700;
    line-height: 126px;
    position: relative;
    color: #333;
  }

  .cation-list .supercheck:after {
    content: "";
    position: absolute;
    right: 12px;
    top: 60px;
    border: 1px solid #333;
    border-width: 0 1px 1px 0;
    width: 4px;
    height: 4px;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  .el-table .warning-row {
    background: #f9c922;
  }

  .el-table th, .el-table tr {
    background: #f9c922;
  }

  .el-checkbox{
    color: #000000;
  }

</style>
