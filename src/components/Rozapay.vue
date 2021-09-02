<template>
    <button @click="makePayment" class="btn btn-success"><slot></slot></button>
</template>
<script>
//import $ from "jquery";
export default {
  props: ["amount","name"],
  name: "Rozorpay",
  components: {},
  mounted(){
    this.includeStripe('https://checkout.razorpay.com/v1/checkout.js');
  },
  data() {
    return {
      order_id: "",
    };
  },
  methods: {
    //Function to create order ID
     includeStripe( URL, callback ){
        let documentTag = document, tag = 'script',
            object = documentTag.createElement(tag),
            scriptTag = documentTag.getElementsByTagName(tag)[0];
        object.src = 'https://' + URL;
        if (callback) { object.addEventListener('load', function (e) { callback(null, e); }, false); }
        scriptTag.parentNode.insertBefore(object, scriptTag);
    },
    makePayment: function() {
      setTimeout(() => {
            var amount = parseFloat(this.amount)
            var rzp1 = new Razorpay({
                key: this.$root.rozor_key,
                amount: amount*100,
                name: this.name,
                currency: "INR",
                //Uncomment if you are using handler function
                "handler": function (response){
                console.log(response);
                },
                //callback_url: 'http://13.126.183.214/razorpay/checkstatus/?orderid='+this.order_id,
                prefill: {
                name: this.$store.state.profile.fname,
                email: this.$store.state.profile.email,
                //contact: '',
                },
                notes: {
                address: this.$store.state.profile.address
                },
                theme: {
                color: "#00ffff"
                },
                //order_id: 1,
                redirect: false
            });
            rzp1.open();
      }, 1000);  
      
    }
    //if you are using handler function
    // verify: function(response) {
    // }
  }
};
</script>
