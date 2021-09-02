<template>
	<div>
  <table class="ttable table table-bordered shopping-cart">
                <thead class="tthead" >
                  <tr class="ttr">
                    <td class="td text-center">Image</td>
                    <td class="td text-center">Product Name</td>
                    <td class="td text-center"> Size</td>
                    <td class="td text-center"> Colour</td>
                    <td class="td text-center">Quantity</td>
                    <td class="td text-center">Unit Price</td>
                    <td class="td text-center">Total</td>
                    <td class="td text-center">Remove</td>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="card in cartCount.data" :key="card.id">
                    <td class="td">
                      <router-link :to="{ name: 'productDetail', params: { Id: card.pid }}">
                        <img
                          width="40"
                          :src="$root.URL_IMAGES+'/product/'+card.front_image"
                          alt="Commodi Consequatur"
                          title="Commodi Consequatur"
                          class="img-thumbnail"
                        />
                      </router-link>
                    </td>
                    <td class="td ">
                      <router-link :to="{ name: 'productDetail', params: { Id: card.pid }}">
                      {{card.name}}</router-link>
                      <br />
                    </td>
                    <td class="td">
                    {{card.size}}
                    </td>
                    <td class="td">
                    {{card.color}}
                    </td>
                    <td class="td ">
                      <div class="input-group checkout-page mr-l" style="cursor:pointer;width: 70px;">
                        <span class="input-group-addon" v-if="card.qty==1" disabled>-</span>
                        <span
                          class="input-group-addon"
                          v-else
                          @click="update_cart_pre(card.id,card.pid,card.name,'1',card.unit_rate,'substract')"
                        >-</span>
                        <input
                          type="number"
                          class="form-control paddinput d input-mr"
                          name="price"
                          min="0"
                          :value="card.qty"
                          readonly
                        />
                        <span
                          class="input-group-addon"
                          @click="update_cart_pre(card.id,card.pid,card.name,'1',card.unit_rate,'add')"
                        >+</span>
                      </div>
                    </td>
                    <td class="td">{{card.unit_rate}}</td>
                    <td class="td">{{card.qty * card.unit_rate}}</td>
                     <td class="text-center td tdd"><button type="button" @click="delete_cart(card.id)" title="Remove" class="btn btn-danger btn-xs"><i class="fa fa-times"></i></button></td>
                  </tr>
                </tbody>
              </table>
	</div>
</template>
<style scoped>
.mr-l{margin-left: 0;}
.td{text-align: center;}
@media only screen and (max-width: 760px),
(min-device-width: 768px) and (max-device-width: 1024px)  {
    .td{text-align: right;}
    .mr-l{margin-left: auto;}
	/* Force table to not be like tables anymore */
	table, thead, tbody, th, td, tr { 
		display: block; 
	}
	
	/* Hide table headers (but not display: none;, for accessibility) */
	thead tr { 
		position: absolute;
		top: -9999px;
		left: -9999px;
	}
	
	tr { border: 1px solid #ccc; }
	
	td { 
		/* Behave  like a "row" */
		border: none;
		border-bottom: 1px solid #eee; 
		position: relative;
		padding-left: 50%; 
	}
	
	td:before { 
		/* Now like a table header */
		position: absolute;
		/* Top/left values mimic padding */
		top: 6px;
		left: 6px;
		width: 45%; 
		padding-right: 10px; 
		white-space: nowrap;
	}
	
	/*
	Label the data
	*/
	.td:nth-of-type(1):before { content: "Image";text-align: right; }
	.td:nth-of-type(2):before { content: "";text-align: right; }
	.td:nth-of-type(3):before { content: "Size";text-align: right; }
	.td:nth-of-type(4):before { content: "Colour";text-align: right; }
	.td:nth-of-type(5):before { content: "Quentity";text-align: right; }
	.td:nth-of-type(6):before { content: "Unit Rate"; text-align: right;}
    .td:nth-of-type(7):before { content: "Total Price";text-align: right; }
     .td:nth-of-type(8):before { content: "Remove";text-align: right; }
    
}
</style>
<script>
export default {
	

 methods:{
	update_cart_pre(cid,pid,pname,qty,price,mode){
     
       var t=this.update_cart(cid,pid,pname,qty,price,mode);
     // console.log(t)
      setTimeout(() => {
          if(t!=null){
        // this.getCart();
      }   
      }, 1000);
     
      
    },
}
}
</script>>