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
            <div class="borderOfHeaderList">
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
.main{
	
	width:auto;
	height:200px;	
}
ul {
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


</style>
