<template>
<div class="product">
<navbar></navbar>
<div class="wrap-breadcrumb parallax-breadcrumb" style="background:url('https://www.swaracreations.mragank.com/api/uploads/category/df56aa6eb6f6b06531da22645d200fb4.jpg');background-size:contain;">
<div class="container"></div>
</div>
<div id="information-information" class="container">
  
  <div class="row">

<aside id="column-left" class="col-sm-3 hidden-xs side-menu-sticky">
<sidemenu></sidemenu>
</aside><div id="content" class="col-sm-9">
<h1 class="page-title"> TERMS & CONDITIONS </h1>
<div class="aboutus" v-html="pageData.pbody">
</div></div></div></div>
<footerbt />
</div>
</template>
<script>
import sidemenu from '@/components/sidemenu'
import navbar from '@/components/navbar'
import footerbt from '@/components/footer'
export default {
   props:["catedatas"],
   components: { navbar, footerbt, sidemenu},
    data () {
    return {
     pageData: [],
     fields: {
        type: 'update_profile',
        uid: '',
        fullname: '',
        mobile: '',
        address: '',
        Token: this.$root.auth
      }
    }
  },
 mounted () {
    this.uid = localStorage.getItem('user')
    this.pData()
    // console.log(this.this.$route.params)
  this.goToTop()
  },
  methods: {
    goToTop () {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    },
     pData () {
       var linkname = 'TermsConditions'
      const axios = require('axios')
      var self = this
      axios.post(this.$root.URL_ROOT + 'api.php?type=pageData', {linkname:linkname}).then(function (response) {
        var data = response.data
        self.pageData = data.data
        console.log(response.data.data)
      })
    }
  }
}
</script>
