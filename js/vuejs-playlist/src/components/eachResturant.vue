<template>
  <div id="app-eachResturant">
        <div class="mainPhoto"></div>

        <div class="titleOfResturant" v-for="post in posts" :key="post">
            <div class="previous">بازگشت &nbsp; &#10095;</div>
            <div class="photoOfResturant"> 
                <span  v-for="resturantDeatail in post.resturantDeatails" :key="resturantDeatail"><img :src="resturantDeatail.logo" /></span>
            </div>
            <div class="nameOfResturant">
                <span  v-for="resturantDeatail in post.resturantDeatails" :key="resturantDeatail">ریحون &nbsp; &#10095; &nbsp; {{resturantDeatail.name}} &nbsp; &#10095; &nbsp; {{post.addressLine}}</span>
            </div>

            <div class="propertyOfResturant" v-for="resturantDeatail in post.resturantDeatails" :key="resturantDeatail">
                <h3>{{resturantDeatail.name}} </h3>
                <p>{{resturantDeatail.averageRate}} </p>
                <p class="categoryOfPropertyOfResturant"><span v-for="categorie in resturantDeatail.categories" :key="categorie">&#9679; {{categorie}} </span></p>
                <p class="addressOfPropertyOfResturant">{{post.addressLine}}</p>
            </div>
            <div class="menueInformatioComment">
                <div class="inMenueInformatioComment"><a href="#">منوی رستوران</a></div>
                <div class="inMenueInformatioComment"><a href="#">اطلاعات رستوران</a></div>
                <div class="inMenueInformatioComment"><a href="#">نظرات کاربران</a></div>
            </div>
        </div>

        <div class="searchResturantMenu">
            <div class="searchIconSearchResturants w3-xxlarge"> <i class="fa fa-search"></i></div>
            <input type="text" placeholder="جستجو در منو این رستوران" v-model="searchMenue" />
        </div>

        <div class="mainDiv">
            <div class="kindsOfFood">
                <div v-for="post in posts" :key="post">
                    <span  v-for="resturantDeatail in post.resturantDeatails" :key="resturantDeatail">
                        <div class="eachOfKindsOfFodd" v-for="categorie in resturantDeatail.categories" :key="categorie"><a href="#">{{categorie}}</a></div>
                    </span>
                </div>
            </div>
            <div class="food">
                <div class="tableOfFood">
                    <div v-for="blog in blogs" :key="blog">
                        <a href="#">
                        <div class="eachFood" v-for="kindOfFood in blog.kindsOfFood" :key="kindOfFood">
                            <p id="name">{{kindOfFood.name}}</p>
                            <div class="priceDiv"><p id="price">{{kindOfFood.price}} تومان</p></div>
                            <p id="description"><br />{{kindOfFood.description}}</p>
                            <div class="buyFood"><a href="#"><i class="fa fa-plus" style="font-size:10px;color:#d20f63"></i> افزودن به سبد خرید</a></div>
                        </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- <div class="searchResturantMenu" id="information">
            <div class="titleOfInformation"></div>
            <div class="">
                <p><i class="fa fa-clock-o"></i></p>
                <p><i class='fas fa-map-marker-alt'></i></p>
            </div>
        </div> -->

        <div class="inform">
            <div class="information"><h3>اطلاعات رستوران</h3></div>
            <div class="informationAndHours" v-for="post in posts" :key="post">
                <p class="nameOfInformation"><span  v-for="resturantDeatail in post.resturantDeatails" :key="resturantDeatail">{{resturantDeatail.name}}</span></p>
                <p class="addressOfInformation">{{post.addressLine}}</p>
                <p class="orderOfInformation">ساعات سفارش گیری</p>
                <p class="everydayInformation">همه روزه</p>
                <p class="openingTimeInformation" v-for="resturantDeatail in post.resturantDeatails" :key="resturantDeatail">از {{resturantDeatail.openingTime}} ظهر تا {{resturantDeatail.closingTime}} شب</p>
            </div>
        </div>

        <!-- <div class="" v-for="comment in comments" :key="comment">
            <span v-for="commentPropertie in comment.commentProperties" :key="commentPropertie">{{commentPropertie.text}}</span>
        </div> -->
  </div>
</template>

<script>
import axios from 'axios';

export default {
    data () {
        return {
            id: this.$route.params._id ,
            blogs: [],
            posts:[],
            comments: [],
            searchMenue: '',
        }
    },
    created() {
        //  using multi requests
        axios.get(`http://localhost:4000/api/resturant/`+ this.id )
        .then(response => {
            this.blogs = response.data
        })
        .catch(e => {
            this.errors.push(e)
        })

        axios.get(`http://localhost:4000/api/resturants/`+ this.id )
        .then(responses => {
            this.posts = responses.data
        })
        .catch(e => {
            this.errors.push(e)
        })

        //  comments
        // axios.get(`http://localhost:4000/api/resturants/`+ this.id + '/comments')
        // .then(responses => {
        //     this.posts = responses.data
        // })
        // .catch(e => {
        //     this.errors.push(e)
        // })
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
.mainPhoto{
    background: url(https://dist.reyhoon-static.com/uploads/images/restaurant-types/misc/fast-food_1537379346.jpeg?x-oss-process=image/resize,w_1600/interlace,1) no-repeat scroll center right / cover;
    width:auto;
    height: 300px;
    margin-top: 1%;
}
.titleOfResturant{
    width:60%;
    height: 70%;
    background-color: white;
    margin-right: 20%;
    text-align: center;
    margin-top: -15%;
}
.nameOfResturant{
    width: 30%;
    height: 10%;;
    background-color: white;
    float: right;
    color:#aba5a4;
    font-size: 11px;
    margin-top: -100px;
}
.photoOfResturant{
    border:1px solid white;
}
.previous{
    width: 10%;
    height: 10%;;
    background-color:aqua;
    float: left;
    color:#aba5a4;
    font-size: 11px;
    /* margin-right: 10px; */
}
.categoryOfPropertyOfResturant{
    color: black;
}
.addressOfPropertyOfResturant{
    color:#4a4a4a;
}
.menueInformatioComment{
    color: #777777;
    border-top: 1px solid #f0f0f0;  
    background-color:white;
    height: 50px;
    /* hover 202020 */
}
.menueInformatioComment .inMenueInformatioComment{
    width: 33%;
    height: 100%;
    float: right;
    padding-top: 2%;
}
.menueInformatioComment .inMenueInformatioComment a{
    text-decoration: none;
}

.searchResturantMenu{
    width:60%;
    height: 100%;
    /* background-color: darkblue; */
    margin-right: 20%;
    text-align: center;
}
input[type=text]{
    padding: 13.5px;
    /* padding-right: 50px; */
    font-size: 17px;
    border:1px solid #fafafa;  
    border-bottom: 1px solid #969696;
	/* float: left; */
	width: 94%;
    background: #fafafa;
	text-align:right;
	border-left:none;
    height:46px;
    z-index: -2;
    float: left;
    transition: border-bottom .35s ease-in-out;
}
input[type= text]:focus{
    border-bottom:2px solid #d20f63;
}
.searchResturantMenu .searchIconSearchResturants{
    float:right;
    padding-bottom:10px;
    z-index: 10;
    width: 6%;
    height: 46px;
    background: #fafafa;
    border-bottom: 1px solid #969696;
}

.mainDiv{
    width:80%;
    height: 600px;
    background-color: #d20f63;
    margin-top: 47px;
}
.mainDiv .kindsOfFood{
    margin-right: 5%;
    width:20%;
    height: 100%;
    float: right;
}
.mainDiv .kindsOfFood .eachOfKindsOfFodd{
    border-right: 1px solid #4a4a4a;
    width:80%;
    height: 80%;
    padding-right: 10px;
    padding-top: 10%;
    padding-bottom: 10%;
    color: #aba5a4;
}
.mainDiv .kindsOfFood .eachOfKindsOfFodd a{
    text-decoration: none;
}
.mainDiv .kindsOfFood .eachOfKindsOfFodd a::after{
    color: #202020;
    border-bottom:2px solid #d20f63;
    text-decoration: none;
}
.mainDiv .food{
    width:75%;
    background-color: aquamarine;
    height: 120%;
    float: left;
}
.mainDiv .food .tableOfFood{
    width: 100%;
    height: 50%;
    background-color: chartreuse;
}
.mainDiv .food .tableOfFood .eachFood{
    width:44%;
    height: 185px;
    padding: 5px;
    margin-top: 1%;
    margin-bottom: 1%;
    margin-right: 4%;
    float: right;
    font-size: 12px;
    cursor: pointer;
    transition: box-shadow .3s;
    background-color: white;
    position: relative;
}
.mainDiv .food .tableOfFood .eachFood:hover{
    box-shadow: 0 0 11px rgba(33,33,33,.2); 
}
#name{
    color:black;
    font-weight: bold;
    font-size: 14px;
}
.priceDiv{
    width:30%;
    margin-top: -45px;
    float:left;
}
#price{
    color:black;
    text-align: left;
    font-weight: bold;
}
#description{
    
}
.buyFood{
    width:45%;
    height: 30px;
    border:1px solid #d20f63;
    border-radius: 15px;
    text-align: center;
    padding-top: 2px;
    bottom: 0px;
    margin-bottom: 5px;
    position: absolute;
    bottom: 8px;
    right: 15px;
}
.buyFood a{
    text-decoration: none;
}
.inform{
    width:60%;
    height: 450px;
    margin-right: 20%;
    padding-top:10%;
}
.inform .information{
    width:100%;
    height: 60px;
    /* background-color:#f0f0f0; */
    border-bottom: 1px solid #656566;
    padding-right: 50px;
    padding-top: 5px;
    color:black;
    font-weight: bold;
}
.inform .informationAndHours{
    width:50%;
    height: 200px;
    border-bottom: 1px solid #656566;
    padding-top: 10px;
    padding-right: 30px;
    position: relative;
}
.inform .informationAndHours .nameOfInformation{
    color:black;
    font-weight: bold;
    font-size: 20px;
}
.inform .informationAndHours .addressOfInformation{
    font-size: 14px;
}
.inform .informationAndHours .orderOfInformation{
    font-size: 14px;
    font-weight: bold;
    color:black;
}
.inform .informationAndHours .everydayInformation{
    font-size: 12px;
    /* color:black; */
}
.inform .informationAndHours .openingTimeInformation{
    font-size: 12px;
    text-align: left;
    padding-left: 5px;
    margin-top: -35px;
}
</style>
