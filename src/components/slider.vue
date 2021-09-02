<template>
  <div class="desc-direction">
   <div class="main-slider col-sm-9">
      <div class="swiper-viewport">
        <div id="slideshow0" class="swiper-container">
          <carousel
            v-if="showSlider"
            :autoplay="true"
            :items="1"
            :nav="false"
            id="carousel"
            class="owl-carousel main-slide"
          >
            <div
              class="swiper-wrapper item"
              v-for="item in result"
              :key="item.name"
            >
              <div class="swiper-slide text-center">
                <img
                  v-if="item.image"
                  :src="$root.URL_IMAGES + '/slider/' + item.image"
                  class="img-responsive"
                  :alt="item.name"
                /><br />
              </div>
            </div>
          </carousel>
          <template v-else>
           <vue-content-loading>
      <rect x="75" y="13" rx="4" ry="4" width="400" height="400" />
      </vue-content-loading>
          </template>
        </div>
        <div class="swiper-pagination slideshow0"></div>
        <div class="swiper-pager hide">
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>
    </div>
    <div class="advertise col-sm-3 col-xs-12">
      <div class="add banner-anchor">
        <div id="czbannercmsblock" class="block czbanners pd-0">
          <div class="czbanner_container container padding-0">
            <div class="cmsbanners">
              <div class="one-half cmsbanner-part1 width-100">
                <div class="cmsbanner-inner">
                  <div class="cmsbanner cmsbanner1">
                    <div class="cmsbanner-inner">
                      <a href="#" class="banner-anchor"
                        ><img :src="$store.state.config.slider_add_1"
                      /></a>
                      <div class="cmsbanner-text"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="one-half cmsbanner-part1  width-100">
                <div class="cmsbanner-inner">
                  <div class="cmsbanner cmsbanner1">
                    <div class="cmsbanner-inner">
                      <a href="#" class="banner-anchor"
                        ><img :src="$store.state.config.slider_add_2"
                      /></a>
                      <div class="cmsbanner-text"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="one-half cmsbanner-part1  width-100">
                <div class="cmsbanner-inner">
                  <div class="cmsbanner cmsbanner1">
                    <div class="cmsbanner-inner">
                      <a href="#" class="banner-anchor"
                        ><img :src="$store.state.config.slider_add_3"
                      /></a>
                      <div class="cmsbanner-text"></div>
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
</template>
<script>
import carousel from "vue-owl-carousel";
 import VueContentLoading from 'vue-content-loading';
export default {
    components: { carousel, VueContentLoading },
  data() {
    return {
      loading: true,
      showSlider: false,
      result: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      const axios = require("axios");
      var self = this;
      axios
        .get(this.$root.URL_ROOT + "api.php?type=slider")
        .then(function(response) {
          var data = response.data;
          self.result = data.data;
         self.showSlider = true;
        });
    },
  },
};
</script>
