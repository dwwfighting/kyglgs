<template>
    <el-table :data="penalty1"   show-summary    border  style="width: 100%"  >
    <el-table-column prop="penaltyserial" align="center" label="罚款序号" width="150" ></el-table-column>
    <el-table-column prop="penaltydepment" label="罚款处室" align="center" width="110"></el-table-column>
    <el-table-column prop="penaltycom" label="被罚款公司" align="center" width="110"></el-table-column>
    <el-table-column prop="checkdate" label="检查日期" align="center" width="95"></el-table-column>
    <el-table-column prop="penaltydate" label="罚款日期"  align="center" width="95"></el-table-column>
    <el-table-column prop="penaltyreason" show-overflow-tooltip label="罚款原因" align="center" width="700" ></el-table-column>
    <el-table-column prop="penaltyamount" label="罚款金额"  align="center" width="95" ></el-table-column>
    <el-table-column prop="penaltyremark" show-overflow-tooltip label="备注" align="center" ></el-table-column>
    </el-table>
</template>

<script>
    export default {
        name: "PenaPane",
        props: ['penalty1'],
        data() {
          return {
            list:this.penalty1
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
