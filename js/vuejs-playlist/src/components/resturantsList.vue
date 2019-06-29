<template>
  <div id="app-resturantsList">

    <div class="imgOfResturnatsList">
        <img src="../../../../mocks/Screen Shot 1398-04-02 at 09.32.56.png" height="175px" >
    </div>

    <div class="numberOfResturants" id="numberOfResturantsInThisLocation">
        <p>رستوران امکان سرویس دهی به را دارند&nbsp;</p>
    </div>

    <div class="searchResturants">
        <input type="text" placeholder="جستوجوی رستوران در این محدوده" class="inputSearchResturants" v-model="search.nameOfResturant">
        <div class="searchIconSearchResturants"> <i class="fa fa-search"></i></div>
    </div>


    <div class="categoryAndResturantList" id="cat">
        <div class="category">
            <p>فیلتر بر اساس نوع غذا</p>
            <input type="text" placeholder="جستوجوی دسته بندی غذاها" class="searchInCategory" v-model="search.searchOfCategories">
            <form>
                <!-- type of categories (right box) -->
                <lable class="container" v-for="nameOfCategory in filteredCategories" :key="nameOfCategory">&nbsp;
                <input type="checkbox" :name="nameOfCategory.category_name" :value="nameOfCategory.name" v-model="search.categories"/>
                &nbsp; {{nameOfCategory.name}}
                </lable>

                <a href="#">بیشتر</a>
                <ul>
                    <li v-for="category in search.categories" :key="category.id">{{category}}</li>
                </ul>   
            </form>
        </div>

        
        <div class="resturantList">
            <div class='properitesOfResturantList' v-for="blog in filteredResturants" :key="blog"> 
                <!-- <img :src='' /> -->
                <!-- <router-link :to="'/resturants/eachResturant/' + blog.id" > -->
                <div class='textOfProperitesOfResturantList'> 
                    <h3 class='titleOfResturants'>{{ blog.title }}</h3>
                    <p>{{ blog.body}}</p>
                    <p  style='font-size:10px;color:black;'></p>
                    <p></p>
                    <p style='font-size:10px;'></p>
                </div>   
                <!-- </router-link> -->
                <router-link :to="'/resturants/eachResturant/' + blog.id" >
                    <div class="orderProperitesOfResturantList">
                        <a href='#' class="order">شروع سفارش</a>
                    </div>
                </router-link>
            </div>
        </div>
    </div>

  </div>
  
</template>

<script>
import axios from 'axios';

function Resize(){
    var num=10;
    document.getElementById('cat').style.height = 650 + (num/9) * 320  + "px";
    // alert("salam");
}
window.onload = Resize;  

export default {
    components:{

    },
    data () {
        return {
            search: {
                nameOfResturant: '',
                searchOfCategories: '',
                categories: [],
            },
            blogs: [],
            nameOfCategories: [
                {
                    "name":'برگر',
                    "category_name": 'category_0'
                },
                {
                    "name":'خورشت',
                    "category_name": 'category_1'
                },
                {
                    "name":'سالاد',
                    "category_name": 'category_2'
                },
                {
                    "name":'ساندویچ',
                    "category_name": 'category_3'
                },
                {
                    "name":'سوشی',
                    "category_name": 'category_4'
                },
                {
                    "name":'غذای ایرانی',
                    "category_name": 'category_5'
                },
                {
                    "name":'فست فود',
                    "category_name": 'category_6'
                },
                {
                    "name":'پاستا',
                    "category_name": 'category_7'
                },
                {
                    "name":'پیتزا',
                    "category_name": 'category_8'
                },
                {
                    "name":'کباب',
                    "category_name": 'category_9'
                }],

            // imageOfShandiz: 'https://dist.reyhoon-static.com/uploads/images/restaurants/logos/shandiz-jordan_1485_1520945254.jpeg@!branch_logo_web_default'
        }
    }, 
    methods: {
         
    },
    created() {
        this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
            this.blogs = data.body.slice(0,10);
        })
    },
    computed: {
        filteredResturants: function(){
            return this.blogs.filter((blog) => {
                return blog.title.match(this.search.nameOfResturant)
            });
        },
        filteredCategories: function(){
            return this.nameOfCategories.filter((nameOfCategory) => {
                return nameOfCategory.name.match(this.search.searchOfCategories)
            });
        },
    },
    
    
    // created: function(){
    //     this.loadQuots();
    // },
    // methods: {
    //     loadQuots: function(){
    //         this.status = 'loading..';
    //         axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    //         .then(response => (this.staturs = response.data.bpi));
    //     }
    // },
  
}
</script>

<style>

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
.imgOfResturnatsList{
    padding-top:1.25%;
    width:100%;
    height: 70%;
}
.numberOfResturants{
    width: 100%;
    height: 60%;
    background-color: white;
    text-align: right;
    border-bottom: 1px solid #e2e2e2;
    font-size: 18px;
    padding-top: 1%;
    padding-bottom: 1%;
    padding-right: 10%;
}

.searchResturants{
    padding-right: 10%;
    padding-top: 2%;
    background-color: white;
    padding-bottom: 2%;
}
.searchResturants .searchIconSearchResturants{
    margin-top: -2.75%;
    margin-right: 1%;
}
.inputSearchResturants{
    padding: 13.5px;
    padding-right: 3%;
  	font-size: 17px;
	width: 45%;
	text-align:right;
	height:40px;
    margin-top:1%;
    background-color: #fafafa;
    border: 1px solid #e2e2e2;
    border-radius: 4px;
}

.categoryAndResturantList{
    width:100%;
    min-height: 650px;
    height: auto;
    overflow: auto;
    display: block;
    /* display: block;
    overflow: auto; */
    /* overflow:auto; */
}
.category{
    float: right;
    width:14%;
    height: 520px;
    margin-top: 5%;
    margin-right: 6%;
    border: 1px solid #e2e2e2;
    background-color: white;
}
.category p{
    font-size: 10px;
    color:#777777;
    padding-right: 3%;
    border-bottom: 1px solid #e2e2e2;
    margin-top: -0.75%;
}
.category .searchInCategory{
    font-size: 12px;
    width: 95%;
    padding-right: 2%;
    margin-right: 2%;
    border: 1px solid #e2e2e2;
    border-radius: 4px;
    margin-top: 3%;
    margin-bottom: 5%;
    background-color: #fafafa;
}
.category lable{
    border-bottom: 1px solid #e2e2e2;
    padding-top: 1%;
    padding-bottom: 1%;
}
.category lable:hover{
    background-color: #eeeeee;
}
.category a{
    color:#d20f63;
    text-decoration:none;
    font-size: 14px;
    padding-right: 40%;
}

.container {
    display: block;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 18px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
input[type= "checkbox"]{
    position: relative;
    top:0;
    width: 10px;
    height: 10px;
    -webkit-appearance: none;
    outline: none;
    transition: 0.5s;
}
input[type= "checkbox"]:before{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border:0.5px solid #d20f63;
    box-sizing: border-box;
    transition: 0.5s;
}
input:checked[type= "checkbox"]:before{
    border-left: none;
    border-top: none;
    width: 5px;
    /* border-color: white; */
    /* background-color:#d20f63; */
    transform: rotate(45deg);
}
.resturantList{
    /*background-color: pink;*/
    float:left;
    width: 70%;
    height: 300px;
    margin-top:5%;
    margin-left: 5%;
    cursor:pointer;
}
p{
    margin:0;
}
.properitesOfResturantList{
    width:30%;
    height: 60%;
    background-color: white;
    border: 1px solid #e2e2e2;
    margin: 1.5%;
    float:right;
    transition: box-shadow .3s;
    text-decoration: none;
}
.properitesOfResturantList:hover{
    box-shadow: 0 0 11px rgba(33,33,33,.2); 
}
.properitesOfResturantList img{
    margin-right: 4%;
    margin-top:3%;
    margin-left:2%;
    border: 1px solid #e2e2e2;
    border-radius: 4px;
    float:right;
}
.properitesOfResturantList .textOfProperitesOfResturantList{
    width:60%;
    height: 90%;
    margin-right: 40%;
    text-decoration: none;
}
.properitesOfResturantList .titleOfResturants{
    text-decoration: none;
    color:black;
}
.properitesOfResturantList p .category{
    font-size: 10px;
}
.properitesOfResturantList .backgroundProperitesOfResturantList{
    background-color: #e2e2e2;
    width:100%;
    height: 25%;
}
.properitesOfResturantList .orderProperitesOfResturantList{
    padding-right: 35%;
    background-color: #fafafa;
    height: 30%;
    margin-top:-18%;
    padding-top: 5%;
}
.properitesOfResturantList:hover ~ .order{
    background-color:#d20f63;
    text-decoration: none;
}
.properitesOfResturantList .orderProperitesOfResturantList .order{
    text-decoration: none; 
    color:#d20f63;
    width:5%;
    border:1px solid #d20f63;
    border-radius: 15px;
    padding-top: 2%;
    padding-bottom: 2%;
    padding-right: 10%;
    padding-left: 10%;
}

.foooter{
    width:100%;
}

</style>
