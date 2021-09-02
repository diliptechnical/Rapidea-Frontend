<template>
<div class="login">
<navbar></navbar>
<div class="wrap-breadcrumb parallax-breadcrumb" style="background:url('https://www.swaracreations.mragank.com/api/uploads/category/df56aa6eb6f6b06531da22645d200fb4.jpg');background-size:contain;">
     <div class="container"></div>
</div>
<div id="account-login" class="container">
  <ul class="breadcrumb">
        <li><a href="#"><i class="fa fa-home"></i></a></li>
        <li><a href="#">Account</a></li>
        <li><a href="#">Login</a></li>
      </ul>
      <div class="row">
      <aside id="column-left" class="col-sm-3 hidden-xs side-menu-sticky">
    <sidemenu></sidemenu>
  </aside>

                <div id="content" class="col-sm-9">
      <div class="row">
       
        <div class="col-sm-12">
          <div class="well">
            <h3>Order Detail</h3>
            <p><strong>Enter Your Order Id</strong></p>
            <form action="#" method="post" enctype="multipart/form-data">
              <div class="form-group">
                <label class="control-label" for="input-email">Order Id</label>
                <input type="text" name="email" value=""  v-model="orderId"  placeholder="Enter Your Order Id" id="input-email" class="form-control" />
              </div>
              <input type="button" value="Go" @click="orderDetail" class="btn btn-primary" />
                          </form>
          </div>
          
        </div>
        <div class="col-sm-12" v-if="detailShow">
         <div class=" shadow userinfo" v-for="order in detail" :key="order.id">
          <div class="panel panel-default">
            <div class="panel-heading resume-heading">
              <div class="row">
                <div class="col-lg-12 mb-30">
                  <div class="col-lg-12 mb-30">
                    <h3 class="save-add od">Order Details</h3>
                    <div class="card input-shadow pdd-10">
                      <div class="container">
                        <div class="row">
                          <div class="col-sm-2"> <img :src="$root.URL_IMAGES+'/product/'+order.front_image" width="120" class="border cart-img"> </div>
                          <div class="col-sm-8">
                            <div class="d-flex">
                              <h3 class="product-headings font-14"> {{order.name}} </h3>
                            </div>
                            <div class="odetail"> 
                            <span>Color</span><span> {{order.pcolor}}</span><br />
                            <span>Size</span><span> {{order.psize}}</span><br />
                            <span>Quantity</span><span> {{order.qty}}</span><br />
                              <span>Delivery Address</span><span> {{order.add1}}</span><br />
                              <span>Mobile Number</span><span> {{order.mobile_no}}</span><br />
                              <span>City</span><span> {{order.city}}</span><br />
                              <span>State - PINCODE</span><span> {{order.c_state}} {{order.zipcode}}</span><br />
                            </div>
                          </div>
                          <div class="col-sm-2 mr-pd">
                            <div class="right-odetail"> <span>ORDER ID:</span><span># {{order.oid}} </span><br />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
      </div>
    </div>
<footerbt />
</div>
</template>
<script>
import axios from 'axios'
import sidemenu from '@/components/sidemenu'
import navbar from '@/components/navbar'
import footerbt from '@/components/footer'
export default {
  components: { navbar, footerbt, sidemenu },
  data () {
    return {
      username: '',
      password: '',
      role: '',
      orderId: '',
      token: localStorage.getItem('token'),
      msg: [],
      detailShow: false,
      detail: []
    }
  },
   mounted () {
    this.goToTop()
    //this.orderDetail()
   },
  methods: {
       goToTop () {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    },
    async orderDetail(){
      //alert(this.ids)
      var ev = this
      const response = await axios.post(this.$root.URL_ROOT + 'api.php?type=traceOrder', { id: this.orderId })
      ev.detail = response.data.data
      ev.detailShow = true
      console.log(response)
    },
  }
}
</script>
