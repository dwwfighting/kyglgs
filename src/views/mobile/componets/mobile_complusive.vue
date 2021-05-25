<template>
  <div>

    <div style="background-color: #08354b">

      <div id="container" class="body-container">
        <el-row>
          <el-col :span="24">
            <div class="xpanel-wrapper">
              <div class="xpanel">
                <Compulbar />
              </div>
            </div>
            <div class="xpanel-wrapper">
              <div class="xpanel">
                <compulsivetable />
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

  </div>

</template>

<script>
import Compulbar from '#/indexdatacharts/compulsivecharts/compulsivebar'
import compulsivetable from '#/indexdatacharts/compulsivecharts/compulsivetable'
import { get_complusives } from '@/api/complusive/complusive'
import axios from 'axios'
export default {
  name: 'Mobilecomplusive',
  components: {
    Compulbar,
    compulsivetable
  },
  data() {
    return {
    }
  },
  mounted() {
    this.initdata()
  },
  methods: {
    initdata() {
      axios.all([get_complusives(this.listQuery)])
        .then(axios.spread((complusives) => {
          this.$store.commit('basechartdata/init_complusives_data', complusives.data)
        }))
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
   @import "@/styles/datavisualization/visualization.scss";
  .nut-hor-list {
    .nut-hor-list-item {
      width:100px;
      padding-left: 5px;
    }
  }
.body-container{
  margin: 0 10px 45px 10px;
  z-index: 1;
}

  .flex-content {
    /*line-height: 45px;*/
    i {
      width: 100%;
      height: 100%;
    }
  }

</style>
