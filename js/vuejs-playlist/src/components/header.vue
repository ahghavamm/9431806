<template>
  <div id="app-header">
        <div class="header">
            <div class="headerList">
                <ul>
                    <li><router-link to="/login">ورود</router-link></li>
                    <li></li>
                    <li><router-link to="/register">عضویت</router-link></li>
                </ul>
                
                <ul>
                    <li><div class="inBlockBox"></div></li>
                    <li><router-link to="/">راهنما</router-link></li>
                </ul>
            </div>
            <div class="borderOfHeaderList"> <img src="../../../../mocks/Screen Shot 1398-01-15 at 15.01.32.png" width="100%" />
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
	
	width:auto;
	height:200px;	
}
.headerList ul {
	list-style-type: none;
	margin: 0;
	padding: 0;
}
.header{
  top: 0;
  background-color: white;
}
.headerList{
	
	width:100%;
	height:50px;	
  display:block;
  padding-bottom: -2%;
}
.headerList li{
	float:right;	
}
.headerList li a {
	display: inline-block;
	color: #323232;
	text-align: center;
	padding: 14px ;
	text-decoration: none;
}
.headerList li a:hover{
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
  height:2px;
  /* margin-top: -5%; */
  /* background-color: #d20f63; */
  	/* background-image:url(../../../../mocks/Screen%20Shot%201398-01-15%20at%2015.01.32.png); */
}


</style>
