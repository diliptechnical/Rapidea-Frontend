<template>
<div id="index" class="lang-en country-us currency-usd layout-full-width page-index tax-display-disabled">
    <main>
        <Header :isHas="isHas"/>
        <aside id="notifications">
            <div class="container" />
        </aside>
        <section id="wrapper">
            <div class="container">
                <div class="topdiv">
                    <div class="flexslider" data-interval="3000" data-pause="true">
              <carousel2 v-if="showSliders" :autoplay="true" :nav="false" :items="1">
                  <img v-for="(slide, i) in slides" :key="i"  :src="slide.image">
              </carousel2>
                        <!-- <vueper-slides class="no-shadow slider-height" fixedHeight="true" transition-speed="250">
                            <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image" />
                        </vueper-slides> -->
                    </div>
                </div>
                <div id="columns_inner">
                    <div id="breadcrumb_wrapper" class="left-column right-column col-sm-4 col-md-6">
                        <nav data-depth="1" class="breadcrumb hidden-sm-down">
                            <div class="container">
                                <ol >
                                    <li >
                                        <a data-id="#">
                                            <span itemprop="name">Home</span>
                                        </a>
                                        <meta itemprop="position" content="1">
                                    </li>
                                </ol>
                            </div>
                        </nav>
                    </div>
                    <div id="content-wrapper">
                        <section id="main">
                            <section id="content" class="page-home">
                                <div id="tmcmssliderbottomblock">
                                    <div class="container mobile-column-count">
                                        <div class="service-cms-banner-list service-1">
                                            <div class="service_block_inner">
                                                <div class="service_image" />
                                                <div class="service_content">
                                                    <div class="service_title1">
                                                        100% satisfaction
                                                    </div>
                                                    <div class="service_title2">
                                                        If you are unable
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="service-cms-banner-list service-2">
                                            <div class="service_block_inner">
                                                <div class="service_image" />
                                                <div class="service_content">
                                                    <div class="service_title1">
                                                        save 20% when you
                                                    </div>
                                                    <div class="service_title2">
                                                        Use credit card
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="service-cms-banner-list service-3">
                                            <div class="service_block_inner">
                                                <div class="service_image" />
                                                <div class="service_content">
                                                    <div class="service_title1">
                                                        fast free shipment
                                                    </div>
                                                    <div class="service_title2">
                                                        Load any computers
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="service-cms-banner-list service-4">
                                            <div class="service_block_inner">
                                                <div class="service_image" />
                                                <div class="service_content">
                                                    <div class="service_title1">
                                                        14-day money back
                                                    </div>
                                                    <div class="service_title2">
                                                        If you are unable
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="tmcmsbannerblock">
                                    <div class="container">
                                        <div class="left_subbanner">
                                            <div class="left_banner">
                                                <a class="left-img" data-id="#">
                                                    <img alt="1.jpg" class="lazyloaded" src="../assets/img/cms/Sub-banner-01.jpg"></a>
                                            </div>
                                            <span class="banner_content">
                                                <span class="title1">20% off</span>
                                                <span class="title2">children items</span>
                                                <span class="banner_btn"><a data-id="#">grab offer!!</a> </span> </span>
                                        </div>
                                        <div class="right_subbanner">
                                            <div class="right_banner">
                                                <a class="right-img" data-id="#">
                                                    <img alt="2.jpg" class="lazyloaded" src="../assets/img/cms/Sub-banner-02.jpg">
                                                </a>
                                            </div>
                                            <span class="banner_content">
                                                <span class="title1">discount 30%</span>
                                                <span class="title2">special child's</span>
                                                <span class="banner_btn">
                                                    <a data-id="#">grab
                                                        offer!!</a></span> </span>
                                        </div>
                                    </div>
                                </div>

                                <div id="special" class="special-banner">
                                    <div class="special-banner-inner" />

                                    <section class="special-products">
                                        <div class="special_inner">
                                            <h1 class="products-section-title text-uppercase">
                                                Deal of the day
                                            </h1>
                                            <div id="spe_res">
                                                <div class="products">
                                                    <!-- Define Number of product for SLIDER -->
                                                    <div class="product-carousel">
                                                        <ul id="special-carousel" class="tm-carousel product_list">
                                                            <carousel :items="2" :autoplay="false" :nav="false">
                                                                <li class="item">
                                                                    <div class="product-miniature1 js-product-miniature" data-id-product="21" data-id-product-attribute="162" itemscope itemtype="http://schema.org/Product">
                                                                        <div class="thumbnail-container col-sm-12 col-md-5">
                                                                            <div class="special_block">
                                                                                <div class="image-block">
                                                                                    <router-link :to="{ name: 'productDetail'}" class="thumbnail product-thumbnail">
                                                                                        <img class="primary-image js-modal-product-cover product-cover-modal" src="../assets/img/p/1/1/8/118-special_default.jpg" alt="" title="">
                                                                                    </router-link>
                                                                                </div>
                                                                                <ul class="product-flags">
                                                                                    <li class="discount">
                                                                                        -5%
                                                                                    </li>
                                                                                    <li class="new">
                                                                                        New
                                                                                    </li>
                                                                                </ul>

                                                                             
                                                                            </div>
                                                                            <div class="product-description col-sm-12 col-md-7">
                                                                                <span class="h3 product-title" itemprop="name">
                                                                                    <a data-id="#" title="Massa Suspendisse">Massa Suspendisse</a></span>

                                                                                <div class="comments_note">
                                                                                    <div class="star_content clearfix">
                                                                                        <div class="star" />
                                                                                        <div class="star" />
                                                                                        <div class="star" />
                                                                                        <div class="star" />
                                                                                        <div class="star" />
                                                                                    </div>
                                                                                    <!-- <span>%s Review(s)&nbsp</span> -->
                                                                                </div>

                                                                                <div class="product-price-and-shipping">
                                                                                    <span class="regular-price">$35.00</span>
                                                                                    <span itemprop="price" class="price">$33.25</span>

                                                                                    <span class="sr-only">Regular price</span>
                                                                                </div>

                                                                                <div class="product-detail" itemprop="description">
                                                                                    <p>
                                                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris
                                                                                        eleifend, quam a vulputate dictum, massa quam dapibus leo, eget...
                                                                                    </p>
                                                                                </div>

                                                                                <!-- <div id="product-description-offer">Hurry Up! Offer Ends in:</div> -->
                                                                                <div class="psproductcountdown buttons_bottom_block pspc-inactive" data-to="1627704000000">
                                                                                    <div class="pspc-main days-diff-203 weeks-diff-29 " />
                                                                                    <input type="hidden" class="pspc-checker">
                                                                                </div>

                                                                                <div class="product-actions-main">
                                                                                    <form action="#" method="post" class="add-to-cart-or-refresh">
                                                                                        <input type="hidden" name="token" value="03c08d5578608b627b076ae65b228852">
                                                                                        <input type="hidden" name="id_product" value="21" class="product_page_product_id">
                                                                                        <input type="hidden" name="id_customization" value="0" class="product_customization_id">
                                                                                        <button class="btn btn-primary add-to-cart" data-button-action="add-to-cart" type="submit" title="Add to cart">
                                                                                            Add to cart
                                                                                        </button>
                                                                                    </form>

                                                                                    <div class="wishlist">
                                                                                        <a class="st-wishlist-button btn-product btn" data-id="#" data-id-wishlist="" data-id-product="21" data-id-product-attribute="162" title="Add to Wishlist">
                                                                                            <span class="st-wishlist-bt-content">
                                                                                                <i class="fa fa-heart" aria-hidden="true" />
                                                                                                Add to Wishlist
                                                                                            </span>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="item">
                                                                    <div class="product-miniature1 js-product-miniature" data-id-product="21" data-id-product-attribute="162" itemscope itemtype="http://schema.org/Product">
                                                                        <div class="thumbnail-container col-sm-12 col-md-5">
                                                                            <div class="special_block">
                                                                                <div class="image-block">
                                                                                     <router-link :to="{ name: 'productDetail'}" class="thumbnail product-thumbnail">
                                                                                        <img class="primary-image js-modal-product-cover product-cover-modal" src="../assets/img/p/1/1/8/118-special_default.jpg" alt="" title="">
                                                                                    </router-link >
                                                                                </div>

                                                                                <ul class="product-flags">
                                                                                    <li class="discount">
                                                                                        -5%
                                                                                    </li>
                                                                                    <li class="new">
                                                                                        New
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div class="product-description col-sm-12 col-md-7">
                                                                                <span class="h3 product-title" itemprop="name">
                                                                                    <a data-id="#" title="Massa Suspendisse">Massa Suspendisse</a></span>
                                                                                <div class="comments_note">
                                                                                    <div class="star_content clearfix">
                                                                                        <div class="star" />
                                                                                        <div class="star" />
                                                                                        <div class="star" />
                                                                                        <div class="star" />
                                                                                        <div class="star" />
                                                                                    </div>
                                                                                </div>
                                                                                <div class="product-price-and-shipping">
                                                                                    <span class="regular-price">$35.00</span>
                                                                                    <span itemprop="price" class="price">$33.25</span>
                                                                                    <span class="sr-only">Regular price</span>
                                                                                </div>
                                                                                <div class="product-detail" itemprop="description">
                                                                                    <p>
                                                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris
                                                                                        eleifend, quam a vulputate dictum, massa quam dapibus leo, eget...
                                                                                    </p>
                                                                                </div>

                                                                                <!-- <div id="product-description-offer">Hurry Up! Offer Ends in:</div> -->
                                                                                <div class="psproductcountdown buttons_bottom_block pspc-inactive" data-to="1627704000000">
                                                                                    <div class="pspc-main days-diff-203 weeks-diff-29 " />
                                                                                    <input type="hidden" class="pspc-checker">
                                                                                </div>

                                                                                <div class="product-actions-main">
                                                                                    <form action="#" method="post" class="add-to-cart-or-refresh">
                                                                                        <input type="hidden" name="token" value="03c08d5578608b627b076ae65b228852">
                                                                                        <input type="hidden" name="id_product" value="21" class="product_page_product_id">
                                                                                        <input type="hidden" name="id_customization" value="0" class="product_customization_id">
                                                                                        <button class="btn btn-primary add-to-cart" data-button-action="add-to-cart" type="submit" title="Add to cart">
                                                                                            Add to cart
                                                                                        </button>
                                                                                    </form>

                                                                                    <div class="wishlist">
                                                                                        <a class="st-wishlist-button btn-product btn" data-id="#" data-id-wishlist="" data-id-product="21" data-id-product-attribute="162" title="Add to Wishlist">
                                                                                            <span class="st-wishlist-bt-content">
                                                                                                <i class="fa fa-heart" aria-hidden="true" />
                                                                                                Add to Wishlist
                                                                                            </span>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="item">
                                                                    <div class="product-miniature1 js-product-miniature" data-id-product="21" data-id-product-attribute="162" itemscope itemtype="http://schema.org/Product">
                                                                        <div class="thumbnail-container col-sm-12 col-md-5">
                                                                            <div class="special_block">
                                                                                <div class="image-block">
                                                                                    <router-link :to="{ name: 'productDetail'}" class="thumbnail product-thumbnail">
                                                                                        <img class="primary-image js-modal-product-cover product-cover-modal" src="../assets/img/p/1/1/8/118-special_default.jpg" alt="" title="">
                                                                                    </router-link>
                                                                                </div>

                                                                                <ul class="product-flags">
                                                                                    <li class="discount">
                                                                                        -5%
                                                                                    </li>
                                                                                    <li class="new">
                                                                                        New
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div class="product-description col-sm-12 col-md-7">
                                                                                <span class="h3 product-title" itemprop="name">
                                                                                    <a data-id="#" title="Massa Suspendisse">Massa Suspendisse</a></span>

                                                                                <div class="comments_note">
                                                                                    <div class="star_content clearfix">
                                                                                        <div class="star" />
                                                                                        <div class="star" />
                                                                                        <div class="star" />
                                                                                        <div class="star" />
                                                                                        <div class="star" />
                                                                                    </div>
                                                                                    <!-- <span>%s Review(s)&nbsp</span> -->
                                                                                </div>

                                                                                <div class="product-price-and-shipping">
                                                                                    <span class="regular-price">$35.00</span>
                                                                                    <span itemprop="price" class="price">$33.25</span>

                                                                                    <span class="sr-only">Regular price</span>
                                                                                </div>

                                                                                <div class="product-detail" itemprop="description">
                                                                                    <p>
                                                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris
                                                                                        eleifend, quam a vulputate dictum, massa quam dapibus leo, eget...
                                                                                    </p>
                                                                                </div>

                                                                                <!-- <div id="product-description-offer">Hurry Up! Offer Ends in:</div> -->
                                                                                <div class="psproductcountdown buttons_bottom_block pspc-inactive" data-to="1627704000000">
                                                                                    <div class="pspc-main days-diff-203 weeks-diff-29 " />
                                                                                    <input type="hidden" class="pspc-checker">
                                                                                </div>

                                                                                <div class="product-actions-main">
                                                                                    <form action="#" method="post" class="add-to-cart-or-refresh">
                                                                                        <input type="hidden" name="token" value="03c08d5578608b627b076ae65b228852">
                                                                                        <input type="hidden" name="id_product" value="21" class="product_page_product_id">
                                                                                        <input type="hidden" name="id_customization" value="0" class="product_customization_id">
                                                                                        <button class="btn btn-primary add-to-cart" data-button-action="add-to-cart" type="submit" title="Add to cart">
                                                                                            Add to cart
                                                                                        </button>
                                                                                    </form>

                                                                                    <div class="wishlist">
                                                                                        <a class="st-wishlist-button btn-product btn" data-id="#" data-id-wishlist="" data-id-product="21" data-id-product-attribute="162" title="Add to Wishlist">
                                                                                            <span class="st-wishlist-bt-content">
                                                                                                <i class="fa fa-heart" aria-hidden="true" />
                                                                                                Add to Wishlist
                                                                                            </span>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                               <li class="item">
                                                                    <div class="product-miniature1 js-product-miniature" data-id-product="21" data-id-product-attribute="162" itemscope itemtype="http://schema.org/Product">
                                                                        <div class="thumbnail-container col-sm-12 col-md-5">
                                                                            <div class="special_block">
                                                                                <div class="image-block">
                                                                                    <router-link :to="{ name: 'productDetail'}" class="thumbnail product-thumbnail">
                                                                                        <img class="primary-image js-modal-product-cover product-cover-modal" src="../assets/img/p/1/1/8/118-special_default.jpg" alt="" title="">
                                                                                    </router-link>
                                                                                </div>

                                                                                <ul class="product-flags">
                                                                                    <li class="discount">
                                                                                        -5%
                                                                                    </li>
                                                                                    <li class="new">
                                                                                        New
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div class="product-description col-sm-12 col-md-7">
                                                                                <span class="h3 product-title" itemprop="name">
                                                                                    <a data-id="#" title="Massa Suspendisse">Massa Suspendisse</a></span>

                                                                                <div class="comments_note">
                                                                                    <div class="star_content clearfix">
                                                                                        <div class="star" />
                                                                                        <div class="star" />
                                                                                        <div class="star" />
                                                                                        <div class="star" />
                                                                                        <div class="star" />
                                                                                    </div>
                                                                                    <!-- <span>%s Review(s)&nbsp</span> -->
                                                                                </div>

                                                                                <div class="product-price-and-shipping">
                                                                                    <span class="regular-price">$35.00</span>
                                                                                    <span itemprop="price" class="price">$33.25</span>

                                                                                    <span class="sr-only">Regular price</span>
                                                                                </div>

                                                                                <div class="product-detail" itemprop="description">
                                                                                    <p>
                                                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris
                                                                                        eleifend, quam a vulputate dictum, massa quam dapibus leo, eget...
                                                                                    </p>
                                                                                </div>

                                                                                <!-- <div id="product-description-offer">Hurry Up! Offer Ends in:</div> -->
                                                                                <div class="psproductcountdown buttons_bottom_block pspc-inactive" data-to="1627704000000">
                                                                                    <div class="pspc-main days-diff-203 weeks-diff-29 " />
                                                                                    <input type="hidden" class="pspc-checker">
                                                                                </div>

                                                                                <div class="product-actions-main">
                                                                                    <form action="#" method="post" class="add-to-cart-or-refresh">
                                                                                        <input type="hidden" name="token" value="03c08d5578608b627b076ae65b228852">
                                                                                        <input type="hidden" name="id_product" value="21" class="product_page_product_id">
                                                                                        <input type="hidden" name="id_customization" value="0" class="product_customization_id">
                                                                                        <button class="btn btn-primary add-to-cart" data-button-action="add-to-cart" type="submit" title="Add to cart">
                                                                                            Add to cart
                                                                                        </button>
                                                                                    </form>

                                                                                    <div class="wishlist">
                                                                                        <a class="st-wishlist-button btn-product btn" data-id="#" data-id-wishlist="" data-id-product="21" data-id-product-attribute="162" title="Add to Wishlist">
                                                                                            <span class="st-wishlist-bt-content">
                                                                                                <i class="fa fa-heart" aria-hidden="true" />
                                                                                                Add to Wishlist
                                                                                            </span>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </carousel>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="customNavigation owl-nav">
                                                    <a class="btn prev special_prev owl-prev " />
                                                    <a class="btn next special_next owl-next" />
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                                
                                <section class="special-products">
                                        <div class="special_inner">
                                            <h1 class="products-section-title text-uppercase">
                                                Featured products
                                            </h1>
                                            <div id="spe_res">
                                                <div class="products">
                                                    <!-- Define Number of product for SLIDER -->
                                                    <div class="product-carousel">
                                                        <ul id="special-carousel" class="tm-carousel product_list">
                                                       <Product :productData="featureData" />
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="customNavigation owl-nav">
                                                    <a class="btn prev special_prev owl-prev " />
                                                    <a class="btn next special_next owl-next" />
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                               
                                <div class="tmcategorylist">
                                    <div class="tmcategory-container container">
             
                                        <div id="spe_res">
                                            <div class="products">

                                                <ul id="tmcategorylist-carousel" class="tm-carousel product_list product_slider_grid">

                                                    <li>
                                                        <div class="categoryblock0 categoryblock item">
                                                            <div class="block_content">

                                                                <div class="categoryimage_bg">
                                                                    <div class="categoryimage">

                                                                        <img data-src="https://prestashop.templatemela.com/PRSADD12/PRS295/modules/tm_categorylist/views/img/4-tm_categorylist.jpg" alt="" class="img-responsive lazyloaded" src="https://prestashop.templatemela.com/PRSADD12/PRS295/modules/tm_categorylist/views/img/4-tm_categorylist.jpg">

                                                                    </div>
                                                                </div>

                                                                <div class="categorylist">
                                                                    <div class="cat_image"></div>

                                                                    <div class="cate-heading">
                                                                        <a data-id="#">Mini Tikes</a>
                                                                    </div>

                                                                    <ul class="subcategory">
                                                                        <li>
                                                                            <a data-id="#">PeeWees</a>
                                                                        </li>

                                                                        <li>
                                                                            <a data-id="#">Silly Baby</a>
                                                                        </li>

                                                                        <li>
                                                                            <a data-id="#">BearyBaby</a>
                                                                        </li>

                                                                        <li>
                                                                            <a data-id="#">
                                                                                View all</a>
                                                                        </li>
                                                                    </ul>
                                                                    <div class="cate-btn">
                                                                        <a data-id="#" class="btn">
                                                                            View All
                                                                        </a>

                                                                    </div>

                                                                </div>
                                                            </div>

                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div class="categoryblock1 categoryblock item">
                                                            <div class="block_content">

                                                                <div class="categoryimage_bg">
                                                                    <div class="categoryimage">

                                                                        <img data-src="https://prestashop.templatemela.com/PRSADD12/PRS295/modules/tm_categorylist/views/img/5-tm_categorylist.jpg" alt="" class="img-responsive lazyloaded" src="https://prestashop.templatemela.com/PRSADD12/PRS295/modules/tm_categorylist/views/img/5-tm_categorylist.jpg">

                                                                    </div>
                                                                </div>

                                                                <div class="categorylist">
                                                                    <div class="cat_image"></div>

                                                                    <div class="cate-heading">
                                                                        <a data-id="#">Tiny Tots</a>
                                                                    </div>

                                                                    <ul class="subcategory">
                                                                        <li>
                                                                            <a data-id="#">Bubbly Baby</a>
                                                                        </li>

                                                                        <li>
                                                                            <a data-id="#">BabyDesire</a>
                                                                        </li>

                                                                        <li>
                                                                            <a data-id="#">BabyClub</a>
                                                                        </li>

                                                                        <li>
                                                                            <a data-id="#">
                                                                                View all</a>
                                                                        </li>
                                                                    </ul>
                                                                    <div class="cate-btn">
                                                                        <a data-id="#" class="btn">
                                                                            View All
                                                                        </a>

                                                                    </div>

                                                                </div>
                                                            </div>

                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div class="categoryblock2 categoryblock item">
                                                            <div class="block_content">

                                                                <div class="categoryimage_bg">
                                                                    <div class="categoryimage">

                                                                        <img data-src="https://prestashop.templatemela.com/PRSADD12/PRS295/modules/tm_categorylist/views/img/17-tm_categorylist.jpg" alt="" class="img-responsive lazyloaded" src="https://prestashop.templatemela.com/PRSADD12/PRS295/modules/tm_categorylist/views/img/17-tm_categorylist.jpg">

                                                                    </div>
                                                                </div>

                                                                <div class="categorylist">
                                                                    <div class="cat_image"></div>

                                                                    <div class="cate-heading">
                                                                        <a data-id="#">Tiny Tikes</a>
                                                                    </div>

                                                                    <ul class="subcategory">
                                                                        <li>
                                                                            <a data-id="#">Little Wands</a>
                                                                        </li>

                                                                        <li>
                                                                            <a data-id="#">Baby Pod</a>
                                                                        </li>

                                                                        <li>
                                                                            <a data-id="#">Little Cheeks</a>
                                                                        </li>

                                                                        <li>
                                                                            <a data-id="#">
                                                                                View all</a>
                                                                        </li>
                                                                    </ul>
                                                                    <div class="cate-btn">
                                                                        <a data-id="#" class="btn">
                                                                            View All
                                                                        </a>

                                                                    </div>

                                                                </div>
                                                            </div>

                                                        </div>
                                                    </li>

                                                </ul>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <section class="bestseller-products" id="bestseller">
                                    <div class="container">
                                        <h2 class="h1 products-section-title text-uppercase">
                                            Best Seller Item
                                        </h2>
                                        <!-- Define Number of product for SLIDER -->
                                        <div id="spe_res">
                                            <div class="products">

                                                <ul id="bestseller-carousel" class="tm-carousel product_list owl-carousel owl-theme" style="opacity: 1; display: block;">

                                                    <div class="owl-wrapper-outer">
                                                        <div class="owl-wrapper" style="width: 100%; left: 0px; display: block;">

                                                           <div class="owl-item" >
                                                             <Product/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="owl-controls clickable">
                                                        <div class="owl-pagination">
                                                            <div class="owl-page active"><span class=""></span></div>
                                                            <div class="owl-page"><span class=""></span></div>
                                                        </div>
                                                    </div>
                                                </ul>

                                                <!--  -->
                                            </div>
                                        </div>

                                        <div class="customNavigation">
                                            <a class="btn prev bestseller_prev">&nbsp;</a>
                                            <a class="btn next bestseller_next">&nbsp;</a>
                                        </div>

                                    </div>
                                </section>

                                <div id="tmcms2_block">
                                    <div id="tmcmsinfo_block1">
                                        <div class="first-content main-content">
                                            <div class="cms_content">
                                                <a data-id="#"><img class="lazyload" src="../assets/img/cms/Cms-banner-1.jpg" alt="Cms-banner-1.jpg"></a>
                                                <div class="cms-block">
                                                    <div class="cms_offer">
                                                        baby towel
                                                    </div>
                                                    <div class="cms_offer1">
                                                        Lorem Contrary to popular belief
                                                    </div>
                                                    <div class="cms_btn">
                                                        <a data-id="#">shop now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="second-content main-content">
                                            <div class="cms_content">
                                                <a data-id="#"> <img class="lazyload" src="../assets/img/cms/Cms-banner-2.jpg" alt="Cms-banner-2.jpg"></a>
                                                <div class="cms-block">
                                                    <div class="cms_offer">
                                                        winter clothes
                                                    </div>
                                                    <div class="cms_offer1">
                                                        Lorem Contrary to popular belief
                                                    </div>
                                                    <div class="cms_btn">
                                                        <a data-id="#">shop now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <section class="newproducts clearfix " id="newProduct">
                                    <h2 class="h1 products-section-title text-uppercase">
                                        New products
                                    </h2>
                                    <!-- Define Number of product for SLIDER -->
                                    <div id="spe_res">
                                        <div class="products">

                                            <ul id="newproduct-carousel" class="tm-carousel product_list owl-carousel owl-theme" style="opacity: 1; display: block;">
                                                <div class="owl-wrapper-outer">
                                                    <div class="owl-wrapper" style="width: 100%; left: 0px; display: block;">
                                                        <div class=""  >
                                                            <div class="grid-container">
                                                                <li class="item" v-for="latest in latestData" :key="latest.id">

                                                                    <div class="product-miniature1 js-product-miniature" data-id-product="21" data-id-product-attribute="162" itemscope="" itemtype="http://schema.org/Product">

                                                                        <div class="thumbnail-container col-sm-12 col-md-5">

                                                                            <div class="new_block">

                                                                                <div class="image-block">
                                                                                    <router-link :to="{ name: 'productDetail'}" class="thumbnail product-thumbnail">
                                                                                        <img class="primary-image js-modal-product-cover product-cover-modal" src="../assets/img/p/1/1/8/118-new_products.jpg" alt="" data-full-size-image-url="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/1/1/8/118-large_default.jpg" title="">
                                                                                        <ul class="product-flags">
                                                                                            <li class="discount">-5%</li>
                                                                                            <li class="new">New</li>
                                                                                        </ul>
                                                                                    </router-link>
                                                                                </div>
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

                                                                                </div>

                                                                                <span class="h3 product-title" itemprop="name">
                                                                                   <router-link :to="{ name: 'productDetail'}" title="Massa Suspendisse">
                                                                                       {{ latest.name }}
                                                                                       </router-link></span>

                                                                                <div class="product-price-and-shipping">
                                                                                    <span itemprop="price" class="price">$ {{ latest.selling_cost }} </span>

                                                                                    <!-- <span class="sr-only">Regular price</span>
                                                                                    <span class="regular-price">$ {{ latest.purches_cost }} </span> -->

                                                                                </div>

                                                                                <div class="product-actions-main">
                                                                                    <form action="#" method="post" class="add-to-cart-or-refresh">
                                                                                        <input type="hidden" name="token" value="03c08d5578608b627b076ae65b228852">
                                                                                        <input type="hidden" name="id_product" value="21" class="product_page_product_id">
                                                                                        <input type="hidden" name="id_customization" value="0" class="product_customization_id">
                                                                                        <button  @click="add_to_cart(latest.id,latest.name,'1',latest.selling_cost)" class="btn btn-primary add-to-cart" data-button-action="add-to-cart" type="button" title="Add to cart">
                                                                                            Add to cart
                                                                                        </button>
                                                                                    </form>
                                                                                    
                                                                                </div>

                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </li>
                                                            </div>
                                                        </div>
                                                       
                                                    </div>
                                                </div>
                                               
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="customNavigation " style="display:none;">
                                        <a class="btn prev newproduct_prev"></a>
                                        <a class="btn next newproduct_next"></a>
                                    </div>
                                </section>

                                <section class="brands container">
                                    <h2 class="h1 products-section-title text-uppercase">
                                        <a data-id="#" title="Brands"> Brands
                                        </a> </h2>

                                    <div class="products">

                                        <!-- Define Number of product for SLIDER -->

                                        <div class="customNavigation" style="display:none;">
                                            <a class="btn prev brand_prev">&nbsp;</a>
                                            <a class="btn next brand_next">&nbsp;</a>
                                        </div>
                                        <ul id="brand-carousel" class="tm-carousel product_list owl-carousel owl-theme" style="opacity: 1; display: block;">
                                            <div class="row">
                                                <div class="col-md-2 col-xs-2">
                                                    <div class="brand-image">
                                                                <a data-id="#" title="Fashion Manufacturer1">
                                                                    <img class=" ls-is-cached lazyloaded" data-src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/m/2.jpg" alt="Fashion Manufacturer1" src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/m/2.jpg">
                                                                </a>
                                                    </div>
                                                </div>
                                                <div class="col-md-2 col-xs-2">
                                                    <div class="brand-image">
                                                                <a data-id="#" title="Fashion Manufacturer2">
                                                                    <img class=" ls-is-cached lazyloaded" data-src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/m/1.jpg" alt="Fashion Manufacturer2" src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/m/1.jpg">
                                                                </a>
                                                            </div>
                                                </div>
                                                <div class="col-md-2 col-xs-2">
                                                    <div class="brand-image">
                                                                <a data-id="#" title="Fashion Manufacturer3">
                                                                    <img class=" ls-is-cached lazyloaded" data-src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/m/6.jpg" alt="Fashion Manufacturer3" src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/m/6.jpg">
                                                                </a>
                                                            </div>
                                                </div>
                                                <div class="col-md-2 col-xs-2">
                                                    <div class="brand-image">
                                                                <a data-id="#" title="Fashion Manufacturer4">
                                                                    <img class=" ls-is-cached lazyloaded" data-src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/m/4.jpg" alt="Fashion Manufacturer4" src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/m/4.jpg">
                                                                </a>
                                                            </div>
                                                </div>

                                                <div class="col-md-2 col-xs-2">
                                                    <div class="brand-image">
                                                                <a data-id="#" title="Fashion Manufacturer5">
                                                                    <img class=" lazyloaded" data-src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/m/3.jpg" alt="Fashion Manufacturer5" src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/m/3.jpg">
                                                                </a>
                                                            </div>
                                                </div>
                                                <div class="col-md-2 col-xs-2">
                                                     <div class="brand-image">
                                                                <a data-id="#" title="Fashion Manufacturer6">
                                                                    <img class=" lazyloaded" data-src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/m/7.jpg" alt="Fashion Manufacturer6" src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/m/7.jpg">
                                                                </a>
                                                            </div>
                                                </div>
                                                
                                            </div>  

                                            

                                            <div class="owl-controls clickable">
                                                <div class="owl-pagination">
                                                    <div class="owl-page active"><span class=""></span></div>
                                                    <div class="owl-page"><span class=""></span></div>
                                                </div>
                                            </div>
                                        </ul>
                                    </div>
                                </section>
                            </section>

                            <footer class="page-footer">
                                <!-- Footer content -->
                            </footer>
                        </section>
                    </div>
                </div>
            </div>
        </section>
        <Footer></Footer>
    </main>
</div>
</template>
<script>
import Product from "@/components/product";
// import testimonial from "@/components/testimonial";
import Header from "@/components/navbar";
import Footer from "@/components/footer";
// import product from "@/components/product";
import carousel2 from "vue-owl-carousel";
// import carousel3 from "vue-owl-carousel";
// import carousel4 from "vue-owl-carousel";
// import featureCategory from "@/components/featureCategory";
import carousel from 'vue-owl-carousel2'
// import {
//     VueperSlides,
//     VueperSlide,
// } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
// import Product from '../components/product.vue';


export default {
  components: {
    // slider,
    // testimonial,
    Header,
    Product,
    //  VueperSlides,
    //     VueperSlide,
        carousel,
        Footer,
        carousel2,
        
        // carousel3
    // Product,
        // carousel4,
    // featureCategory,
    // product,
    //latestProduct,
    //discountProduct,
  },
  data() {
    return {
        isHas: true,
            slides: [{
                    title: 'El Teide Volcano, Spain',
                    content: 'Photo by Max Rive',
                    image: 'https://prestashop.templatemela.com/PRSADD12/PRS295/modules/tm_imageslider/views/img/sample-2.jpg'
                },
                {
                    title: 'El Teide Volcano, Spain',
                    content: 'Photo by Max Rive',
                    image: 'https://prestashop.templatemela.com/PRSADD12/PRS295/modules/tm_imageslider/views/img/sample-2.jpg'
                }
            ],
      uid: "",
      showSliders: true,
      testimonialData: [],
      partnerData: [],
      discountData: [],
      featureData:[],

      cdata: [],
      productData: [],
      latestData: [],
      active_el: 1,
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
    // this.catData();
    this.FeaturedProduct();
    this.latestDatas();
    // this.classActive(1);
    // this.discountProd();
    // this.partner();
    //this.testimonial();
    //console.log(cdata)
  },
  methods: {
    discountProd() {
      // var ev = this
      var ip_address = JSON.parse(localStorage.getItem("ip_address"));
      var user_session = JSON.parse(localStorage.getItem("user"));
      var uid = "";
      if (user_session != null) {
        uid = user_session;
      } else {
        uid = null;
      }
      const axios = require("axios");
      var self = this;
      axios
        .post(this.$root.URL_ROOT + "api.php?type=discount_product", {
          uid: uid,
          ip_address: ip_address,
        })
        .then(function (response) {
          var data = response.data;
          self.discountData = data.data;
          // console.log('discount'+response.data.data)
        });
    },

    activate: function (el) {
      this.active_el = el;
    },
    catData() {
      const axios = require("axios");
      var self = this;
      axios
        .get(this.$root.URL_ROOT + "api.php?type=feature_category")
        .then(function (response) {
          var data = response.data;
          self.cdata = data.data;
          // console.log(response.data)
        });
    },
    FeaturedProduct() {
      var ip_address = JSON.parse(localStorage.getItem("ip_address"));
      var user_session = JSON.parse(localStorage.getItem("user"));
      var uid = "";
      if (user_session != null) {
        uid = user_session;
      } else {
        uid = null;
      }
      const axios = require("axios");
      var self = this;
      axios
        .post(this.$root.URL_ROOT + "api.php?type=getFeaturedProduct", {
          uid: uid,
          ip_address: ip_address,
        })
        .then(function (response) {
          var data = response.data;
          self.featureData = data.data;
          // console.log('featuredProduct')
          console.log(response.data.data);
        });
    },
    latestDatas() {
      var ip_address = JSON.parse(localStorage.getItem("ip_address"));
      var user_session = JSON.parse(localStorage.getItem("user"));
      var uid = "";
      if (user_session != null) {
        uid = user_session;
      } else {
        uid = null;
      }
      const axios = require("axios");
      var self = this;
      axios
        .post(this.$root.URL_ROOT + "api.php?type=getLetestProduct", {
          uid: uid,
          ip_address: ip_address,
        })
        .then(function (response) {
          var data = response.data;
          self.latestData = data.data;
          console.log(response)
        });
    },
    testimonial() {
      const axios = require("axios");
      var self = this;
      axios
        .get(this.$root.URL_ROOT + "api.php?type=testimonial")
        .then(function (response) {
          var data = response.data;
          self.testimonialData = data.data;
          // console.log(response.data.data)
        });
    },
    partner() {
      const axios = require("axios");
      var self = this;
      axios
        .get(this.$root.URL_ROOT + "api.php?type=partner")
        .then(function (response) {
          var data = response.data;
          if (data.status == "success") {
            self.partnerData = data.data;
            self.showSliders = true;
          } else {
            self.showSliders = false;
          }
          // console.log(response.data.data)
        });
    },
    classActive(id) {
      this.isActive = id;
    },
  },
};
</script>
<style>
.owl-carousel {
  display: block !important;
}
.hide {
  display: none !important;
}
.product-carousel {
  display: block;
}
.product-block-inner img {
  width: auto !important;
}
.news-title {
  color: #fff;
  font-weight: bold;
  font-size: 14px;
}
.customNavigation {
  display: none;
}
.product-cat {
  display: none;
}
.selected {
  display: block !important;
}
#slideshow0 .owl-carousel .owl-item img {
  height: 63.4rem;
}
#slideshow0 .owl-dots {
  position: relative;
  bottom: 100px;
}
.swiper-viewport {
  height: 380px;
}
#carousel01 .owl-item .active {
  width: 350px !important;
}
#slideshow0 .owl-item .active {
  width: 1070px !important;
}
.width-100 {
  width: 100% !important;
}
.pd-0 {
  padding-top: 0 !important;
}
.desc-direction {
  flex-direction: row-reverse;
  display: flex;
}
.new-product-item{
     width:407px;
  }
@media (max-width: 1400px) {
  #slideshow0 .owl-carousel .owl-item img {
    height: 52.7rem;
    width: auto !important;
  }
}
@media only screen and (max-width: 600px) {
.mobile-column-count{
    column-count:2;
}
.service-cms-banner-list.service-3 {
    margin-top: 0px !important;
    }
  .swiper-viewport {
    height: auto;
  }
  .new-product-item{
    width: 145px;
  }
  .mob-mycart {
    margin-top: 30px;
  }
}
@media only screen and (max-width: 600px) {
  .desc-direction {
    flex-direction: unset;
    display: unset;
  }
  #slideshow0 .owl-carousel .owl-item img {
    height: auto;
  }
  .advertise {
    margin-top: 10px;
  }
  .new-mobile-product{
      margin: 0 70px 0 0;
  }
}
</style>
