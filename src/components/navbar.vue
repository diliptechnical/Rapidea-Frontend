<template>
  <div>
    <header id="header">
      <div class="header-banner" />
      <nav class="header-nav">
        <div class="container">
          <div class="hidden-md-down">
            <div class="left-nav">
              <div id="_desktop_contact_link">
                <div class="contact-link">
                  Call us free 24/7 &nbsp;: <span>0123-456-789</span>
                </div>
              </div>
            </div>
            <div class="right-nav">
              <div class="head-wishlist">
                <a
                @click="myaccountdropdown ^= true"
                  href="#"
                  class="ap-btn-wishlist dropdown-item"
                  title="Wishlist"
                  rel="nofollow"
                >
                  <i class="fa fa-user icons-margin"></i>
                  <span>My account</span>
                  <!-- <span class="ap-total-wishlist ap-total"></span> -->
                </a>
                <ul v-if="myaccountdropdown" class="user-info" style="display: block;">
                  <router-link v-if="!uid" :to="{ name: 'login' }" class="account">
                    <i class="material-icons logged"></i>
                    <span class="hidden-md-down">Login</span>
                    </router-link>
                      <router-link  :to="{ name: 'registration' }" v-if="!uid" class="logout hidden-md-down">
                    <i class="material-icons"></i>
                    Signup
                    </router-link>
                  <router-link v-if="uid" :to="{ name: 'myaccount' }" class="account">
                    <i class="material-icons logged"></i>
                    <span class="hidden-md-down">Hello,Dilip  muhare</span>
                    </router-link>
                      <a @click="logout" v-if="uid" class="logout hidden-md-down">
                    <i class="material-icons"></i>
                    Sign out
                    </a>
      </ul>
              </div>
              <div class="head-wishlist">
                <a
                  href="#"
                  class="ap-btn-wishlist dropdown-item"
                  title="Wishlist"
                  rel="nofollow"
                >
                  <i class="material-icons icons-margin">&#xE87D;</i>
                  <span>Wishlist</span>
                  <!-- <span class="ap-total-wishlist ap-total"></span> -->
                </a>
              </div>
            </div>
          </div>
          <div class="hidden-lg-up text-xs-center mobile container">
            <div id="_mobile_logo" class="top-logo" />
            <div class="row">
              <div class="menu-icon col-sm-6 col-xs-6">
                <div class="cat-title">
                  <img
                    class="img-responsive"
                    src="../assets/img/logo.png"
                    style="width: 150px"
                    alt="Demo Store"
                  />
                </div>
              </div>
              <div class="menu-icon col-sm-6 col-xs-6">
                <div class="cat-title mobile-menu">
                  <i class="material-icons menu-open" @click="openNav()"
                    >&#xE5D2;</i
                  >
                </div>
              </div>
            </div>
            <div id="_mobile_cart" class="pull-xs-right" />
            <div id="_mobile_user_info" class="pull-xs-right" />
            <div class="clearfix" />
          </div>
        </div>
      </nav>
      <div class="header-top">
        <div class="header-div">
          <div class="container">
            <div id="_desktop_logo" class="header_logo hidden-md-down">
              <a href="/">
                <img
                  class="logo img-responsive"
                  src="../assets/img/logo.png"
                  style="width: 150px"
                  alt="Demo Store"
                />
              </a>
            </div>
            <div id="_desktop_cart">
              <div
                class="blockcart cart-preview inactive"
                data-refresh-url="//prestashop.templatemela.com/PRSADD12/PRS295/index.php?fc=module&amp;module=ps_shoppingcart&amp;controller=ajax&amp;id_lang=1"
              >
                <div class="header blockcart-header dropdown js-dropdown">
                  <a
                    class="carthome"
                    rel="nofollow"
                    data-id="indexb379.html?controller=cart&amp;action=show"
                  >
                    <!-- <i class="material-icons shopping-cart"></i> -->
                    <!-- <span class="hidden-md-down">Cart</span> -->
                    <span class="cart-products-counthome">0</span>
                  </a>
                  <router-link :to="{ name: 'cart' }" class="cart_custom">
                    <!-- <i class="material-icons shopping-cart">shopping_cart</i> -->
                    <span class="cart-products-count cart-count-producttext"
                      >$0.00</span
                    ><br />
                    <span class="hidden-md-down cart-shoptext">My Cart</span>
                  </router-link>
                </div>
              </div>
            </div>
            <!-- Block search module TOP -->
            <div
              id="search_widget"
              class="col-lg-4 col-md-5 col-sm-12 search-widget"
              data-search-controller-url="//prestashop.templatemela.com/PRSADD12/PRS295/index.php?controller=search"
            >
              <span class="search_button" />
              <div class="searchtoggle">
                <form method="get" action="#">
                  <!-- <input type="hidden" name="controller" value="search"> -->
                  <input
                    type="text"
                    name="s"
                    value=""
                    placeholder="Serach Products &amp; Brands here...."
                    aria-label="Search"
                  />
                  <button type="submit">
                    <div class="submit-text">search</div>
                    <!--<i class="material-icons search">&#xE8B6;</i>-->
                  </button>
                </form>
              </div>
            </div>
            <!-- /Block search module TOP -->
            <div id="tmcmsblock">
              <div class="cms">
                <div class="cms-menu-img" />
                <div class="cms-menu-links">
                  <a class="Free cms-icon" data-id="#"> Customer Support</a
                  ><br /><a class="Shipping cms-icon" data-id="#"
                    >2-100-56-55</a
                  >
                </div>
              </div>
            </div>
            <div id="mobile_top_menu_wrapper" class="row hidden-lg-up">
              <div class="mobile-menu-inner">
                <div class="menu-icon">
                  <div class="cat-title title2">
                    <i class="material-icons menu-close">&#xE5CD;</i>
                  </div>
                </div>
                <div id="_mobile_top_menu" class="js-top-menu mobile" />
                <div id="_mobile_currency_selector" />
                <div id="_mobile_language_selector" />
                <div id="_mobile_contact_link" />
              </div>
            </div>
          </div>
        </div>
        <div class="header-top-main bg_main">
          <div class="container">
            <div
              id="tm_vertical_menu_top"
              class="
                tmvm-contener
                clearfix
                col-lg-12
                hb-animate-element
                top-to-bottom
              "
            >
              <div @click="isShowing ^= true" class="block-title">
                <i class="material-icons menu-open">&#xE5D2;</i>
                <div class="menu-title">shop by Categories</div>
              </div>
              <div
                id="_desktop_top_menu"
                v-show="isShowing"
                class="
                  menu
                  vertical-menu
                  js-top-menu
                  position-static
                  hidden-sm-down
                "
              >
                <ul id="top-menu" class="tm_sf-menu top-menu" data-depth="0">
                  <li id="tmcategory-3" class="category">
                    <router-link
                      :to="{ name: 'Product' }"
                      class="dropdown-item"
                    >
                      <span class="pull-xs-right hidden-sm-down">
                        <i class="material-icons left">&#xE315;</i>
                        <i class="material-icons right">&#xE314;</i>
                      </span>
                      <span class="pull-xs-right hidden-lg-up">
                        <span
                          data-target="#top_sub_menu_24000"
                          data-toggle="collapse"
                          class="navbar-toggler collapse-icons"
                        >
                          <i class="material-icons add">&#xE313;</i
                          ><i class="material-icons remove">&#xE316;</i></span
                        ></span
                      >Clothes
                    </router-link>
                    <div
                      id="top_sub_menu_24000"
                      class="popover sub-menu js-sub-menu collapse"
                    >
                      <ul class="tm_sf-menu top-menu" data-depth="1">
                        <li id="tmcategory-4" class="category">
                          <a
                            data-id="index0990.html?id_category=4&amp;controller=cate
                                                gory&amp;id_lang=1"
                            class="dropdown-item dropdown-submenu"
                            data-depth="1"
                          >
                            <span class="pull-xs-right hidden-sm-down"
                              ><i class="material-icons left">&#xE315;</i
                              ><i class="material-icons right"
                                >&#xE314;</i
                              ></span
                            ><span class="pull-xs-right hidden-lg-up"
                              ><span
                                data-target="#top_sub_menu_19010"
                                data-toggle="collapse"
                                class="navbar-toggler collapse-icons"
                                ><i class="material-icons add">&#xE313;</i
                                ><i class="material-icons remove"
                                  >&#xE316;</i
                                ></span
                              ></span
                            >Mini Tikes</a
                          >
                          <div
                            id="top_sub_menu_19010"
                            class="
                              popover
                              sub-menu
                              js-sub-menu
                              second_depth
                              collapse
                            "
                          >
                            <ul class="tm_sf-menu top-menu" data-depth="2">
                              <li id="tmcategory-18" class="category">
                                <a
                                  data-id="index6c57.html?id_category=18&amp;controller=category&amp;id_lang=1"
                                  class="dropdown-item"
                                  data-depth="2"
                                  >PeeWees</a
                                >
                              </li>
                              <li id="tmcategory-19" class="category">
                                <a
                                  data-id="index9c57.html?id_category=19&amp;controller=category&amp;id_lang=1"
                                  class="dropdown-item"
                                  data-depth="2"
                                  >Silly Baby</a
                                >
                              </li>
                              <li id="tmcategory-20" class="category">
                                <a
                                  data-id="index9378.html?id_category=20&amp;controller=category&amp;id_lang=1"
                                  class="dropdown-item"
                                  data-depth="2"
                                  >BearyBaby</a
                                >
                              </li>
                            </ul>
                            <div class="menu-images-container" />
                          </div>
                        </li>
                        <li id="tmcategory-5" class="category">
                          <a
                            data-id="index3520.html?id_category=5&amp;controller=category&amp;id_lang=1"
                            class="dropdown-item dropdown-submenu"
                            data-depth="1"
                          >
                            <span class="pull-xs-right hidden-sm-down"
                              ><i class="material-icons left">&#xE315;</i
                              ><i class="material-icons right"
                                >&#xE314;</i
                              ></span
                            ><span class="pull-xs-right hidden-lg-up"
                              ><span
                                data-target="#top_sub_menu_55920"
                                data-toggle="collapse"
                                class="navbar-toggler collapse-icons"
                                ><i class="material-icons add">&#xE313;</i
                                ><i class="material-icons remove"
                                  >&#xE316;</i
                                ></span
                              ></span
                            >Tiny Tots</a
                          >
                          <div
                            id="top_sub_menu_55920"
                            class="
                              popover
                              sub-menu
                              js-sub-menu
                              second_depth
                              collapse
                            "
                          >
                            <ul class="tm_sf-menu top-menu" data-depth="2">
                              <li id="tmcategory-21" class="category">
                                <router-link
                                  :to="{ name: 'Product' }"
                                  class="dropdown-item"
                                >
                                  Bubbly Baby
                                </router-link>
                              </li>
                              <li id="tmcategory-22" class="category">
                                <router-link
                                  :to="{ name: 'Product' }"
                                  class="dropdown-item"
                                >
                                  BabyDesire
                                </router-link>
                              </li>
                              <li id="tmcategory-23" class="category">
                                <router-link
                                  :to="{ name: 'Product' }"
                                  class="dropdown-item"
                                >
                                  BabyClub</router-link
                                >
                              </li>
                            </ul>
                            <div class="menu-images-container" />
                          </div>
                        </li>
                        <li id="tmcategory-17" class="category">
                          <a
                            data-id="indexcd48.html?id_category=17&amp;controller=category&amp;id_lang=1"
                            class="dropdown-item dropdown-submenu"
                            data-depth="1"
                          >
                            <span class="pull-xs-right hidden-sm-down"
                              ><i class="material-icons left">&#xE315;</i
                              ><i class="material-icons right"
                                >&#xE314;</i
                              ></span
                            ><span class="pull-xs-right hidden-lg-up"
                              ><span
                                data-target="#top_sub_menu_39326"
                                data-toggle="collapse"
                                class="navbar-toggler collapse-icons"
                                ><i class="material-icons add">&#xE313;</i
                                ><i class="material-icons remove"
                                  >&#xE316;</i
                                ></span
                              ></span
                            >Tiny Tikes</a
                          >
                          <div
                            id="top_sub_menu_39326"
                            class="
                              popover
                              sub-menu
                              js-sub-menu
                              second_depth
                              collapse
                            "
                          >
                            <ul class="tm_sf-menu top-menu" data-depth="2">
                              <li id="tmcategory-24" class="category">
                                <router-link
                                  :to="{ name: 'Product' }"
                                  class="dropdown-item"
                                >
                                  Little Wands
                                </router-link>
                              </li>
                              <li id="tmcategory-25" class="category">
                                <router-link
                                  :to="{ name: 'Product' }"
                                  class="dropdown-item"
                                >
                                  Baby Pod
                                </router-link>
                              </li>
                              <li id="tmcategory-26" class="category">
                                <router-link
                                  :to="{ name: 'Product' }"
                                  class="dropdown-item"
                                >
                                  Little Cheeks
                                </router-link>
                              </li>
                            </ul>
                            <div class="menu-images-container" />
                          </div>
                        </li>
                      </ul>
                      <div class="menu-images-container" />
                    </div>
                  </li>
                  <li id="tmcategory-6" class="category">
                    <router-link
                      :to="{ name: 'Product' }"
                      class="dropdown-item"
                    >
                      Sweet Peas</router-link
                    >
                  </li>
                  <li id="tmcategory-9" class="category">
                    <router-link
                      :to="{ name: 'Product' }"
                      class="dropdown-item"
                    >
                      Better Baby</router-link
                    >
                  </li>
                  <li id="tmcategory-10" class="category">
                    <router-link
                      :to="{ name: 'Product' }"
                      class="dropdown-item"
                    >
                      Peapod</router-link
                    >
                  </li>
                  <li id="tmcategory-11" class="category">
                    <router-link
                      :to="{ name: 'Product' }"
                      class="dropdown-item"
                    >
                      Childsplay</router-link
                    >
                  </li>
                  <li id="tmcategory-12" class="category">
                    <router-link
                      :to="{ name: 'Product' }"
                      class="dropdown-item"
                    >
                      Tiny hug</router-link
                    >
                  </li>
                  <li id="tmcategory-13" class="category">
                    <router-link
                      :to="{ name: 'Product' }"
                      class="dropdown-item"
                    >
                      Nature Baby</router-link
                    >
                  </li>
                  <li id="tmcategory-14" class="category">
                    <router-link :to="{ name: 'Product' }" class="dropdown-item"
                      >Mini Boden</router-link
                    >
                  </li>
                  <li id="tmcategory-15" class="category">
                    <router-link :to="{ name: 'Product' }" class="dropdown-item"
                      >Joe Fresh</router-link
                    >
                  </li>
                  <li id="tmcategory-16" class="category">
                    <router-link :to="{ name: 'Product' }" class="dropdown-item"
                      >Bon Bebe</router-link
                    >
                  </li>
                  <li id="tmcategory-27" class="category">
                    <router-link :to="{ name: 'Product' }" class="dropdown-item"
                      >brand hub</router-link
                    >
                  </li>
                  <li id="tmcategory-28" class="category">
                    <router-link :to="{ name: 'Product' }" class="dropdown-item"
                      >desginer hub</router-link
                    >
                  </li>
                  <li id="tmcategory-29" class="category">
                    <router-link :to="{ name: 'Product' }" class="dropdown-item"
                      >Blue Jay</router-link
                    >
                  </li>
                  <li id="tmcategory-30" class="category">
                    <router-link :to="{ name: 'Product' }" class="dropdown-item"
                      >Baby Born</router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
            <!-- Block links module -->
            <div id="links_block_top" class="block links">
              <h3 class="h3 title_block">
                <i class="material-icons" />
              </h3>
              <ul id="tm_toplink" class="block_content">
                <li>
                  <a data-id="#" title="home">home</a>
                </li>
                <li>
                  <a data-id="#" title="About us">About us</a>
                </li>
                <li>
                  <a data-id="#" title="contact us">contact us</a>
                </li>
                <li>
                  <a data-id="#" title="stores">stores</a>
                </li>
                <li>
                  <a data-id="#" title="Delivery">Delivery</a>
                </li>
                <li>
                  <a data-id="#" title="price drop">price drop</a>
                </li>
              </ul>
            </div>
            <!-- /Block links module -->
          </div>
        </div>
      </div>
      <div id="mySidenav" class="sidenav hidden-xs">
        <a data-id="javascript:void(0)" class="closebtn" @click="closeNav()"
          >&times;</a
        >
        <div class="menu vertical-menu js-top-menu position-static">
          <ul id="top-menu" class="tm_sf-menu top-menu" data-depth="0">
            <li id="tmcategory-3" class="category">
              <router-link :to="{ name: 'Product' }" class="dropdown-item">
                Clothes
              </router-link>
            </li>
            <li id="tmcategory-6" class="category">
              <router-link :to="{ name: 'Product' }" class="dropdown-item">
                Sweet Peas</router-link
              >
            </li>
            <li id="tmcategory-9" class="category">
              <router-link :to="{ name: 'Product' }" class="dropdown-item">
                Better Baby</router-link
              >
            </li>
            <li id="tmcategory-10" class="category">
              <router-link :to="{ name: 'Product' }" class="dropdown-item">
                Peapod</router-link
              >
            </li>
            <li id="tmcategory-11" class="category">
              <router-link :to="{ name: 'Product' }" class="dropdown-item">
                Childsplay</router-link
              >
            </li>
            <li id="tmcategory-12" class="category">
              <router-link :to="{ name: 'Product' }" class="dropdown-item">
                Tiny hug</router-link
              >
            </li>
            <li id="tmcategory-13" class="category">
              <router-link :to="{ name: 'Product' }" class="dropdown-item">
                Nature Baby</router-link
              >
            </li>
            <li id="tmcategory-14" class="category">
              <router-link :to="{ name: 'Product' }" class="dropdown-item"
                >Mini Boden</router-link
              >
            </li>
            <li id="tmcategory-15" class="category">
              <router-link :to="{ name: 'Product' }" class="dropdown-item"
                >Joe Fresh</router-link
              >
            </li>
            <li id="tmcategory-16" class="category">
              <router-link :to="{ name: 'Product' }" class="dropdown-item"
                >Bon Bebe</router-link
              >
            </li>
            <li id="tmcategory-27" class="category">
              <router-link :to="{ name: 'Product' }" class="dropdown-item"
                >brand hub</router-link
              >
            </li>
            <li id="tmcategory-28" class="category">
              <router-link :to="{ name: 'Product' }" class="dropdown-item"
                >desginer hub</router-link
              >
            </li>
            <li id="tmcategory-29" class="category">
              <router-link :to="{ name: 'Product' }" class="dropdown-item"
                >Blue Jay</router-link
              >
            </li>
            <li id="tmcategory-30" class="category">
              <router-link :to="{ name: 'Product' }" class="dropdown-item"
                >Baby Born</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
// import mycart from "@/components/mycart";
import axios from "axios";
export default {
  components: {
    // mycart,
  },
  props: ["isHas"],
  data() {
    return {
      myaccountdropdown:false,
      wish: [],
      //   isHas: false,
      isShowing: false,
      q: "",
      postroute: [],
      searchData: [],
      categorieses: [],
      catedatas: [],
      fields: {
        type: "nav",
        uid: localStorage.getItem("user"),
        fullname: "",
        mobile: "",
        address: "",
        Token: this.$root.auth,
      },
    };
  },
  mounted() {
    this.isShowing = this.isHas
    this.shownav();
    // this.showNavs()
    this.categories();
    this.whichCount();
  },
  methods: {
    // showNavs(){
    //   if(this.isHas == false){
    //     this.isHas = true
    //   }else if(this.isHas == true){
    //     this.isHas = false
    //   }
    // },
    openNav() {
      document.getElementById("mySidenav").style.width = "250px";
    },
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    },
    shownav() {
      this.responsive = true;
    },
    categories() {
      var ev = this;
      axios
        .get(this.$root.URL_ROOT + "api.php?type=category")
        .then(function (response) {
          // console.log(response.data);
          ev.categorieses = response.data;
        });
    },
    whichCount() {
      var ev = this;
      var ip_address = JSON.parse(localStorage.getItem("ip_address"));
      var user_session = JSON.parse(localStorage.getItem("user"));
      var uid = "";
      if (user_session != null) {
        uid = user_session;
      } else {
        uid = null;
      }
      axios
        .post(this.$root.URL_ROOT + "api.php?type=whichCount", {
          uid: uid,
          ip_address: ip_address,
        })
        .then(function (response) {
          ev.wish = response.data;
          // console.log(response.data)
        });
    },
  },
};
</script>
<style>
.mob-search {
  width: 300px;
  margin-left: 30px;
}
.mob-search-btn {
  right: 15px;
  position: absolute;
  top: 20px;
  padding: 2px;
  background: #fff;
  border: 1px solid #fff;
  color: #000;
}
.navbar {
  font-size: 18px;
  background-color: #000;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding-bottom: 10px;
}
.main-nav {
  list-style-type: none;
  display: none;
}
.nav-links,
.logo {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.7);
}
.main-nav li {
  text-align: center;
  margin: 15px auto;
}
.main-nav li a {
  color: #fff;
}
.logo {
  display: inline-block;
  font-size: 22px;
  margin-top: 10px;
  margin-left: 20px;
}

.navbar-toggle {
  position: absolute;
  top: 0px;
  left: 20px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);
  font-size: 24px;
}

#chkToggle {
  display: none;
}

#chkToggle:checked + ul.main-nav {
  display: block;
  overflow: hidden;
}
.mobile-menu {
  margin: auto;
}
@media (max-width: 767px) {
  .navbar {
    margin-bottom: 0;
  }
}
@media screen and (min-width: 768px) {
  .material-icons.menu-open {
    float: right;
  }
  .navbar {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0;
    height: 70px;
    align-items: center;
  }

  #chkToggle:checked + ul.main-nav {
    display: flex;
  }

  .main-nav {
    display: flex;
    margin-right: 30px;
    flex-direction: row;
    justify-content: flex-end;
  }

  .main-nav li {
    margin: 0;
  }

  .nav-links {
    margin-left: 40px;
  }

  .logo {
    margin-top: 0;
  }

  .navbar-toggle {
    display: none;
  }

  .logo:hover,
  .nav-links:hover {
    color: rgba(255, 255, 255, 1);
  }
}
.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  background-color: #fff;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  box-shadow: 2px 2px 2px #5a5858;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
</style>
