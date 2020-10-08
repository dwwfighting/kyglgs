<template>
        <el-table  :data="compulsive1"   border  style="width: 100%"  >
        <el-table-column prop="compulsiveserial" align="center" label="文书序号" width="130" ></el-table-column>
        <el-table-column prop="compulsivedepment" label="下发单位" align="center" width="110"></el-table-column>
        <el-table-column prop="compulsivecom" label="被强制公司" align="center" width="130"></el-table-column>
        <el-table-column prop="compulsivedate" label="下发日期"  align="center" width="125"></el-table-column>
        <el-table-column prop="compulsivereason" show-overflow-tooltip label="被强制原因" align="center" width="500"></el-table-column>
        <el-table-column prop="reformresult" label="整改结果" align="center" width="120" ></el-table-column>
        <el-table-column prop="review" label="复查结果"  align="center" width="120" ></el-table-column>
        <el-table-column prop="removeissue" label="是否销号" align="center" width="120"></el-table-column>
        <el-table-column prop="compulsiveremark" label="备注" align="center" width="106"></el-table-column>
        </el-table>
</template>

<script>
    export default {
        name: "CompuPane",
        props: ['compulsive1'],
        data() {
          return {
            list:this.compulsive1,
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
