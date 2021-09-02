<template>
  <carousel
    :autoplay="false"
    :nav="false"
    :items="4"
    :responsive="{
      0: { items: 2 },
      576: { items: 2 },
      600: { items: 2 },
      768: { items: 2 },
      1200: { items: 4 },
      1500: { items: 4 },
    }"
  >
    <li class="item">
      <article
        class="product-miniature js-product-miniature"
      >
        <div class="thumbnail-container">
 <router-link :to="{ name: 'productDetail'}" class="thumbnail product-thumbnail">
            <img
              class="img_main"
              src="../assets/img/p/2/4/24-home_default.jpg"
              alt="Curabitur Dolor Nunc"
            />
            <img
              class="replace-2x img_1 img-responsive lazyload"
              data-src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/3/4/34-home_default.jpg"
              data-full-size-image-url="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/3/4/34-large_default.jpg"
              alt=""
            />
           
          </router-link>

          <ul class="product-flags">
            <li class="discount">-20%</li>
            <li class="new">New</li>
          </ul>
        </div>
        <div class="product-description">
          <div class="comments_note">
            <div class="star_content clearfix">
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
            </div>
            <!-- <span>%s Review(s)&nbsp</span> -->
          </div>

          <span class="h3 product-title" itemprop="name"
            ><a href="#"> {{productData}} </a></span
          >

          <div class="product-price-and-shipping">
            <span class="sr-only">Price</span>
            <span itemprop="price" class="price">$19.12</span>

            <span class="sr-only">Regular price</span>
            <span class="regular-price">$23.90</span>
          </div>

          <div class="product-actions-main" style="display:flex;width:100%;overflow: visible;">
            <button
                data-button-action="add-to-cart"
                type="submit"
                title="Add to cart"
                class="btn btn-primary add-to-cart "
              >
                Add to cart
              </button>
              <div class="wishlist">
              <a
                href="#"
                class="st-wishlist-button btn-product btn"
                ><span class="st-wishlist-bt-content"
                  ><i aria-hidden="true" class="fa fa-heart"></i> Add to
                  Wishlist
                </span></a
              >
            </div>
            
          </div>
        </div>
      </article>
    </li>
    <li class="item">
      <article class="product-miniature js-product-miniature">
        <div class="thumbnail-container">
 <router-link :to="{ name: 'productDetail'}" class="thumbnail product-thumbnail">
            <img
              class="img_main"
              src="../assets/img/p/2/5/25-home_default.jpg"
              alt="Suspendisse Massa Nulla"
              data-full-size-image-url="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/2/5/25-large_default.jpg"
            />
            <img
              class="replace-2x img_1 img-responsive lazyload"
              data-src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/3/4/34-home_default.jpg"
              data-full-size-image-url="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/3/4/34-large_default.jpg"
              alt=""
            />
          </router-link>

        

          <ul class="product-flags">
            <li class="discount">-20%</li>
            <li class="new">New</li>
          </ul>
        </div>

        <div class="product-description">
          <div class="comments_note">
            <div class="star_content clearfix">
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
            </div>
            <!-- <span>%s Review(s)&nbsp</span> -->
          </div>

          <span class="h3 product-title" itemprop="name"
            ><a
              href="#"
              >Suspendisse Massa Nulla</a
            ></span
          >

          <div class="product-price-and-shipping">
            <span class="sr-only">Price</span>
            <span itemprop="price" class="price">$28.72</span>

            <span class="sr-only">Regular price</span>
            <span class="regular-price">$35.90</span>
          </div>

          <div class="product-actions-main" style="display:flex;width:100%;overflow: visible;">
            <button
                data-button-action="add-to-cart"
                type="submit"
                title="Add to cart"
                class="btn btn-primary add-to-cart "
              >
                Add to cart
              </button>
              <div class="wishlist">
              <a
                href="#"
                class="st-wishlist-button btn-product btn"
                ><span class="st-wishlist-bt-content"
                  ><i aria-hidden="true" class="fa fa-heart"></i> Add to
                  Wishlist
                </span></a
              >
            </div>
            
          </div>
        </div>
      </article>
    </li>
    <li class="item">
      <article
        class="product-miniature js-product-miniature"
      >
        <div class="thumbnail-container">
          <router-link :to="{ name: 'productDetail'}" class="thumbnail product-thumbnail">
            <img
              class="img_main"
              src="../assets/img/p/2/6/26-home_default.jpg"
              alt="Justo Neque Commodo Nisl"
              data-full-size-image-url="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/2/6/26-large_default.jpg"
            />
          </router-link>
          <ul class="product-flags">
            <li class="new">New</li>
          </ul>
        </div>

        <div class="product-description">
          <div class="comments_note">
            <div class="star_content clearfix">
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
            </div>
            <!-- <span>%s Review(s)&nbsp</span> -->
          </div>

          <span class="h3 product-title" itemprop="name"
            >
          <router-link :to="{ name: 'productDetail'}" >

            Justo Neque Commodo Nisl</router-link
            ></span
          >

          <div class="product-price-and-shipping">
            <span class="sr-only">Price</span>
            <span itemprop="price" class="price">$29.00</span>
          </div>

          <div class="product-actions-main" style="display:flex;width:100%;overflow: visible;">
            <button
                data-button-action="add-to-cart"
                type="submit"
                title="Add to cart"
                class="btn btn-primary add-to-cart "
              >
                Add to cart
              </button>
              <div class="wishlist">
              <a
                href="#"
                class="st-wishlist-button btn-product btn"
                ><span class="st-wishlist-bt-content"
                  ><i aria-hidden="true" class="fa fa-heart"></i> Add to
                  Wishlist
                </span></a
              >
            </div>
            
          </div>
        </div>
      </article>
    </li>
    <li class="item">
      <article
        class="product-miniature js-product-miniature"
      >
        <div class="thumbnail-container">
          <router-link :to="{ name: 'productDetail'}" class="thumbnail product-thumbnail">
            <img
              class="img_main"
              src="../assets/img/p/2/7/27-home_default.jpg"
              alt="Suspendisse Potenti"
              data-full-size-image-url="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/2/7/27-large_default.jpg"
            />
            <img
              class="replace-2x img_1 img-responsive lazyload"
              data-src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/4/4/44-home_default.jpg"
              data-full-size-image-url="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/4/4/44-large_default.jpg"
              alt=""
            />
          </router-link>
          <ul class="product-flags">
            <li class="new">New</li>
          </ul>
        </div>

        <div class="product-description">
          <div class="comments_note">
            <div class="star_content clearfix">
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
            </div>
            <!-- <span>%s Review(s)&nbsp</span> -->
          </div>

          <span class="h3 product-title" itemprop="name"
            >          <router-link :to="{ name: 'productDetail'}" >
Suspendisse Potenti</router-link
            ></span
          >

          <div class="product-price-and-shipping">
            <span class="sr-only">Price</span>
            <span itemprop="price" class="price">$29.00</span>
          </div>

         <div class="product-actions-main" style="display:flex;width:100%;overflow: visible;">
            <button
                data-button-action="add-to-cart"
                type="submit"
                title="Add to cart"
                class="btn btn-primary add-to-cart "
              >
                Add to cart
              </button>
              <div class="wishlist">
              <a
                href="#"
                class="st-wishlist-button btn-product btn"
                ><span class="st-wishlist-bt-content"
                  ><i aria-hidden="true" class="fa fa-heart"></i> Add to
                  Wishlist
                </span></a
              >
            </div>
            
          </div>
        </div>
      </article>
    </li>
    <li class="item">
      <article
        class="product-miniature js-product-miniature"
      >
        <div class="thumbnail-container">
          <router-link :to="{ name: 'productDetail'}" class="thumbnail product-thumbnail">
          
            <img
              class="img_main"
              src="../assets/img/p/2/8/28-home_default.jpg"
              alt="Tellus Eu Volutpat Varius"
              data-full-size-image-url="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/2/8/28-large_default.jpg"
            />
           
          </router-link>

        
          <ul class="product-flags">
            <li class="new">New</li>
          </ul>
        </div>

        <div class="product-description">
          <div class="comments_note">
            <div class="star_content clearfix">
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
            </div>
            <!-- <span>%s Review(s)&nbsp</span> -->
          </div>

          <span class="h3 product-title" itemprop="name"
            ><a
              href="#"
              >Tellus Eu Volutpat Varius</a
            ></span
          >

          <div class="product-price-and-shipping">
            <span class="sr-only">Price</span>
            <span itemprop="price" class="price">$29.00</span>
          </div>

         <div class="product-actions-main" style="display:flex;width:100%;overflow: visible;">
            <button
                data-button-action="add-to-cart"
                type="submit"
                title="Add to cart"
                class="btn btn-primary add-to-cart "
              >
                Add to cart
              </button>
              <div class="wishlist">
              <a
                href="#"
                class="st-wishlist-button btn-product btn"
                ><span class="st-wishlist-bt-content"
                  ><i aria-hidden="true" class="fa fa-heart"></i> Add to
                  Wishlist
                </span></a
              >
            </div>
            
          </div>
        </div>
      </article>
    </li>
    <li class="item">
      <article
        class="product-miniature js-product-miniature"
        data-id-product="7"
        data-id-product-attribute="146"
        itemscope
        itemtype="http://schema.org/Product"
      >
        <div class="thumbnail-container">
                   <router-link :to="{ name: 'productDetail'}" class="thumbnail product-thumbnail">

            <img
              class="img_main"
              src="../assets/img/p/5/4/54-home_default.jpg"
              alt="Arcu Vitae Imperdiet Facilisis"
              data-full-size-image-url="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/5/4/54-large_default.jpg"
            />
            <img
              class="replace-2x img_1 img-responsive lazyload"
              data-src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/5/9/59-home_default.jpg"
              data-full-size-image-url="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/5/9/59-large_default.jpg"
              alt=""
            />
          </router-link>

         

          <ul class="product-flags">
            <li class="new">New</li>
          </ul>
        </div>

        <div class="product-description">
          <div class="comments_note">
            <div class="star_content clearfix">
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
            </div>
            <!-- <span>%s Review(s)&nbsp</span> -->
          </div>

          <span class="h3 product-title" itemprop="name"
            ><a
              href="#"
              >Arcu Vitae Imperdiet Facilisis</a
            ></span
          >

          <div class="product-price-and-shipping">
            <span class="sr-only">Price</span>
            <span itemprop="price" class="price">$11.90</span>
          </div>

          <div class="product-actions-main" style="display:flex;width:100%;overflow: visible;">
            <button
                data-button-action="add-to-cart"
                type="submit"
                title="Add to cart"
                class="btn btn-primary add-to-cart "
              >
                Add to cart
              </button>
              <div class="wishlist">
              <a
                href="#"
                class="st-wishlist-button btn-product btn"
                ><span class="st-wishlist-bt-content"
                  ><i aria-hidden="true" class="fa fa-heart"></i> Add to
                  Wishlist
                </span></a
              >
            </div>
            
          </div>
        </div>
      </article>
    </li>
    <li class="item">
      <article
        class="product-miniature js-product-miniature"
      >
        <div class="thumbnail-container">
                   <router-link :to="{ name: 'productDetail'}" class="thumbnail product-thumbnail">

            <img
              class="img_main"
              src="../assets/img/p/5/5/55-home_default.jpg"
              alt="Sem Nec Tristique Tempus"
              data-full-size-image-url="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/5/5/55-large_default.jpg"
            />
            
          </router-link>

         
          <ul class="product-flags">
            <li class="new">New</li>
          </ul>
        </div>

        <div class="product-description">
          <div class="comments_note">
            <div class="star_content clearfix">
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
            </div>
            <!-- <span>%s Review(s)&nbsp</span> -->
          </div>

          <span class="h3 product-title" itemprop="name"
            ><a
              href="#"
              >Sem Nec Tristique Tempus</a
            ></span
          >

          <div class="product-price-and-shipping">
            <span class="sr-only">Price</span>
            <span itemprop="price" class="price">$11.90</span>
          </div>

          <div class="product-actions-main" style="display:flex;width:100%;overflow: visible;">
            <button
                data-button-action="add-to-cart"
                type="submit"
                title="Add to cart"
                class="btn btn-primary add-to-cart "
              >
                Add to cart
              </button>
              <div class="wishlist">
              <a
                href="#"
                class="st-wishlist-button btn-product btn"
                ><span class="st-wishlist-bt-content"
                  ><i aria-hidden="true" class="fa fa-heart"></i> Add to
                  Wishlist
                </span></a
              >
            </div>
            
          </div>
        </div>
      </article>
    </li>
    <li class="item">
      <article
        class="product-miniature js-product-miniature"
        data-id-product="9"
        data-id-product-attribute="22"
        itemscope
        itemtype="http://schema.org/Product"
      >
        <div class="thumbnail-container">
                            <router-link :to="{ name: 'productDetail'}" class="thumbnail product-thumbnail">
            <img
              class="img_main"
              src="../assets/img/p/5/6/56-home_default.jpg"
              alt="Nascetur ridiculus mus"
              data-full-size-image-url="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/5/6/56-large_default.jpg"
            />
          </router-link>
          <ul class="product-flags">
            <li class="new">New</li>
          </ul>
        </div>

        <div class="product-description">
          <div class="comments_note">
            <div class="star_content clearfix">
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
            </div>
            <!-- <span>%s Review(s)&nbsp</span> -->
          </div>

          <span class="h3 product-title" itemprop="name"
            ><a
              href="#"
              >Nascetur ridiculus mus</a
            ></span
          >

          <div class="product-price-and-shipping">
            <span class="sr-only">Price</span>
            <span itemprop="price" class="price">$18.90</span>
          </div>

          <div class="product-actions-main" style="display:flex;width:100%;overflow: visible;">
            <button
                data-button-action="add-to-cart"
                type="submit"
                title="Add to cart"
                class="btn btn-primary add-to-cart "
              >
                Add to cart
              </button>
              <div class="wishlist">
              <a
                href="#"
                class="st-wishlist-button btn-product btn"
                ><span class="st-wishlist-bt-content"
                  ><i aria-hidden="true" class="fa fa-heart"></i> Add to
                  Wishlist
                </span></a
              >
            </div>
            
          </div>
        </div>
      </article>
    </li>
  </carousel>
</template>
<script>
// import starRating from "@/components/starRating";
import carousel from "vue-owl-carousel";

export default {
  props: ["productData"],
  components: {
    carousel,
    // starRating,
  },
  data() {
    return {
      whishlist: 0,
    };
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
.product-thumb .button-group a {
  width: 40px;
  height: 40px;
  display: unset;
  top: 8px;
  border: none;
  background-color: #f2f2f2;
  color: #333;
  padding: 12px 12px;
  text-align: center;
  text-transform: uppercase;
  position: relative;
  transition: none;
  vertical-align: top;
  margin-right: 0px;
}
</style>