<template>
  <div id="app-resturantsList">

    <div class="imgOfResturnatsList">
        <img src="../../../../mocks/Screen Shot 1398-04-02 at 09.32.56.png" height="175px" >
    </div>

    <div class="numberOfResturants" id="numberOfResturantsInThisLocation">
        <p> <span v-for="(blog, i) in blogs" :key="(blog, i)"><span v-if="i == blogs.length-1 "> {{sumToIndex(i)}} </span></span>رستوران امکان سرویس دهی به <span class="nameOfQuery">{{$route.query.area}}</span> را دارند&nbsp;</p>
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
                <lable class="container" v-for="(nameOfCategory, i) in filteredCategories" :key="(nameOfCategory, i)">&nbsp;
                <input type="checkbox" :name="nameOfCategory.category_name" :value="nameOfCategory.name" v-model="search.categories" v-on:click="categoryQuery(nameOfCategory.name, $event)" @change="changePositionOfCheckBox(i)" />
                &nbsp; {{nameOfCategory.name}}
                </lable>

                <a href="#">بیشتر</a>
                <ul>
                    <li v-for="category in search.categories" :key="category.id">{{category}}</li>
                    <!-- <li>{{urlAddress}}</li> -->
                </ul>   
            </form>
        </div>


        <div class="resturantList">
            <div  v-for="blog in filteredResturants" :key="blog">
                <div v-for="resturantDeatail in blog.resturantDeatails" :key="resturantDeatail">
                    <div v-if="resturantDeatail.openingTime < moment().format('H')">
                        <div class='properitesOfResturantList'>
                            <router-link :to="'/resturants/eachResturant/' + blog._id" class="resturantListRouter">
                                <span  v-for="resturantDeatail in blog.resturantDeatails" :key="resturantDeatail"><img :src="resturantDeatail.logo" /></span>
                                <div class='textOfProperitesOfResturantList'> 
                                    <span v-for="resturantDeatail in blog.resturantDeatails" :key="resturantDeatail">
                                        <h3 style="color:black;text-decoration:none;">{{resturantDeatail.name}}</h3>
                                    </span>
                                    <span v-for="resturantDeatail in blog.resturantDeatails" :key="resturantDeatail">
                                        <p style='font-size:10px;color:orange;'>
                                            <span v-if="resturantDeatail.averageRate < 5" class="fa fa-star unchecked"></span>
                                            <span v-else="" class="fa fa-star"></span>
                                            <span v-if="resturantDeatail.averageRate < 4" class="fa fa-star unchecked"></span>
                                            <span v-else="" class="fa fa-star"></span>
                                            <span v-if="resturantDeatail.averageRate < 3" class="fa fa-star unchecked"></span>
                                            <span v-else="" class="fa fa-star"></span>
                                            <span v-if="resturantDeatail.averageRate < 2" class="fa fa-star unchecked"></span>
                                            <span v-else="" class="fa fa-star"></span>
                                            <span v-if="resturantDeatail.averageRate < 1" class="fa fa-star unchecked"></span>
                                            <span v-else="" class="fa fa-star"></span>
                                            &nbsp;
                                            {{resturantDeatail.averageRate}}
                                        </p>
                                        <span v-for="categorie in resturantDeatail.categories" :key="categorie" style="color:black;text-decoration:none;">&#9679; {{categorie}} </span>
                                    </span>
                                    <p style='font-size:10px;color:#9b9b9b;'>{{blog.addressLine}}</p>
                                </div>
                                <div class="orderProperitesOfResturantList">
                                    <a href='#' class="order">شروع سفارش</a>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="resturantList">
            <h3 style="padding-top:20px;">رستوان های بسته</h3>
            <div  v-for="blog in filteredResturants" :key="blog">
                <span v-for="resturantDeatail in blog.resturantDeatails" :key="resturantDeatail">
                    <span v-if="resturantDeatail.openingTime >= moment().format('H')">
                        <div class='properitesOfResturantList' id="resturantListClosed">
                            <router-link :to="'/resturants/eachResturant/' + blog._id" class="resturantListRouter">
                                <span  v-for="resturantDeatail in blog.resturantDeatails" :key="resturantDeatail"><img :src="resturantDeatail.logo" /></span>
                                <div class='textOfProperitesOfResturantList'> 
                                    <span v-for="resturantDeatail in blog.resturantDeatails" :key="resturantDeatail">
                                        <h3 style="color:black;text-decoration:none;">{{resturantDeatail.name}}</h3>
                                    </span>
                                    <span v-for="resturantDeatail in blog.resturantDeatails" :key="resturantDeatail">
                                        <p style='font-size:10px;color:orange;'>
                                            <span v-if="resturantDeatail.averageRate < 5" class="fa fa-star unchecked"></span>
                                            <span v-else="" class="fa fa-star"></span>
                                            <span v-if="resturantDeatail.averageRate < 4" class="fa fa-star unchecked"></span>
                                            <span v-else="" class="fa fa-star"></span>
                                            <span v-if="resturantDeatail.averageRate < 3" class="fa fa-star unchecked"></span>
                                            <span v-else="" class="fa fa-star"></span>
                                            <span v-if="resturantDeatail.averageRate < 2" class="fa fa-star unchecked"></span>
                                            <span v-else="" class="fa fa-star"></span>
                                            <span v-if="resturantDeatail.averageRate < 1" class="fa fa-star unchecked"></span>
                                            <span v-else="" class="fa fa-star"></span>
                                            &nbsp;
                                            {{resturantDeatail.averageRate}}
                                        </p>
                                        <span v-for="categorie in resturantDeatail.categories" :key="categorie" style="color:black;text-decoration:none;">&#9679; {{categorie}} </span>
                                    </span>
                                    <p style='font-size:10px;color:#9b9b9b;'>{{blog.addressLine}}</p>
                                </div>
                            </router-link>
                        </div>
                    </span>
                </span>
            </div>
        </div>
    </div>

  </div>
  
</template>

<script>
import axios from 'axios';
var moment = require('moment');

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
            errors: [],
            open: [],
            blogs: [],
            posts: [],
            moment: moment,
            urlAddress: '',
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
        }
    }, 
    created() {
        axios.get(`http://localhost:4000/api/resturant?area=`+ this.$route.query.area )
        .then(response => {
        this.blogs = response.data
        })
        .catch(e => {
        this.errors.push(e)
        })

    },
    computed: {
        filteredResturants: function(){
            return this.blogs.filter((blog) => {
                return blog.name.match(this.search.nameOfResturant)
            });
        },
        // filteredResturants: function(){
        //     return this.blogs.filter((blog) => {
        //         return blog.addressLine.match(this.search.nameOfResturant)
        //     });
        // },
        filteredCategories: function(){
            return this.nameOfCategories.filter((nameOfCategory) => {
                return nameOfCategory.name.match(this.search.searchOfCategories)
            });
        },
        // make query to server         checkbox category
        // makeCategoryQuery :function(){
        //     return axios.get(`http://localhost:4000/api/resturant?area=`+ this.$route.query.area + '&category=' + this.search.categories)
        //             .then(response => {
        //             this.posts = response.data
        //             })
        //             .catch(e => {
        //             this.errors.push(e)
        //             })
        // }
    },
    methods: {
        categoryQuery: function(value, event){
            if(event.target.checked){
                this.search.categories = '&category=' + this.search.categories;
                alert( this.search.categories);
            }
            // if(this.search.categories != ""){
                // axios.get(`http://localhost:4000/api/resturant/category?area=`+ this.$route.query.area + `&category=` + value)
                //     .then(response => {
                //     this.posts = response.data
                //     })
                //     .catch(e => {
                //     this.errors.push(e)
                //     })
            // }
        },
        sumToIndex: function(index){
            return index+1;
        },

    },
  
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
.unchecked{
    color:black;
}
.nameOfQuery{
    text-decoration: underline;
    color:black;
    font-weight: bold;
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
    width:180px;
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
    height: 350px;
    margin-top:5%;
    margin-left: 5%;
    cursor:pointer;
    text-decoration: none;
}
#resturantListClosed{
    background-color: #f0f0f0;
}
p{
    margin:0;
}
.properitesOfResturantList{
    width:30%;
    height: 195px;
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
    margin-top:-22%;
    padding-top: 5%;
    text-decoration: none;
}
.properitesOfResturantList .orderProperitesOfResturantList a{
    text-decoration: none;
}
.resturantListRouter{
    text-decoration: none !important;
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
    text-decoration: none;
}

.foooter{
    width:100%;
}

</style>
