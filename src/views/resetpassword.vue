<template>
<div class="login">
<navbar></navbar>

<div class="wrap-breadcrumb parallax-breadcrumb" style="background:url('https://www.swaracreations.mragank.com/api/uploads/category/df56aa6eb6f6b06531da22645d200fb4.jpg');background-size:contain;">
 <div class="container"> <router-link class="product-heading" :to="{ name: 'resetpassword'}">
                   <i class="fa fa-home" ></i> Reset Password
                  </router-link>
      </div>
</div>

<div class="login-wrap">
	<div class="login-html">
		<input id="tab-1" type="radio" name="tab" class="sign-in" checked><label for="tab-1" class="tab">Reset Password</label>
		<input id="tab-2" type="radio" name="tab" class="sign-up"><label for="tab-2" class="tab"></label>
		<div class="login-form">
			<div class="sign-in-htm">
				<div class="group">
					<label for="user" class="label">Enter Verification Code * </label>
					<input  v-model="vcode" type="text" class="input">
				</div>
				<div class="group">
					<label for="pass"  class="label">Enter New Password</label>
					<input  v-model="npass" type="password" class="input" data-type="password">
				</div>
                <div class="group">
					<label for="pass"  class="label">Enter Confirm Password</label>
					<input  v-model="cpass" type="password" class="input" data-type="password">
				</div>
				<div class="group">
					<input type="button" @click="reset" class="button" value="Continue">
				</div>
				<div class="hr"></div>
				<div class="foot-lnk">
					<router-link  to='/forget' >Forgotten Password</router-link>
				</div>
        <div class="foot-lnk">
					<router-link  to='/registration' class="btn">Create an Account</router-link>
				</div>
			</div>
			<div class="sign-up-htm">
				<div class="group">
					<label for="user" class="label">Username</label>
					<input  type="text" class="input">
				</div>
				<div class="group">
					<label for="pass" class="label">Password</label>
					<input  type="password" class="input" data-type="password">
				</div>
				<div class="group">
					<label for="pass" class="label">Repeat Password</label>
					<input  type="password" class="input" data-type="password">
				</div>
				<div class="group">
					<label for="pass" class="label">Email Address</label>
					<input  type="text" class="input">
				</div>
				<div class="group">
					<input type="submit" class="button" value="Sign Up">
				</div>
				<div class="hr"></div>
				<div class="foot-lnk">
					<label for="tab-1">Already Member?</label>
				</div>
			</div>
		</div>
	</div>
</div>

<div id="account-login" class="container hide">
  <ul class="breadcrumb">
        <li><a href="#"><i class="fa fa-home"></i></a></li>
        <li><a href="#">Account</a></li>
        <li><a href="#">Login</a></li>
      </ul>
      <div class="row">
      

                <div id="content" class="col-sm-12">
      <div class="row">
      <div class="col-sm-3"></div>
        <div class="col-sm-6 loginUI">
          <div class="well">
            <h3>Returning Customer</h3>
            <p><strong>I am a returning customer</strong></p>
            <form action="#" method="post" enctype="multipart/form-data">
              <div class="form-group">
                <label class="control-label" for="input-email">E-Mail Address</label>
                <input type="text" name="email" value=""  placeholder="E-Mail Address" id="input-email" class="form-control" />
              </div>
              <div class="form-group">
                <label class="control-label" for="input-password">Password</label>
                <input type="password" name="password" value="" placeholder="Password" id="input-password" class="form-control" />
                <a href="#">Forgotten Password</a></div>
              <input type="button" value="Login" class="btn btn-primary" />
                          </form>
                          <div class="text-center">
                           <p>Signup and Login</p>
           <router-link  to='/registration' class="btn btn-primary">Continue</router-link>
         </div>
          </div>
        </div>
        <div class="col-sm-12">
        
        </div>
      </div>
      </div>
    </div>
</div>

<footerbt />
</div>
</template>
<script>
//import sidemenu from '@/components/sidemenu'
import navbar from '@/components/navbar'
import footerbt from '@/components/footer'
export default {
  components: { navbar, footerbt },
  data () {
    return {
      vcode: '',
      npass: '',
      cpass: '',
      role: '',
      token: localStorage.getItem('token'),
      msg: []
    }
  },
   mounted () {
	// this.login()
	this.uid = localStorage.getItem('user')
	this.check()
   this.goToTop()
  },
  methods: {
    goToTop () {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    },
	check(){
	if(this.uid != null){
	window.location.href = 'myaccount';
	}
	},
    reset () {
      var vi = this
      // console.log(this);
      const axios = require('axios')
      
      if (this.vcode === '') {
        this.$toasted.global.error({ message: 'Please enter OTP Code' })
      } else if (this.npass === '') {
        this.$toasted.global.error({ message: 'Please enter New password' })
      }else if (this.cpass === '') {
        this.$toasted.global.error({ message: 'Please enter Confirm password' })
      } else {
		// headers: this.$root.auth,
		axios({
          method: "POST",
          url: vi.$root.URL_ROOT + "api.php",
          data: {
            type: "resetpasswordcheck",
           vcode: vi.vcode, npass: vi.npass,cpass: vi.cpass
          },
        }).then(function(response)
         {
          var data = response.data
          console.log(response)
          if (data.status === 'success') {
            vi.$toasted.global.success({ message: data.msg })
			//vi.$router.push({ name: 'myaccount' });
			// window.location.href = 'myaccount';
          } else {
            vi.$toasted.global.error({ message: data.msg })
          }
        })
      }
      return false
    }
  }
}
</script>
<style scoped>
*,:after,:before{box-sizing:border-box}
.clearfix:after,.clearfix:before{content:'';display:table}
.clearfix:after{clear:both;display:block}
a{color:inherit;text-decoration:none}

.login-wrap{
	width:100%;
	margin:auto;
	max-width:525px;
	margin-bottom:50px;
	min-height:670px;
	position:relative;
	background:url(https://www.swaracreations.mragank.com/admin/uploads/media/d1.jpg) repeat center;
	box-shadow:0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19);
}
.login-html{
	width:100%;
	height:100%;
	position:absolute;
	padding:90px 70px 50px 70px;
	background:rgb(0 0 0 / 89%);
}
.login-html .sign-in-htm,
.login-html .sign-up-htm{
	top:0;
	left:0;
	right:0;
	bottom:0;
	position:absolute;
	transform:rotateY(180deg);
	backface-visibility:hidden;
	transition:all .4s linear;
}
.login-html .sign-in,
.login-html .sign-up,
.login-form .group .check{
	display:none;
}
.login-html .tab,
.login-form .group .label,
.login-form .group .button{
	text-transform:uppercase;
}
.login-html .tab{
	font-size:22px;
	margin-right:15px;
	padding-bottom:5px;
	margin:0 15px 10px 0;
	display:inline-block;
	border-bottom:2px solid transparent;
}
.login-html .sign-in:checked + .tab,
.login-html .sign-up:checked + .tab{
	color:#fff;
	border-color:#ba2930;
}
.login-form{
	min-height:345px;
	position:relative;
	perspective:1000px;
	transform-style:preserve-3d;
}
.login-form .group{
	margin-bottom:15px;
}
.login-form .group .label,
.login-form .group .input,
.login-form .group .button{
	width:100%;
	color:#fff;
	display:block;
}
.login-form .group .input,
.login-form .group .button{
	border:none;
	padding:15px 20px;
	border-radius:25px;
	background:rgba(255,255,255,.1);
}
.login-form .group input[data-type="password"]{
	text-security:circle;
	-webkit-text-security:circle;
}
.login-form .group .label{
	color:#aaa;
	font-size:12px;
}
.login-form .group .button{
	background:#ba2930;
}
.login-form .group label .icon{
	width:15px;
	height:15px;
	border-radius:2px;
	position:relative;
	display:inline-block;
	background:rgba(255,255,255,.1);
}
.login-form .group label .icon:before,
.login-form .group label .icon:after{
	content:'';
	width:10px;
	height:2px;
	background:#fff;
	position:absolute;
	transition:all .2s ease-in-out 0s;
}
.login-form .group label .icon:before{
	left:3px;
	width:5px;
	bottom:6px;
	transform:scale(0) rotate(0);
}
.login-form .group label .icon:after{
	top:6px;
	right:0;
	transform:scale(0) rotate(0);
}
.login-form .group .check:checked + label{
	color:#fff;
}
.login-form .group .check:checked + label .icon{
	background:#ba2930;
}
.login-form .group .check:checked + label .icon:before{
	transform:scale(1) rotate(45deg);
}
.login-form .group .check:checked + label .icon:after{
	transform:scale(1) rotate(-45deg);
}
.login-html .sign-in:checked + .tab + .sign-up + .tab + .login-form .sign-in-htm{
	transform:rotate(0);
}
.login-html .sign-up:checked + .tab + .login-form .sign-up-htm{
	transform:rotate(0);
}

.hr{
	height:2px;
	margin:60px 0 50px 0;
	background:rgba(255,255,255,.2);
}
.foot-lnk{
	text-align:center;
}
</style>>