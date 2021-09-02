<template>
 <div> {{images}}
<ProductZoomer :base-images="images" :base-zoomer-options="zoomerOptions" />
 </div>
</template>
<script>
import ProductZoomer from 'vue-product-zoomer'
export default {
    components: {
    ProductZoomer
  },
  name: 'app',
  data () {
    return {
      'images': {
          'thumbs': [
            {
              'id': 1,
              'url': 'http://yoohooworld.com/images/vue-product-zoomer/images/thumbs/1.jpeg'
            },
            {
              'id': 2,
              'url': 'http://yoohooworld.com/images/vue-product-zoomer/images/thumbs/2.jpeg'
            }
          ],
          'normal_size': [
            {
              'id': 1,
              'url': 'http://yoohooworld.com/images/vue-product-zoomer/images/normal_size/1.jpeg'
            },
            {
              'id': 2,
              'url': 'http://yoohooworld.com/images/vue-product-zoomer/images/normal_size/2.jpeg'
            }
          ],
          'large_size': [
            {
              'id': 1,
              'url': 'http://yoohooworld.com/images/vue-product-zoomer/images/large_size/1.jpeg'
            },
            {
              'id': 2,
              'url': 'http://yoohooworld.com/images/vue-product-zoomer/images/large_size/2.jpeg'
            }
          ]
      },
      'zoomerOptions': {
        zoomFactor: 3, // scale for zoomer
        pane: 'pane', // three type of pane ['pane', 'container-round', 'container']
        hoverDelay: 300, // how long after the zoomer take effect
        namespace: 'zoomer', // add a namespace for zoomer component, useful when on page have mutiple zoomer
        move_by_click:false, // move image by click thumb image or by mouseover
        scroll_items: 5, // thumbs for scroll
        choosed_thumb_border_color: "#bbdefb", // choosed thumb border color
        scroller_button_style: "line",
        scroller_position: "left",
        zoomer_pane_position: "right"
      }
    }
  }
}
</script>>