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
    src: url('../fonts/Shabnam.eot');
    src: url('../fonts/Shabnam.eot?#iefix') format('embedded-opentype'),
    url('../fonts/Shabnam.woff') format('woff'),
    url('../fonts/Shabnam.ttf') format('truetype');
    font-weight: normal;
}

@font-face {
    font-family: Shabnam;
    src: url('../fonts/Shabnam-Bold.eot');
    src: url('../fonts/Shabnam-Bold.eot?#iefix') format('embedded-opentype'),
    url('../fonts/Shabnam-Bold.woff') format('woff'),
    url('../fonts/Shabnam-Bold.ttf') format('truetype');
    font-weight: bold;
}

@font-face {
    font-family: Shabnam;
    src: url('../fonts/Shabnam-Light.eot');
    src: url('../fonts/Shabnam-Light.eot?#iefix') format('embedded-opentype'),
    url('../fonts/Shabnam-Light.woff') format('woff'),
    url('../fonts/Shabnam-Light.ttf') format('truetype');
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
	background-image:url(../mocks/Screen%20Shot%201398-01-15%20at%2015.01.32.png);
}

</style>
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