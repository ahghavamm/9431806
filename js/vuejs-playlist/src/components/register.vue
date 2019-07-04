<template>
  <div id="app-register">

    <div class="main">
        <div class="reyhoonPhoto fixed">
            <a href="#"><img src="../../../../mocks/Screen Shot 1398-01-28 at 10.18.11.png"></a>
        </div>
        <div class="registerLogin">
            <ul>
                <li><router-link to='/login' ><a href="#" id="logInNavigator"><i class="fa fa-sign-out" style="font-size:20px"></i>&nbsp;&nbsp;ورود</a></router-link></li>
                <li><router-link to="/register"><a href="#" id="singUpNavigator"><i class="glyphicon glyphicon-user"></i>&nbsp;&nbsp;ثبت نام</a></router-link></li>
            </ul>
        </div>
        <div class="login">
            <h6 id="titleLogin">ثبت نام</h6>
            <p id="subTitleLogin">از اینکه داری به جمع ریحونیا می پیوندی خیلی خوشحالیم</p>
            <form class="loginAndRegisterForm">
                <div id="divOfLogin">
                    <input type="text" placeholder="ایمیل و یا شماره همراه" name="firstAndLastName" class="nameAndPasswordForm"><br />
                    <input type="password" placeholder="رمز عبور" name="password" class="nameAndPasswordForm"><br />
                </div>
                
                <div id="divOfRegister">
                    <input type="text" placeholder="نام و نام خانوادگی" name="firstAndLastName" class="nameAndPasswordForm"><br /><div class="photoOfFirstnameAndLastName"></div>
                    <input type="text" placeholder="شماره همراه" name="phoneNumber" class="phoneAndEmail">
                    <input type="text" placeholder="ایمیل" name="email" class="phoneAndEmail"><br />
                    <input type="password" placeholder="رمزعبور" name="password" class="nameAndPasswordForm"><br />
                    <input type="password" placeholder="تکرار رمز عبور" name="doubleCheckPassword" class="nameAndPasswordForm">
                </div>
            </form>
            <div class="forgottonLogin"  id="rememberLogin">
                <a href="#" class="linkForgotton">رمز عبور خود را فراموش کردم</a>
            </div>
            <a href="#">
            <div class="finalRegisterLogin">
                ثبت نام
            </div>
            </a>
        </div>
        <div class="socialNetwork">
            <p><a href="#"><img src="../../../../mocks/Screen Shot 1398-01-28 at 12.43.45.png"></a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#"><img src="../../../../mocks/Screen Shot 1398-01-28 at 12.44.01.png"></a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#"><img src="../../../../mocks/Screen Shot 1398-01-28 at 12.44.10.png"></a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#"><img src="../../../../mocks/Screen Shot 1398-01-28 at 12.44.18.png"></a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#"><img src="../../../../mocks/Screen Shot 1398-01-28 at 12.44.35.png"></a></p>
        </div>
        <div class="navigatorInFooter">
            <ul>
                <li><a href="#">سوالات متداول</a></li>
                <li><a href="#">ثبت رستوران</a></li>
                <li><a href="#">درباره ریحون</a></li>
                <li><a href="#">بلاگ</a></li>
                <li><a href="#">قوانین و مقرارت</a></li>
                <li><a href="#">تماس با ریحونیا</a></li>
            </ul>
        </div>
    </div>

    
  </div>
</template>

<script>

export default {
  components:{
    
  },
  data () {
    return {
     
    }
  }
}
</script>

<style>

*{
	box-sizing:border-box;	
}
body{
	margin:0;
	padding:0;
	font-family:Shabnam;
}
@font-face {
  font-family: Shabnam;
  src: url('https://cdn.fontcdn.ir/Font/Persian/Shabnam/Shabnam.eot');
  src: url('https://cdn.fontcdn.ir/Font/Persian/Shabnam/Shabnam.eot?#iefix') format('embedded-opentype'),
       url('https://cdn.fontcdn.ir/Font/Persian/Shabnam/Shabnam.woff2') format('woff2'),
       url('https://cdn.fontcdn.ir/Font/Persian/Shabnam/Shabnam.woff') format('woff'),
       url('https://cdn.fontcdn.ir/Font/Persian/Shabnam/Shabnam.ttf') format('truetype');
  font-weight: normal;
}

@font-face {
  font-family: Shabnam;
  src: url('https://cdn.fontcdn.ir/Font/Persian/Shabnam/Shabnam-Bold.eot');
  src: url('https://cdn.fontcdn.ir/Font/Persian/Shabnam/Shabnam-Bold.eot?#iefix') format('embedded-opentype'),
       url('https://cdn.fontcdn.ir/Font/Persian/Shabnam/Shabnam-Bold.woff2') format('woff2'),
       url('https://cdn.fontcdn.ir/Font/Persian/Shabnam/Shabnam-Bold.woff') format('woff'),
       url('https://cdn.fontcdn.ir/Font/Persian/Shabnam/Shabnam-Bold.ttf') format('truetype');
  font-weight: bold;
}

@font-face {
  font-family: Shabnam;
  src: url('https://cdn.fontcdn.ir/Font/Persian/Shabnam/Shabnam-Light.eot');
  src: url('https://cdn.fontcdn.ir/Font/Persian/Shabnam/Shabnam-Light.eot?#iefix') format('embedded-opentype'),
       url('https://cdn.fontcdn.ir/Font/Persian/Shabnam/Shabnam-Light.woff2') format('woff2'),
       url('https://cdn.fontcdn.ir/Font/Persian/Shabnam/Shabnam-Light.woff') format('woff'),
       url('https://cdn.fontcdn.ir/Font/Persian/Shabnam/Shabnam-Light.ttf') format('truetype');
  font-weight: 300;
}
body {
    margin: 0;
    font-family: Shabnam, fantasy;
    font-size: 16px;
    color: #656566;
    line-height: 25px;
    text-align: right;
    direction: rtl;
    background-color: #fafafa;
}
.main{
	background-color:#ffffff;
	width:auto;
	height:200px;	
}

.reyhoonPhoto{
	width:100%;
	height:50px;	
	background-color:#ffffff;
	border-bottom:1px solid #e5e5e5;
	text-align:center;
	position:fixed;
	top:0;
	left:0;
	z-index:2;
}
.reyhoonPhoto img{
	height:49px;	
}

.registerLogin{
	width:100%;
	height:54px;	
	display:block;
	text-align:center;
	border-bottom:1px solid #e5e5e5;
	position:fixed;
	top:51px;
	left:0;
	z-index:3;
	background-color:white;
	margin-top:-1px;
}
ul {
	list-style-type: none;
	margin-right: 38%;
	padding: 0;
}
li{
	float:right;
	padding-right:5%;
}
li a {
	display: inline-block;
	color: #323232;
	text-align: center;
	padding: 14px ;
	text-decoration: none;
	color:#949494;
}
li a:hover{
	color:#d20f63;	
	border-bottom:1px solid #d20f63;
	text-decoration:none;
}

.login{
	width:100%;
	height:240%;
	background-color:#eeeeee;	
	text-align:center;
	padding-top:5%;
	position:relative;
	top:105.5px;
}
.login .photoOfFirstnameAndLastName{
	position:absolute;
	height:7%;
	width:3%;
	
	margin-right:30%;
	margin-top:-2.6%;
}
.login p{
	font-size:11px;	
	color:#a39f9e;
}
.login form{
	padding-top:2%;	
}
.login input{
	padding-top:5px;
	text-align:right;	
}
form.loginAndRegisterForm .nameAndPasswordForm{
	padding: 13.5px;
  	font-size: 17px;
	background-color:white;
	width: 40%;
	text-align:right;
	height:35px;
	margin-top:1%;
}
form.loginAndRegisterForm .phoneAndEmail{
	width:19%;
	padding: 13.5px;
  	font-size: 17px;
    background: white;
	text-align:right;
	height:35px;	
	margin-top:1%;
	margin-left:0.8%;
	margin-right:0.8%;
}
form.loginAndRegisterForm #divOfLogin{
	display:none;	
}
form.loginAndRegisterForm::after {
	content: "";
	clear: both;
	display: table;
}
.login .forgottonLogin{
	width:50%;
	height:15%;	
	margin-right:30%;
	text-align:right;
	padding-top:3%;
	display:none;
}
.login .linkForgotton{
	font-size:12px;	
}
.login a{
	text-decoration:none;
}
.login .finalRegisterLogin{
	color:white;
	background-color:#d20f63;
	text-align:center;
	width:7%;
	height:7%;	
	border-radius:10px;
	margin:0 auto;
	left:50%;
	margin-top:3%;
}
input{
	transition: all 0.3s ease;
    border: 1px solid #eeeeee;	
}
input:focus{
	outline: none;
	border-color: #d20f63;	
	
}

.socialNetwork{
	position:relative;
	top:105.5px;
	width:100%;
	height:100px;
	border-bottom:1px solid #e5e5e5;
	background-color:white;
	padding-top:3%;
	padding-right:42%;
}
.socialNetwork img{
	width:3.5%;	
}

.navigatorInFooter{
	position:relative;
	top:105.5px;
	width:100%;
	height:100px;
	background-color:white;
	margin-top:-0.75%;
}
.navigatorInFooter ul{
	margin-right: 10%;
	font-size:14px;
}


</style>
