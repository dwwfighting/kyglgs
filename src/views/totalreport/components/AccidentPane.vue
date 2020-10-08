<template>

        <el-table  :data="accident1"   border  style="width: 100%"  >
        <el-table-column prop="accidentserial" align="center" label="事故序号" width="125" ></el-table-column>
        <el-table-column prop="accidentcom" label="所属公司" align="center" width="105"></el-table-column>
        <el-table-column prop="accidentdepment" label="所属部门" align="center" width="90"></el-table-column>
        <el-table-column prop="accidentdate" show-overflow-tooltip  label="发生时间"  align="center" width="125"></el-table-column>
        <el-table-column prop="accidentarea" show-overflow-tooltip label="事故地点" align="center" width="140"></el-table-column>
        <el-table-column prop="wounded" label="伤者" align="center" width="75" ></el-table-column>
        <el-table-column prop="wounderage" label="伤者年龄"  align="center" width="80" ></el-table-column>
        <el-table-column prop="accidentdetail" show-overflow-tooltip label="事故经过" align="center" ></el-table-column>
        <el-table-column prop="injuredpart" show-overflow-tooltip label="受伤部位" align="center" width="106"></el-table-column>
        <el-table-column prop="injuredclass" label="伤情" align="center" width="70"></el-table-column>
        <el-table-column prop="accidentcate" label="事故性质" align="center" width="75"></el-table-column>
        <el-table-column prop="mainreason" label="主要原因" align="center" width="106"></el-table-column>
        </el-table>
<!--      </div>-->



</template>

<script>
    export default {
        name: "AccidentPane",
        props: ['accident1'],
        data() {
          return {
            list:this.accident1,
          }
        },
        created() {
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>
