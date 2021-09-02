<template>
<div class="d-flex flex-column align-item-center">
<form id="payment-form" class="w-100 px-5 d-flex flex-column align-items-center">
<div ref="card" class="form-control m-0">
</div>
<input id="Stripe_buttobn" :disabled="lockSubmit"
class="btn btn-primary shadow-sm" type="submit"
value="CheckOut" v-on:click.prevent="purchase" />
</form>
</div>
</template>
<script>
import $ from 'jquery'
export default {
    props : ["currency","payAmount"],
    data () {
        return {
        spk: '',
        stripe: undefined,
        stripeAPIToken: 'pk_test_odr1PHmJitcCYWY2NKFZOevP00ueTeeLc8',
        Card: undefined,
        msg: "CheckOut",
        lockSubmit: false,
        paymentInfo: []
        }
    },
    mounted: function () {
         this.includeStripe('js.stripe.com/v3/', function(){
        this.configureStripe();
    }.bind(this) );
        var self=this;
        self.paymentInfo = paymentSetting["Stripe"];
        self.spk=self.paymentInfo["pk_test_odr1PHmJitcCYWY2NKFZOevP00ueTeeLc8"]
        self.Stripe= Stripe(self.spk);
        var style = {
            base: {
                color: '#32325d',
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothhing: 'antialiased',
                fontSize: '16px',
                '::placeholder' : {
                color: '@aab7c4'
                }
            },
            invalid: {
                color: '#fa755a',
                iconColor: '#fa755a'
            }
        };
        self.card =self.stripe.elements().create('card',{
            style: style,
        });
        self.card.mount(self.$refs.card);
    },
    methods:{
         includeStripe( URL, callback ){
        let documentTag = document, tag = 'script',
            object = documentTag.createElement(tag),
            scriptTag = documentTag.getElementsByTagName(tag)[0];
        object.src = '//' + URL;
        if (callback) { object.addEventListener('load', function (e) { callback(null, e); }, false); }
        scriptTag.parentNode.insertBefore(object, scriptTag);
    },
    configureStripe(){
    this.stripe = Stripe( this.stripeAPIToken );

    this.elements = this.stripe.elements();
    this.card = this.elements.create('card');

    this.card.mount('#card-element');
},
        purchase(){
            var self = this;
            self.lockSubmit=true
            self.stripe.createTokan(self.card).then(function(result){
                if(result.error) {
                    self.$forceUpdate();
                    self.lockSubmit=false
                    return;
                }
                self.processTransaction(result.token.id)
            })
            .catch((err) => {
                alert("error: "+err.message)
                self.lockSubmit=false
            });
        },
        processTransaction(transactionTokan){
            var self = this
            var dt= {
                acCode: self.$root.acCode,
                amount:parseFloat(self.payAmount).toFixed(2),
                currency:self.currency,
                apiKey:self.paymentInfo['stripeApiKey'],
                description: "somthing to say",
                tokan: transactionTokan
            }
            var route=self.$root.URL_ROOT+"https://www.swaracreations.mragank.com/api/stripe/"
            $.ajax({type: "POST" , url: route, data:dt, success: function (response){
                if(response.status==200){
                    window.location = "https://"+self.$root.myshopifyDomain+'/'+self.$root.proxyUrl;
                    self.lockSubmit=false
                }
            }
          })
        },

    },
}
</script>