<template>
    <div>
        
        <template v-if="chk">{{ content }}</template>
        <Skeleton color="#e6f3fd" highlight="#eef6fd" v-else />

        
    </div>
</template>
<script>
import Skeleton from 'vue-loading-skeleton';
export default {
    components:{
        Skeleton
    },
    data () {
      return {
        chk:false,
        content:'<div style="height:300px;widht:300px;background-color:#red;">manoj</div>'
      }
  },
  mounted () {
     this.getData();
  },
  methods:{
     getData(){
         setTimeout(() => {
             this.chk=true;
         }, 3000);
     }
  }
}
</script>