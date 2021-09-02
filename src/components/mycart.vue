<template>
  <div id="mycart" class="mob-mycart mob-nav">
    <div class="head-right-bottom">
      <div class="header-cart">
        <div id="cart" class="btn-group btn-block">
           <router-link
                    :to="{ name: 'cart' }"
                    ><!---data-toggle="dropdown"----->
          <span class="cart_heading" >Shopping Cart</span>
          </router-link>
           <!----- v-on:click="isActive = !isActives" data-toggle="dropdown"
            data-loading-text="Loading..."---->
            <router-link :to="{ name: 'cart' }" class="shop-cart">
           <button
            type="button"
           
            class="btn btn-inverse btn-block btn-lg dropdown-toggle"
          >
            <i class="fa fa-shopping-cart"></i>
            <span id="cart-total">
              {{ cartCount.count }} item(s) -
              <i class="fa fa-rupee" style="font-size:18px"></i>
              <span v-if="couponData">{{ cartCount.total - couponData }}</span>
              <span v-else>{{ cartCount.total }}</span> </span
            ><span id="cart-total-mobile">0</span>
          </button>
          </router-link>

          <div class="text-center" v-if="!cartCount.count"></div>
         <!-- <ul
            class="dropdown-menu pull-right cart-menu"
            v-else
            :class="{ dropdownShow: isActives }"
          >
            <li>
              <table class="table table-striped">
                <tbody>
                  <tr v-for="(cards, key) in cartCount.data" :key="key">
                    <td class="text-center tdd">
                      <a href="#"
                        ><img
                          :src="
                            $root.URL_IMAGES + '/product/' + cards.front_image
                          "
                          alt="Commodi Consequatur"
                          title="Commodi Consequatur"
                          class="img-thumbnail"
                          width="50"
                      /></a>
                    </td>
                    <td class="text-left tdd">
                      <a href="#"> {{ cards.name }} </a>
                    </td>
                    <td class="text-right tdd">x {{ cards.qty }}</td>
                    <td class="text-right tdd" v-if="cartShow">
                      <i class="fa fa-rupee" style="font-size:18px"></i>
                      {{ cards.total_rate }}
                    </td>
                    <td class="text-center tdd">
                      <button
                        type="button"
                        @click="delete_cart(cards.id)"
                        title="Remove"
                        class="btn btn-danger btn-xs"
                      >
                        <i class="fa fa-times"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </li>
            <li>
              <div>
                <table class="table table-bordered">
                  <tbody>
                    <tr>
                      <td class="text-right"><strong>Sub-Total</strong></td>
                      <td class="text-right">
                        <i class="fa fa-rupee" style="font-size:18px"></i>
                        {{ cartCount.total }}
                      </td>
                    </tr>
                    <tr v-if="couponData.length">
                      <td class="text-right"><strong>Discount</strong></td>
                      <td class="text-right">
                        <i class="fa fa-rupee" style="font-size:18px"></i>
                        {{ couponData }}
                      </td>
                    </tr>
                    <tr>
                      <td class="text-right"><strong>Total</strong></td>
                      <td class="text-right">
                        <span v-if="couponData"
                          ><i class="fa fa-rupee" style="font-size:18px"></i>
                          {{ cartCount.total - couponData }}</span
                        >
                        <span v-else>{{ cartCount.total }}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p class="text-right button-container">
                  <router-link
                    class="addtocart btn btn-primary"
                    :to="{ name: 'cart' }"
                    ><strong> View Cart</strong></router-link
                  >&nbsp;&nbsp;&nbsp;
                  <router-link
                    class="checkout btn btn-primary"
                    :to="{ name: 'checkout' }"
                    ><strong> Checkout</strong></router-link
                  >
                </p>
              </div>
            </li>
          </ul>-->
        </div>
      </div>
    </div>
    <div class="dropdown myaccount">
      <a
        href="#"
        title="My Account"
        class="dropdown-toggle"
        data-toggle="dropdown"
        v-on:click="isAct = !isActi"
      >
        <span class="hidden-xs hidden-sm hidden-md" v-if="!uid"
          >My Account</span
        >
        <span class="box-sub-heading" v-if="!uid">Get Option Here</span>
        <span class="hidden-xs hidden-sm hidden-md" v-if="uid">
          {{ fname }}
        </span>
        <i class="fa fa-angle-down" aria-hidden="true"></i
      ></a>
      <ul
        class="dropdown-menu dropdown-menu-right myaccount-menu"
        :class="{ dropdownShow: isActi }"
      >
        <li>
          <router-link to="/myaccount" v-if="uid"> My Account</router-link>
        </li>
        <!--<li> <router-link  to='/registration' v-if="!uid"> Register</router-link></li>-->
        <li>
          <router-link to="/login" v-if="!uid">Login / Register</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'orderDetail' }">Track Order</router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'wishlist' }"
            id="wishlist-total"
            title="Wish List"
            >Wish List ( {{ wish.count }} )</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'cart' }" title="Shopping Cart"
            >Shopping Cart</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'checkout' }" title="Checkout"
            >Checkout</router-link
          >
        </li>
        <li>
          <a href="#" @click="logout" title="Checkout" v-if="uid">Logout</a>
        </li>
        <div class="lang-curr">
          <div class="pull-left">
            <form
              action=""
              method="post"
              enctype="multipart/form-data"
              id="form-language"
            >
              <div class="btn-group"></div>
            </form>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>
<script>
import Cart from "../mixins/cart";
import axios from "axios";
export default {
  mixins: [Cart],
  // props: ["wish"],
  components: {
    // carousel
  },
  data() {
    return {
      // result: [],
      // showSlider: false
      uid: "",
      fname: "",
      cartCount: [],
      isActi: false,
      isActives: false,
      isActive: false,
      isAct: false,
      fields: {
        type: "nav",
        uid: "",
        fullname: "",
        mobile: "",
        address: "",
        Token: this.$root.auth,
      },
    };
  },
  mounted() {
    this.uid = localStorage.getItem("user");
    this.loginDorp();
    this.getUserDetail();
    // this.getCart();
    // this.getCartsss()
    // console.log(this.wish)
  },
  watch: {
    // cartCount: function(cartCount) {
    // this.cartCount = cartCount;
    // // this.getCart();
    // // this.whichCount()
    // },
  },
  methods: {
    getUserDetail() {
      var self = this;
      axios({
        method: "POST",
        url: this.$root.URL_ROOT + "api.php",
        data: { type: "getUserDetail", uid: this.uid },
      }).then(function(response) {
        var data = response.data;
        self.fname = data.fullname;
        // console.log(data)
      });
    },
    loginDorp(dropdownShow) {
      // alert(dropdownShow)
      if (dropdownShow == false) {
        this.dropdownShow = true;
      } else {
        dropdownShow = false;
      }
    },
    logout() {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("latitude");
      localStorage.removeItem("longitude");
      this.$router.go("/");
      localStorage.removeItem("isAdmin");
    },
  },
};
</script>
<style scoped>
.shop-cart{
    position: relative;
    top: 5px;
    right: 10px;}
.owl-carousel {
  display: block;
}
.dropdownShow {
  display: block !important;
}
.product-carousel {
  display: block !important;
}
header .dropdown.myaccount > a {
  height: 40px;
}
#cart .dropdown-menu .img-thumbnail {
  width: 30px;
}
</style>
