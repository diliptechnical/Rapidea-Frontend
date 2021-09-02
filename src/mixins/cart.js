import axios from 'axios'
import Toasted from 'vue-toasted';
import Vue from 'vue'
Vue.use(Toasted)
export default {
    data() {
        return {
            isqtyCart: false,
            searchingVar: '',
            isCarLoad: false,
            cartCount: [],
            cartCountShow: false,
            qtyCart: [],
            couponData: [],
            cartShow: false,
            cartCounthide: false,
            key: null,
            showthis: false,
            wishlists: 0,
            wish: [],
            q:null
            //searchData: []
        }
    },
    mounted() {
        // this.getCart()
        // this.qtyCarts()
        //this.coupon()
       this.searching()
       //this.search()
    },
    watch: {
    /*    'cartCount': function (cartCount) {
         // console.log('dddddddddddd')
         // console.log(cartCount)
        this.cartCount = cartCount
        this.getCart()
        }
         cartCount(value){
          this.cartCount = value
          this.getCart()
         // this.delete_cart()
        }*/
      },
    methods: {
        getCart() {
            // this.isCarLoad = true;
            var self = this
            var ip_address = JSON.parse(localStorage.getItem('ip_address'))
            var user_session = JSON.parse(localStorage.getItem('user'))
            var uid = ''
            if (user_session != null) {
                uid = user_session
            } else {
                uid = null
            }
            axios({ method: 'POST', url: this.$root.URL_ROOT + 'api.php', data: { type: 'mycart', uid: uid, ip_address: ip_address } }).then(function(response) {
                console.log(response)
                var data = response.data
                if(data.status=='success'){
                    self.cartCount = data;
                    self.cartShow = true
                    self.cartCountShow = true
                }else{
                    self.cartCounthide = true
                    self.cartCountShow = false
                }
            })
        },
        whichCount() {
            var ev = this;
            var ip_address = JSON.parse(localStorage.getItem("ip_address"));
            var user_session = JSON.parse(localStorage.getItem("user"));
            var uid = "";
            if (user_session != null) {
              uid = user_session;
            } else {
              uid = null;
            }
            axios
              .post(this.$root.URL_ROOT + "api.php?type=whichCount", {
                uid: uid,
                ip_address: ip_address,
              })
              .then(function(response) {
                ev.wish = response.data;
                // console.log(response.data)
              });
          },
        update_cart(cid, pid, pname, qty, price, mode) {
            var ev = this
            var ip_address = JSON.parse(localStorage.getItem('ip_address'))
            var user_session = JSON.parse(localStorage.getItem('user'))
            var uid = ''
            if (user_session != null) {
                uid = user_session
            } else {
                uid = null
            }
            // console.log(pid+'//'+pname+'//'+qty)
            axios.post(this.$root.URL_ROOT + 'api.php?type=updatecart', {
                uid: uid,
                ip_address: ip_address,
                name: pname,
                pid: pid,
                qty: qty,
                price: price,
                mode: mode,
                cid: cid

            }).then(function(response) {
                // ev.sliderData = response.data.data
                if (response.data.status == 'success') {
                  //  ev.$toasted.global.success({ message: response.data.msg })
                        //ev.pop_success(response.data.data.msg)
                        //ev.myCart()
                    ev.getCart()
                }
                // console.log(response.data)
            })

            return 10;
        },
        add_to_cart(pid, pname, qty, price,quickbuy) {
            var ev = this
            var ip_address = JSON.parse(localStorage.getItem('ip_address'))
            var user_session = JSON.parse(localStorage.getItem('user'))
            var uid = ''
            if (user_session != null) {
                uid = user_session
            } else {
                uid = null
            }
            // console.log(pid+'//'+pname+'//'+qty)
            axios.post(this.$root.URL_ROOT + 'api.php?type=addtocart', {
                uid: uid,
                ip: ip_address,
                name: pname,
                pid: pid,
                qty: qty,
                amount:price,
                total_amount:price
            }).then(function(response) {
                console.log(response)
                if (response.data.status == 'success') {
                    ev.$toasted.global.success({ message: 'your product successfull add to cart' })
                    setTimeout(() => {
                       if(quickbuy==1){
                        ev.$router.push({ name: 'checkout' });
                       }
                       ev.getCart()
                       ev.qtyCarts()
                       ev.cartCount
                        //ev.getCart()
                        //ev.qtyCarts()
                    }, 3000);
                }
              //   console.log(response.data)
            })
        },
        coupon() {
            // alert('gh')
            const axios = require('axios')
            var self = this
            var ip_address = JSON.parse(localStorage.getItem('ip_address'))
            var user_session = JSON.parse(localStorage.getItem('user'))
            var uid = ''
            if (user_session != null) {
                uid = user_session
            } else {
                uid = ip_address
            }
            axios.post(this.$root.URL_ROOT + 'api.php?type=couponCheck', { uid: uid,coupon: self.coupons, amount: self.cartCount.total }).then(function(response) {
               console.log(response)
                if(response.data.status=='success'){
                self.couponData = response.data.discount
                self.$toasted.global.success({ message: response.data.msg })
                //  ev.getCart()
              } else {
                  //ev.cartShow = false
                  self.$toasted.global.error({ message: response.data.msg })

                    
                }
               // console.log(self.couponData)
            })
        },
        removeCoupon() {
            const axios = require('axios')
            var self = this
            var ip_address = JSON.parse(localStorage.getItem('ip_address'))
            var user_session = JSON.parse(localStorage.getItem('user'))
            var uid = ''
            if (user_session != null) {
                uid = user_session
            } else {
                uid = ip_address
            }
            axios.post(this.$root.URL_ROOT + 'api.php?type=couponRemove', { uid: uid}).then(function(response) {
                //self.couponData = response.data.discount
                if(response.status =="success"){
                    self.$toasted.global.success({ message: response.data })
                   // self.coupon()
                }
                //console.log(response)
               //self.coupon()
               //     window.location.href = 'cart';
            })
        },
        delete_cart(cid) {
            // alert(cid) 
            var ev = this
            var ip_address = JSON.parse(localStorage.getItem('ip_address'))
            var user_session = JSON.parse(localStorage.getItem('user'))
            var uid = ''
            if (user_session != null) {
                uid = user_session
            } else {
                uid = null
            }
            // alert(uid)
            axios.post(this.$root.URL_ROOT + 'api.php?type=delete_cart', {
                uid: uid,
                ip_address: ip_address,
                cid: cid

            }).then(function(response) {
                //  console.log(response)
                if (response.data.status == 'success') {
                    ev.$toasted.global.success({ message: response.data.msg })
                    ev.getCart()
                } else {
                    //ev.cartShow = false
                    ev.$toasted.global.error({ message: response.data.msg })
                }

            })
        },
        searching(){
            var key = this.q
            var self = this
            if(key == null || key == ''){
            // alert(key)
            //console.log('ifCondition'+' '+key)
            }else{
             //   alert(key)
                var searchingVar = null
            localStorage.setItem('searchingVar', JSON.stringify(key))
            //self.searchingVar = key
            console.log(searchingVar)
           // alert('this'+JSON.parse(localStorage.getItem('searchingVar')))
            self.$router.push({ name: 'Product' , params: { name: key } });
        }
    },
        /*search () {
             alert(this.q)
            var ev = this
            var key = this.q
             axios.post(this.$root.URL_ROOT + 'api.php?type=search', {
                 key: this.q,
                 }).then(function (response) {
                     var data = response.data
                  ev.searchData = data.data
                  if(data.status=='success'){
                 ev.$router.push({ name: 'Product' , params: { name: key } });
              console.log('searchingDatas')
                 console.log(ev.searchData)
                  }
            })
          },*/
        qtyCarts() {
           // if (this.isqtyCart)
             //   return;
            //this.isqtyCart = true;
            var self = this
            axios({
                method: 'POST',
                url: this.$root.URL_ROOT + 'api.php',
                data: {
                    type: 'qtyCart',
                    uid: self.uid,
                    ip_address: this.ip_address,
                    pid: self.ids
                }
            }).then(function(response) {
                var data = response.data
                self.qtyCart = data.data;
                // console.log(response)  
            })
        },
        whishList(pid) {
            var prodid = pid
            var ev = this
            var ip_address = JSON.parse(localStorage.getItem('ip_address'))
            var user_session = JSON.parse(localStorage.getItem('user'))
            var uid = ''
            if (user_session != null) {
                uid = user_session
            } else {
                uid = null
            }
            axios({ method: 'POST', url: this.$root.URL_ROOT + 'api.php', data: { type: 'whishlist', pid: prodid, uid: uid, ip_address: ip_address, } }).then(function(response) {
                // console.log(response)
                var data = response.data
                if (data.status === 'success') {
                    ev.$toasted.global.success({ message: data.msg })
                    if(data.value==1){
                        ev.wishlists = prodid
                    }else{
                        ev.wishlists = 0
                    }
                   
                } else {
                    ev.$toasted.global.error({ message: data.msg })
                }
            })
        }
    }
}