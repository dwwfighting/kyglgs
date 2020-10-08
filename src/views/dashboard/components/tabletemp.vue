<template>
  <div>

    <div class="container">

      <div class="head">


      </div>
      <div class="chartsbody">
        <div class="chartscontainer">
          <h1>2020年1-3季度安全生产标准化管理体系工作考核汇总</h1>
          <el-table :data="tableData"
                  :header-cell-style="{background:'#34495e',color:'#ccd1cf'}"
                  :cell-style="{padding:0+'px',fontsize:18+'px'}"
                  :row-style="{height:38+'px'}"style="width: 100%">
            <el-table-column
              prop="com"
              label="单位"
              width="">
            </el-table-column>
            <el-table-column label="一季度考核">
              <el-table-column
                prop="onescore"
                label="考核得分"
                width="">
              </el-table-column>

              <el-table-column
                prop="onedengji"
                label="等级"
                width="">
              </el-table-column>
              <el-table-column
                prop="onejiangli"
                label="奖励金额（万元）"
                width="">
              </el-table-column>
              <el-table-column
                prop="onechufa"
                label="处罚金额（万元）"
                width="">
              </el-table-column>

            </el-table-column>

            <el-table-column label="二季度考核">
              <el-table-column
                prop="secondscore"
                label="考核得分"
                width="">
              </el-table-column>

              <el-table-column
                prop="seconddengji"
                label="等级"
                width="">
              </el-table-column>
              <el-table-column
                prop="secondjiangli"
                label="奖励金额（万元）"
                width="">
              </el-table-column>
              <el-table-column
                prop="secondchufa"
                label="处罚金额（万元）"
                width="">
              </el-table-column>





            </el-table-column>

            <el-table-column label="三季度考核">
              <el-table-column
                prop="thirdscore"
                label="考核得分"
                width="">
              </el-table-column>

              <el-table-column
                prop="thirddengji"
                label="等级"
                width="">
              </el-table-column>
              <el-table-column
                prop="thirdjiangli"
                label="奖励金额（万元）"
                width="">
              </el-table-column>
              <el-table-column
                prop="thirdchufa"
                label="处罚金额（万元）"
                width="">
              </el-table-column>

            </el-table-column>
          </el-table>

        </div>
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    name: "tabletemp",
    data() {
      return {
        tableData: [{
          com: '倡源公司',
          onescore: '91.55',
          onedengji:'一级',
          onejiangli: '/',
          onechufa: '/',
          secondscore: '91.27',
          seconddengji:'一级',
          secondjiangli: '10',
          secondchufa: '/',
          thirdscore: '91.36',
          thirddengji:'一级',
          thirdjiangli: '10',
          thirdchufa: '/',
        },

          {
          com: '义煤公司',
          onescore: '90.33',
          onedengji:'二级（机电、运输专业不达标）',
          onejiangli: '/',
          onechufa: '/',
          secondscore: '91.28',
          seconddengji:'一级',
          secondjiangli: '12',
          secondchufa: '/',
          thirdscore: '91.1',
          thirddengji:'一级',
          thirdjiangli: '12',
          thirdchufa: '/',
        },

          {
          com: '城峰公司',
          onescore: '86.95',
          onedengji:'二级',
          onejiangli: '/',
          onechufa: '/',
          secondscore: '87',
          seconddengji:'二级',
          secondjiangli: '/',
          secondchufa: '/',
          thirdscore: '86.37',
          thirddengji:'二级',
          thirdjiangli: '/',
          thirdchufa: '/',
        },

         {
          com: '青云公司',
          onescore: '85.96',
          onedengji:'二级',
          onejiangli: '/',
          onechufa: '/',
          secondscore: '86.6',
          seconddengji:'二级',
          secondjiangli: '/',
          secondchufa: '/',
          thirdscore: '83.13',
          thirddengji:'三级',
          thirdjiangli: '/',
          thirdchufa: '5',
        },
         {
          com: '安益公司',
          onescore: '86.25',
          onedengji:'二级',
          onejiangli: '不考核',
          onechufa: '不考核',
          secondscore: '86.85',
          seconddengji:'二级',
          secondjiangli: '不考核',
          secondchufa: '不考核',
          thirdscore: '86.36',
          thirddengji:'二级',
          thirdjiangli: '不考核',
          thirdchufa: '不考核',
        },
          {
          com: '瑞东公司',
          onescore: '83.98',
          onedengji:'二级',
          onejiangli: '不考核',
          onechufa: '不考核',
          secondscore: '84.43',
          seconddengji:'二级',
          secondjiangli: '不考核',
          secondchufa: '不考核',
          thirdscore: '80.02',
          thirddengji:'三个专业不达标',
          thirdjiangli: '不考核',
          thirdchufa: '不考核',
        }






        ]


      }
    }
  }
</script>

<style scoped>
.chartscontainer h1{
  text-align: center;
  position: center;
}
</style>
