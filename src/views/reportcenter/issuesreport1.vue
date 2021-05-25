<template>
  <div >
  <el-row>
    <el-col :span="24">
      <div class="grid-content bg-purple-dark">这里写导入导出打印等功能
    </div>

    </el-col>
  </el-row>


  <el-row class="dashboard-editor-container" >

    <el-col :span="24">
      <div align="center"  class="grid-content-head bg-purple-dark"><span style="color:white;display: block;font-size: 25px;padding: 10px" >{{title}}</span>
        <div align="" >
          <el-select v-model="selectmonth" @change="selecthandle" clearable placeholder="月度考核">
            <el-option v-for="value in rowList.month" :key="value" :label="value" :value="value">
            </el-option>
          </el-select>

        <el-date-picker
              v-model="timerangeselect"
              type="daterange"
              align="right"
              unlink-panels
              @change="selectrangehandle(timerangeselect)"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions">
       </el-date-picker>
       <el-button  class="filter-item" type="primary" icon="el-icon-search" >搜索
      </el-button>

      <el-button  :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download" @click="handleDownload">
      导出
      </el-button>


      <el-radio-group v-model="currentStyle" @change="swithstyle(currentStyle)">
        <el-radio-button label="表格样式" />
        <el-radio-button label="图表样式" />
      </el-radio-group>
      </div>
      </div>
    </el-col>

    <el-col :span="24" v-if='show' >

      <el-table  key="category" v-loading="listLoading" :data="monthlist"  :span-method="arraySpanMethod" max-height="600" :row-style="{height:'38px'}" :cell-style="{padding:0}"
                :header-cell-style="{background:'#eef1f6',color:'#606266'}"  border style="width:100%;font-size: 15px;color: #0B628D">
        <el-table-column align="center" label="项目及分值" >
        <el-table-column prop="category" align="center" ></el-table-column>
        <el-table-column prop="activityName" align="center" ></el-table-column>
        <el-table-column prop="message" align="center" ></el-table-column>
        </el-table-column>
          <el-table-column prop="value[8]" align="center"   label="义棠煤业"></el-table-column>
          <el-table-column prop="value[9]"  align="center"  label="倡源煤业"></el-table-column>
          <el-table-column prop="value[10]" align="center"   label="城峰煤业"></el-table-column>
          <el-table-column prop="value[11]"  align="center"  label="青云煤业"></el-table-column>
          <el-table-column prop="value[12]"  align="center"  label="安益煤业"></el-table-column>
          <el-table-column prop="value[13]"  align="center"  label="瑞东煤业"></el-table-column>
      </el-table>

    </el-col>
    <el-col :span="24" v-if='show1' >
      <el-table
                :data="compreresults"
                key="item"
                max-height="100%"
                :row-style="{height:'60px'}"
                :cell-style="{padding:0}"
                :header-cell-style="{background:'#eef1f6',color:'#606266'}"
                border
                style="width:100%;font-size:15px;color: #0B628D">
        <el-table-column prop="item"  align="center"  label="项目" ></el-table-column>
        <el-table-column prop="data[8]"   align="center"  label="义棠煤业"></el-table-column>
        <el-table-column prop="data[9]"   align="center"  label="倡源煤业"></el-table-column>
        <el-table-column prop="data[10]"  align="center"  label="城峰煤业"></el-table-column>
        <el-table-column prop="data[11]"  align="center"  label="青云煤业"></el-table-column>
        <el-table-column prop="data[12]"  align="center"  label="安益煤业"></el-table-column>
        <el-table-column prop="data[13]"  align="center"  label="瑞东煤业"></el-table-column>
        <el-table-column prop="total"  align="center"  label="合计"></el-table-column>
      </el-table>
    </el-col>



  </el-row>
  <el-row>
   <el-col :span="24" v-if="chartsshow" >
          <charts-pane style="align-content: center" :piedata="compreresults"/>
    </el-col>
<!--    <el-col :span="12" v-if="chartsshow" >-->
<!--          <charts-pane />-->
<!--    </el-col>-->

    </el-row>

</div>

</template>

<script>
  import { monthcompre } from '@/api/dashboard/issues'
  import chartsPane from './components/ChartsPane'
  var list = [
        {
          "id": "16EE8A54E6917F6479905CDC5B031F22",
          "category": "隐患排查治理目标考核",
          "activityPointsDOS": [
            {
              "id": "16EE8A54E0C17F647404A2DC7783EE88",
              "activityName": "处室检查",
              "activityPointsDOS": [
                {
                  "message": "一般(条)",
                  'value':{}
                },
                {
                  "message": "较大(条)",
                  'value':{}
                },
                {
                  "message": "重大(条)",
                  'value':{}
                }
              ],
            },
            {
              "id": "16EE8A54E4817F64779EF35CC6671C10",
              "activityName": "上级检查",
              "activityPointsDOS": [
                {
                  "message": "一般(条)",
                  'value':{}
                },
                {
                 "message": "较大(条)",
                  'value':{}
                },
                {
                  "message": "重大(条)",
                  'value':{}

                }
              ],
            },
            {
              "id": "16EE8A54E4817F64779EF35CC6671C10",
              "activityName": "考核结果",
              "activityPointsDOS": [
                {
                  "message": "扣分",
                  'value':{}
                },
                {
                  "message": "系数调整分",
                  'value':{}
                },
                {
                  "message": "考核得分",
                  'value':{}
                },

                {
                  "message": "本月排名",
                  'value':{}
                },
                {
                  "message": "奖罚金额(万元)",
                  'value':{}
                }
              ],
            }
          ],
        },

     {
          "id": "16EE8A54E6917F6479905CDC5B031F22",
          "category": "安全综合项",
          "activityPointsDOS": [
            {
              "id": "16EE8A54E0C17F647404A2DC7783EE88",
              "activityName": "文书三违罚款",
              "activityPointsDOS": [
                {
                  "message": "执法文书（份）",
                  'value':{}
                },
                {
                  "message": "三违情况（人）",
                  'value':{}
                },
                {
                  "message": "上级罚款（万元）",
                  'value':{}
                }
              ],
            },
            {
              "id": "16EE8A54E4817F64779EF35CC6671C10",
              "activityName": "处室罚款（元）",
              "activityPointsDOS": [
                {
                  "message": "调度处",
                  'value':{}
                },
                {
                 "message": "总工办",
                  'value':{}
                },
                {
                  "message": "一通三防处",
                  'value':{}

                },
               {
                  "message": "安全检管处",
                  'value':{}

                },
                  {
                  "message": "机电设备处",
                  'value':{}

                },
                 {
                  "message": "地测防治水",
                  'value':{}
                }
              ],
            },
            {
              "id": "16EE8A54E4817F64779EF35CC6671C10",
              "activityName": "事故情况",
              "activityPointsDOS": [
                {
                  "message": "轻伤",
                  'value':{}
                },
                {
                  "message": "重伤",
                  'value':{}
                },
                {
                  "message": "重伤以上",
                  'value':{}
                },
                {
                  "message": "重大设备事故",
                  'value':{}
                },
                                {
                  "message": "涉险事故",
                  'value':{}
                }
              ],
            }
          ],
        },
        ];
    export default {
      name: "index1",
      components:{chartsPane},
      data(){
          return {
            downloadLoading: false,
            listLoading: true,
            currentStyle:'',
            rowList:[],
            compreresults:[],
            tableHeight:'',
            selectmonth:'',
            filtermonth:{},
            show:'',
            show1:'',
            chartsshow:'',
            timerangeselect:'',
            tiemfilter:{},
            title:'',
            pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          },
            {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          },
            {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          },
            {
            text: '11月21日至今',
            onClick(picker) {
              const end = new Date();
              const start = '2019-11-21';
              // start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }
          ]
        },
          }
        },
    mounted() {
        this.tableHeight = window.innerHeight - 50;
        // console.log(window.innerHeight)
        // console.log(this.tableHeight)
    },
      created() {
      // 二次处理数据
      // selcetdefaultnull
      this.selecthandle();
      this.monthlist = this.handleTableArr(list);
      this.show=true
      this.show1=false
      this.chartsshow=false
      this.listLoading = true
      this.currentStyle='表格样式'
      // console.log(this.alldata);
    },
     methods: {



     swithstyle(parms){

       if (parms=='图表样式'){
         this.show=this.show1=false
         this.chartsshow=true
       }
       else if(parms=='表格样式'){
         this.chartsshow=this.show1=false
         this.show=true
       }
      },

      handleDownload() {
       alert('aaa')
          // this.downloadLoading = true
      // import('@/vendor/Export2Excel').then(excel => {
      //   const tHeader = ['timestamp', 'title', 'type', 'importance', 'status']
      //   const filterVal = ['timestamp', 'title', 'type', 'importance', 'status']
      //   const data = this.formatJson(filterVal)
      //   excel.export_json_to_excel({
      //     header: tHeader,
      //     data,
      //     filename: 'table-list'
      //   })
      //   this.downloadLoading = false
      // })
    },



        selectrangehandle(timerangeselect){
          this.tiemfilter['month']=JSON.stringify(this.timerangeselect)
          this.show1=true
          this.show=this.chartsshow=false
          monthcompre(this.tiemfilter).then(response => {
            this.compreresults = response.data;
            console.log(this.compreresults)
            this.title='各煤业公司安全生产综合查询'
              }, response => {
                console.log('error')
              })
        },


        selecthandle() {
            this.show=true
            this.show1=this.chartsshow=false
            this.listLoading = true
            this.filtermonth['month']=this.selectmonth
            monthcompre(this.filtermonth).then(response => {
            this.rowList = response.data;
            this.title=this.rowList.title
            this.listLoading = false
            this.monthlist[0]['value']=this.rowList.insideAnum;
            this.monthlist[1]['value']=this.rowList.insideBnum;
            this.monthlist[2]['value']=this.rowList.insideCnum;
            this.monthlist[3]['value']=this.rowList.outsideAnum;
            this.monthlist[4]['value']=this.rowList.outsideBnum;
            this.monthlist[5]['value']=this.rowList.outsideCnum;
            this.monthlist[6]['value']=this.rowList.evaluationdeduct;
            this.monthlist[7]['value']=this.rowList.modulation;
            this.monthlist[8]['value']=this.rowList.evaluationscore;
            this.monthlist[9]['value']=this.rowList.ranking
            this.monthlist[10]['value']=this.rowList.penalty
            this.monthlist[11]['value']=this.rowList.compulsivenum
            this.monthlist[13]['value']=this.rowList.penaltyamount
            this.monthlist[14]['value']=this.rowList.penalcate[16]
            this.monthlist[15]['value']=this.rowList.penalcate[15]
            this.monthlist[16]['value']=this.rowList.penalcate[17]
            this.monthlist[17]['value']=this.rowList.penalcate[18]
            this.monthlist[18]['value']=this.rowList.penalcate[19]
            this.monthlist[19]['value']=this.rowList.penalcate[20]
            this.monthlist[20]['value']=this.rowList.accidentnum
            // console.log(this.rowList)
              }, response => {
                console.log('error')
              })
        },


          // 解析数据
          handleTableArr(data) {
            let arr = [];
            for (let i = 0; i < data.length; i++) {
              let category_info = data[i];
              let activityPointsDOS = category_info["activityPointsDOS"];

              let count = 0;
              for (let j = 0; j < activityPointsDOS.length; j++){

                let activityTwo_info = activityPointsDOS[j];
                let activityTwo_activityPointsDOS = activityPointsDOS[j]["activityPointsDOS"];
                for (let k = 0; k < activityTwo_activityPointsDOS.length; k++){
                  count ++;
                      let info = {
                         // 确定每天数据的 合并行的数量
                          span_num: k === 0 ? activityTwo_activityPointsDOS.length : 0,
                          value:activityTwo_activityPointsDOS[k]["value"],
                          message:activityTwo_activityPointsDOS[k]["message"],
                          activityName:activityTwo_info["activityName"],
                          category: category_info["category"],
                      };
                      // console.log(info)
                      arr.push(info);
                }
              }
    // 第一列的合并数量, 赋值给每个大项的第一个单元格. 比如合格积分要合并 8 行.
              arr[arr.length - count]["count"] = count;
            }
            return arr;
          },
        // 表格合并的方法
          arraySpanMethod({row, column, rowIndex, columnIndex}) {
            // 第一列
            if (columnIndex === 0){
              if (row.count){
                return [row.count, 1]
              }else{
                return [0, 0]
              }
            }
          // 第二列
             if (columnIndex === 1){

                if (row.span_num > 0 ){
                  return [row.span_num, 1]
                }else{
                  return [0, 0]
                }
              }
          }
        }


     }
</script>

<style scoped>
.dashboard-editor-container {
  padding: 10px;
  background-color: rgb(240, 242, 245);

}
  div.el-row {
    margin-bottom: 10px;
  }
  .bg-purple-dark {
    background: #417690;
  }
  .grid-content {
    /*border-radius: 4px;*/
    min-height: 36px;
  }
 .grid-content-head {
    /*border-radius: 4px;*/
    min-height: 100px;
  }


</style>
