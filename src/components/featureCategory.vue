<template>
  <div id="category">
    <carousels :autoplay="true" :items="4" id="carousel" class="owl-carousel">
        <div class="category_item item col-sm-4" v-for="item in cdata" :key="item.id">
        
          <router-link :to="'/product/'+item.heading">
            <div class="cate_image" style="background:url(https://www.swaracreations.mragank.com/admin/uploads/media/cbg.png);background-repeat: repeat;background-size: cover;">
            
              <div class="cate-inner"><img :src="$root.URL_IMAGES+'/category/'+item.image" class="img-responsive" alt="category-icon1.png"></div>
            </div>
            <div class="cate-details">
              <div class="ctegory-title"> {{item.heading}} </div>
              <ul class="category-names" :v-html="item.pbody">
              </ul>
            </div>
          </router-link>
        </div>
    </carousels>
  </div>
</template>
<script>
import carousels from 'vue-owl-carousel'
// import axios from 'axios'
export default {
  props: ['cdata'],
  components: { 
  carousels
},
  data () {
    return {
    }
  },
  mounted () {
    this.productData()
    // console.log(this.cdata)
},
  methods: {
    productData () {
    const axios = require('axios')
    var self = this
    axios.get(this.$root.URL_ROOT + 'api.php?type=feature_category').then(function (response) {
    self.fdata = response.data.data
    // console.log(response.data.data)
    })
    }
  }
}
</script>
<style scoped>
.owl-carousel{
  display: block;
}
#czcategorylistblock .category_lists .category_item .cate_image img{height:260px;}
</style>
