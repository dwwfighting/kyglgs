<template>
  <div>
     <row>
       <el-col :span="12">
     <div class="container">
        <div class="card">
            <div class="face face1">
                <div class="content">

                    <div class="icon">

                    </div>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>This is where I network and build my professional protfolio.</p>
                </div>
            </div>
        </div>

    </div>
       </el-col>
      <el-col :span="12">
     <div class="container">
        <div class="card">
            <div class="face face1">
                <div class="content">

                    <div class="icon">

                    </div>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>This is where I network and build my professional protfolio.</p>
                </div>
            </div>
        </div>

    </div>
       </el-col>
     </row>
  </div>
</template>

<script>
    export default {
        name: "issuesreportcard"
    }
</script>

<style lang="css" scoped>
/*body {*/
/*    margin: 0;*/
/*    padding: 0;*/
/*    min-height: 100vh;*/
/*    background: #333;*/
/*    display: flex;*/
/*    justify-content: center;*/
/*    align-items: center;*/
/*    font-family: sans-serif;*/
/*    background-color: #f1f1f1;*/
/*}*/

.container {
    width: 100%;
    height:100%;
    /*position: relative;*/
    display: flex;
    /*flex-wrap: wrap;*/
   /*flex-flow: row wrap;*/
    justify-content: space-between;
    /*top:0px;*/
    /*align-content: flex-start;*/
}

.container .card {
    position: relative;
    border-radius: 10px;
}

.container .card .icon {
    position: absolute;
    top: 0px;
    left: 0;
    width: 100%;
    height: 100%;
    background: #f00;
    transition: 0.7s;
    z-index: 2;
}

/*.container .card:nth-child(1) .icon {*/
/*    background: #e07768;*/
/*}*/
.container .card:nth-child(1) .icon {
    background: #4aada9;
}

.container .card:nth-child(2) .icon {
    background: #7c7c8f;
}

.container .card:nth-child(3) .icon {
    background: #ad0a1a;
}


/*.container .card .icon .fa {*/
/*    position: absolute;*/
/*    top: 50%;*/
/*    left: 50%;*/
/*    transform: translate(-50%, -50%);*/
/*    font-size: 80px;*/
/*    transition: 0.7s;*/
/*    color: #fff;*/
/*}*/

/*i {*/
/*    position: absolute;*/
/*    top: 50%;*/
/*    left: 50%;*/
/*    transform: translate(-50%, -50%);*/
/*    font-size: 80px;*/
/*    transition: 0.7s;*/
/*    color: #fff;*/
/*}*/

.container .card .face {
    width: 100%;
    height: 58px;
    transition: 0.8s;
}

.container .card .face.face1 {
    position: relative;
    /*background: #333;*/
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
    transform: translateY(0px);
}

.container .card:hover .face.face1{
    background: #ff0057;
    transform: translateY(0px);
}

.container .card .face.face1 .content {
    opacity: 1;
    transition: 0.5s;
}

.container .card:hover .face.face1 .content {
    opacity: 1;
}



.container .card .face.face2 {
    position: relative;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px;
    /*top:-100px;*/
    box-sizing: border-box;
    /*box-shadow: 0 20px 50px rgba(0,0,0,0.3);*/
    transform: translateY(-48px);
    z-index: 4;
}

.container .card:hover .face.face2{
    transform: translateY(0px);
}

.container .card .face.face2 .content p {
    margin: 0;
    padding: 0;
    text-align: center;
    color: #414141;
}


</style>
