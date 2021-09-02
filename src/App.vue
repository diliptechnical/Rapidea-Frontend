<template>
  <div id="app">
  <router-view/>
  </div>
</template>
<script>

 import axios from 'axios'
 require('./assets/css/bootstrap.min.css')
 require('./assets/css/style.css')
export default {
  //mixins: [Cart],
  "rules": {
    "no-mixed-spaces-and-tabs": 0, // disable rule
  },
data () {
  return {
    filterProduct: [],
    menus: {},
    chknav:this.$route.name,
    ip_address: JSON.parse(localStorage.getItem('ip_address'))
  }
 },
 mounted () {
   this.goToTop ()
   this.getConfig()
   this.myIpData()
   this.ip_address =JSON.parse(localStorage.getItem('ip_address'))
   this.uid = JSON.parse(localStorage.getItem('user'))
    // console.log(this.ip_address)
 },
 methods: {
    async getConfig () {
      const response = await axios.get(this.$root.URL_ROOT + 'api.php?type=linksdetails')
      this.$store.commit('getConfig', response.data.data)
      // console.log(response.data.data)
    },
    goToTop () {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    },
     search(){
            // alert(this.q)
            var ev = this
            var key = this.q
             axios.post(this.$root.URL_ROOT + 'api.php?type=search', {
                 key: this.q,
                 }).then(function (response) {
                  ev.filterProduct = response.data.data
                 ev.$router.push({ name: 'Product' , params: { name: key } });
              console.log('searchingData')
                 console.log(response.data)
              
            })
          },
    myIpData () {
      var ip_address = JSON.parse(localStorage.getItem('ip_address'))

      if (ip_address == null) {
        var min = 10000000000
        var max = 99999999999
        var num = Math.floor(Math.random() * (max - min + 1)) + min
        localStorage.setItem('ip_address', JSON.stringify(num))
        /// console.log("new ip");
        // console.log(num);
      } else {
        // console.log("old ip(local storage)")
        // console.log(ip_address)
      }
    }
  }
 }
</script>
<style>
/* @import url(./assets/css/bootstrap.min.css); */
@import url(https://fonts.googleapis.com/css?family=PT+Sans:400,700);
@import url(https://fonts.googleapis.com/css?family=Oswald:300,400,500,600,700);
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css);
.footer-bg{background:#000;}
.product-carousel{display:block!important;}
#blog-carousel, #content #blog-grid{display:none;}
.blog-item{display:none;}
.section-gap{
  padding: 50px 0 !important;
}
 #content .links a span.link-item {
    display: block;
    height: 100%;
    background: #fdfdfd;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -khtml-border-radius: 5px;
    -moz-border-radius: 5px;
    -o-border-radius: 5px;
}
#content .links a {
    text-align: center;
    display: inline-block;
    font-size: 16px;
    color: #000;
    padding: 0 .9375rem;
    margin-bottom: 1.875rem;
    text-decoration: none;
}
#content .links a:hover {
    color: #f9707a;

}
#content .links a:hover span.link-item {
    border: 1px solid #f9707a;

}
#content .links a i {
    display: block;
    font-size: 40px;
    width: 100%;
    color: #414141;
    padding-bottom: 55px;
}
#content .links a:hover i {
    color: #f9707a;
}
.user-info, #_mobile_user_info .user-info {
    background: #fff none repeat scroll 0 0;
    border: 1px solid #ddd;
    display: none;
    margin: 0;
    min-width: 190px;
    padding: 15px;
    position: absolute;
    right: 0;
    text-align: left;
    top: 34px;
    z-index: 9;
    font-size: 13px;
}
.user-info a {
    clear: both;
    float: left;
    font-size: 12px;
    color: #656565;
    margin-bottom: 0;
    margin-right: 0;
    padding: 5px 0;
    text-transform: capitalize;
    width: 100%;
}
#content-wrapper {
  overflow: unset !important;
}
</style>
