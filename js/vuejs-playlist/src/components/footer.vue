<template>
  <div id="app-footer">
        
    <div class="footer">
    	<div class="upFooter">
        	<div class="informationFooter">
            	<p>مراقبت و محافظت از حساب کاربری و رمزعبور هر کاربر بر عهده کاربر است. ریحون سریعترین راه سفارش آنلاین غذا است. منوی عکس‌دار رستوران‌های اطرافتان را بر اساس مکان خود به راحتی مشاهده کنید و سفارش دهید.</p>
                <a href="#">لیست رستوران ها</a>
            </div>
            <div class="linksFooter">
            	<div class="callingInformationFooter"></div>
                <h5>تماس با ریحون</h5>
                <p><a href="#">درباره ریحون</a><br />
                <a href="#">تماس با ما</a><br />
                <a href="#">وبلاگ ریحون</a></p>
            </div>
            <div class="linksFooter">
            	<div class="resturantsInformationFooter"></div>
                <h5>رستوران ها</h5>
                <p><a href="#">ثبت رستوران</a></p>
            </div>
            <div class="linksFooter">
            	<div class="supportingInformationFooter"></div>
                <h5>پشتیبانی ریحون</h5>
                <p><a href="#">سوالات متداول</a><br />
                <a href="#">تماس با پشتیبان</a><br />
                <a href="#">قوانین و مقررات</a></p>
            </div>
            <div class="linksFooter">
            	<div class="applicationInformationFooter"></div>
                <h5>اپلیکشن های موبایل</h5>
                <p><a href="#"><img src="../../../../mocks/application download link/google-play-dark.png"></a></p>
                <p><a href="#"><img src="../../../../mocks/application download link/sib-app-dark.png"></a></p>
                <p><a href="#"><img src="../../../../mocks/application download link/cafebazaar-dark.png"></a></p>
            </div>
        </div>
        <div class="downFooter">
        	<div class="licenseDownFooter">
            	<p><a href="#"><img src="../../../../mocks/9e91a300.png"></a>
                <a href="#"><img src="../../../../mocks/logo.aspx.png"></a></p>
            </div>
        </div>
    </div>
    
    <div class="copyRightFooter">
        <div class="socialNetworkCopyRightFooter">
        	<p><a href="#"><img src="../../../../mocks/Screen Shot 1398-01-21 at 15.04.59.png"></a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#"><img src="../../../../mocks/Screen Shot 1398-01-21 at 15.04.46.png"></a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#"><img src="../../../../mocks/Screen Shot 1398-01-21 at 15.04.35.png"></a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#"><img src="../../../../mocks/Screen Shot 1398-01-21 at 15.04.19.png"></a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#"><img src="../../../../mocks/Screen Shot 1398-01-21 at 15.04.05.png"></a></p>
        </div>
        <div class="copyRightCopyRightFooter">
        	<p>&copy;&nbsp;2017, Reyhoon, All Rights Reserved.</p>
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

.footer{
	width:auto;
	height:250%;
	background-color:#202020;
	color:#969696;
	bottom: 0;
}
.upFooter{
	width:auto;
	height:50%;		
	display: inline-block;
	padding-right:10%;
	padding-left:5%;
}
.upFooter .informationFooter{
	float: right;
	text-align: right;
	width:35%;
	padding:3% 1%;
}
.upFooter .informationFooter a{
	color:#5b93fc;
}
.upFooter .linksFooter{
	float: right;
	width: 15%;
	padding: 30px 10px;
	padding-bottom:0px;
	text-align: center;
	margin-right:1%;
}
.linksFooter .callingInformationFooter{
	width:100%;
	height:2px;
	background-color:#8a17ac;
}
.linksFooter .resturantsInformationFooter{
	width:100%;
	height:2px;
	background-color:#d20f63;
}
.linksFooter .supportingInformationFooter{
	width:100%;
	height:2px;
	background-color:#fc1224;
}
.linksFooter .applicationInformationFooter{
	width:100%;
	height:2px;
	background-color:#fec22d;
}
.linksFooter h5{
	color:white;
	text-align:right;
	font-size:14px;
}
.linksFooter p{
	text-align:right;
		
}
.linksFooter a{
	text-decoration:none;
}
.linksFooter img{
	width:100%;
	height:20%;	
}
.licenseDownFooter{
	padding-right:42%;	
}
.copyRightFooter{
	background-color:#191919;
	width:auto;
	height:35%;	
	color:#9a9a9a;
}
.copyRightFooter .socialNetworkCopyRightFooter{
	width:75%;
	height:100%;	
	float:left;
	padding-left:20px;
	text-align:left;
}
.copyRightFooter .socialNetworkCopyRightFooter img{
	width:30px;
}
.copyRightFooter .copyRightCopyRightFooter{
	width:25%;
	height:100%;	
	float:left;
	
}
.copyRightCopyRightFooter p{
	text-align:right;
	padding-top:2%;	
	font-size:14px;
	direction:ltr;
	padding-right:5%;
}

</style>
