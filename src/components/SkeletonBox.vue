<template>
<div class="skeleton container">
  <!-- <vcl-facebook></vcl-facebook>
     <vcl-instagram></vcl-instagram>-->
     <div class="col-sm-4"></div>
     <div class="col-sm-6 text-center">
  <vue-content-loading>
      <circle cx="20" cy="20" r="20" />
      <rect x="75" y="13" rx="4" ry="4" width="100" height="15" />
      <rect x="75" y="37" rx="4" ry="4" width="50" height="15" />
      <rect x="75" y="37" rx="4" ry="4" width="100" height="15" />
      </vue-content-loading>
      </div>
      <div class="col-sm-2"></div>
  </div>
  </template>
<script>
 import VueContentLoading from 'vue-content-loading';
// import { VclFacebook } from 'vue-content-loading';
export default {
components: {
       // VclFacebook,
        VueContentLoading
        //VclInstagram,
      },
};
</script>
<style>
.skeleton{
    margin:auto;
}
.skt{position:relative;}
</style>