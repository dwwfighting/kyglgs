<template>
  <div class="analysiscontainer">

    <el-row v-if="superchecknum!=0&superchecknum!=''">
      <el-row >
        <div class="analysistable">
          <el-row>
            <p><span class="course-preview-detail">时间段</span>{{starttime}}</p>
          </el-row>
          <el-row :gutter="6">
            <el-col :lg="24" :md="24" :xl="12" :sm="24" :xs="24"  >
              <div class="courses-container">
                <div><p style="font-size: 0.8em; letter-spacing: 5px;font-weight: 400;margin: 0 auto;color:#000000; padding: 3px 0 0">上级检查次数</p></div>
                <div class="course">
                  <div class="course-preview">
                    <h6><span class="course-preview-detail">上级共检查</span><span class="course-preview-num">{{superchecknum}}</span></h6>
                    <h6 v-for="(index,value) in supercheckcatnum"><span class="course-preview-detail">{{value}}</span><span class="course-preview-num">{{index}}</span></h6>

                    <el-button class="sub2" size="mini">检查频率</el-button>
  <!--                  <el-button class="sub2" size="mini">月频率</el-button>-->
  <!--                  <el-button class="sub2" size="mini">季频率</el-button>-->
  <!--                  <el-button class="sub2" size="mini">年频率</el-button>-->
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :lg="24" :md="24" :xl="12" :sm="24" :xs="24">
              <div class="courses-container">
                <div class="course">
                  <table class="responsive-table" >
                      <caption>上级检查统计</caption>
                      <thead>
                        <tr>
                          <th scope="col">上级单位名称</th>
                          <th scope="col">义棠</th>
                          <th scope="col">倡源</th>
                          <th scope="col">城峰</th>
                          <th scope="col">青云</th>
                          <th scope="col">小计</th>
                        </tr>
                      </thead>
                      <tbody >
                        <tr v-for="(index,value) in superdetail">
                          <td>{{ index.supercheckunit__superiororgname}}</td>
                          <td >{{index.义棠煤业公司}}</td>
                          <td >{{index.倡源煤业公司}}</td>
                          <td >{{index.城峰煤业公司}}</td>
                          <td >{{index.青云煤业公司}}</td>
                          <td >{{index.All}}</td>
                        </tr>
                      </tbody>
                    </table>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="analysischarts">
          <el-row :gutter="6">
            <el-col :span="12">
               <issues v-if="echarshow"/>
            </el-col>
            <el-col :span="12">
               <issues v-if="echarshow"/>
            </el-col>
          </el-row>
        </div>

      </el-row>
    </el-row>


    <el-row>
      <el-row >
        <el-row>
          <p style="text-align:center;background: white;padding: 3px 0;">时间段：</p>
        </el-row>
        <el-row>
        <el-col :span="12">
          <div class="courses-container">
            <div class="course">
              <div class="course-preview">
                <h6><span class="course-preview-detail">处室共检查</span><span class="course-preview-num">{{departchecknum}}</span></h6>
                <h6  v-for="(index,value) in departcheckcatnum"><span class="course-preview-detail">{{value}}</span><span class="course-preview-num">{{index}}</span></h6>
                <el-button class="sub2" size="mini">月频率</el-button>
                <el-button class="sub2" size="mini">周频率</el-button>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="courses-container">
            <div class="course">
              <div class="course-preview">
                <h6>上级检查次数{{}}</h6>
                <h6>介休市{{}}</h6>
                <h6>晋中市{{}}</h6>
                <h6>山西省{{}}</h6>

                <el-button class="sub2" size="mini">按月</el-button>
                <el-button class="sub2" size="mini">按周</el-button>
              </div>
              <!--        <div class="course-info">-->
              <!--          <div class="progress-container">-->
              <!--            <div class="progress"></div>-->
              <!--            <span class="progress-text">-->
              <!--              6/9 Challenges-->
              <!--            </span>-->
              <!--          </div>-->
              <!--          <h6>Chapter 4</h6>-->
              <!--          <h2>Callbacks & Closures</h2>-->

              <!--        </div>-->
            </div>
          </div>
        </el-col>
      </el-row>
      </el-row>
    </el-row>
  </div>
</template>

<script>

 import issues from './issuesreportsstatisticscharts/issues'
  export default {
    name: "issuesreportstatistics",
    props:['departcheckcatnum','departchecknum','starttime','supercheckcatnum','superchecknum','superdetail'],
    components:{issues},
    data(){
      return{
        timerange:'',
        echarshow:true,
        // superchecknum:'',
      }
    },
    created() {

    },
    methods: {
      huxingW() {
      this.$nextTick(function() {
        // this.superchecknum=this.superchecknum
        // this.timerange=this.statisdata
      });

    }},
     watch: {
       superchecknum() { // 接收父组件传来的参数名
         this.huxingW();
       }
     }


    }
</script>

<style lang="scss" scoped>
@import "../../../styles/issuesreport/css/issuesreportstatistics";

</style>
