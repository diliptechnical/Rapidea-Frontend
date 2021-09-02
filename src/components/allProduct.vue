<template>
  <div id="allproduct">
    <!--<div v-if="!Allproducts">No Record Found</div>-->
    <div > 
      <div class="product-layout product-list col-xs-12" v-for="all in Allproducts" :key="all.id">
        <div class="product-block product-thumb">
          <div class="product-block-inner">
            <div class="image">
              <router-link :to="{ name: 'productDetail', params: { Id: all.id }}">
                <img
                  :src="$root.URL_IMAGES+'/product/'+all.front_image"
                  :title="all.name"
                  :alt="all.name"
                  class="img-responsive reg-image"
                />
              </router-link>
              <div class="button-group">
                <button
                  type="button"
                  class="wishlist"
                  data-toggle="tooltip"
                  title="Add to Wish List"
                  @click="whishList(all.id);"
                >
                  <i class="fa fa-heart"></i>
                </button>
                <div class="bottom-btn hide">
                  <button
                    type="button"
                    class="addtocart"
                    @click="add_to_cart(all.id,all.name,'1',all.selling_cost)"
                  >
                    <span>Add to Cart</span>
                  </button>
                  
                </div>
              </div>
            </div>
            <div class="product-details">
              <div class="caption">
                <h4>
                 <router-link :to="{ name: 'productDetail', params: { Id: all.id }}">{{all.name}}</router-link>
                </h4>
                <p class="desc" v-html="all.detail"></p>
                <p class="price">Sale Price :
                  <i class="fa fa-rupee" style="font-size:18px"></i> {{all.selling_cost}} </p>
                  <span class="price-tax">
                    <strike
                      class="price-old"
                    >Market Price <i class="fa fa-rupee" style="font-size:18px"></i>{{all.market_price}}</strike>
                  </span>
                <button
                  type="button"
                  class="addtocart hide"
                  @click="add_to_cart(all.id,all.name,'1',all.selling_cost)"
                >
                  <span>Add to Cart</span>
                </button>
                <router-link class="addtocart ml-1" :to="{ name: 'productDetail', params: { Id: all.id }}">
                <!-- <button
                  type="button"
                  class="addtocart ml-1"
                  @click="add_to_cart(prods.id,prods.name,'1',prods.selling_cost,1)"
                > -->
                  <span>Buy Now</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["Allproducts"],
  components: {
    // carousel
  },
  data() {
    return {
      size: [],
      color: [],
      colors: "",
      sizes: "",
    };
  },
  mounted() {
    // this.catData()
    // (this.filterProduct)
  },
  watch: {
    Allproducts: function (Allproducts) {
      // console.log(this.$route.params.linkname)
      this.Allproducts = Allproducts;
      // this.catData()
    },
  },
  methods: {
    getData(ids) {
      const axios = require("axios");
      var self = this;
      axios
        .get(this.$root.URL_ROOT + "api.php?type=products", { id: ids })
        .then(function (response) {
          var data = response.data;
          self.Allproducts = data.data;
        });
    },
  },
};
</script>
<style scoped>
.owl-carousel {
  display: block;
}
.product-attr {
  display: flex;
}
label {
  margin: 10px;
}

.product-carousel {
  display: block !important;
}
.quickbuy{width: 90px!important;
    background: #000!important;
    color: #fff!important;
    padding: 10px!important;
    margin: 9px 10px;
    height: 41px!important;}
</style>