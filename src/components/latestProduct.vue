<template>
  <div class="box-product product-carousel" id="tabbestseller-carousel">
    <ul>
      <li class="double-slideitem slider-item" v-for="latest in latestData" :key="latest.id">
        <router-link :to="{ name: 'productDetail', params: { Id: latest.id }}">
          <ul>
            <div class="product-block product-thumb transition">
              <div class="product-block-inner">
                <div class="image">
                  <router-link :to="{ name: 'productDetail', params: { Id: latest.id }}">
                    <img
                      :src="$root.URL_IMAGES+'/product/'+latest.image"
                      title="Accusantium Doloremque"
                      alt="Accusantium Doloremque"
                      class="img-responsive reg-image"
                    />
                    <!--<img class="img-responsive hover-image" :src="$root.URL_IMAGES+'/product/'+latest.image" title="Accusantium Doloremque" alt="Accusantium Doloremque"/>-->
                  </router-link>
                  <div class="button-group">
                    <button
                      class="wishlist"
                      type="button"
                      data-toggle="tooltip"
                      title="Add to Wish List "
                      @click="whishList(latest.id);"
                    >
                      <i class="fa fa-heart"></i>
                    </button>
                    <button
                      type="button"
                      class="addtocart"
                      @click="add_to_cart(latest.id,latest.name,'1',latest.selling_cost)"
                    >
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
                <div class="product-details">
                  <div class="caption">
                    <h4>
                      <a href="#">{{latest.name}}</a>
                    </h4>
                    <p class="price">Sale Price :
                      <i class="fa fa-rupee" style="font-size:18px"></i>
                      {{latest.selling_cost}}</p>
                      <strike
                        class="price-old"
                      > Market Price :<i class="fa fa-rupee" style="font-size:18px"></i>{{latest.purchese_cost}}</strike>
                    
                    <div class="rating">
                      <starRating :rating="latest.rating"></starRating>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ul>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import starRating from "@/components/starRating";
export default {
  props: ["latestData"],
  components: {
    // carousel
    starRating,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style scoped>
.owl-carousel {
  display: block;
}
.product-carousel {
  display: block !important;
}
</style>