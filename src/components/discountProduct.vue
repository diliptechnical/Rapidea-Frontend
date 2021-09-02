<template>
  <div id="category">
    <div class="product-items" v-for="discount in discountData" :key="discount.id">
      <div class="product-block product-thumb transition">
        <div class="product-block-inner">
          <div class="image">
            <router-link :to="{ name: 'productDetail', params: { Id: discount.id }}">
              <img
                :src="$root.URL_IMAGES+'/product/'+discount.image"
                title="Commodi Consequatur"
                alt="Commodi Consequatur"
                class="img-responsive reg-image"
              />
            </router-link>
            <span class="saleicon sale">Sale</span>
            <div class="percentsaving"></div>
            <div class="button-group">
              <button
                class="wishlist"
                type="button"
                data-toggle="tooltip"
                title="Add to Wish List "
                @click="whishList(discount.id);"
              >
                <i class="fa fa-heart"></i>
              </button>
              <button
                type="button"
                class="addtocart"
                @click="add_to_cart(discount.id,discount.name,'1',discount.selling_cost)"
              >
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
          <div class="product-details">
            <div class="caption">
              <h4>
                <router-link
                  :to="{ name: 'productDetail', params: { Id: discount.id }}"
                >{{discount.name}}</router-link>
              </h4>
              <p class="price">
                <span class="price-new" >Sale Price : <i class="fa fa-rupee" style="font-size:18px"></i> {{discount.selling_cost}}</span>
                <br />
                <strike class="price-old">Market Price : <i class="fa fa-rupee" style="font-size:18px"></i>{{discount.purchese_cost}}</strike>
              </p>
              <div class="rating">
                <starRating
                  :rating="discount.rating"
                ></starRating>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import starRating from "@/components/starRating";
export default {
  props: ["discountData"],
  components: {
    // carousels
    starRating,
  },
  data() {
    return {
      uid: "",
      pid: "",
    };
  },
  mounted() {
    this.uid = localStorage.getItem("user");
    this.productData();
  },
  methods: {
    productData() {
      const axios = require("axios");
      var self = this;
      axios
        .get(this.$root.URL_ROOT + "api.php?type=feature_category")
        .then(function (response) {
          self.fdata = response.data.data;
          // console.log(response.data.data)
        });
    },
  },
};
</script>
<style scoped>
.owl-carousel {
  display: block;
}
</style>
