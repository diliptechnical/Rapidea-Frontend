<template>
  <div>
    <div id="cztestimonialcmsblock">
      <div
        style="background:url(https://www.swaracreations.mragank.com/admin/uploads/media/warliborder.png);height: 72px;background-repeat: repeat-x;"
      ></div>
      <div class="parallax czparallax_1">
        <div class="testimonial_container container">
          <div class="testimonial_wrapper">
            <div class="testimonial-area" v-if="showTestimonial">
              <div class="customNavigation">
                <a class="btn prev cztestimonial_prev">prev</a>
                <a class="btn next cztestimonial_next">next</a>
              </div>
              <ul id="testimonial-carousel" class="products ">
                <carousel
                  v-if="showTestimonial"
                  :autoplay="true"
                  :items="1"
                  :nav="false"
                  id="carousel"
                  class="owl-carousel"
                >
                  <li
                    class="item"
                    v-for="test in testimonialData"
                    :key="test.id"
                  >
                    <div class="testimonial-item">
                      <div class="item cms_face">
                        <div class="testimonial-image">
                          <img :src="$root.URL_IMAGES + '/media/' + test.image"  alt="testimonial-user1" title="testimonial-user1" width="90" height="90" />
                        </div>
                        <div class="title">
                          <div class="name">
                            <a href="#"> {{ test.name }} </a>
                          </div>
                        </div>
                      </div>
                      <div class="product_inner_cms">
                        <div class="des">
                         {{test.content}}
                        </div>
                      </div>
                    </div>
                  </li>
                </carousel>
              </ul>
            </div>
   <template v-else> <SkeletonBox /> </template>
  </div>
        </div>
      </div>
      <div style="background:url(https://www.swaracreations.mragank.com/admin/uploads/media/warliborder.png);transform: rotate(180deg);height: 72px;background-repeat: repeat-x;"></div>
    </div>
  </div>
</template>
<script>
//import Skeleton from "vue-loading-skeleton";
import carousel from "vue-owl-carousel";
import SkeletonBox from '@/components/SkeletonBox.vue';
export default {
  components: {  carousel, SkeletonBox },
  data() {
    return {
      img: [],
      body: [],
      showTestimonial: false,
      testimonialData: [],
    };
  },
  mounted(){
      this.testimonial()
  } ,
  methods: {
    testimonial() {
      const axios = require("axios");
      var self = this;
      axios
        .get(this.$root.URL_ROOT + "api.php?type=testimonial")
        .then(function(response) {
          var data = response.data;
          if(data.status=='success'){
          self.showTestimonial = true
          self.testimonialData = data.data;
          // console.log(response.data.data)
          }
        });
    },
  },
};
</script>
