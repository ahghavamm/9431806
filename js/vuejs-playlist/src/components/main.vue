<template>
  <div id="app-main">
    <div class="main">
        <div class="header">
            <div class="headerList">
                <ul>
                    <li><a href="login.html">ورود</a></li>
                    <li></li>
                    <li><a href="register.html">عضویت</a></li>
                </ul>
                
                <ul>
                    <li><div class="inBlockBox"></div></li>
                    <li><a href="/">راهنما</a></li>
                </ul>
            </div>
            <div class="borderOfHeaderList">
            </div>
        </div>

        <div class="search">
            <div class="searchBox">
                <div class="titleSearch">
                    سفارش آنلاین غذا از بهترین رستوران ها و فست فود ها
                    <p>برای دیدن لیست رستوران ها و فست فود هایی که به شما سرویس می دهند، منطقه خود را وارد کنید.</p>
                </div>
                <div class="searchOfSearch">
                    <form class="searchForm" method="GET" action="../../../../php/resturantsList.php">
                        <button type="submit" class="w3-padding w3-xlarge w3-text-white"><i class="fa fa-search"></i></button>
                        <input type="text" placeholder="مثلا نیاوران" name="area">
                        <input type="text" class="searchOfCity" value="تهران &#9660;" onclick="myFunction()" >
                        <div class="dropdown-content" id="myDropdown">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </form>
                </div>
                <h6><a href="#">آخرین جستوجو: تهران ، شیخ هادی ، چهاراه ولیعصر</a></h6>
            </div>
        </div>
    </div>

    <div class="infoBestResturants">
        <div class="boxInfroramtion">
            <p>شهر و منطقه خود را وارد کنید</p>
            <div class="informationBoxInformation">
            	<img src="../../../../mocks/Screen Shot 1398-01-21 at 16.57.58.png">
            	<p>منوی مورد علاقه خود را از بین بیش از 4000 رستوران خوب در تهران و شهرستان‌ها جستجو کنید.</p>
            </div>
        </div>
        <div class="boxInfroramtion">
            <p>غذای خود را انتخاب کنید</p>
            <div class="informationBoxInformation">
            	<img src="../../../../mocks/Screen Shot 1398-01-21 at 16.58.05.png">
            	<p>غذایی که می‌خواهید را انتخاب کنید و بدون هزینه اضافی سفارش خود را ثبت کنید.</p>
            </div>
        </div>
        <div class="boxInfroramtion">
            <p>غذایتان را نوش جان کنید</p>
            <div class="informationBoxInformation">
            	<img src="../../../../mocks/Screen Shot 1398-01-21 at 16.58.12.png">
            	<p>درب منزل یا حضوری از خود رستوران سفارشتان را تحویل بگیرید.</p>
            </div>
        </div>
    </div>

    <div class="bestResturantsFromCustomer">
    	<p>رستوران ها و فست فود های برتر ماه بر اساس امتیازدهی کاربران</p>
        <div class="MainBestResturantsFromCustomer">
        	<a href="#">
            <div class="nameOfBestResturantsFromCustomer">
            	<!--<img src="../../../../mocks/Screen Shot 1398-01-21 at 21.36.17.png">!-->
                <div id="JsonImgUrlOfBestResturantsFromCustomerOne" class="imageOfNameOfBestResturantsFromCustomer"></div>
            	<h6><span id="JsonNameOfBestResturantsFromCustomerOne"></span></h6>
                <p>
                <span id="JsonNumOfRatesOfBestResturantsFromCustomerOne"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span style="color:orange" id="JsonRateOfBestResturantsFromCustomerOne"></span>
                </p>
                <p>پیتزا &#9679; فست فود&#9679; ساندویچ&#9679; برگر</p>
                <p><span id="JsonAddressOfBestResturantsFromCustomerOne"></span></p>
                <a href="#">
                <div class="orderNameOfBestResturantsFromCustomer">
                	شروع سفارش
                </div>
                </a>
            </div>
            </a>
            <a href="#">
            <div class="nameOfBestResturantsFromCustomer">
            	<div id="JsonImgUrlOfBestResturantsFromCustomerTwo" class="imageOfNameOfBestResturantsFromCustomer"></div>
            	<h6><span id="JsonNameOfBestResturantsFromCustomerTwo"></span></h6>
                <p>
                <span id="JsonNumOfRatesOfBestResturantsFromCustomerTwo"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span style="color:orange" id="JsonRateOfBestResturantsFromCustomerTwo"></span>
                </p>
                <p>فست فود &#9679; هات داگ &#9679; پیتزا &#9679; برگر</p>
                <p><span id="JsonAddressOfBestResturantsFromCustomerTwo"></span></p>
                <a href="#">
                <div class="orderNameOfBestResturantsFromCustomer">
                	شروع سفارش
                </div>
                </a>
            </div>
            </a>
            <a href="#">
            <div class="nameOfBestResturantsFromCustomer">
            	<div id="JsonImgUrlOfBestResturantsFromCustomerThree" class="imageOfNameOfBestResturantsFromCustomer"></div>
            	<h6><span id="JsonNameOfBestResturantsFromCustomerThree"></span></h6>
                <p>
                <span id="JsonNumOfRatesOfBestResturantsFromCustomerThree"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span style="color:orange" id="JsonRateOfBestResturantsFromCustomerThree"></span>
                </p>
                <p>فست فود &#9679; پیتزا&#9679; برگر &#9679;ساندویچ</p>
                <p><span id="JsonAddressOfBestResturantsFromCustomerThree"></span></p>
                <a href="#">
                <div class="orderNameOfBestResturantsFromCustomer">
                	شروع سفارش
                </div>
                </a>
            </div>
            </a>
    	</div>
    </div>
    <div class="resturants">
    	<h6>رستوران های خوب تهران در ریحون</h6>
    	<div class="logoResturants">
        	<div class="rowLogoResturants">
            	<div class="columLogoResturants"><a href="#"><div id="JsonPhoto1"></div><p><span id="JsonName1"></span></p></a></div>
                <div class="columLogoResturants"><a href="#"><div id="JsonPhoto2"></div><p><span id="JsonName2"></span></p></a></div>
                <div class="columLogoResturants"><a href="#"><div id="JsonPhoto3"></div><p><span id="JsonName3"></span></p></a></div>
                <div class="columLogoResturants"><a href="#"><div id="JsonPhoto4"></div><p><span id="JsonName4"></span></p></a></div>
            </div>
            <div class="rowLogoResturants">
            	<div class="columLogoResturants"><a href="#"><div id="JsonPhoto5"></div><p><span id="JsonName5"></span></p></a></div>
                <div class="columLogoResturants"><a href="#"><div id="JsonPhoto6"></div><p><span id="JsonName6"></span></p></a></div>
                <div class="columLogoResturants"><a href="#"><div id="JsonPhoto7"></div><p><span id="JsonName7"></span></p></a></div>
                <div class="columLogoResturants"><a href="#"><div id="JsonPhoto8"></div><p><span id="JsonName8"></span></p></a></div>
            </div>
            <div class="rowLogoResturants">
            	<div class="columLogoResturants"><a href="#"><div id="JsonPhoto9"></div><p><span id="JsonName9"></span></p></a></div>
                <div class="columLogoResturants"><a href="#"><div id="JsonPhoto10"></div><p><span id="JsonName10"></span></p></a></div>
                <div class="columLogoResturants"><a href="#"><div id="JsonPhoto11"></div><p><span id="JsonName11"></span></p></a></div>
                <div class="columLogoResturants"><a href="#"><div id="JsonPhoto12"></div><p><span id="JsonName12"></span></p></a></div>
            </div>
        </div>
    </div>
    <div class="kindsOfFood">
    	<div class="photosOfKindsOfFood">
        	<h5>غذا چی میل دارید؟</h5>
            <p>صبحانه ، ناهار ، شام یا هرچیزی که میل دارید را انتخاب کنید</p>
            <a href="#"><div class="onePhotosOfKindsOfFood">
            	<div class="namesOfOnePhotosOfKindsOfFood"><!--  use of Ajax and XML !-->
                	<h6><span id="ajaxNamesOfOnePhotosOfKindsOfFood"></span></h6>
                    <p>رستوران فعال<span id="ajaxNumberOfOnePhotosOfKindsOfFood"></span></p>
                </div>
            </div></a>
            <a href="#"><div class="twoPhotosOfKindsOfFood">
            	<div class="namesOfOnePhotosOfKindsOfFood"><!--  use of Ajax and XML !-->
                	<h6><span id="ajaxNamesOfTwoPhotosOfKindsOfFood"></span></h6>
                    <p>رستوران فعال<span id="ajaxNumberOfTwoPhotosOfKindsOfFood"></span></p>
                </div>
            </div></a>
            <a href="#"><div class="threePhotosOfKindsOfFood">
            	<div class="namesOfOnePhotosOfKindsOfFood"><!--  use of Ajax and XML !-->
                	<h6><span id="ajaxNamesOfThreePhotosOfKindsOfFood"></span></h6>
                    <p>رستوران فعال<span id="ajaxNumberOfThreePhotosOfKindsOfFood"></span></p>
                </div>
            </div></a>
            <a href="#"><div class="fourPhotosOfKindsOfFood">
            	<div class="namesOfOnePhotosOfKindsOfFood"><!--  use of Ajax and XML !-->
                	<h6><span id="ajaxNamesOfFourPhotosOfKindsOfFood"></span></h6>
                    <p>رستوران فعال<span id="ajaxNumberOfFourPhotosOfKindsOfFood"></span></p>
                </div>
            </div></a>
        </div>
        <div class="nameOfKindsOfFood">
        	<p>انتخاب غذاهای بیشتر</p>
            <a href="#"><div class="eachOfNameOfKindsOfFood">خورشت</div></a>
            <a href="#"><div class="eachOfNameOfKindsOfFood">کباب</div></a>
            <a href="#"><div class="eachOfNameOfKindsOfFood">خوراک</div></a>
            <a href="#"><div class="eachOfNameOfKindsOfFood">سوخاری</div></a>
            <a href="#"><div class="eachOfNameOfKindsOfFood">پاستا</div></a>
            <a href="#"><div class="eachOfNameOfKindsOfFood">سالاد</div></a>
            <a href="#"><div class="eachOfNameOfKindsOfFood">چلوکباب</div></a>
            <a href="#"><div class="eachOfNameOfKindsOfFood" id="smallOfNameOfKindsOfFood">فست فود</div></a>
            <a href="#"><div class="eachOfNameOfKindsOfFood" id="smallOfNameOfKindsOfFood">غذای ایرانی</div></a>
            <br /><br /><br />
            <div class="rowOfNameOfKindsOfFood">
                <a href="#"><div class="eachOfNameOfKindsOfFood">بشقاب</div></a>
                <a href="#"><div class="eachOfNameOfKindsOfFood">استیک</div></a>
                <a href="#"><div class="eachOfNameOfKindsOfFood">صبحانه</div></a>
                <a href="#"><div class="eachOfNameOfKindsOfFood">ماهی</div></a>
                <a href="#"><div class="eachOfNameOfKindsOfFood" id="smallOfNameOfKindsOfFood">غذای دریایی</div></a>
                <a href="#"><div class="eachOfNameOfKindsOfFood" id="smallOfNameOfKindsOfFood">هات داگ</div></a>
                <a href="#"><div class="eachOfNameOfKindsOfFood">آبمیوه</div></a>
        	</div>
        </div>
    </div>

    <div class="beforBounce">
        <div class="bounce">
            <img src="../../../../mocks/application download link/7.png">
            <p>ریحون روی موبایل</p>
            <h6>برای دریافت لینک دانلود اپلیکیشن ریحون،شماره موبایل خود را وارد کنید.</h6>
            <form class="bounceForm">
                <button type="submit" class="smsBounceForm">دریافت لینک از طریق sms</button>
                 <input type="text" placeholder="مثلا 91220530**" name="search">
            </form>
            <p class="androidAndIos">اپلیکیشن ریحون برای Android و Ios در دسترس است.</p>
            <div class="downloadBounceDiv">
            	<a href="#"><img src="../../../../mocks/application download link/cafebazaar-light.png"></a>
                <a href="#"><img src="../../../../mocks/application download link/google-play-light.png"></a>
                <a href="#"><img src="../../../../mocks/application download link/sibapp-light.png"></a>
                <br />
                <a href="#"><img src="../../../../mocks/application download link/reyhoon-light.png"></a>
                <a href="#"><img src="../../../../mocks/application download link/ios-direct-light.png"></a>
            </div>
        </div>
    </div>
    
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
  data () {
    return {
        blogs:[],
    }
  },
    
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
    src: url('../../../../fonts/Shabnam.eot');
    src: url('../../../../fonts/Shabnam.eot?#iefix') format('embedded-opentype'),
    url('../../../../fonts/Shabnam.woff') format('woff'),
    url('../../../../fonts/Shabnam.ttf') format('truetype');
    font-weight: normal;
}

@font-face {
    font-family: Shabnam;
    src: url('../../../../fonts/Shabnam-Bold.eot');
    src: url('../../../../fonts/Shabnam-Bold.eot?#iefix') format('embedded-opentype'),
    url('../../../../fonts/Shabnam-Bold.woff') format('woff'),
    url('../../../../fonts/Shabnam-Bold.ttf') format('truetype');
    font-weight: bold;
}

@font-face {
    font-family: Shabnam;
    src: url('../../../../fonts/Shabnam-Light.eot');
    src: url('../../../../fonts/Shabnam-Light.eot?#iefix') format('embedded-opentype'),
    url('../../../../fonts/Shabnam-Light.woff') format('woff'),
    url('../../../../fonts/Shabnam-Light.ttf') format('truetype');
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
	
	width:auto;
	height:200px;	
}
ul {
	list-style-type: none;
	margin: 0;
	padding: 0;
}
.headerList{
	
	width:100%;
	height:50px;	
	display:block;
}
li{
	float:right;	
}
li a {
	display: inline-block;
	color: #323232;
	text-align: center;
	padding: 14px ;
	text-decoration: none;
}
li a:hover{
	color:#d20f63;	
}
.inBlockBox{
	width:40px;	
	height:50px;
	margin:0;
	padding:0;
}
.borderOfHeaderList{
	width:auto;
	height:4px;
	/* background-image:url(../../../../mocks/Screen Shot 1398-01-15 at 15.01.32.png); */
}


.search{
	width:auto;
	height:250%;
	background:url(../../../../mocks/Pizza.jpg);	
	background-size:60%;
	background-repeat: no-repeat;
}
.searchBox{
	width:50%;
	height:50%;
	margin:0 auto;
	top:40%;
	position:relative;
}
.titleSearch{
	width:auto;
	height:25%;
	text-align:center;
	font-size:20px;
	font-weight:bold;
}
.titleSearch p{
	font-size:9px;	
	font-weight:normal;
}
.searchOfSearch{
	border:1px solid #969696;
	border-radius:5px;	
	padding:1.5%;
	background-color:white;
}
form.searchForm input[type=text]{
	padding: 13.5px;
  	font-size: 17px;
	border: 1px solid #969696;
	border-bottom-right-radius:5px;
	border-top-right-radius:5px;
	float: left;
	width: 69%;
    background: #f1f1f1;
	text-align:right;
	border-left:none;
	height:46px;
}
form.searchForm button {
	float: left;
	width: 9%;
	font-size: 17px;
	border: 1px solid #969696;
	border-top-left-radius:5px;
	border-bottom-left-radius:5px;
	border-right: none;
	margin-left:1%;
	background-repeat: no-repeat;
	cursor:pointer;
	background-color:#c01175;
	color:white;
	height:46px;
}
form.searchForm::after {
	content: "";
	clear: both;
	display: table;
}
form.searchForm input[type=text].searchOfCity{
  	font-size: 17px;
	border: 1px solid #969696;
	border-radius:5px;
	float: left;
	width: 19%;
	margin-left:1%;
    background: #f1f1f1;
	text-align:right;
	padding: 13.5px;
}
.searchBox h6{
	text-align:right;
	color:#969696;
	text-decoration:underline;
	font-size:8px;
}
.searchBox h6 a{
	color:#969696;
}
.searchBox h6 a:hover{
	color:#d20f63;	
}

.infoBestResturants{
	background-color:#fafafa;
	width:auto;
	height:200%;	
}
.infoBestResturants .boxInfroramtion{
	width:33.33%;
	height:100%;	
	float:right;
	padding-right:3%;
	background-color:#fafafa;	
	padding-top:5%;
	text-align:center;
	color:#727b82;
}
.boxInfroramtion .informationBoxInformation{
	background-color:white;
	height:30%;
	width:85%;
	padding-top:2%;
	padding-left:5%;
	padding-right:5%;
	color:#a39ca1;
	-moz-box-shadow:    0px 8px 6px -6px black;
	-webkit-box-shadow: 0px 8px 6px -6px black;
	box-shadow:         0px 8px 6px -6px black;
}
.boxInfroramtion .informationBoxInformation img{
	float:right;
	width:28%;
	padding-top:2%;
}
.boxInfroramtion .informationBoxInformation p{
	font-size:10px;
}

.bestResturantsFromCustomer{
	text-align:center;
	font-weight:bold;
	width:auto;
	height:200%;
	background-color:#fafafa;
	margin-top:-1.75%;
}
.bestResturantsFromCustomer p{
	font-size:22px;	
}
.bestResturantsFromCustomer .MainBestResturantsFromCustomer{
	width:90%;
	height:82%;
	padding-left:10px;
	padding-right:10px;
	margin:0 auto;
	top:40%;
}
.MainBestResturantsFromCustomer a{
	text-decoration:none;	
}
.bestResturantsFromCustomer .MainBestResturantsFromCustomer .nameOfBestResturantsFromCustomer{
	float:right;
	width:28%;
	height:100%;	
	float:right;
	margin-right:4%;
	padding-top:2%;
	background-color:white;
	border-radius:5px;
	cursor: pointer;
}
.nameOfBestResturantsFromCustomer:hover{
	-moz-box-shadow:    8px 8px 6px -8px black;
	-webkit-box-shadow: 8px 8px 6px -8px black;
	box-shadow:         8px 8px 6px -8px black;
	
}
.nameOfBestResturantsFromCustomer img{
	width:110%;	
}
.nameOfBestResturantsFromCustomer .imageOfNameOfBestResturantsFromCustomer{
	width:30%;
	height:30%;
	margin-right:35%;	
}
.nameOfBestResturantsFromCustomer .checked{
	color:orange;	
}
.nameOfBestResturantsFromCustomer p{
	font-size:12px;
	color:#4a4a4a;
}
.nameOfBestResturantsFromCustomer h6{
	font-weight:bold;
	color:black;
}
.nameOfBestResturantsFromCustomer a{
	color:#d20f63;
}
.nameOfBestResturantsFromCustomer .orderNameOfBestResturantsFromCustomer{
	width:50%;
	height:10%;
	border:1px solid #d20f63;	
	margin:0 auto;
	left:50%;
	border-radius:10px;
}

.resturants{
	background: url(../../../../mocks/good-boys.jpg) no-repeat scroll center right / cover;
	width:auto;
	height:348%;
	background-repeat: no-repeat;
	text-align:right;
	padding-right:5%;
	margin-top:-0.75%;
}
.resturants h6{
	font-weight:bold;
	font-size:19px;	
	padding-top:2%;
	color:#000000;
}
.resturants .logoResturants{
	width:60%;
	height:100%;
	margin-left:40%;
	margin-top:-2%;
}
.logoResturants .rowLogoResturants{
	width:100%;
	height:30%;
	margin-top:1%;	
}
.rowLogoResturants a{
	text-decoration:none;	
	color:#666667;
}
.rowLogoResturants .columLogoResturants{
	height:100%;
	width:22%;
	margin-left:3%;
	float:right;
	text-align:center;
	padding-top:5%;
}
.columLogoResturants img{
	width:50%;	
}

.kindsOfFood{
	width:100%;
	height:500%;
	background-color:#f5f9fc;
	text-align:center;	
	padding-right:10%;
}
.kindsOfFood .photosOfKindsOfFood{
	width:90%;
	height:50%;	
	padding-top:5%;
}
.photosOfKindsOfFood .onePhotosOfKindsOfFood{
	height:50%;
	width:23%;
	margin-right:1.5%;	
	margin-top:1%;
	background:url(https://dist.reyhoon-static.com/uploads/images/cuisines/sandwich_1539782856.jpeg@!cuisine_card);
	float:right;
	transition: all 0.5s;
}
/*
.photosOfKindsOfFood a:hover{
	
}*/
.photosOfKindsOfFood .twoPhotosOfKindsOfFood{
	height:50%;
	width:23%;
	margin-right:1.5%;	
	margin-top:1%;
	background:url(https://dist.reyhoon-static.com/uploads/images/cuisines/hamburger_1539779150.jpeg@!cuisine_card);
	float:right;
}
.photosOfKindsOfFood .threePhotosOfKindsOfFood{
	height:50%;
	width:23%;
	margin-right:1.5%;	
	margin-top:1%;
	background:url(https://dist.reyhoon-static.com/uploads/images/cuisines/pizza_1539780235.jpeg@!cuisine_card);
	float:right;
}
.photosOfKindsOfFood .fourPhotosOfKindsOfFood{
	height:50%;
	width:23%;
	margin-right:1.5%;	
	margin-top:1%;
	background:url(https://dist.reyhoon-static.com/uploads/images/cuisines/kebab_1525012065.jpeg@!cuisine_card);
	float:right;
}
.photosOfKindsOfFood .namesOfOnePhotosOfKindsOfFood{
	width:50%;
	height:45%;
	margin-top:51%;
	color:white;
}
.namesOfOnePhotosOfKindsOfFood h6{
	font-size:30px;	
	text-decoration:bold;
}
.namesOfOnePhotosOfKindsOfFood p{
	font-size:14px;
}
.kindsOfFood .nameOfKindsOfFood{
	width:90%;
	height:20%;	
	display:block;
}
.nameOfKindsOfFood #smallOfNameOfKindsOfFood{
	font-size:8px;
}
.nameOfKindsOfFood p{
	font-size:24px;	
	color:black;
}
.nameOfKindsOfFood .rowOfNameOfKindsOfFood{
	width:100%;
	margin-right:10%;	
}
.nameOfKindsOfFood .eachOfNameOfKindsOfFood{
	float:right;
	display: inline-block;
	color: #323232;
	text-align: center;
	padding: 14px ;
	text-decoration: none;
	width:7%;
	height:25%;
	background-color:white;
	margin-left:2%;
	margin-right:2%;
	font-size:14px;
	border-radius: 30px;
	text-decoration:bold;
}
.nameOfKindsOfFood a:hover{
	-moz-box-shadow:    8px 8px 6px -8px black;
	-webkit-box-shadow: 8px 8px 6px -8px black;
	box-shadow:         8px 8px 6px -8px black;
}
.nameOfKindsOfFood a{
	text-decoration:bold;
}
.beforBounce{
	background-color:#f5f9fc;
	width:100%;
	height:200%;	
}
.bounce{
	width:90%;
	height:100%;
	background-color:white;	
	margin-right:3%;
	padding-right:5%;
	margin-top:-1.5%;
}
.bounce img{
	float:left;
	height:140%;
	margin-top:-7%;
	margin-left:-15%;
}
.bounce p{
	padding-top:5%;
	font-size:18px;	
	text-decoration:bold;
	color:black;
}
.bounce h5{
	padding-top:3%;
	font-size:14px;	
	text-decoration:bold;
}
form.bounceForm input[type=text]{
	padding: 13.5px;
	padding-right:3%;
  	font-size: 17px;
	border: 1px solid #969696;
	border-bottom-right-radius:50px;
	border-top-right-radius:50px;
	float: left;
	width: 30%;
    background: #f1f1f1;
	text-align:right;
	border-left:none;
	height:46px;
}
form.bounceForm button {
	float: left;
	width: 30%;
	font-size: 17px;
	border: 1px solid #969696;
	border-top-left-radius:50px;
	border-bottom-left-radius:50px;
	border-right: none;
	margin-left:1%;
	background-repeat: no-repeat;
	cursor:pointer;
	background: linear-gradient(
		to right, 
		#f4112a 0%, 
		#db1044 25%, 
		#ad127d 50%, 
		#9416a0 100%
	);
	margin-left:13%;
	height:46px;
	color:white;
}
.bounce .androidAndIos{
	font-size:10px;
	padding-top:5%;
	color:#969696;
}
.bounce .downloadBounceDiv{
	width:70%;
	height:28%;
	float:right;
	
}
.bounce .downloadBounceDiv img{
	width:25%;
	height:40%;	
	margin-left:5%;
	float:right;
	margin-top:1%;
}

.footer{
	width:auto;
	height:250%;
	background-color:#202020;
	color:#969696;
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
