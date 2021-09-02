<template>
  <div
    id="index"
    class="
      lang-en
      country-us
      currency-usd
      layout-full-width
      page-index
      tax-display-disabled
    "
  >
    <main>
           <Header @click="checkIsHas" :isHas="isHas"/>

      <aside id="notifications">
        <div class="container"></div>
      </aside>
      <section id="wrapper">
        <div class="container">
          <div id="">
            <div
              id=""
              class="col-xs-12 col-sm-4 col-md-3 hb-animate-element top-to-bottom" style="padding:0px;">
              <div class="block-categories block">
                <h4 class="block_title hidden-md-down">
                  shop by category
                </h4>
                <h4
                  class="block_title hidden-lg-up"
                  data-target="#block_categories_toggle"
                  data-toggle="collapse"
                >
                  <a
                    data-id="#"
                    >Sweet Peas</a
                  >
                  <span class="pull-xs-right">
                    <span class="navbar-toggler collapse-icons">
                      <i class="material-icons add">&#xE313;</i>
                      <i class="material-icons remove">&#xE316;</i>
                    </span>
                  </span>
                </h4>
                <div
                  id="block_categories_toggle"
                  class="block_content collapse"
                >
                  <ul class="category-top-menu">
                    <li></li>
                  </ul>
                </div>
              </div>
              <div id="search_filters_wrapper" class="hidden-md-down block" style="margin-right:25px;">
                <div id="search_filter_controls" class="hidden-lg-up">
                  <span id="_mobile_search_filters_clear_all"></span>
                  <button class="btn btn-secondary ok">
                    <i class="material-icons rtl-no-flip">&#xE876;</i>
                    OK
                  </button>
                </div>
                <div id="search_filters">
                  <p class="text-uppercase h6 hidden-sm-down filter-heading">Filter By</p>

                  <section class="facet clearfix">
                    <p class="h6 facet-title hidden-sm-down">Size</p>

                    <div
                      class="title hidden-md-up"
                      data-target="#facet_89795"
                      data-toggle="collapse"
                    >
                      <p class="h6 facet-title">Size</p>
                      <span class="float-xs-right">
                        <span class="navbar-toggler collapse-icons">
                          <i class="material-icons add">&#xE313;</i>
                          <i class="material-icons remove">&#xE316;</i>
                        </span>
                      </span>
                    </div>
                    <ul id="facet_89795" class="collapse">
                      <li>
                        <label class="facet-label" for="facet_input_89795_0">
                          <span class="custom-checkbox">
                            <input
                              id="facet_input_89795_0"
                              type="checkbox"
                            />
                            <span class="ps-shown-by-js"
                              ><i
                                class="
                                  material-icons
                                  rtl-no-flip
                                  checkbox-checked
                                "
                                >&#xE5CA;</i
                              ></span
                            >
                          </span>

                          <a
                            data-id="?id_category=6&amp;controller=category&amp;id_lang=1&amp;q=Size-S"
                            class="_gray-darker search-link js-search-link"
                            rel="nofollow"
                          >
                            S
                            <span class="magnitude">(4)</span>
                          </a>
                        </label>
                      </li>
                      <li>
                        <label class="facet-label" for="facet_input_89795_1">
                          <span class="custom-checkbox">
                            <input
                              id="facet_input_89795_1"
                              data-search-url="?id_category=6&amp;controller=category&amp;id_lang=1&amp;q=Size-M"
                              type="checkbox"
                            />
                            <span class="ps-shown-by-js"
                              ><i
                                class="
                                  material-icons
                                  rtl-no-flip
                                  checkbox-checked
                                "
                                >&#xE5CA;</i
                              ></span
                            >
                          </span>

                          <a
                            data-id="?id_category=6&amp;controller=category&amp;id_lang=1&amp;q=Size-M"
                            class="_gray-darker search-link js-search-link"
                            rel="nofollow"
                          >
                            M
                            <span class="magnitude">(7)</span>
                          </a>
                        </label>
                      </li>
                      <li>
                        <label class="facet-label" for="facet_input_89795_2">
                          <span class="custom-checkbox">
                            <input
                              id="facet_input_89795_2"
                              data-search-url="?id_category=6&amp;controller=category&amp;id_lang=1&amp;q=Size-L"
                              type="checkbox"
                            />
                            <span class="ps-shown-by-js"
                              ><i
                                class="
                                  material-icons
                                  rtl-no-flip
                                  checkbox-checked
                                "
                                >&#xE5CA;</i
                              ></span
                            >
                          </span>

                          <a
                            data-id="?id_category=6&amp;controller=category&amp;id_lang=1&amp;q=Size-L"
                            class="_gray-darker search-link js-search-link"
                            rel="nofollow"
                          >
                            L
                            <span class="magnitude">(7)</span>
                          </a>
                        </label>
                      </li>
                      <li>
                        <label class="facet-label" for="facet_input_89795_3">
                          <span class="custom-checkbox">
                            <input
                              id="facet_input_89795_3"
                              data-search-url="?id_category=6&amp;controller=category&amp;id_lang=1&amp;q=Size-XL"
                              type="checkbox"
                            />
                            <span class="ps-shown-by-js"
                              ><i
                                class="
                                  material-icons
                                  rtl-no-flip
                                  checkbox-checked
                                "
                                >&#xE5CA;</i
                              ></span
                            >
                          </span>

                          <a
                            data-id="?id_category=6&amp;controller=category&amp;id_lang=1&amp;q=Size-XL"
                            class="_gray-darker search-link js-search-link"
                            rel="nofollow"
                          >
                            XL
                            <span class="magnitude">(5)</span>
                          </a>
                        </label>
                      </li>
                    </ul>
                  </section>
                  <section class="facet clearfix">
                    <p class="h6 facet-title hidden-sm-down">Price</p>

                    <div
                      class="title hidden-md-up"
                      data-target="#facet_22876"
                      data-toggle="collapse"
                    >
                      <p class="h6 facet-title">Price</p>
                      <span class="float-xs-right">
                        <span class="navbar-toggler collapse-icons">
                          <i class="material-icons add">&#xE313;</i>
                          <i class="material-icons remove">&#xE316;</i>
                        </span>
                      </span>
                    </div>

                    <ul
                      id="facet_22876"
                      class="faceted-slider"
                      data-slider-min="9"
                      data-slider-max="78"
                      data-slider-id="22876"
                      data-slider-values="null"
                      data-slider-unit="$"
                      data-slider-label="Price"
                      data-slider-specifications='{"symbol":[".",",",";","%","-","+","E","\u00d7","\u2030","\u221e","NaN"],"currencyCode":"USD","currencySymbol":"$","positivePattern":"\u00a4#,##0.00","negativePattern":"-\u00a4#,##0.00","maxFractionDigits":2,"minFractionDigits":2,"groupingUsed":true,"primaryGroupSize":3,"secondaryGroupSize":3}'
                      data-slider-encoded-url="?id_category=6&amp;controller=category&amp;id_lang=1"
                    >
                      <li>
                        <p id="facet_label_22876">$9.00 - $78.00</p>

                        <div id="slider-range_22876"></div>
                      </li>
                    </ul>
                  </section>
                </div>
              </div>
              <div id="tmleftbanner" class="block">
                <ul class="hidden-md-down">
                  <li class="slide tmleftbanner-container">
                    <a data-id="#" title="LeftBanner 1">
                      <img
                        class="lazyload"
                        src="https://prestashop.templatemela.com/PRSADD12/PRS295/modules/tm_leftbanner/views/img/left-banner-1.jpg"
                        alt="LeftBanner 1"
                        title="LeftBanner 1"
                      />
                    </a>
                  </li>
                </ul>
                <!-- <div class="block hidden-lg-up">
                  <h4
                    class="block_title hidden-lg-up"
                    data-target="#block_banner1_toggle"
                    data-toggle="collapse"
                  >
                    banner
                    <span class="pull-xs-right">
                      <span class="navbar-toggler collapse-icons">
                        <i class="material-icons add">&#xE313;</i>
                        <i class="material-icons remove">&#xE316;</i>
                      </span>
                    </span>
                  </h4>

                  <div
                    class="col-md-12 col-xs-12 block_content collapse"
                    id="block_banner1_toggle"
                  >
                    <ul>
                      <li class="slide tmleftbanner-container">
                        <a data-id="#" title="LeftBanner 1">
                          <img
                            class="lazyload"
                            data-src="https://prestashop.templatemela.com/PRSADD12/PRS295/modules/tm_leftbanner/views/img/left-banner-1.jpg"
                            alt="LeftBanner 1"
                            title="LeftBanner 1"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div> -->
              </div>
              <!-- <div class="sidebar-latest block">
                <h4 class="block_title hidden-md-down">New Products</h4>
                <h4
                  class="block_title hidden-lg-up"
                  data-target="#block_latest_toggle"
                  data-toggle="collapse"
                >
                  New Products
                  <span class="pull-xs-right">
                    <span class="navbar-toggler collapse-icons">
                      <i class="material-icons add">&#xE313;</i>
                      <i class="material-icons remove">&#xE316;</i>
                    </span>
                  </span>
                </h4>
                <div class="block_content collapse" id="block_latest_toggle">
                  <div class="products clearfix">
                    <div class="product-item">
                      <div class="left-part">
                        <a
                          data-id="?id_product=21&amp;id_product_attribute=162&amp;rewrite=massa-suspendisse&amp;controller=product&amp;id_lang=1#/1-size-s/5-color-grey/19-dimension-40x60cm"
                          class="thumbnail product-thumbnail"
                        >
                          <img
                            class="lazyload"
                            data-src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/1/1/8/118-cart_default.jpg"
                            alt=""
                          />
                        </a>
                      </div>

                      <div class="right-part">
                        <div class="product-description">
                          <span class="h3 product-title" itemprop="name"
                            ><a
                              data-id="?id_product=21&amp;id_product_attribute=162&amp;rewrite=massa-suspendisse&amp;controller=product&amp;id_lang=1#/1-size-s/5-color-grey/19-dimension-40x60cm"
                              >Massa Suspendisse</a
                            ></span
                          >

                          <div class="product-price-and-shipping">
                            <span itemprop="price" class="price">$33.25</span>

                            <span class="discount-percentage">-5%</span>
                            <span class="regular-price">$35.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="product-item">
                      <div class="left-part">
                        <a
                          data-id="?id_product=20&amp;id_product_attribute=118&amp;rewrite=varius-neque-at-enim&amp;controller=product&amp;id_lang=1#/1-size-s/5-color-grey/19-dimension-40x60cm"
                          class="thumbnail product-thumbnail"
                        >
                          <img
                            class="lazyload"
                            data-src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/1/1/7/117-cart_default.jpg"
                            alt=""
                          />
                        </a>
                      </div>

                      <div class="right-part">
                        <div class="product-description">
                          <span class="h3 product-title" itemprop="name"
                            ><a
                              data-id="?id_product=20&amp;id_product_attribute=118&amp;rewrite=varius-neque-at-enim&amp;controller=product&amp;id_lang=1#/1-size-s/5-color-grey/19-dimension-40x60cm"
                              >Vehicula Mauris Blandit</a
                            ></span
                          >

                          <div class="product-price-and-shipping">
                            <span itemprop="price" class="price">$78.90</span>
                            <span class="regular-price">$78.90</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="product-item">
                      <div class="left-part">
                        <a
                          data-id="?id_product=19&amp;id_product_attribute=174&amp;rewrite=customizable-mug&amp;controller=product&amp;id_lang=1#/2-size-m/12-color-camel/19-dimension-40x60cm"
                          class="thumbnail product-thumbnail"
                        >
                          <img
                            class="lazyload"
                            data-src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/1/1/6/116-cart_default.jpg"
                            alt=""
                          />
                        </a>
                      </div>

                      <div class="right-part">
                        <div class="product-description">
                          <span class="h3 product-title" itemprop="name"
                            ><a
                              data-id="?id_product=19&amp;id_product_attribute=174&amp;rewrite=customizable-mug&amp;controller=product&amp;id_lang=1#/2-size-m/12-color-camel/19-dimension-40x60cm"
                              >Donec Semper Tristique</a
                            ></span
                          >

                          <div class="product-price-and-shipping">
                            <span itemprop="price" class="price">$13.90</span>
                            <span class="regular-price">$13.90</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="clearfix">
                    <a
                      data-id="?controller=new-products"
                      class="allproducts btn btn-primary"
                      >All new products</a
                    >
                  </div>
                </div>
              </div> -->
            </div>

            <div class="left-column right-column col-sm-4 col-md-8">
              <nav data-depth="2" class="breadcrumb hidden-sm-down">
                <div class="container" style="margin:10px 0;">
                  <div class="" style="display: inline-block;"><h3>Sweet Peas</h3></div>
                  <ol>
                    <li
                      itemprop="itemListElement"
                      itemscope
                      itemtype="#"
                    >
                      <a
                        itemprop="item"
                        data-id="#"
                      >
                        <span itemprop="name">Home</span>
                      </a>
                      <meta itemprop="position" content="1" />
                    </li>
                    <li
                      itemprop="itemListElement"
                      itemscope
                      itemtype="#"
                    >
                      <a
                        itemprop="item"
                        data-id="#"
                      >
                        <span itemprop="name">Sweet Peas</span>
                      </a>
                      <meta itemprop="position" content="2" />
                    </li>
                  </ol>
                </div>
              </nav>
            </div>

            <div
              id=""
              class="left-column col-xs-12 col-sm-8 col-md-8"
            >
              <section id="main" class="mobile-margin">
                <div class="block-category card card-block">
                  <div class="category-cover">
                    <img
                      src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/c/6-category_default.jpg"
                      alt=""
                    />
                  </div>
                  <!-- <h1 class="h1">Sweet Peas</h1> -->
                  <div id="category-description" class="text-muted">
                    <p>
                      Nunc gavida nisl utrices loborti molis temp tempor quam
                      congue turpis sed psum blandit donec vitae laoreet
                      vestibulum lobortis mattis sapien bero cursus congue urna
                      mauris pretium in adipiscing tellus aliquam.
                    </p>
                  </div>
                </div>

                <section id="products">
                  <div id="">
                    <div
                      id="js-product-list-top"
                      class="row products-selection"
                    >
                      <div class="col-md-6 hidden-md-down total-products">
                        <!-- <ul class="display hidden-xs grid_list">
                          <li id="grid"><a data-id="#" title="Grid">Grid</a></li>
                          <li id="list"><a data-id="#" title="List">List</a></li>
                        </ul> -->

                        <p>There are 20 products.</p>
                      </div>
                      <div class="col-md-6">
                        <div class="row sort-by-row">
                          <span class="col-sm-3 col-md-3 hidden-sm-down sort-by"
                            >Sort by:</span
                          >
                          <div
                            class="
                              col-sm-9 col-xs-8 col-md-9
                              products-sort-order
                              dropdown
                            "
                          >
                            <a
                              class="select-title"
                              rel="nofollow"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Relevance
                              <i class="material-icons pull-xs-right"
                                >&#xE5C5;</i
                              >
                            </a>
                            <div class="dropdown-menu">
                              <a
                                rel="nofollow"
                                data-id="?id_category=6&amp;controller=category&amp;id_lang=1&amp;order=product.position.asc"
                                class="select-list current js-search-link"
                              >
                                Relevance
                              </a>
                              <a
                                rel="nofollow"
                                data-id="?id_category=6&amp;controller=category&amp;id_lang=1&amp;order=product.name.asc"
                                class="select-list js-search-link"
                              >
                                Name, A to Z
                              </a>
                              <a
                                rel="nofollow"
                                data-id="?id_category=6&amp;controller=category&amp;id_lang=1&amp;order=product.name.desc"
                                class="select-list js-search-link"
                              >
                                Name, Z to A
                              </a>
                              <a
                                rel="nofollow"
                                data-id="?id_category=6&amp;controller=category&amp;id_lang=1&amp;order=product.price.asc"
                                class="select-list js-search-link"
                              >
                                Price, low to high
                              </a>
                              <a
                                rel="nofollow"
                                data-id="?id_category=6&amp;controller=category&amp;id_lang=1&amp;order=product.price.desc"
                                class="select-list js-search-link"
                              >
                                Price, high to low
                              </a>
                            </div>
                          </div>

                          <div
                            class="col-sm-3 col-xs-4 hidden-lg-up filter-button"
                          >
                            <button
                              id="search_filter_toggler"
                              class="btn btn-secondary btn-primary"
                            >
                              Filter
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-12 hidden-lg-up showing">
                        Showing 1-12 of 20 item(s)
                      </div>
                    </div>
                  </div>

                  <div id="" class="hidden-sm-down">
                    <section id="js-active-search-filters" class="hide">
                      <h1 class="h6 hidden-xs-up">Active filters</h1>
                    </section>
                  </div>

                  <div id="">
                    <div id="js-product-list">
                      <div id="spe_res">
                        <div class="products">
                          <ul class="product_list grid gridcount">
                            <!-- removed product_grid-->

                            <li
                              class="
                                product_item
                                col-xs-12 col-sm-6 col-md-6 col-lg-3
                              "
                            >
                              <div
                                class="product-miniature js-product-miniature"
                              >
                                <div class="row">
                                  <div class="thumbnail-container">
                                    <router-link :to="{ name: 'productDetail'}" class="thumbnail product-thumbnail">
                                      <img
                                        class="img_main"
                                        src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/5/4/54-home_default.jpg"
                                        alt="Arcu Vitae Imperdiet Facilisis"
                                        data-full-size-image-url="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/5/4/54-large_default.jpg"
                                      />
                                      <img
                                        class="
                                          replace-2x
                                          img_1 img-responsive
                                          lazyload
                                        "
                                        data-src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/5/9/59-home_default.jpg"
                                        data-full-size-image-url="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/5/9/59-large_default.jpg"
                                        alt=""
                                      />
                                    </router-link>

                                    <div class="hover-block">
                                      <div class="wishlist">
                                        <a
                                          class="
                                            st-wishlist-button
                                            btn-product btn
                                          "
                                          data-id="#"
                                          data-id-wishlist=""
                                          data-id-product="7"
                                          data-id-product-attribute="146"
                                          title="Add to Wishlist"
                                        >
                                          <span class="st-wishlist-bt-content">
                                            <i
                                              class="fa fa-heart"
                                              aria-hidden="true"
                                            ></i>
                                            Add to Wishlist
                                          </span>
                                        </a>
                                      </div>
                                    </div>
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

                                    <h3
                                      class="h3 product-title"
                                      itemprop="name"
                                    >
                                      <a
                                        data-id="?id_product=7&amp;id_product_attribute=146&amp;rewrite=mug-the-adventure-begins&amp;controller=product&amp;id_lang=1#/2-size-m/5-color-grey/19-dimension-40x60cm"
                                        >Arcu Vitae Imperdiet Facilisis</a
                                      >
                                    </h3>

                                    <div class="product-price-and-shipping">
                                      <span itemprop="price" class="price"
                                        >$11.90</span
                                      >
                                    </div>

                                    <div
                                      class="product-detail"
                                      itemprop="description"
                                    >
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Sed at ante. Mauris
                                        eleifend, quam a vulputate dictum, massa
                                        quam dapibus leo, eget vulputate orci
                                        purus ut lorem. In fringilla mi in
                                        ligula.
                                      </p>
                                    </div>

                                    <div
                                      class="
                                        highlighted-informations
                                        hidden-sm-down
                                      "
                                    >
                                      <div class="variant-links">
                                        <a
                                          data-id="?id_product=7&amp;id_product_attribute=146&amp;rewrite=mug-the-adventure-begins&amp;controller=product&amp;id_lang=1#/2-size-m/5-color-grey/19-dimension-40x60cm"
                                          class="color"
                                          title="Grey"
                                          style="background-color: #aab2bd"
                                          ><span class="sr-only">Grey</span></a
                                        >
                                        <a
                                          data-id="?id_product=7&amp;id_product_attribute=148&amp;rewrite=mug-the-adventure-begins&amp;controller=product&amp;id_lang=1#/2-size-m/6-color-taupe/19-dimension-40x60cm"
                                          class="color"
                                          title="Taupe"
                                          style="background-color: #cfc4a6"
                                          ><span class="sr-only">Taupe</span></a
                                        >
                                        <a
                                          data-id="?id_product=7&amp;id_product_attribute=150&amp;rewrite=mug-the-adventure-begins&amp;controller=product&amp;id_lang=1#/2-size-m/15-color-green/19-dimension-40x60cm"
                                          class="color"
                                          title="Green"
                                          style="background-color: #a0d468"
                                          ><span class="sr-only">Green</span></a
                                        >
                                        <a
                                          data-id="?id_product=7&amp;id_product_attribute=152&amp;rewrite=mug-the-adventure-begins&amp;controller=product&amp;id_lang=1#/2-size-m/16-color-yellow/19-dimension-40x60cm"
                                          class="color"
                                          title="Yellow"
                                          style="background-color: #f1c40f"
                                          ><span class="sr-only"
                                            >Yellow</span
                                          ></a
                                        >
                                        <span class="js-count count"></span>
                                      </div>
                                    </div>

                                    <div class="product-actions-main">
                                      <a
                                        data-id="?id_product=7&amp;id_product_attribute=146&amp;rewrite=mug-the-adventure-begins&amp;controller=product&amp;id_lang=1#/2-size-m/5-color-grey/19-dimension-40x60cm"
                                        class="btn btn-primary view_detail"
                                      >
                                        View Detail
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>

                            <li
                              class="
                                product_item
                                col-xs-12 col-sm-6 col-md-6 col-lg-3
                              "
                            >
                              <div
                                class="product-miniature js-product-miniature"
                                data-id-product="8"
                                data-id-product-attribute="128"
                                itemscope
                                itemtype="http://schema.org/Product"
                              >
                                <div class="row">
                                  <div class="thumbnail-container">
                                                                       <router-link :to="{ name: 'productDetail'}" class="thumbnail product-thumbnail">
<img
                                        class="img_main"
                                        src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/5/5/55-home_default.jpg"
                                        alt="Sem Nec Tristique Tempus"
                                        data-full-size-image-url="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/5/5/55-large_default.jpg"
                                      />
                                      <img
                                        class="
                                          replace-2x
                                          img_1 img-responsive
                                          lazyload
                                        "
                                        data-src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/6/4/64-home_default.jpg"
                                        data-full-size-image-url="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/6/4/64-large_default.jpg"
                                        alt=""
                                      />
                                    </router-link>

                                    <div class="hover-block">
                                      <div class="wishlist">
                                        <a
                                          class="
                                            st-wishlist-button
                                            btn-product btn
                                          "
                                          data-id="#"
                                          data-id-wishlist=""
                                          data-id-product="7"
                                          data-id-product-attribute="146"
                                          title="Add to Wishlist"
                                        >
                                          <span class="st-wishlist-bt-content">
                                            <i
                                              class="fa fa-heart"
                                              aria-hidden="true"
                                            ></i>
                                            Add to Wishlist
                                          </span>
                                        </a>
                                      </div>
                                    </div>

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

                                    <h3
                                      class="h3 product-title"
                                      itemprop="name"
                                    >
                                      <a
                                        data-id="?id_product=8&amp;id_product_attribute=128&amp;rewrite=mug-today-is-a-good-day&amp;controller=product&amp;id_lang=1#/2-size-m/13-color-orange/19-dimension-40x60cm"
                                        >Sem Nec Tristique Tempus</a
                                      >
                                    </h3>

                                    <div class="product-price-and-shipping">
                                      <span itemprop="price" class="price"
                                        >$11.90</span
                                      >
                                    </div>

                                    <div
                                      class="product-detail"
                                      itemprop="description"
                                    >
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Sed at ante. Mauris
                                        eleifend, quam a vulputate dictum, massa
                                        quam dapibus leo, eget vulputate orci
                                        purus ut lorem. In fringilla mi in
                                        ligula.
                                      </p>
                                    </div>

                                    <div
                                      class="
                                        highlighted-informations
                                        hidden-sm-down
                                      "
                                    >
                                      <div class="variant-links">
                                        <a
                                          data-id="?id_product=8&amp;id_product_attribute=128&amp;rewrite=mug-today-is-a-good-day&amp;controller=product&amp;id_lang=1#/2-size-m/13-color-orange/19-dimension-40x60cm"
                                          class="color"
                                          title="Orange"
                                          style="background-color: #f39c11"
                                          ><span class="sr-only"
                                            >Orange</span
                                          ></a
                                        >
                                        <a
                                          data-id="?id_product=8&amp;id_product_attribute=131&amp;rewrite=mug-today-is-a-good-day&amp;controller=product&amp;id_lang=1#/2-size-m/14-color-blue/19-dimension-40x60cm"
                                          class="color"
                                          title="Blue"
                                          style="background-color: #5d9cec"
                                          ><span class="sr-only">Blue</span></a
                                        >
                                        <a
                                          data-id="?id_product=8&amp;id_product_attribute=134&amp;rewrite=mug-today-is-a-good-day&amp;controller=product&amp;id_lang=1#/2-size-m/15-color-green/19-dimension-40x60cm"
                                          class="color"
                                          title="Green"
                                          style="background-color: #a0d468"
                                          ><span class="sr-only">Green</span></a
                                        >
                                        <span class="js-count count"></span>
                                      </div>
                                    </div>

                                    <div class="product-actions-main">
                                      <a
                                        data-id="?id_product=8&amp;id_product_attribute=128&amp;rewrite=mug-today-is-a-good-day&amp;controller=product&amp;id_lang=1#/2-size-m/13-color-orange/19-dimension-40x60cm"
                                        class="btn btn-primary view_detail"
                                      >
                                        View Detail
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>

                            <li
                              class="
                                product_item
                                col-xs-12 col-sm-6 col-md-6 col-lg-3
                              "
                            >
                              <div
                                class="product-miniature js-product-miniature"
                                data-id-product="10"
                                data-id-product-attribute="24"
                                itemscope
                                itemtype="http://schema.org/Product"
                              >
                                <div class="row">
                                  <div class="thumbnail-container">
                                   <router-link :to="{ name: 'productDetail'}" class="thumbnail product-thumbnail">
                                      <img
                                        class="img_main"
                                        src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/5/7/57-home_default.jpg"
                                        alt="Nascetur ridiculus mus"
                                        data-full-size-image-url="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/5/7/57-large_default.jpg"
                                      />
                                      <img
                                        class="
                                          replace-2x
                                          img_1 img-responsive
                                          lazyload
                                        "
                                        data-src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/7/4/74-home_default.jpg"
                                        data-full-size-image-url="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/7/4/74-large_default.jpg"
                                        alt=""
                                      />
                                    </router-link>

                                     <div class="hover-block">
                                      <div class="wishlist">
                                        <a
                                          class="
                                            st-wishlist-button
                                            btn-product btn
                                          "
                                          data-id="#"
                                          data-id-wishlist=""
                                          data-id-product="7"
                                          data-id-product-attribute="146"
                                          title="Add to Wishlist"
                                        >
                                          <span class="st-wishlist-bt-content">
                                            <i
                                              class="fa fa-heart"
                                              aria-hidden="true"
                                            ></i>
                                            Add to Wishlist
                                          </span>
                                        </a>
                                      </div>
                                    </div>

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

                                    <h3
                                      class="h3 product-title"
                                      itemprop="name"
                                    >
                                      <a
                                        data-id="?id_product=10&amp;id_product_attribute=24&amp;rewrite=brown-bear-cushion&amp;controller=product&amp;id_lang=1#/8-color-white"
                                        >Nascetur ridiculus mus</a
                                      >
                                    </h3>

                                    <div class="product-price-and-shipping">
                                      <span itemprop="price" class="price"
                                        >$18.90</span
                                      >
                                    </div>

                                    <div
                                      class="product-detail"
                                      itemprop="description"
                                    >
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Sed at ante. Mauris
                                        eleifend, quam a vulputate dictum, massa
                                        quam dapibus leo, eget vulputate orci
                                        purus ut lorem. In fringilla mi in
                                        ligula.
                                      </p>
                                    </div>

                                    <div
                                      class="
                                        highlighted-informations
                                        hidden-sm-down
                                      "
                                    >
                                      <div class="variant-links">
                                        <a
                                          data-id="?id_product=10&amp;id_product_attribute=24&amp;rewrite=brown-bear-cushion&amp;controller=product&amp;id_lang=1#/8-color-white"
                                          class="color"
                                          title="White"
                                          style="background-color: #ffffff"
                                          ><span class="sr-only">White</span></a
                                        >
                                        <a
                                          data-id="?id_product=10&amp;id_product_attribute=25&amp;rewrite=brown-bear-cushion&amp;controller=product&amp;id_lang=1#/11-color-black"
                                          class="color"
                                          title="Black"
                                          style="background-color: #434a54"
                                          ><span class="sr-only">Black</span></a
                                        >
                                        <span class="js-count count"></span>
                                      </div>
                                    </div>

                                    <div class="product-actions-main">
                                      <a
                                        data-id="?id_product=10&amp;id_product_attribute=24&amp;rewrite=brown-bear-cushion&amp;controller=product&amp;id_lang=1#/8-color-white"
                                        class="btn btn-primary view_detail"
                                      >
                                        View Detail
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>

                            <li
                              class="
                                product_item
                                col-xs-12 col-sm-6 col-md-6 col-lg-3
                              "
                            >
                              <div
                                class="product-miniature js-product-miniature"
                                data-id-product="9"
                                data-id-product-attribute="22"
                                itemscope
                                itemtype="http://schema.org/Product"
                              >
                                <div class="row">
                                  <div class="thumbnail-container">
                                                                      <router-link :to="{ name: 'productDetail'}" class="thumbnail product-thumbnail">

                                      <img
                                        class="img_main"
                                        src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/5/6/56-home_default.jpg"
                                        alt="Nascetur ridiculus mus"
                                        data-full-size-image-url="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/5/6/56-large_default.jpg"
                                      />
                                      <img
                                        class="
                                          replace-2x
                                          img_1 img-responsive
                                          lazyload
                                        "
                                        data-src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/6/9/69-home_default.jpg"
                                        data-full-size-image-url="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/6/9/69-large_default.jpg"
                                        alt=""
                                      />
                                    </router-link>

                                     <div class="hover-block">
                                      <div class="wishlist">
                                        <a
                                          class="
                                            st-wishlist-button
                                            btn-product btn
                                          "
                                          data-id="#"
                                          data-id-wishlist=""
                                          data-id-product="7"
                                          data-id-product-attribute="146"
                                          title="Add to Wishlist"
                                        >
                                          <span class="st-wishlist-bt-content">
                                            <i
                                              class="fa fa-heart"
                                              aria-hidden="true"
                                            ></i>
                                            Add to Wishlist
                                          </span>
                                        </a>
                                      </div>
                                    </div>

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

                                    <h3
                                      class="h3 product-title"
                                      itemprop="name"
                                    >
                                      <a
                                        data-id="?id_product=9&amp;id_product_attribute=22&amp;rewrite=mountain-fox-cushion&amp;controller=product&amp;id_lang=1#/8-color-white"
                                        >Nascetur ridiculus mus</a
                                      >
                                    </h3>

                                    <div class="product-price-and-shipping">
                                      <span itemprop="price" class="price"
                                        >$18.90</span
                                      >
                                    </div>

                                    <div
                                      class="product-detail"
                                      itemprop="description"
                                    >
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Sed at ante. Mauris
                                        eleifend, quam a vulputate dictum, massa
                                        quam dapibus leo, eget vulputate orci
                                        purus ut lorem. In fringilla mi in
                                        ligula.
                                      </p>
                                    </div>

                                    <div
                                      class="
                                        highlighted-informations
                                        hidden-sm-down
                                      "
                                    >
                                      <div class="variant-links">
                                        <a
                                          data-id="?id_product=9&amp;id_product_attribute=22&amp;rewrite=mountain-fox-cushion&amp;controller=product&amp;id_lang=1#/8-color-white"
                                          class="color"
                                          title="White"
                                          style="background-color: #ffffff"
                                          ><span class="sr-only">White</span></a
                                        >
                                        <a
                                          data-id="?id_product=9&amp;id_product_attribute=23&amp;rewrite=mountain-fox-cushion&amp;controller=product&amp;id_lang=1#/11-color-black"
                                          class="color"
                                          title="Black"
                                          style="background-color: #434a54"
                                          ><span class="sr-only">Black</span></a
                                        >
                                        <span class="js-count count"></span>
                                      </div>
                                    </div>

                                    <div class="product-actions-main">
                                      <a
                                        data-id="?id_product=9&amp;id_product_attribute=22&amp;rewrite=mountain-fox-cushion&amp;controller=product&amp;id_lang=1#/8-color-white"
                                        class="btn btn-primary view_detail"
                                      >
                                        View Detail
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>

                            <li
                              class="
                                product_item
                                col-xs-12 col-sm-6 col-md-6 col-lg-3
                              "
                            >
                              <div
                                class="product-miniature js-product-miniature"
                                data-id-product="11"
                                data-id-product-attribute="26"
                                itemscope
                                itemtype="http://schema.org/Product"
                              >
                                <div class="row">
                                  <div class="thumbnail-container">
 <router-link :to="{ name: 'productDetail'}" class="thumbnail product-thumbnail">
                                      <img
                                        class="img_main"
                                        src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/5/8/58-home_default.jpg"
                                        alt="Integer Tempor Lacus Eget"
                                        data-full-size-image-url="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/5/8/58-large_default.jpg"
                                      />
                                      <img
                                        class="
                                          replace-2x
                                          img_1 img-responsive
                                          lazyload
                                        "
                                        data-src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/7/9/79-home_default.jpg"
                                        data-full-size-image-url="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/7/9/79-large_default.jpg"
                                        alt=""
                                      />
                                    </router-link>

                                   <div class="hover-block">
                                      <div class="wishlist">
                                        <a
                                          class="
                                            st-wishlist-button
                                            btn-product btn
                                          "
                                          data-id="#"
                                          data-id-wishlist=""
                                          data-id-product="7"
                                          data-id-product-attribute="146"
                                          title="Add to Wishlist"
                                        >
                                          <span class="st-wishlist-bt-content">
                                            <i
                                              class="fa fa-heart"
                                              aria-hidden="true"
                                            ></i>
                                            Add to Wishlist
                                          </span>
                                        </a>
                                      </div>
                                    </div>

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

                                    <h3
                                      class="h3 product-title"
                                      itemprop="name"
                                    >
                                      <a
                                        data-id="?id_product=11&amp;id_product_attribute=26&amp;rewrite=hummingbird-cushion&amp;controller=product&amp;id_lang=1#/8-color-white"
                                        >Integer Tempor Lacus Eget</a
                                      >
                                    </h3>

                                    <div class="product-price-and-shipping">
                                      <span itemprop="price" class="price"
                                        >$18.90</span
                                      >
                                    </div>

                                    <div
                                      class="product-detail"
                                      itemprop="description"
                                    >
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Sed at ante. Mauris
                                        eleifend, quam a vulputate dictum, massa
                                        quam dapibus leo, eget vulputate orci
                                        purus ut lorem. In fringilla mi in
                                        ligula.
                                      </p>
                                    </div>

                                    <div
                                      class="
                                        highlighted-informations
                                        hidden-sm-down
                                      "
                                    >
                                      <div class="variant-links">
                                        <a
                                          data-id="?id_product=11&amp;id_product_attribute=26&amp;rewrite=hummingbird-cushion&amp;controller=product&amp;id_lang=1#/8-color-white"
                                          class="color"
                                          title="White"
                                          style="background-color: #ffffff"
                                          ><span class="sr-only">White</span></a
                                        >
                                        <a
                                          data-id="?id_product=11&amp;id_product_attribute=27&amp;rewrite=hummingbird-cushion&amp;controller=product&amp;id_lang=1#/11-color-black"
                                          class="color"
                                          title="Black"
                                          style="background-color: #434a54"
                                          ><span class="sr-only">Black</span></a
                                        >
                                        <span class="js-count count"></span>
                                      </div>
                                    </div>

                                    <div class="product-actions-main">
                                      <a
                                        data-id="?id_product=11&amp;id_product_attribute=26&amp;rewrite=hummingbird-cushion&amp;controller=product&amp;id_lang=1#/8-color-white"
                                        class="btn btn-primary view_detail"
                                      >
                                        View Detail
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>

                            <li
                              class="
                                product_item
                                col-xs-12 col-sm-6 col-md-6 col-lg-3
                              "
                            >
                              <div
                                class="product-miniature js-product-miniature"
                                data-id-product="15"
                                data-id-product-attribute="0"
                                itemscope
                                itemtype="http://schema.org/Product"
                              >
                                <div class="row">
                                  <div class="thumbnail-container">
                                    <router-link :to="{ name: 'productDetail'}" class="thumbnail product-thumbnail">
                                      <img
                                        class="img_main"
                                        src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/8/7/87-home_default.jpg"
                                        alt="Sunilatiogh Manhingd"
                                        data-full-size-image-url="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/8/7/87-large_default.jpg"
                                      />
                                      <img
                                        class="
                                          replace-2x
                                          img_1 img-responsive
                                          lazyload
                                        "
                                        data-src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/1/0/4/104-home_default.jpg"
                                        data-full-size-image-url="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/1/0/4/104-large_default.jpg"
                                        alt=""
                                      />
                                    </router-link>

                                   <div class="hover-block">
                                      <div class="wishlist">
                                        <a
                                          class="
                                            st-wishlist-button
                                            btn-product btn
                                          "
                                          data-id="#"
                                          data-id-wishlist=""
                                          data-id-product="7"
                                          data-id-product-attribute="146"
                                          title="Add to Wishlist"
                                        >
                                          <span class="st-wishlist-bt-content">
                                            <i
                                              class="fa fa-heart"
                                              aria-hidden="true"
                                            ></i>
                                            Add to Wishlist
                                          </span>
                                        </a>
                                      </div>
                                    </div>

                                    <ul class="product-flags">
                                      <li class="new">New</li>
                                      <li class="pack">Pack</li>
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

                                    <h3
                                      class="h3 product-title"
                                      itemprop="name"
                                    >
                                      <a
                                        data-id="?id_product=15&amp;rewrite=pack-mug-framed-poster&amp;controller=product&amp;id_lang=1"
                                        >Sunilatiogh Manhingd</a
                                      >
                                    </h3>

                                    <div class="product-price-and-shipping">
                                      <span itemprop="price" class="price"
                                        >$35.00</span
                                      >
                                    </div>

                                    <div
                                      class="product-detail"
                                      itemprop="description"
                                    >
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Sed at ante. Mauris
                                        eleifend, quam a vulputate dictum, massa
                                        quam dapibus leo, eget vulputate orci
                                        purus ut lorem. In fringilla mi in
                                        ligula.
                                      </p>
                                    </div>

                                    <div
                                      class="
                                        highlighted-informations
                                        no-variants
                                        hidden-sm-down
                                      "
                                    ></div>

                                    <div class="product-actions-main">
                                      <a
                                        data-id="?id_product=15&amp;rewrite=pack-mug-framed-poster&amp;controller=product&amp;id_lang=1"
                                        class="btn btn-primary view_detail"
                                      >
                                        View Detail
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>

                            <li
                              class="
                                product_item
                                col-xs-12 col-sm-6 col-md-6 col-lg-3
                              "
                            >
                              <div
                                class="product-miniature js-product-miniature"
                                data-id-product="16"
                                data-id-product-attribute="28"
                                itemscope
                                itemtype="http://schema.org/Product"
                              >
                                <div class="row">
                                  <div class="thumbnail-container">
                                    <router-link :to="{ name: 'productDetail'}" class="thumbnail product-thumbnail">

                                      <img
                                        class="img_main"
                                        src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/8/8/88-home_default.jpg"
                                        alt="Aminatiom Descentation"
                                        data-full-size-image-url="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/8/8/88-large_default.jpg"
                                      />
                                      <img
                                        class="
                                          replace-2x
                                          img_1 img-responsive
                                          lazyload
                                        "
                                        data-src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/1/0/9/109-home_default.jpg"
                                        data-full-size-image-url="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/1/0/9/109-large_default.jpg"
                                        alt=""
                                      />
                                    </router-link>

                                    <div class="hover-block">
                                      <div class="wishlist">
                                        <a
                                          class="
                                            st-wishlist-button
                                            btn-product btn
                                          "
                                          data-id="#"
                                          data-id-wishlist=""
                                          data-id-product="7"
                                          data-id-product-attribute="146"
                                          title="Add to Wishlist"
                                        >
                                          <span class="st-wishlist-bt-content">
                                            <i
                                              class="fa fa-heart"
                                              aria-hidden="true"
                                            ></i>
                                            Add to Wishlist
                                          </span>
                                        </a>
                                      </div>
                                    </div>
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

                                    <h3
                                      class="h3 product-title"
                                      itemprop="name"
                                    >
                                      <a
                                        data-id="?id_product=16&amp;id_product_attribute=28&amp;rewrite=mountain-fox-notebook&amp;controller=product&amp;id_lang=1#/22-paper_type-ruled"
                                        >Aminatiom Descentation</a
                                      >
                                    </h3>

                                    <div class="product-price-and-shipping">
                                      <span itemprop="price" class="price"
                                        >$12.90</span
                                      >
                                    </div>

                                    <div
                                      class="product-detail"
                                      itemprop="description"
                                    >
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Sed at ante. Mauris
                                        eleifend, quam a vulputate dictum, massa
                                        quam dapibus leo, eget vulputate orci
                                        purus ut lorem. In fringilla mi in
                                        ligula.
                                      </p>
                                    </div>

                                    <div
                                      class="
                                        highlighted-informations
                                        no-variants
                                        hidden-sm-down
                                      "
                                    ></div>

                                    <div class="product-actions-main">
                                      <a
                                        data-id="?id_product=16&amp;id_product_attribute=28&amp;rewrite=mountain-fox-notebook&amp;controller=product&amp;id_lang=1#/22-paper_type-ruled"
                                        class="btn btn-primary view_detail"
                                      >
                                        View Detail
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>

                            <li
                              class="
                                product_item
                                col-xs-12 col-sm-6 col-md-6 col-lg-3
                              "
                            >
                              <div
                                class="product-miniature js-product-miniature"
                                data-id-product="17"
                                data-id-product-attribute="32"
                                itemscope
                                itemtype="http://schema.org/Product"
                              >
                                <div class="row">
                                  <div class="thumbnail-container">
                                                                      <router-link :to="{ name: 'productDetail'}" class="thumbnail product-thumbnail">

                                      <img
                                        class="img_main"
                                        src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/1/1/4/114-home_default.jpg"
                                        alt="Foramationdi Venkash"
                                        data-full-size-image-url="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/1/1/4/114-large_default.jpg"
                                      />
                                      <img
                                        class="
                                          replace-2x
                                          img_1 img-responsive
                                          lazyload
                                        "
                                        data-src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/1/1/9/119-home_default.jpg"
                                        data-full-size-image-url="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/1/1/9/119-large_default.jpg"
                                        alt=""
                                      />
                                    </router-link>

                                    <div class="hover-block">
                                      <div class="wishlist">
                                        <a
                                          class="
                                            st-wishlist-button
                                            btn-product btn
                                          "
                                          data-id="#"
                                          data-id-wishlist=""
                                          data-id-product="7"
                                          data-id-product-attribute="146"
                                          title="Add to Wishlist"
                                        >
                                          <span class="st-wishlist-bt-content">
                                            <i
                                              class="fa fa-heart"
                                              aria-hidden="true"
                                            ></i>
                                            Add to Wishlist
                                          </span>
                                        </a>
                                      </div>
                                    </div>

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

                                    <h3
                                      class="h3 product-title"
                                      itemprop="name"
                                    >
                                      <a
                                        data-id="?id_product=17&amp;id_product_attribute=32&amp;rewrite=brown-bear-notebook&amp;controller=product&amp;id_lang=1#/22-paper_type-ruled"
                                        >Foramationdi Venkash</a
                                      >
                                    </h3>

                                    <div class="product-price-and-shipping">
                                      <span itemprop="price" class="price"
                                        >$12.90</span
                                      >
                                    </div>

                                    <div
                                      class="product-detail"
                                      itemprop="description"
                                    >
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Sed at ante. Mauris
                                        eleifend, quam a vulputate dictum, massa
                                        quam dapibus leo, eget vulputate orci
                                        purus ut lorem. In fringilla mi in
                                        ligula.
                                      </p>
                                    </div>

                                    <div
                                      class="
                                        highlighted-informations
                                        no-variants
                                        hidden-sm-down
                                      "
                                    ></div>

                                    <div class="product-actions-main">
                                      <a
                                        data-id="?id_product=17&amp;id_product_attribute=32&amp;rewrite=brown-bear-notebook&amp;controller=product&amp;id_lang=1#/22-paper_type-ruled"
                                        class="btn btn-primary view_detail"
                                      >
                                        View Detail
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>

                            <li
                              class="
                                product_item
                                col-xs-12 col-sm-6 col-md-6 col-lg-3
                              "
                            >
                              <div
                                class="product-miniature js-product-miniature"
                                data-id-product="18"
                                data-id-product-attribute="36"
                                itemscope
                                itemtype="http://schema.org/Product"
                              >
                                <div class="row">
                                  <div class="thumbnail-container">
                                <router-link :to="{ name: 'productDetail'}" class="thumbnail product-thumbnail">
                                      <img
                                        class="img_main"
                                        src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/1/1/5/115-home_default.jpg"
                                        alt="Dishacentrupr Jenghing"
                                        data-full-size-image-url="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/1/1/5/115-large_default.jpg"
                                      />
                                      <img
                                        class="
                                          replace-2x
                                          img_1 img-responsive
                                          lazyload
                                        "
                                        data-src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/1/2/3/123-home_default.jpg"
                                        data-full-size-image-url="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/1/2/3/123-large_default.jpg"
                                        alt=""
                                      />
                                    </router-link>

                                    <div class="hover-block">
                                      <div class="wishlist">
                                        <a
                                          class="
                                            st-wishlist-button
                                            btn-product btn
                                          "
                                          data-id="#"
                                          data-id-wishlist=""
                                          data-id-product="7"
                                          data-id-product-attribute="146"
                                          title="Add to Wishlist"
                                        >
                                          <span class="st-wishlist-bt-content">
                                            <i
                                              class="fa fa-heart"
                                              aria-hidden="true"
                                            ></i>
                                            Add to Wishlist
                                          </span>
                                        </a>
                                      </div>
                                    </div>

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

                                    <h3
                                      class="h3 product-title"
                                      itemprop="name"
                                    >
                                      <a
                                        data-id="?id_product=18&amp;id_product_attribute=36&amp;rewrite=hummingbird-notebook&amp;controller=product&amp;id_lang=1#/22-paper_type-ruled"
                                        >Dishacentrupr Jenghing</a
                                      >
                                    </h3>

                                    <div class="product-price-and-shipping">
                                      <span itemprop="price" class="price"
                                        >$12.90</span
                                      >
                                    </div>

                                    <div
                                      class="product-detail"
                                      itemprop="description"
                                    >
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Sed at ante. Mauris
                                        eleifend, quam a vulputate dictum, massa
                                        quam dapibus leo, eget vulputate orci
                                        purus ut lorem. In fringilla mi in
                                        ligula.
                                      </p>
                                    </div>

                                    <div
                                      class="
                                        highlighted-informations
                                        no-variants
                                        hidden-sm-down
                                      "
                                    ></div>

                                    <div class="product-actions-main">
                                      <a
                                        data-id="?id_product=18&amp;id_product_attribute=36&amp;rewrite=hummingbird-notebook&amp;controller=product&amp;id_lang=1#/22-paper_type-ruled"
                                        class="btn btn-primary view_detail"
                                      >
                                        View Detail
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>

                            <li
                              class="
                                product_item
                                col-xs-12 col-sm-6 col-md-6 col-lg-3
                              "
                            >
                              <div
                                class="product-miniature js-product-miniature"
                                data-id-product="19"
                                data-id-product-attribute="174"
                                itemscope
                                itemtype="http://schema.org/Product"
                              >
                                <div class="row">
                                  <div class="thumbnail-container">
                                                                   <router-link :to="{ name: 'productDetail'}" class="thumbnail product-thumbnail">

                                      <img
                                        class="img_main"
                                        src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/1/1/6/116-home_default.jpg"
                                        alt="Donec Semper Tristique"
                                        data-full-size-image-url="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/1/1/6/116-large_default.jpg"
                                      />
                                      <img
                                        class="
                                          replace-2x
                                          img_1 img-responsive
                                          lazyload
                                        "
                                        data-src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/1/2/9/129-home_default.jpg"
                                        data-full-size-image-url="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/1/2/9/129-large_default.jpg"
                                        alt=""
                                      />
                                    </router-link>

                                   <div class="hover-block">
                                      <div class="wishlist">
                                        <a
                                          class="
                                            st-wishlist-button
                                            btn-product btn
                                          "
                                          data-id="#"
                                          data-id-wishlist=""
                                          data-id-product="7"
                                          data-id-product-attribute="146"
                                          title="Add to Wishlist"
                                        >
                                          <span class="st-wishlist-bt-content">
                                            <i
                                              class="fa fa-heart"
                                              aria-hidden="true"
                                            ></i>
                                            Add to Wishlist
                                          </span>
                                        </a>
                                      </div>
                                    </div>

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

                                    <h3
                                      class="h3 product-title"
                                      itemprop="name"
                                    >
                                      <a
                                        data-id="?id_product=19&amp;id_product_attribute=174&amp;rewrite=customizable-mug&amp;controller=product&amp;id_lang=1#/2-size-m/12-color-camel/19-dimension-40x60cm"
                                        >Donec Semper Tristique</a
                                      >
                                    </h3>

                                    <div class="product-price-and-shipping">
                                      <span itemprop="price" class="price"
                                        >$13.90</span
                                      >
                                    </div>

                                    <div
                                      class="product-detail"
                                      itemprop="description"
                                    >
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Sed at ante. Mauris
                                        eleifend, quam a vulputate dictum, massa
                                        quam dapibus leo, eget vulputate orci
                                        purus ut lorem. In fringilla mi in
                                        ligula.
                                      </p>
                                    </div>

                                    <div
                                      class="
                                        highlighted-informations
                                        hidden-sm-down
                                      "
                                    >
                                      <div class="variant-links">
                                        <a
                                          data-id="?id_product=19&amp;id_product_attribute=174&amp;rewrite=customizable-mug&amp;controller=product&amp;id_lang=1#/2-size-m/12-color-camel/19-dimension-40x60cm"
                                          class="color"
                                          title="Camel"
                                          style="background-color: #c19a6b"
                                          ><span class="sr-only">Camel</span></a
                                        >
                                        <a
                                          data-id="?id_product=19&amp;id_product_attribute=176&amp;rewrite=customizable-mug&amp;controller=product&amp;id_lang=1#/2-size-m/13-color-orange/19-dimension-40x60cm"
                                          class="color"
                                          title="Orange"
                                          style="background-color: #f39c11"
                                          ><span class="sr-only"
                                            >Orange</span
                                          ></a
                                        >
                                        <a
                                          data-id="?id_product=19&amp;id_product_attribute=178&amp;rewrite=customizable-mug&amp;controller=product&amp;id_lang=1#/2-size-m/14-color-blue/19-dimension-40x60cm"
                                          class="color"
                                          title="Blue"
                                          style="background-color: #5d9cec"
                                          ><span class="sr-only">Blue</span></a
                                        >
                                        <span class="js-count count"></span>
                                      </div>
                                    </div>

                                    <div class="product-actions-main">
                                      <a
                                        data-id="?id_product=19&amp;id_product_attribute=174&amp;rewrite=customizable-mug&amp;controller=product&amp;id_lang=1#/2-size-m/12-color-camel/19-dimension-40x60cm"
                                        class="btn btn-primary view_detail"
                                      >
                                        View Detail
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>

                            <li
                              class="
                                product_item
                                col-xs-12 col-sm-6 col-md-6 col-lg-3
                              "
                            >
                              <div
                                class="product-miniature js-product-miniature"
                                data-id-product="1"
                                data-id-product-attribute="1"
                                itemscope
                                itemtype="http://schema.org/Product"
                              >
                                <div class="row">
                                  <div class="thumbnail-container">
      <router-link :to="{ name: 'productDetail'}" class="thumbnail product-thumbnail">

                                      <img
                                        class="img_main"
                                        src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/2/4/24-home_default.jpg"
                                        alt="Curabitur Dolor Nunc"
                                        data-full-size-image-url="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/2/4/24-large_default.jpg"
                                      />
                                      <img
                                        class="
                                          replace-2x
                                          img_1 img-responsive
                                          lazyload
                                        "
                                        data-src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/2/9/29-home_default.jpg"
                                        data-full-size-image-url="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/2/9/29-large_default.jpg"
                                        alt=""
                                      />
                                    </router-link>

                                    <div class="hover-block">
                                      <div class="wishlist">
                                        <a
                                          class="
                                            st-wishlist-button
                                            btn-product btn
                                          "
                                          data-id="#"
                                          data-id-wishlist=""
                                          data-id-product="7"
                                          data-id-product-attribute="146"
                                          title="Add to Wishlist"
                                        >
                                          <span class="st-wishlist-bt-content">
                                            <i
                                              class="fa fa-heart"
                                              aria-hidden="true"
                                            ></i>
                                            Add to Wishlist
                                          </span>
                                        </a>
                                      </div>
                                    </div>

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

                                    <h3
                                      class="h3 product-title"
                                      itemprop="name"
                                    >
                                      <a
                                        data-id="?id_product=1&amp;id_product_attribute=1&amp;rewrite=hummingbird-printed-t-shirt&amp;controller=product&amp;id_lang=1#/1-size-s/8-color-white"
                                        >Curabitur Dolor Nunc</a
                                      >
                                    </h3>

                                    <div class="product-price-and-shipping">
                                      <span itemprop="price" class="price"
                                        >$23.90</span
                                      >
                                    </div>

                                    <div
                                      class="product-detail"
                                      itemprop="description"
                                    >
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Sed at ante. Mauris
                                        eleifend, quam a vulputate dictum, massa
                                        quam dapibus leo, eget vulputate orci
                                        purus ut lorem. In fringilla mi in
                                        ligula.
                                      </p>
                                    </div>

                                    <div
                                      class="
                                        highlighted-informations
                                        hidden-sm-down
                                      "
                                    >
                                      <div class="variant-links">
                                        <a
                                          data-id="?id_product=1&amp;id_product_attribute=1&amp;rewrite=hummingbird-printed-t-shirt&amp;controller=product&amp;id_lang=1#/1-size-s/8-color-white"
                                          class="color"
                                          title="White"
                                          style="background-color: #ffffff"
                                          ><span class="sr-only">White</span></a
                                        >
                                        <a
                                          data-id="?id_product=1&amp;id_product_attribute=2&amp;rewrite=hummingbird-printed-t-shirt&amp;controller=product&amp;id_lang=1#/1-size-s/11-color-black"
                                          class="color"
                                          title="Black"
                                          style="background-color: #434a54"
                                          ><span class="sr-only">Black</span></a
                                        >
                                        <span class="js-count count"></span>
                                      </div>
                                    </div>

                                    <div class="product-actions-main">
                                      <a
                                        data-id="?id_product=1&amp;id_product_attribute=1&amp;rewrite=hummingbird-printed-t-shirt&amp;controller=product&amp;id_lang=1#/1-size-s/8-color-white"
                                        class="btn btn-primary view_detail"
                                      >
                                        View Detail
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>

                            <li
                              class="
                                product_item
                                col-xs-12 col-sm-6 col-md-6 col-lg-3
                              "
                            >
                              <div
                                class="product-miniature js-product-miniature"
                                data-id-product="20"
                                data-id-product-attribute="118"
                                itemscope
                                itemtype="http://schema.org/Product"
                              >
                                <div class="row">
                                  <div class="thumbnail-container">
                                         <router-link :to="{ name: 'productDetail'}" class="thumbnail product-thumbnail">
                                      <img
                                        class="img_main"
                                        src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/1/1/7/117-home_default.jpg"
                                        alt="Vehicula Mauris Blandit"
                                        data-full-size-image-url="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/1/1/7/117-large_default.jpg"
                                      />
                                      <img
                                        class="
                                          replace-2x
                                          img_1 img-responsive
                                          lazyload
                                        "
                                        data-src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/1/3/4/134-home_default.jpg"
                                        data-full-size-image-url="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/1/3/4/134-large_default.jpg"
                                        alt=""
                                      />
                                    </router-link>
                                   <div class="hover-block">
                                      <div class="wishlist">
                                        <a
                                          class="
                                            st-wishlist-button
                                            btn-product btn
                                          "
                                          data-id="#"
                                          data-id-wishlist=""
                                          data-id-product="7"
                                          data-id-product-attribute="146"
                                          title="Add to Wishlist"
                                        >
                                          <span class="st-wishlist-bt-content">
                                            <i
                                              class="fa fa-heart"
                                              aria-hidden="true"
                                            ></i>
                                            Add to Wishlist
                                          </span>
                                        </a>
                                      </div>
                                    </div>

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

                                    <h3
                                      class="h3 product-title"
                                      itemprop="name"
                                    >
                                      <a
                                        data-id="?id_product=20&amp;id_product_attribute=118&amp;rewrite=varius-neque-at-enim&amp;controller=product&amp;id_lang=1#/1-size-s/5-color-grey/19-dimension-40x60cm"
                                        >Vehicula Mauris Blandit</a
                                      >
                                    </h3>

                                    <div class="product-price-and-shipping">
                                      <span itemprop="price" class="price"
                                        >$78.90</span
                                      >
                                    </div>

                                    <div
                                      class="product-detail"
                                      itemprop="description"
                                    >
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Sed at ante. Mauris
                                        eleifend, quam a vulputate dictum, massa
                                        quam dapibus leo, eget vulputate orci
                                        purus ut lorem. In fringilla mi in
                                        ligula.
                                      </p>
                                    </div>

                                    <div
                                      class="
                                        highlighted-informations
                                        hidden-sm-down
                                      "
                                    >
                                      <div class="variant-links">
                                        <a
                                          data-id="?id_product=20&amp;id_product_attribute=118&amp;rewrite=varius-neque-at-enim&amp;controller=product&amp;id_lang=1#/1-size-s/5-color-grey/19-dimension-40x60cm"
                                          class="color"
                                          title="Grey"
                                          style="background-color: #aab2bd"
                                          ><span class="sr-only">Grey</span></a
                                        >
                                        <a
                                          data-id="?id_product=20&amp;id_product_attribute=120&amp;rewrite=varius-neque-at-enim&amp;controller=product&amp;id_lang=1#/1-size-s/6-color-taupe/19-dimension-40x60cm"
                                          class="color"
                                          title="Taupe"
                                          style="background-color: #cfc4a6"
                                          ><span class="sr-only">Taupe</span></a
                                        >
                                        <a
                                          data-id="?id_product=20&amp;id_product_attribute=122&amp;rewrite=varius-neque-at-enim&amp;controller=product&amp;id_lang=1#/14-color-blue"
                                          class="color"
                                          title="Blue"
                                          style="background-color: #5d9cec"
                                          ><span class="sr-only">Blue</span></a
                                        >
                                        <a
                                          data-id="?id_product=20&amp;id_product_attribute=123&amp;rewrite=varius-neque-at-enim&amp;controller=product&amp;id_lang=1#/16-color-yellow"
                                          class="color"
                                          title="Yellow"
                                          style="background-color: #f1c40f"
                                          ><span class="sr-only"
                                            >Yellow</span
                                          ></a
                                        >
                                        <span class="js-count count"></span>
                                      </div>
                                    </div>

                                    <div class="product-actions-main">
                                      <a
                                        data-id="?id_product=20&amp;id_product_attribute=118&amp;rewrite=varius-neque-at-enim&amp;controller=product&amp;id_lang=1#/1-size-s/5-color-grey/19-dimension-40x60cm"
                                        class="btn btn-primary view_detail"
                                      >
                                        View Detail
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <nav class="pagination row">
                        <div class="col-md-4">Showing 1-12 of 20 item(s)</div>
                        <div class="col-md-8">
                          <ul class="page-list clearfix text-xs-right">
                            <li class="current">
                              <a
                                rel="nofollow"
                                data-id="?id_category=6&amp;controller=category&amp;id_lang=1"
                                class="disabled js-search-link"
                              >
                                1
                              </a>
                            </li>

                            <li>
                              <a
                                rel="nofollow"
                                data-id="?id_category=6&amp;controller=category&amp;id_lang=1&amp;page=2"
                                class="js-search-link" style="color:#fff;"
                              >
                                2
                              </a>
                            </li>
                            <li>
                              <a
                                rel="next"
                                data-id="?id_category=6&amp;controller=category&amp;id_lang=1&amp;page=2"
                                class="next js-search-link" style="color:#fff;"
                              >
                                <i class="material-icons">&#xE315;</i>Next
                              </a>
                            </li>
                          </ul>
                        </div>
                      </nav>
                     </div>
                  </div>

                  <div id="js-product-list-bottom">
                    <div id="js-product-list-bottom"></div>
                  </div>
                </section>
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
import axios from "axios";
// import allProduct from "@/components/allProduct";
import Header from "@/components/navbar";
import Footer from "@/components/footer";
//import DoubleRangeSlider from "@/components/DoubleRangeSlider";DoubleRangeSlider
export default {
  components: { 
    Header, 
  Footer },
  data() {
    return {
      isAct: 0,
      isHas: false,
      ProdNoRecordFound: false,
      NoRecordFound: false,
      limit: "",
      startval: null,
      isCheckeds: false,
      colorVal: [],
      colors: 0,
      setSelected: 0,
      sizes: 0,
      categorieses: [],
      sizeVal: [],
      searchData: [],
      activeColor: true,
      allColor: [],
      allSize: [],
      bclass: 0,
      pageStart: 0,
      id: "",
      filterProduct: [],
      size: [],
      Allproducts: [],
      allp: false,
      filp: false,
      name: this.$route.params.name,
      searchingVar: JSON.parse(localStorage.getItem("searchingVar")),
      searchshow: false,
      step: 500,
      startMin: 0,
      startMax: 120000,
      endMin: 0,
      endMax: 120000,
      min: 0,
      max: 5000,
      start: 0,
      end: 50000,
    };
  },
  mounted() {
    this.searchingVar = JSON.parse(localStorage.getItem("searchingVar"));
    if (
      this.searchingVar == null ||
      this.searchingVar == "" ||
      this.searchingVar == undefined
    ) {
      //this.onClickChild()
    } else {
      this.search();
      setTimeout(() => {
        self.NoRecordFound = false;
      }, 5000);
    }
    this.catData();
    this.getFilter();
    this.valFilter();
    this.goToTop();
    this.categories();
    this.limitSet(0);
  },
  created() {
    this.min = 0;
    this.max = 1000;
    this.bgStyle = {
      backgroundColor: "#fff",
      boxShadow: "inset 0.5px 0.5px 3px 1px rgba(0,0,0,.36)",
    };
    this.tooltipStyle = {
      backgroundColor: "#666",
      borderColor: "#666",
    };
    this.processStyle = {
      backgroundColor: "#999",
    };
  },
  watch: {
    "$route.params.name": function (name) {
      // console.log(this.$route.params.linkname)
      this.name = this.$route.params.name;
      this.catData();
      this.Allproducts;
      this.allp = true;
      this.filp = false;
      this.searchingVar = JSON.parse(localStorage.getItem("searchingVar"));
      console.log(name);
    },
    searchingVar(value) {
      this.searchingVar = value;
      this.search();
    },
  },
  methods: {
    checkIsHas(){
      if(this.isHas == false){
        this.isHas = true
      }else{
        this.isHas = false
      }
    },
    showNavs(){
          // alert(this.isHas)
    if(this.isHas == false){
        this.isHas = true
    }else if(this.isHas == true){
        this.isHas = false
     }
},
    showNav(){
      if(this.isHas==false){
        this.isHas = true
      }
        this.isHas = false
    },
    limitSet(id) {
      this.limit = this.limit + id;
      this.isAct = id;
      this.catData();
    },
    w3_open() {
      document.getElementById("mySidebar").style.display = "block";
    },

    w3_close() {
      document.getElementById("mySidebar").style.display = "none";
    },
    valFilter(id) {
      this.bclass = id;
    },
    search() {
      var ev = this;
      var key = ev.name;
      axios
        .post(this.$root.URL_ROOT + "api.php?type=search", {
          key: key,
        })
        .then(function (response) {
          var data = response.data;
          ev.searchData = data.data;
          console.log(data);
          if (data.status == "success") {
            ev.searchshow = true;
            (self.allp = false), (self.filp = false);
          } else {
            self.NoRecordFound = true;
          }
        });
    },
    categories() {
      var ev = this;
      axios
        .get(this.$root.URL_ROOT + "api.php?type=category")
        .then(function (response) {
          // console.log("categorysssssssssssss");
          // console.log(response);
          ev.categorieses = response.data;
        });
    },
    catData() {
      const axios = require("axios");
      var self = this;
      axios
        .post(this.$root.URL_ROOT + "api.php?type=products", {
          name: this.name,
          limit: this.limit,
        })
        .then(function (response) {
          var data = response.data;
          self.Allproducts = data.data;
          if (data.status == "success") {
            self.searchshow = false;
            self.allp = true;
            self.ProdNoRecordFound = false;
          } else {
            self.ProdNoRecordFound = true;
          }
        });
    },
    goToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    getFilter() {
      const axios = require("axios");
      var self = this;
      axios
        .get(this.$root.URL_ROOT + "api.php?type=filter")
        .then(function (response) {
          var data = response.data;
          self.allSize = data.size;
          self.allColor = data.color;
          self.activeColor = data.color.value;
          //console.log('ddddddddddddd')
          // console.log(response.data.color);
        });
    },
    priceSearch() {
      var self = this;
      axios
        .post(this.$root.URL_ROOT + "api.php?type=priceSearch", {
          max: self.end,
          min: self.start,
          name: self.name,
        })
        .then(function (response) {
          var data = response.data;
          if (data.status == "success") {
            self.filterProduct = data.data;
            (self.allp = false),
              (self.filp = true),
              (self.searchshow = false),
              (self.NoRecordFound = false);
            if (self.filterProduct == null) {
              // self.catData();
            }
          } else {
            self.NoRecordFound = true;
            (self.allp = false), (self.filp = true), (self.searchshow = false);
          }
          //console.log("dddddddddddddddddddddddddddddd");
          console.log(response);
        });
    },
    cprod() {
      setTimeout(() => {
        if (this.sizeVal != null) {
          this.bclass = this.colorVal;
          var val = this.sizeVal;
          var coll = this.colorVal;
          const axios = require("axios");
          var self = this;
          axios
            .post(this.$root.URL_ROOT + "api.php?type=filterData", {
              size: val,
              color: coll,
              name: self.name,
              max: self.end,
              min: self.start,
            })
            .then(function (response) {
              var data = response.data;
              if (data.status == "success") {
                self.filterProduct = data.data;
                (self.allp = false),
                  (self.filp = true),
                  (self.searchshow = false),
                  (self.NoRecordFound = false);
                if (self.filterProduct == null) {
                  self.catData();
                }
              } else {
                self.NoRecordFound = true;
                (self.allp = false),
                  (self.filp = true),
                  (self.searchshow = false);
              }
              //console.log("dddddddddddddddddddddddddddddd");
              console.log(response);
            });
        }
      }, 1000);
    },
  },
};
</script>
<style scoped>
input {
  box-shadow: 0;
  outline: 0;
}
.price-slider {
  width: 300px;
  margin: 20px 0;
  text-align: center;
  position: relative;
  height: 9em;
  display: flex;
  flex-direction: column;
}
.price-slider > span {
  display: block;
  margin-bottom: 24px;
}
.price-slider > div {
  position: relative;
  margin-top: 10px;
}
input.start {
  bottom: 10px;
}
input.end {
  top: 20px;
}
.price-slider svg,
.price-slider input[type="range"] {
  position: absolute;
  left: 0;
}

input[type="number"] {
  border: 1px solid #ddd;
  text-align: center;
  font-size: 1.6em;
  -moz-appearance: textfield;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type="number"]:invalid,
input[type="number"]:out-of-range {
  border: 2px solid #e60023;
}

input[type="range"] {
  -webkit-appearance: none;
  width: 100%;
}

input[type="range"]:focus {
  outline: none;
}

input[type="range"]:focus::-webkit-slider-runnable-track {
  background: #1da1f2;
}

input[type="range"]:focus::-ms-fill-lower {
  background: #1da1f2;
}

input[type="range"]:focus::-ms-fill-upper {
  background: #1da1f2;
}

input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  background: #1da1f2;
  border-radius: 1px;
  box-shadow: none;
  border: 0;
}

input[type="range"]::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  box-shadow: 0px 0px 0px #000;
  border: 1px solid #1da1f2;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #a1d0ff;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -7px;
}

input[type="range"]::-moz-range-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  background: #1da1f2;
  border-radius: 1px;
  box-shadow: none;
  border: 0;
}

input[type="range"]::-moz-range-thumb {
  z-index: 2;
  position: relative;
  box-shadow: 0px 0px 0px #000;
  border: 1px solid #1da1f2;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #a1d0ff;
  cursor: pointer;
}

input[type="range"]::-ms-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  color: transparent;
}

input[type="range"]::-ms-fill-lower,
input[type="range"]::-ms-fill-upper {
  background: #1da1f2;
  border-radius: 1px;
  box-shadow: none;
  border: 0;
}

input[type="range"]::-ms-thumb {
  z-index: 2;
  position: relative;
  box-shadow: 0px 0px 0px #000;
  border: 1px solid #1da1f2;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #a1d0ff;
  cursor: pointer;
}
#mySidebar {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: #fff;
  overflow: auto;
}
#mySidebar .panel-footer {
  padding: 10px 15px;
  background-color: #f5f5f5;
  border-top: 1px solid #ddd;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 9;
}
.color-div {
  width: 35px;
  height: 35px;
  border: 1px solid #d6d6d6;
}
.allp {
  display: block !important;
}
.filp {
  display: block !important;
}
.hidethis {
  display: none;
}
.checkstyle {
  margin: 20px 0 0 20px;
  visibility: visible;
}

.product-list .product-block .desc {
  height: 150px;
  overflow: hidden;
}
.size-css {
  margin: 0 50px 0 0 !important;
}
.bclass {
  border: 1px solid #000;
}
.checkbox input[type="checkbox"] {
  float: right;
  margin: 15px -30px 0 0;
  visibility: hidden;
}
.checkeds {
  background: #000 !important;
  color: #fff !important;
}
button > label > input[type="checkbox"]:checked {
  background: #000 !important;
  color: #fff !important;
}
.bclass {
  border: 1px solid #000;
}
.boxes {
  margin: auto;
  padding: 50px;
  background: #484848;
}

/*Checkboxes styles*/
input[type="checkbox"] {
  display: none;
}

input[type="checkbox"] + label {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 20px;
  font: 14px/20px "Open Sans", Arial, sans-serif;
  color: #ddd;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

input[type="checkbox"] + label:last-child {
  margin-bottom: 0;
}

input[type="checkbox"] + label:before {
  content: "";
  display: block;
  width: 35px;
  height: 35px;
  border: 2px solid #ffffff;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0.6;
  -webkit-transition: all 0.12s, border-color 0.08s;
  transition: all 0.12s, border-color 0.08s;
}

input[type="checkbox"]:checked + label:before {
  width: 10px;
  top: -5px;
  left: 20px;
  border-radius: 0;
  opacity: 1;
  border-top-color: transparent;
  border-left-color: transparent;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
.app-content {
  padding: 40px 15px;
}
.radio,
.checkbox {
  display: inline-flex;
  min-height: 20px;
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;
}
.c-label {
  color: #fff !important;
  padding: 12px;
  text-transform: capitalize;
  font-weight: bold !important;
}
.c-labels {
  color: #000 !important;
  padding: 12px;
  text-transform: capitalize;
  font-weight: bold !important;
}
.c-labels:hover {
  background: #000 !important;
  color: #fff !important;
}
input[type="checkbox"] + .c-labels:before {
  content: "";
  display: block;
  width: 70px;
  height: 45px;
  border: 2px solid #adadad;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0.6;
  transition: all 0.12s, border-color 0.08s;
}
.searchshow {
  display: block !important;
}
.price-filter {
  margin: 20px 0;
}
.price-filter button {
  text-align: right;
}
.pagination {
  display: inline-block;
  float: right;
}

.pagination a {
  color: black;
  float: left;
  padding: 4px 5px;
  text-decoration: none;
  transition: background-color 0.3s;
  border: 1px solid #ddd;
}

.pagination a.active {
  background-color: #b6262f;
  color: white;
  border: 1px solid #b6262f;
}

.pagination a:hover:not(.active) {
  background-color: #ddd;
}
#breadcrumb_wrapper {
    float: right;
    text-align: right;
    padding: 0;
    margin: 0 0 20px 0;
    right: 0;
    width: 74%;
    position: relative;
}
#search_filters{
        margin: 20px 0;
        border: 5px solid #f1f1f1;
        border-radius: 10px;
    }
    #search_filters .filter-heading {
        background: #f1f1f1;
    padding: 15px;
    }
@media only screen and (max-width: 600px) {
  
.mobile-margin{
  margin-top: 30px;
}
}
</style>
