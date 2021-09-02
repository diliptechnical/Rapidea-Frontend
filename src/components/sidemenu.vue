<template>
 <div id="sidemenu">
 <div class="box">
  <div class="box-heading categories"><span>Categories</span></div>
  <div class="box-content">
    <ul class="box-category treeview-list treeview">
       <li v-for="cate in categorieses" :key="cate.id"><router-link class="nav-link" :to="'product/'+cate.heading"> {{cate.heading}} </router-link>
      </li>
    </ul>	
  </div>
</div>
 <div class="box">
  <div class="box-heading">Information</div>
	<div class="list-group">
<router-link class="list-group-item" v-for="foot in footData" :key="foot.id" :to="foot.linkname"> {{foot.name}} </router-link>
</div>
</div>
</div>
</template>
<script>
import axios from 'axios'
export default {
  props:["productData"],
  components: {
  // carousel
  },
  data () {
    return {
    categorieses: [],
    footData: []
     // result: [],
     // showSlider: false
    }
  },
  mounted () {
    // this.getData()
    this.categories()
    this.footerData()
    // console.log(this.productData)
  },
  methods: {
    categories () {
        var ev=this;
         axios.get(this.$root.URL_ROOT + 'api.php?type=category')
          .then(function (response) {
        // console.log(response);
          ev.categorieses=response.data
          })

       },
       footerData () {
    const axios = require('axios')
    var self = this
    axios.get(this.$root.URL_ROOT + 'api.php?type=footer_menu').then(function (response) {
    self.footData = response.data.data
    // console.log(response)
    })
    }
  }
}
</script>
<style scoped>
.owl-carousel{
  display: block;
}
.product-carousel{display:block!important;}
</style>