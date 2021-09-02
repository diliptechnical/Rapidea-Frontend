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
               <Header :isHas="isHas"/>

      <aside id="notifications">
        <div class="container"></div>
      </aside>
      <section id="wrapper">
        <div class="container">
          <div id="columns_inner">
            <div
              id="left-column"
              class="
                col-xs-12 col-sm-4 col-md-3
                hb-animate-element
                top-to-bottom
                left-section
              "
            >
              <div class="block-categories block">
                <h4 class="block_title hidden-md-down">
                  <!--	<a data-id="https://prestashop.templatemela.com/PRSADD12/PRS295/index.php?id_category=5&controller=category&id_lang=1">Tiny Tots</a>-->
                  shop by category
                </h4>
                <h4
                  class="block_title hidden-lg-up"
                  data-target="#block_categories_toggle"
                  data-toggle="collapse"
                >
                  <a
                    data-id="https://prestashop.templatemela.com/PRSADD12/PRS295/index.php?id_category=5&controller=category&id_lang=1"
                    >Tiny Tots</a
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
                    <li>
                      <ul class="category-sub-menu">
                        <li data-depth="0">
                          <a
                            data-id="https://prestashop.templatemela.com/PRSADD12/PRS295/index.php?id_category=21&amp;controller=category&amp;id_lang=1"
                            >Bubbly Baby</a
                          >
                        </li>
                        <li data-depth="0">
                          <a
                            data-id="https://prestashop.templatemela.com/PRSADD12/PRS295/index.php?id_category=22&amp;controller=category&amp;id_lang=1"
                            >BabyDesire</a
                          >
                        </li>
                        <li data-depth="0">
                          <a
                            data-id="https://prestashop.templatemela.com/PRSADD12/PRS295/index.php?id_category=23&amp;controller=category&amp;id_lang=1"
                            >BabyClub</a
                          >
                        </li>
                      </ul>
                    </li>
                  </ul>
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
                
              </div>
              <div class="sidebar-latest block">
                <h4 class="block_title hidden-md-down">New Products</h4>
                <h4
                  class="block_title hidden-lg-up"
                  data-target="#block_latest_toggle"
                  data-toggle="collapse"
                >
                  New Products
                  <!-- <span class="pull-xs-right">
                    <span class="navbar-toggler collapse-icons">
                      <i class="material-icons add">&#xE313;</i>
                      <i class="material-icons remove">&#xE316;</i>
                    </span>
                  </span> -->
                </h4>
                <div class="block_content collapse" id="block_latest_toggle">
                  <div class="products clearfix">
                    <div class="product-item">
                      <div class="left-part">
                        <a
                          data-id="https://prestashop.templatemela.com/PRSADD12/PRS295/index.php?id_product=21&amp;id_product_attribute=162&amp;rewrite=massa-suspendisse&amp;controller=product&amp;id_lang=1#/1-size-s/5-color-grey/19-dimension-40x60cm"
                          class="thumbnail product-thumbnail"
                        >
                          <img
                            class="lazyload"
                            src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/1/1/8/118-cart_default.jpg"
                            alt=""
                          />
                        </a>
                      </div>

                      <div class="right-part">
                        <div class="product-description">
                          <span class="h3 product-title" itemprop="name"
                            ><a
                              data-id="https://prestashop.templatemela.com/PRSADD12/PRS295/index.php?id_product=21&amp;id_product_attribute=162&amp;rewrite=massa-suspendisse&amp;controller=product&amp;id_lang=1#/1-size-s/5-color-grey/19-dimension-40x60cm"
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
                          data-id="https://prestashop.templatemela.com/PRSADD12/PRS295/index.php?id_product=20&amp;id_product_attribute=118&amp;rewrite=varius-neque-at-enim&amp;controller=product&amp;id_lang=1#/1-size-s/5-color-grey/19-dimension-40x60cm"
                          class="thumbnail product-thumbnail"
                        >
                          <img
                            class="lazyload"
                            src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/1/1/7/117-cart_default.jpg"
                            alt=""
                          />
                        </a>
                      </div>

                      <div class="right-part">
                        <div class="product-description">
                          <span class="h3 product-title" itemprop="name"
                            ><a
                              data-id="https://prestashop.templatemela.com/PRSADD12/PRS295/index.php?id_product=20&amp;id_product_attribute=118&amp;rewrite=varius-neque-at-enim&amp;controller=product&amp;id_lang=1#/1-size-s/5-color-grey/19-dimension-40x60cm"
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
                          data-id="https://prestashop.templatemela.com/PRSADD12/PRS295/index.php?id_product=19&amp;id_product_attribute=174&amp;rewrite=customizable-mug&amp;controller=product&amp;id_lang=1#/2-size-m/12-color-camel/19-dimension-40x60cm"
                          class="thumbnail product-thumbnail"
                        >
                          <img
                            class="lazyload"
                            src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/1/1/6/116-cart_default.jpg"
                            alt=""
                          />
                        </a>
                      </div>

                      <div class="right-part">
                        <div class="product-description">
                          <span class="h3 product-title" itemprop="name"
                            ><a
                              data-id="https://prestashop.templatemela.com/PRSADD12/PRS295/index.php?id_product=19&amp;id_product_attribute=174&amp;rewrite=customizable-mug&amp;controller=product&amp;id_lang=1#/2-size-m/12-color-camel/19-dimension-40x60cm"
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
                      data-id="https://prestashop.templatemela.com/PRSADD12/PRS295/index.php?controller=new-products"
                      class="allproducts btn btn-primary"
                      >All new products</a
                    >
                  </div>
                </div>
              </div>
            </div>

            <div
              id="content-wrapper"
              style="width: 77%; padding: 20px !important"
              class="left-column col-xs-12 col-sm-8 col-md-9 right-section"
            >
              <section
                id="main"
                itemscope
                itemtype="https://schema.org/Product"
              >
                <div class="row">
                  <div class="col-md-5 pro_image">
                    <section class="page-content" id="content">
                      <div class="product-leftside">
                        <ul class="product-flags">
                          <li class="product-flag new">New</li>
                        </ul>
                        <div class="images-container">
                          <div class="product-cover">
                            <img
                              class="js-qv-product-cover"
                              src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/2/5/25-large_default.jpg"
                              alt=""
                              title=""
                              style="width: 100%"
                              itemprop="image"
                            />
                            <div
                              class="layer hidden-sm-down"
                              data-toggle="modal"
                              data-target="#product-modal"
                            >
                              <i class="material-icons zoom-in">&#xE8FF;</i>
                            </div>
                          </div>
                          <!-- Define Number of product for SLIDER -->
                          <div class="js-qv-mask mask additional_slider">
                            <ul
                              id="additional-carousel"
                              class="tm-carousel product_list"
                            >
                              <carousel
                                :autoplay="false"
                                :nav="false"
                                :items="3"
                                :responsive="{
                                  0: { items: 3 },
                                  576: { items: 3 },
                                  600: { items: 3 },
                                  768: { items: 3 },
                                  1200: { items: 3 },
                                  1500: { items: 3 },
                                }"
                              >
                                <li class="thumb-container item">
                                  <img
                                    class="thumb js-thumb selected"
                                    data-image-medium-src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/2/5/25-medium_default.jpg"
                                    data-image-large-src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/2/5/25-large_default.jpg"
                                    src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/2/5/25-home_default.jpg"
                                    alt=""
                                    title=""
                                    width="100"
                                    itemprop="image"
                                  />
                                </li>
                                <li class="thumb-container item">
                                  <img
                                    class="thumb js-thumb"
                                    data-image-medium-src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/3/4/34-medium_default.jpg"
                                    data-image-large-src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/3/4/34-large_default.jpg"
                                    src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/3/4/34-home_default.jpg"
                                    alt=""
                                    title=""
                                    width="100"
                                    itemprop="image"
                                  />
                                </li>
                                <li class="thumb-container item">
                                  <img
                                    class="thumb js-thumb"
                                    data-image-medium-src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/3/5/35-medium_default.jpg"
                                    data-image-large-src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/3/5/35-large_default.jpg"
                                    src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/3/5/35-home_default.jpg"
                                    alt=""
                                    title=""
                                    width="100"
                                    itemprop="image"
                                  />
                                </li>
                                <li class="thumb-container item">
                                  <img
                                    class="thumb js-thumb"
                                    data-image-medium-src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/3/6/36-medium_default.jpg"
                                    data-image-large-src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/3/6/36-large_default.jpg"
                                    src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/3/6/36-home_default.jpg"
                                    alt=""
                                    title=""
                                    width="100"
                                    itemprop="image"
                                  />
                                </li>
                                <li class="thumb-container item">
                                  <img
                                    class="thumb js-thumb"
                                    data-image-medium-src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/3/7/37-medium_default.jpg"
                                    data-image-large-src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/3/7/37-large_default.jpg"
                                    src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/3/7/37-home_default.jpg"
                                    alt=""
                                    title=""
                                    width="100"
                                    itemprop="image"
                                  />
                                </li>
                                <li class="thumb-container item">
                                  <img
                                    class="thumb js-thumb"
                                    data-image-medium-src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/3/8/38-medium_default.jpg"
                                    data-image-large-src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/3/8/38-large_default.jpg"
                                    src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/3/8/38-home_default.jpg"
                                    alt=""
                                    title=""
                                    width="100"
                                    itemprop="image"
                                  />
                                </li>
                              </carousel>
                            </ul>

                            <div class="customNavigation">
                              <a class="btn prev additional_prev">&nbsp;</a>
                              <a class="btn next additional_next">&nbsp;</a>
                            </div>
                          </div>
                        </div>
                        <div class="scroll-box-arrows">
                          <i class="material-icons left">&#xE314;</i>
                          <i class="material-icons right">&#xE315;</i>
                        </div>
                      </div>
                    </section>
                  </div>
                  <div class="col-md-7 col-xs-12 pro_decs">
                    <h1 class="productpage_title" itemprop="name">
                      Suspendisse Massa Nulla
                    </h1>
                    <div class="hook-reviews">
                      <div class="comments_note">
                        <div class="star_content clearfix">
                          <div class="star"></div>
                          <div class="star"></div>
                          <div class="star"></div>
                          <div class="star"></div>
                          <div class="star"></div>
                        </div>
                      </div>
                    </div>
                    <div class="product-prices">
                      <div
                        class="product-price h5"
                        itemprop="offers"
                        itemscope
                        itemtype="https://schema.org/Offer"
                      >
                        <link
                          itemprop="availability"
                          data-id="https://schema.org/InStock"
                        />
                        <meta itemprop="priceCurrency" content="USD" />

                        <div class="current-price">
                          <span itemprop="price" content="35.9">$35.90</span>
                        </div>
                      </div>
                      <div class="tax-shipping-delivery-label"></div>
                    </div>
                    <div class="product-information">
                      <div
                        id="product-description-short-2"
                        itemprop="description"
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed at ante. Mauris eleifend, quam a vulputate
                          dictum, massa quam dapibus leo, eget vulputate orci
                          purus ut lorem. In fringilla mi in ligula.
                        </p>
                      </div>

                      <div class="product-actions">
                        <form
                          action="#"
                          method="post"
                          id="add-to-cart-or-refresh"
                        >
                          <input
                            type="hidden"
                            name="token"
                            value="03c08d5578608b627b076ae65b228852"
                          />
                          <input
                            type="hidden"
                            name="id_product"
                            value="2"
                            id="product_page_product_id"
                          />
                          <input
                            type="hidden"
                            name="id_customization"
                            value="0"
                            id="product_customization_id"
                          />

                          <div class="product-variants">
                            <div class="clearfix product-variants-item">
                              <span class="control-label">Size</span>
                              <select
                                class="form-control form-control-select"
                                id="group_1"
                                data-product-attribute="1"
                                name="group[1]"
                              >
                                <option value="1" title="S" selected="selected">
                                  S
                                </option>
                                <option value="2" title="M">M</option>
                                <option value="3" title="L">L</option>
                                <option value="4" title="XL">XL</option>
                              </select>
                            </div>
                            <div class="clearfix product-variants-item">
      <span class="control-label">Color</span>
              <ul id="group_2">
                      <li class="pull-xs-left input-container">
           <label>
              <input class="input-color" type="radio" data-product-attribute="2" name="group[2]" value="8" checked="checked">
              <span class="color" style="background-color: #ffffff"><span class="sr-only">White</span></span>        
   </label>
 </li>      
                      <li class="pull-xs-left input-container">
           <label>
              <input class="input-color" type="radio" data-product-attribute="2" name="group[2]" value="11">
              <span class="color" style="background-color: #434A54"><span class="sr-only">Black</span></span>        
   </label>
 </li>      
                  </ul>
          </div>
                          </div>

                          <section class="product-discounts"></section>

                          <div class="product-add-to-cart">
                            <div class="product-quantity">
                              <div class="product-double-quantity">
                                <span class="control-label">Quantity</span>
                                <div class="qty">
                                <div class="input-group bootstrap-touchspin"><span class="input-group-addon bootstrap-touchspin-prefix" style="display: none;"></span><input type="text" name="qty" id="quantity_wanted" value="1" class="input-group form-control" min="1" aria-label="Quantity" style="display: block;"><span class="input-group-addon bootstrap-touchspin-postfix" style="display: none;"></span><span class="input-group-btn-vertical"><button class="btn btn-touchspin js-touchspin bootstrap-touchspin-up" type="button"><i class="material-icons touchspin-up"></i></button><button class="btn btn-touchspin js-touchspin bootstrap-touchspin-down" type="button"><i class="material-icons touchspin-down"></i></button></span></div>
                                </div>
                              </div>
                              <br />
                              <br />
                              <div class="add">
                                <button
                                  class="btn btn-primary add-to-cart"
                                  data-button-action="add-to-cart"
                                  type="submit"
                                >
                                  <i class="material-icons shopping-cart"
                                    >&#xE547;</i
                                  >
                                  Add to cart
                                </button>

                                <span id="product-availability"> </span>
                              </div>
                            </div>
                            <div class="clearfix"></div>

                            <p class="product-minimal-quantity"></p>
                          </div>

                          <div class="product-additional-info"></div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <section class="product-tabcontent">
                  <div class="tabs">
                    <ul class="nav nav-tabs">
                      <li class="nav-item">
                        <a
                          class="nav-link active"
                          data-toggle="tab"
                          data-id="#description"
                          role="tab"
                          aria-controls="description"
                          aria-selected="true"
                          >Description</a
                        >
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          data-toggle="tab"
                          data-id="#product-details"
                          >Product Details</a
                        >
                      </li>

                      <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" data-id="#rating"
                          >rating</a
                        >
                      </li>
                    </ul>

                    <div class="tab-content" id="tab-content">
                      <div
                        class="tab-pane fade in active"
                        id="description"
                        role="tabpanel"
                      >
                        <div class="product-description">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed at ante. Mauris eleifend, quam a vulputate
                            dictum, massa quam dapibus leo, eget vulputate orci
                            purus ut lorem. In fringilla mi in ligula.
                            Pellentesque aliquam quam vel dolor. Nunc
                            adipiscing. Sed quam odio, tempus ac, aliquam
                            molestie, varius ac, tellus. Vestibulum ut nulla
                            aliquam risus rutrum interdum. Pellentesque lorem.
                            Curabitur sit amet erat quis risus feugiat viverra.
                            Pellentesque augue justo, sagittis et, lacinia at,
                            venenatis non, arcu. Nunc nec libero. In cursus
                            dictum risus. Etiam tristique nisla
                          </p>
                        </div>
                      </div>

                      <div
                        class="tab-pane fade"
                        id="product-details"
                        data-product='{"id_shop_default":"1","id_manufacturer":"1","id_supplier":"0","reference":"demo_3","is_virtual":"0","delivery_in_stock":"","delivery_out_stock":"","id_category_default":"5","on_sale":"0","online_only":"0","ecotax":"0.000000","minimal_quantity":"1","low_stock_threshold":null,"low_stock_alert":"0","price":"$35.90","unity":"","unit_price_ratio":"0.000000","additional_shipping_cost":"0.00","customizable":"0","text_fields":"0","uploadable_files":"0","redirect_type":"404","id_type_redirected":"0","available_for_order":"1","available_date":null,"show_condition":"0","condition":"new","show_price":"1","indexed":"1","visibility":"both","cache_default_attribute":"9","advanced_stock_management":"0","date_add":"2019-09-07 08:05:39","date_upd":"2020-12-11 02:05:46","pack_stock_type":"3","meta_description":"","meta_keywords":"","meta_title":"","link_rewrite":"brown-bear-printed-sweater","name":"Suspendisse Massa Nulla","description":"&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris eleifend, quam a vulputate dictum, massa quam dapibus leo, eget vulputate orci purus ut lorem. In fringilla mi in ligula. Pellentesque aliquam quam vel dolor. Nunc adipiscing. Sed quam odio, tempus ac, aliquam molestie, varius ac, tellus. Vestibulum ut nulla aliquam risus rutrum interdum. Pellentesque lorem. Curabitur sit amet erat quis risus feugiat viverra. Pellentesque augue justo, sagittis et, lacinia at, venenatis non, arcu. Nunc nec libero. In cursus dictum risus. Etiam tristique nisla&lt;\/p&gt;","description_short":"&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris eleifend, quam a vulputate dictum, massa quam dapibus leo, eget vulputate orci purus ut lorem. In fringilla mi in ligula.&lt;\/p&gt;","available_now":"","available_later":"","id":2,"id_product":"2","out_of_stock":"2","new":"1","id_product_attribute":9,"quantity_wanted":1,"extraContent":[],"allow_oosp":0,"quantity":1200,"id_image":"2-25","category":"tiny-tots","category_name":"Tiny Tots","link":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/index.php?id_product=2&amp;rewrite=brown-bear-printed-sweater&amp;controller=product&amp;id_lang=1","attribute_price":0,"price_tax_exc":35.9,"price_without_reduction":35.9,"reduction":0,"specific_prices":false,"quantity_all_versions":2100,"features":[{"name":"Composition","value":"Cotton","id_feature":"1","position":"0"},{"name":"Property","value":"Long sleeves","id_feature":"2","position":"1"}],"attachments":[],"virtual":0,"pack":0,"packItems":[],"nopackprice":0,"customization_required":false,"attributes":{"1":{"id_attribute":"1","id_attribute_group":"1","name":"S","group":"Size","reference":"demo_3","ean13":"","isbn":"","upc":""}},"rate":0,"tax_name":"","ecotax_rate":0,"unit_price":"","customizations":{"fields":[]},"id_customization":0,"is_customizable":false,"show_quantities":true,"quantity_label":"Items","quantity_discounts":[],"customer_group_discount":0,"images":[{"bySize":{"cart_default":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/2\/5\/25-cart_default.jpg","width":80,"height":86},"small_default":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/2\/5\/25-small_default.jpg","width":98,"height":105},"new_products":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/2\/5\/25-new_products.jpg","width":145,"height":170},"special_default":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/2\/5\/25-special_default.jpg","width":260,"height":304},"home_default":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/2\/5\/25-home_default.jpg","width":277,"height":330},"medium_default":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/2\/5\/25-medium_default.jpg","width":452,"height":486},"large_default":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/2\/5\/25-large_default.jpg","width":839,"height":1000}},"small":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/2\/5\/25-cart_default.jpg","width":80,"height":86},"medium":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/2\/5\/25-special_default.jpg","width":260,"height":304},"large":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/2\/5\/25-large_default.jpg","width":839,"height":1000},"legend":"","cover":"1","id_image":"25","position":"1","associatedVariants":[]},{"bySize":{"cart_default":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/3\/4\/34-cart_default.jpg","width":80,"height":86},"small_default":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/3\/4\/34-small_default.jpg","width":98,"height":105},"new_products":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/3\/4\/34-new_products.jpg","width":145,"height":170},"special_default":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/3\/4\/34-special_default.jpg","width":260,"height":304},"home_default":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/3\/4\/34-home_default.jpg","width":277,"height":330},"medium_default":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/3\/4\/34-medium_default.jpg","width":452,"height":486},"large_default":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/3\/4\/34-large_default.jpg","width":839,"height":1000}},"small":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/3\/4\/34-cart_default.jpg","width":80,"height":86},"medium":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/3\/4\/34-special_default.jpg","width":260,"height":304},"large":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/3\/4\/34-large_default.jpg","width":839,"height":1000},"legend":"","cover":null,"id_image":"34","position":"2","associatedVariants":[]},{"bySize":{"cart_default":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/3\/5\/35-cart_default.jpg","width":80,"height":86},"small_default":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/3\/5\/35-small_default.jpg","width":98,"height":105},"new_products":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/3\/5\/35-new_products.jpg","width":145,"height":170},"special_default":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/3\/5\/35-special_default.jpg","width":260,"height":304},"home_default":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/3\/5\/35-home_default.jpg","width":277,"height":330},"medium_default":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/3\/5\/35-medium_default.jpg","width":452,"height":486},"large_default":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/3\/5\/35-large_default.jpg","width":839,"height":1000}},"small":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/3\/5\/35-cart_default.jpg","width":80,"height":86},"medium":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/3\/5\/35-special_default.jpg","width":260,"height":304},"large":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/3\/5\/35-large_default.jpg","width":839,"height":1000},"legend":"","cover":null,"id_image":"35","position":"3","associatedVariants":[]},{"bySize":{"cart_default":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/3\/6\/36-cart_default.jpg","width":80,"height":86},"small_default":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/3\/6\/36-small_default.jpg","width":98,"height":105},"new_products":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/3\/6\/36-new_products.jpg","width":145,"height":170},"special_default":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/3\/6\/36-special_default.jpg","width":260,"height":304},"home_default":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/3\/6\/36-home_default.jpg","width":277,"height":330},"medium_default":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/3\/6\/36-medium_default.jpg","width":452,"height":486},"large_default":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/3\/6\/36-large_default.jpg","width":839,"height":1000}},"small":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/3\/6\/36-cart_default.jpg","width":80,"height":86},"medium":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/3\/6\/36-special_default.jpg","width":260,"height":304},"large":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/3\/6\/36-large_default.jpg","width":839,"height":1000},"legend":"","cover":null,"id_image":"36","position":"4","associatedVariants":[]},{"bySize":{"cart_default":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/3\/7\/37-cart_default.jpg","width":80,"height":86},"small_default":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/3\/7\/37-small_default.jpg","width":98,"height":105},"new_products":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/3\/7\/37-new_products.jpg","width":145,"height":170},"special_default":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/3\/7\/37-special_default.jpg","width":260,"height":304},"home_default":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/3\/7\/37-home_default.jpg","width":277,"height":330},"medium_default":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/3\/7\/37-medium_default.jpg","width":452,"height":486},"large_default":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/3\/7\/37-large_default.jpg","width":839,"height":1000}},"small":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/3\/7\/37-cart_default.jpg","width":80,"height":86},"medium":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/3\/7\/37-special_default.jpg","width":260,"height":304},"large":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/3\/7\/37-large_default.jpg","width":839,"height":1000},"legend":"","cover":null,"id_image":"37","position":"5","associatedVariants":[]},{"bySize":{"cart_default":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/3\/8\/38-cart_default.jpg","width":80,"height":86},"small_default":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/3\/8\/38-small_default.jpg","width":98,"height":105},"new_products":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/3\/8\/38-new_products.jpg","width":145,"height":170},"special_default":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/3\/8\/38-special_default.jpg","width":260,"height":304},"home_default":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/3\/8\/38-home_default.jpg","width":277,"height":330},"medium_default":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/3\/8\/38-medium_default.jpg","width":452,"height":486},"large_default":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/3\/8\/38-large_default.jpg","width":839,"height":1000}},"small":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/3\/8\/38-cart_default.jpg","width":80,"height":86},"medium":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/3\/8\/38-special_default.jpg","width":260,"height":304},"large":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/3\/8\/38-large_default.jpg","width":839,"height":1000},"legend":"","cover":null,"id_image":"38","position":"6","associatedVariants":[]}],"cover":{"bySize":{"cart_default":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/2\/5\/25-cart_default.jpg","width":80,"height":86},"small_default":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/2\/5\/25-small_default.jpg","width":98,"height":105},"new_products":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/2\/5\/25-new_products.jpg","width":145,"height":170},"special_default":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/2\/5\/25-special_default.jpg","width":260,"height":304},"home_default":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/2\/5\/25-home_default.jpg","width":277,"height":330},"medium_default":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/2\/5\/25-medium_default.jpg","width":452,"height":486},"large_default":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/2\/5\/25-large_default.jpg","width":839,"height":1000}},"small":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/2\/5\/25-cart_default.jpg","width":80,"height":86},"medium":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/2\/5\/25-special_default.jpg","width":260,"height":304},"large":{"url":"https:\/\/prestashop.templatemela.com\/PRSADD12\/PRS295\/img\/p\/2\/5\/25-large_default.jpg","width":839,"height":1000},"legend":"","cover":"1","id_image":"25","position":"1","associatedVariants":[]},"has_discount":false,"discount_type":null,"discount_percentage":null,"discount_percentage_absolute":null,"discount_amount":null,"discount_amount_to_display":null,"price_amount":35.9,"unit_price_full":"","show_availability":true,"availability_date":null,"availability_message":"","availability":"available"}'
                        role="tabpanel"
                      >
                        <div class="product-manufacturer">
                          <a
                            data-id="https://prestashop.templatemela.com/PRSADD12/PRS295/index.php?id_manufacturer=1&amp;controller=manufacturer&amp;id_lang=1"
                          >
                            <img
                              src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/m/1.jpg"
                              class="img img-thumbnail manufacturer-logo"
                              alt="Fashion Manufacturer2"
                            />
                          </a>
                        </div>
                        <div class="product-reference">
                          <label class="label">Reference </label>
                          <span itemprop="sku">demo_3</span>
                        </div>

                        <div class="product-quantities">
                          <label class="label">In stock</label>
                          <span data-stock="1200" data-allow-oosp="0"
                            >1200 Items</span
                          >
                        </div>

                        <div class="product-out-of-stock"></div>

                        <section class="product-features">
                          <h3 class="h6">Data sheet</h3>
                          <dl class="data-sheet">
                            <dt class="name">Composition</dt>
                            <dd class="value">Cotton</dd>
                            <dt class="name">Property</dt>
                            <dd class="value">Long sleeves</dd>
                          </dl>
                        </section>
                      </div>

                      <div class="tab-pane fade in" id="rating"></div>
                    </div>
                  </div>
                </section>
                <!-- Define Number of product for SLIDER -->
                <section class="product-accessories clearfix">
                  <div class="tab-main-title">
                    <h2 class="h1 products-section-title text-uppercase">
                      You might also like
                    </h2>
                  </div>
                  <div id="spe_res">
                    <div class="products">
                      <ul
                      style="display: inline-flex;"
                        id="accessories-carousel"
                        class="tm-carousel product_list"
                      >
                        <li class="item">
                          <article
                            class="product-miniature js-product-miniature"
                          >
                            <div class="thumbnail-container">
                              <a
                                data-id="#"
                                class="thumbnail product-thumbnail"
                              >
                                <img
                                  class="img_main"
                                  src="../assets/img/p/2/4/24-home_default.jpg"
                                  alt="Curabitur Dolor Nunc"
                                />
                                <img
                                  class="
                                    replace-2x
                                    img_1 img-responsive
                                    lazyload
                                  "
                                  src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/2/9/29-home_default.jpg"
                                  alt=""
                                />
                              </a>
                              <div class="hover-block">
                                <div class="wishlist">
                                  <a
                                    class="st-wishlist-button btn-product btn"
                                    data-id="#"
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
                                <li class="discount">-20%</li>
                                <li class="new">New</li>
                              </ul>
                              <div class="discount_type_flag">
                                <span class="discount-percentage">-20%</span>
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
                                <!-- <span>%s Review(s)&nbsp</span> -->
                              </div>

                              <span class="h3 product-title" itemprop="name"
                                ><a
                                  data-id="index8589.html?id_product=1&amp;id_product_attribute=1&amp;rewrite=hummingbird-printed-t-shirt&amp;controller=product&amp;id_lang=1#/1-size-s/8-color-white"
                                  >Curabitur Dolor Nunc</a
                                ></span
                              >

                              <div class="product-price-and-shipping">
                                <span class="sr-only">Price</span>
                                <span itemprop="price" class="price"
                                  >$19.12</span
                                >

                                <span class="sr-only">Regular price</span>
                                <span class="regular-price">$23.90</span>
                              </div>

                              <div class="product-actions-main">
                                <form
                                  action="#"
                                  method="post"
                                  class="add-to-cart-or-refresh"
                                >
                                  <input
                                    type="hidden"
                                    name="token"
                                    value="03c08d5578608b627b076ae65b228852"
                                  />
                                  <input
                                    type="hidden"
                                    name="id_product"
                                    value="1"
                                    class="product_page_product_id"
                                  />
                                  <input
                                    type="hidden"
                                    name="id_customization"
                                    value="0"
                                    class="product_customization_id"
                                  />
                                  <button
                                    class="btn btn-primary add-to-cart"
                                    data-button-action="add-to-cart"
                                    type="submit"
                                    data-toggle="tooltip"
                                    title="Add to cart"
                                  >
                                    Add to cart
                                  </button>
                                </form>
                              </div>
                            </div>
                          </article>
                        </li>

                        <li class="item">
                          <article
                            class="product-miniature js-product-miniature"
                            data-id-product="3"
                            data-id-product-attribute="13"
                            itemscope
                            itemtype="http://schema.org/Product"
                          >
                            <div class="thumbnail-container">
                              <a
                                data-id="indexbb6c.html?id_product=3&amp;id_product_attribute=13&amp;rewrite=the-best-is-yet-to-come-framed-poster&amp;controller=product&amp;id_lang=1#/19-dimension-40x60cm"
                                class="thumbnail product-thumbnail"
                              >
                                <img
                                  class="img_main"
                                  src="../assets/img/p/2/6/26-home_default.jpg"
                                  alt="Justo Neque Commodo Nisl"
                                  data-full-size-image-url="img/p/2/6/26-large_default.jpg"
                                />
                                <img
                                  class="
                                    replace-2x
                                    img_1 img-responsive
                                    lazyload
                                  "
                                  src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/3/9/39-home_default.jpg"
                                  alt=""
                                />
                              </a>

                              <div class="hover-block">
                                <div class="wishlist">
                                  <a
                                    class="st-wishlist-button btn-product btn"
                                    data-id="#"
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

                              <span class="h3 product-title" itemprop="name"
                                ><a
                                  data-id="indexbb6c.html?id_product=3&amp;id_product_attribute=13&amp;rewrite=the-best-is-yet-to-come-framed-poster&amp;controller=product&amp;id_lang=1#/19-dimension-40x60cm"
                                  >Justo Neque Commodo Nisl</a
                                ></span
                              >

                              <div class="product-price-and-shipping">
                                <span class="sr-only">Price</span>
                                <span itemprop="price" class="price"
                                  >$29.00</span
                                >
                              </div>

                              <div class="product-actions-main">
                                <form
                                  action="#"
                                  method="post"
                                  class="add-to-cart-or-refresh"
                                >
                                  <input
                                    type="hidden"
                                    name="token"
                                    value="03c08d5578608b627b076ae65b228852"
                                  />
                                  <input
                                    type="hidden"
                                    name="id_product"
                                    value="3"
                                    class="product_page_product_id"
                                  />
                                  <input
                                    type="hidden"
                                    name="id_customization"
                                    value="0"
                                    class="product_customization_id"
                                  />
                                  <button
                                    class="btn btn-primary add-to-cart"
                                    data-button-action="add-to-cart"
                                    type="submit"
                                    data-toggle="tooltip"
                                    title="Add to cart"
                                  >
                                    Add to cart
                                  </button>
                                </form>
                              </div>
                            </div>
                          </article>
                        </li>

                        <li class="item">
                          <article
                            class="product-miniature js-product-miniature"
                            data-id-product="4"
                            data-id-product-attribute="16"
                            itemscope
                            itemtype="http://schema.org/Product"
                          >
                            <div class="thumbnail-container">
                              <a
                                data-id="indexe14a.html?id_product=4&amp;id_product_attribute=16&amp;rewrite=the-adventure-begins-framed-poster&amp;controller=product&amp;id_lang=1#/19-dimension-40x60cm"
                                class="thumbnail product-thumbnail"
                              >
                                <img
                                  class="img_main"
                                  src="../assets/img/p/2/7/27-home_default.jpg"
                                  alt="Suspendisse Potenti"
                                  data-full-size-image-url="img/p/2/7/27-large_default.jpg"
                                />
                                <img
                                  class="
                                    replace-2x
                                    img_1 img-responsive
                                    lazyload
                                  "
                                  src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/4/4/44-home_default.jpg"
                                  data-full-size-image-url="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/4/4/44-large_default.jpg"
                                  alt=""
                                />
                              </a>

                              <div class="hover-block">
                              
                                <div class="wishlist">
                                  <a
                                    class="st-wishlist-button btn-product btn"
                                    data-id="#"
                                    data-id-wishlist=""
                                    data-id-product="1"
                                    data-id-product-attribute="1"
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

                              <span class="h3 product-title" itemprop="name"
                                ><a
                                  data-id="indexe14a.html?id_product=4&amp;id_product_attribute=16&amp;rewrite=the-adventure-begins-framed-poster&amp;controller=product&amp;id_lang=1#/19-dimension-40x60cm"
                                  >Suspendisse Potenti</a
                                ></span
                              >

                              <div class="product-price-and-shipping">
                                <span class="sr-only">Price</span>
                                <span itemprop="price" class="price"
                                  >$29.00</span
                                >
                              </div>

                              <div class="product-actions-main">
                                <form
                                  action="#"
                                  method="post"
                                  class="add-to-cart-or-refresh"
                                >
                                  <input
                                    type="hidden"
                                    name="token"
                                    value="03c08d5578608b627b076ae65b228852"
                                  />
                                  <input
                                    type="hidden"
                                    name="id_product"
                                    value="4"
                                    class="product_page_product_id"
                                  />
                                  <input
                                    type="hidden"
                                    name="id_customization"
                                    value="0"
                                    class="product_customization_id"
                                  />
                                  <button
                                    class="btn btn-primary add-to-cart"
                                    data-button-action="add-to-cart"
                                    type="submit"
                                    data-toggle="tooltip"
                                    title="Add to cart"
                                  >
                                    Add to cart
                                  </button>
                                </form>
                              </div>
                            </div>
                          </article>
                        </li>

                        <li class="item">
                          <article
                            class="product-miniature js-product-miniature"
                            data-id-product="8"
                            data-id-product-attribute="128"
                            itemscope
                            itemtype="http://schema.org/Product"
                          >
                            <div class="thumbnail-container">
                              <a
                                data-id="indexa1a3.html?id_product=8&amp;id_product_attribute=128&amp;rewrite=mug-today-is-a-good-day&amp;controller=product&amp;id_lang=1#/2-size-m/13-color-orange/19-dimension-40x60cm"
                                class="thumbnail product-thumbnail"
                              >
                                <img
                                  class="img_main"
                                  src="../assets/img/p/5/5/55-home_default.jpg"
                                  alt="Sem Nec Tristique Tempus"
                                  data-full-size-image-url="img/p/5/5/55-large_default.jpg"
                                />
                                <img
                                  class="
                                    replace-2x
                                    img_1 img-responsive
                                    lazyload
                                  "
                                  src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/6/4/64-home_default.jpg"
                                  data-full-size-image-url="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/6/4/64-large_default.jpg"
                                  alt=""
                                />
                              </a>

                             <div class="hover-block">
                              
                                <div class="wishlist">
                                  <a
                                    class="st-wishlist-button btn-product btn"
                                    data-id="#"
                                    data-id-wishlist=""
                                    data-id-product="1"
                                    data-id-product-attribute="1"
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

                              <span class="h3 product-title" itemprop="name"
                                ><a
                                  data-id="indexa1a3.html?id_product=8&amp;id_product_attribute=128&amp;rewrite=mug-today-is-a-good-day&amp;controller=product&amp;id_lang=1#/2-size-m/13-color-orange/19-dimension-40x60cm"
                                  >Sem Nec Tristique Tempus</a
                                ></span
                              >

                              <div class="product-price-and-shipping">
                                <span class="sr-only">Price</span>
                                <span itemprop="price" class="price"
                                  >$11.90</span
                                >
                              </div>

                              <div class="product-actions-main">
                                <form
                                  action="#"
                                  method="post"
                                  class="add-to-cart-or-refresh"
                                >
                                  <input
                                    type="hidden"
                                    name="token"
                                    value="03c08d5578608b627b076ae65b228852"
                                  />
                                  <input
                                    type="hidden"
                                    name="id_product"
                                    value="8"
                                    class="product_page_product_id"
                                  />
                                  <input
                                    type="hidden"
                                    name="id_customization"
                                    value="0"
                                    class="product_customization_id"
                                  />
                                  <button
                                    class="btn btn-primary add-to-cart"
                                    data-button-action="add-to-cart"
                                    type="submit"
                                    data-toggle="tooltip"
                                    title="Add to cart"
                                  >
                                    Add to cart
                                  </button>
                                </form>
                              </div>
                            </div>
                          </article>
                        </li>

                        <li class="item">
                          <article
                            class="product-miniature js-product-miniature"
                            data-id-product="10"
                            data-id-product-attribute="24"
                            itemscope
                            itemtype="http://schema.org/Product"
                          >
                            <div class="thumbnail-container">
                              <a
                                data-id="index0d9c.html?id_product=10&amp;id_product_attribute=24&amp;rewrite=brown-bear-cushion&amp;controller=product&amp;id_lang=1#/8-color-white"
                                class="thumbnail product-thumbnail"
                              >
                                <img
                                  class="img_main"
                                  src="../assets/img/p/5/7/57-home_default.jpg"
                                  alt="Nascetur ridiculus mus"
                                  data-full-size-image-url="img/p/5/7/57-large_default.jpg"
                                />
                                <img
                                  class="
                                    replace-2x
                                    img_1 img-responsive
                                    lazyload
                                  "
                                  src="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/7/4/74-home_default.jpg"
                                  data-full-size-image-url="https://prestashop.templatemela.com/PRSADD12/PRS295/img/p/7/4/74-large_default.jpg"
                                  alt=""
                                />
                              </a>

                              <div class="hover-block">
                              
                                <div class="wishlist">
                                  <a
                                    class="st-wishlist-button btn-product btn"
                                    data-id="#"
                                    data-id-wishlist=""
                                    data-id-product="1"
                                    data-id-product-attribute="1"
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

                              <span class="h3 product-title" itemprop="name"
                                ><a
                                  data-id="index0d9c.html?id_product=10&amp;id_product_attribute=24&amp;rewrite=brown-bear-cushion&amp;controller=product&amp;id_lang=1#/8-color-white"
                                  >Nascetur ridiculus mus</a
                                ></span
                              >

                              <div class="product-price-and-shipping">
                                <span class="sr-only">Price</span>
                                <span itemprop="price" class="price"
                                  >$18.90</span
                                >
                              </div>

                              <div class="product-actions-main">
                                <form
                                  action="#"
                                  method="post"
                                  class="add-to-cart-or-refresh"
                                >
                                  <input
                                    type="hidden"
                                    name="token"
                                    value="03c08d5578608b627b076ae65b228852"
                                  />
                                  <input
                                    type="hidden"
                                    name="id_product"
                                    value="10"
                                    class="product_page_product_id"
                                  />
                                  <input
                                    type="hidden"
                                    name="id_customization"
                                    value="0"
                                    class="product_customization_id"
                                  />
                                  <button
                                    class="btn btn-primary add-to-cart"
                                    data-button-action="add-to-cart"
                                    type="submit"
                                    data-toggle="tooltip"
                                    title="Add to cart"
                                  >
                                    Add to cart
                                  </button>
                                </form>
                              </div>
                            </div>
                          </article>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="customNavigation">
                    <a class="btn prev accessories_prev">&nbsp;</a>
                    <a class="btn next accessories_next">&nbsp;</a>
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
//import ProductCarousel from "../components/ProductCarousel.vue";
// import vZoom from 'vue-zoom'
import axios from "axios";
// import Product from "@/components/product";

import Header from "@/components/navbar";
//import zooming from "@/components/zooming";
import Footer from "@/components/footer";
// import starRating from "@/components/starRating";
// import product from "@/components/product";
// import carousel2 from "vue-owl-carousel";
// import VueContentLoading from 'vue-content-loading';
//import ProductZoomer from 'vue-product-zoomer'
import carousel from "vue-owl-carousel2";
// import Product from '../components/product.vue';
export default {
  components: {
    // vZoom,
    Header,
    Footer,
    carousel,
    // Product
    // Product
    //zooming,
    //ProductCarousel,
    // starRating,
    // product,
    // carousel2,
    // VueContentLoading,
    //ProductZoomer
  },
  data() {
    return {
      img: "",
      isHas: false,
      width: 350,
      item: 0,
      qtyData: 1,
      increaseShow: false,
      userrate: 0,
      images: [],
      isActive: 0,
      rating: 0,
      showIms: "",
      showSliders: false,
      varientData: [],
      commentCount: [],
      commentData: [],
      productZoomer: false,
      name: "",
      cname: "",
      comment: "",
      ids: this.$route.params.Id,
      ratings: 0,
      detail: [],
      related: [],
      cartCount: [],
      ip_address: JSON.parse(localStorage.getItem("ip_address")),
      cartData: [],
      qtyCart: [],
      uid: localStorage.getItem("user"),
      sizes: "",
      selSize: 0,
      colors: 0,
    };
  },
  mounted() {
    this.commentBox();
    this.goToTop();
    this.DetailProduct();
    this.productDetail();
    this.isActives(1);
    this.qtyCarts(this.$route.params.Id);
    this.ids = this.$route.params.Id;
    console.log(this.item);
    this.uid = localStorage.getItem("user");
    if (this.uid != "") {
      this.getUserDetail();
    }
  },
  watch: {
    "$route.params.Id": function (ids) {
      this.ids = this.$route.params.Id;
      this.productDetail();
      this.goToTop();
      console.log(ids);
    },
    qtyCart: function (newVal) {
      console.log(newVal);
      if (this.qtyCart.qty <= this.detail.stock) {
        this.increaseShow = true;
      } else {
        this.increaseShow = true;
      }
    },
  },
  methods: {
    getUserDetail() {
      var self = this;
      axios({
        method: "POST",
        url: this.$root.URL_ROOT + "api.php",
        data: { type: "getUserDetail", uid: this.uid },
      }).then(function (response) {
        var data = response.data;
        self.cname = data.fname;
      });
    },
    showimgzoom(id) {
      this.img = this.$root.URL_IMAGES + "/product/" + id;
    },
    qtyplus() {
      this.qtyData = this.qtyData + 1;
    },
    qtySub() {
      if (this.qtyData == 1) {
        //co
      } else {
        this.qtyData = this.qtyData - 1;
      }
    },
    showthisimg(ims) {
      this.showIms = ims;
    },
    async productDetail() {
      //alert(this.ids)
      var ev = this;
      var ip_address = JSON.parse(localStorage.getItem("ip_address"));
      var user_session = JSON.parse(localStorage.getItem("user"));
      var uid = "";
      if (user_session != null) {
        uid = user_session;
      } else {
        uid = null;
      }
      const response = await axios.post(
        this.$root.URL_ROOT + "api.php?type=productDetails",
        { id: this.ids, uid: uid, ip_address: ip_address }
      );
      var data = response.data;
      if (data.status == "success") {
        ev.detail = response.data.data;
        ev.ratings = response.data.rating;
        ev.images = response.data.imgs;
        ev.showIms = ev.detail.front_image;
        ev.img = ev.$root.URL_IMAGES + "/product/" + ev.detail.front_image;
        ev.related = response.data.related;
        ev.selSize = ev.detail.id;
        ev.showSliders = true;
        ev.productZoomer = true;
        console.log(response);
      }
    },
    async DetailProduct() {
      var ev = this;
      const response = await axios.post(
        this.$root.URL_ROOT + "api.php?type=detailProduct",
        { ids: this.ids }
      );
      ev.varientData = response.data.data;
      //console.log('dilip')
      //console.log(response.data.data)
    },
    isActives(id) {
      this.isActive = id;
    },
    selectSize() {
      var ev = this;
      var id = this.selSize;
      ev.$router.push({ name: "productDetail", params: { Id: id } });
    },
    async varientAttr() {
      var ev = this;
      const response = await axios.post(
        this.$root.URL_ROOT + "api.php?type=varients",
        { id: this.ids, color: this.colors, size: this.selSize }
      );
      ev.detail = response.data;
      ev.images = ev.detail.images;
      ev.qtyCarts();
      console.log(ev.images);
    },
    update_cart_pre(cid, pid, pname, qty, price, mode) {
      var t = this.update_cart(cid, pid, pname, qty, price, mode);
      // console.log(t)
      setTimeout(() => {
        if (t != null) {
          this.getCart();
          this.qtyCarts();
        }
      }, 1000);
    },
    commentBox() {
      // alert(this.ids)
      var self = this;
      axios({
        method: "POST",
        url: this.$root.URL_ROOT + "api.php",
        data: { type: "comment", pid: this.ids },
      }).then(function (response) {
        // self.$toasted.global.success({ message: 'ThankYou for your Feedback' })
        var data = response.data;
        self.commentData = data.data;
        self.commentCount = data.count;
        console.log(response.data.data);
      });
    },
    review() {
      if (this.cname == "") {
        this.$toasted.global.error({ message: "Please Enter Your Name" });
      } else if (this.userrate == "") {
        this.$toasted.global.error({ message: "Please Give Rating" });
      } else if (this.comment == "") {
        this.$toasted.global.error({ message: "Please Comment" });
      } else {
        var self = this;
        axios({
          method: "POST",
          url: this.$root.URL_ROOT + "api.php",
          data: {
            type: "reviews",
            pid: self.detail.id,
            name: self.cname,
            rating: self.userrate,
            comment: self.comment,
          },
        }).then(function (response) {
          //var data = response.data
          console.log(response);
          self.commentBox();
        });
      }
    },
    goToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    mycartData() {
      var self = this;
      axios({
        method: "POST",
        url: this.$root.URL_ROOT + "api.php",
        data: {
          type: "mycartdata",
          uid: this.uid,
          ip_address: this.ip_address,
        },
      }).then(function (response) {
        var data = response.data;
        self.cartData = data.mycartdata;
        self.cartcount = data.cart_count;
        self.total = data.total;
        //console.log("mycartdata");
        // console.log(self.cartcount)
        // console.log("dededeed");
      });
    },
  },
};
</script>
<style>
.img_main{
  height: 200px;
}
@media only screen and (max-width: 600px) {
  .col-md-7.pro_decs{
    width:100%;
  }
}
</style>
