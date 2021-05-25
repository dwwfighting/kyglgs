<template>


<div class="createPost-container">

 <div class="createPost-main-container">

    <el-row :gutter="10">
      <el-col :span="8" style="">
    <div >

    <el-checkbox-group v-model="com" >
      <el-checkbox-button style="margin-top: 30px;margin-left: 25px" v-for="data in compony"
                          :label="data.id" @change="chooseItem(data.id)" :key="data.id">{{data.coalcompanyname}}</el-checkbox-button>
    </el-checkbox-group>
    </div>

    <div style="margin-top:30px;margin-left: 30px" >
        <span class="demonstration">选择考核月份</span>
        <el-date-picker
          v-model="month"
          type="month"
          placeholder="选择月"
          value-format="yyyy-MM"
          @change="sendhandle"
        >
        </el-date-picker>
    </div>

  </el-col>

  <el-col :span="16">
    <resultshow-pane  :createdata="createdata"/>
  </el-col>


</el-row>

 </div>
</div>
</template>

<script>
   import {companyList} from '@/api/indexrebuild/totalreport';
   import {createvaluation} from '@/api/createvaluation/createvaluation';
   import resultshowPane from "./components/ResultshowPane";
   import qs from 'qs'
   export default {
        name: "issuesreform",
        components: {resultshowPane},
        data() {
        return {
            loading: false,
            userListOptions: [],
            rules: {
              // image_uri: [{ validator: validateRequire }],
              // title: [{ validator: validateRequire }],
              // content: [{ validator: validateRequire }],
              // source_uri: [{ validator: validateSourceUri, trigger: 'blur' }]
            },
            com:[],
            month:'',
            tempRoute: {},
            compony:'',
            createdata:[],
            sizeForm: {
            },
          };
          },
      created() {
        companyList('my').then(response => {
          this.compony = response.data
        }, response => {
          console.log('error')
        })
      },
    computed: {
    },
    methods: {
      getRemoteUserList(query) {
      searchUser(query).then(response => {
        if (!response.data.items) return
        this.userListOptions = response.data.items.map(v => v.name)
      })
    },
     chooseItem(id){

      },
     sendhandle(){
       this.sizeForm['comlist']=JSON.stringify(this.com)
       console.log(this.sizeForm)
       this.sizeForm['monthsend']=this.month
       createvaluation(this.sizeForm).then(response => {
          this.createdata = response.data
         console.log(this.createdata)
          }, response => {
              console.log('error')
          })

       // console.log(this.sizeForm.comlist)
      },
      onSubmit() {
        // this.sizeForm.region=
      }}
    }
</script>

<style lang="scss" scoped>
  @import "@/styles/mixin.scss";
  @import "@/styles/issuesreform.scss";

.createPost-container {
  position: relative;

  .createPost-main-container  {
    padding: 10px 20px 15px 10px;
  }
  .word-counter {
    width: 40px;
    position: absolute;
    right: 10px;
    top: 0px;
  }
}

.article-textarea /deep/ {
  textarea {
    padding-right: 40px;
    resize: none;
    border: none;
    border-radius: 0px;
    border-bottom: 1px solid #bfcbd9;
  }
}
</style>
