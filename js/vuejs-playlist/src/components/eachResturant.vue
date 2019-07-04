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
                <p style="font-size:24px;color:black;padding-top:-15px;">{{resturantDeatail.name}} </p>
                <p style="color:orange;font-size:20px;padding-top:10px;">
                    <span v-if="avg < 5" class="fa fa-star unchecked"></span>
                    <span v-else="" class="fa fa-star"></span>
                    <span v-if="avg < 4" class="fa fa-star unchecked"></span>
                    <span v-else="" class="fa fa-star"></span>
                    <span v-if="avg < 3" class="fa fa-star unchecked"></span>
                    <span v-else="" class="fa fa-star"></span>
                    <span v-if="avg < 2" class="fa fa-star unchecked"></span>
                    <span v-else="" class="fa fa-star"></span>
                    <span v-if="avg < 1" class="fa fa-star unchecked"></span>
                    <span v-else="" class="fa fa-star"></span>
                    <!-- {{resturantDeatail.averageRate}}  -->
                    {{add()}}
                    {{avg}}
                </p>
                <p class="categoryOfPropertyOfResturant"><span v-for="categorie in resturantDeatail.categories" :key="categorie">&#9679; {{categorie}} </span></p>
                <p class="addressOfPropertyOfResturant">{{post.addressLine}}</p>
            </div>
            <div class="menueInformatioComment">
                <div class="inMenueInformatioComment"><a href="#menueTab">منوی رستوران</a></div>
                <div class="inMenueInformatioComment"><a href="#informationTab">اطلاعات رستوران</a></div>
                <div class="inMenueInformatioComment"><a href="#commentTab">نظرات کاربران</a></div>
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
            <div class="food" v-for="blog in blogs" :key="blog">
                <a name="menueTab"></a>
                    <div class="tableOfFood" v-for="category in blog.categories" :key="category">
                        <div class="categorynameOfFood">{{category}}</div>
                        <a href="#">
                        <div  v-for="kindOfFood in blog.kindsOfFood" :key="kindOfFood">
                            <div class="eachFood" v-if="kindOfFood.foodSet === category">
                                <p id="name">{{kindOfFood.name}}</p>
                                <div class="priceDiv"><p id="price">{{kindOfFood.price}} تومان</p></div>
                                <p id="description"><br />{{kindOfFood.description}}</p>
                                <div class="buyFood"><a href="#"><i class="fa fa-plus" style="font-size:10px;color:#d20f63"></i> افزودن به سبد خرید</a></div>
                            </div>
                        </div>
                        </a>
                    </div>
                <!-- <div v-for="blog in blogs" :key="blog">
                    <div  class="tableOfFood" v-for="kindOfFood in blog.kindsOfFood" :key="kindOfFood">
                        
                        <p class="foodSetOfFood" v-if="kindOfFood.visible">{{kindOfFood.foodSet}}</p>
                        <a href="#">
                        <div class="eachFood"  >
                            <p id="name">{{kindOfFood.name}}</p>
                            <div class="priceDiv"><p id="price">{{kindOfFood.price}} تومان</p></div>
                            <p id="description"><br />{{kindOfFood.description}}</p>
                            <div class="buyFood"><a href="#"><i class="fa fa-plus" style="font-size:10px;color:#d20f63"></i> افزودن به سبد خرید</a></div>
                        </div>
                        </a>
                        
                    </div>
                </div> -->
                <!-- <div class="tableOfFood" v-for="blog in blogs" :key="blog">
                    <div> 
                        <a href="#">
                        <div class="eachFood" v-for="kindOfFood in blog.kindsOfFood" :key="kindOfFood" >
                            <p id="name">{{kindOfFood.name}}</p>
                            <div class="priceDiv"><p id="price">{{kindOfFood.price}} تومان</p></div>
                            <p id="description"><br />{{kindOfFood.description}}</p>
                            <div class="buyFood"><a href="#"><i class="fa fa-plus" style="font-size:10px;color:#d20f63"></i> افزودن به سبد خرید</a></div>
                        </div>
                        </a>
                    </div>
                </div> -->
            </div>
        </div>

        <div class="inform">
            <a name="informationTab"></a>
            <div class="information"><h3>اطلاعات رستوران</h3></div>
            <div class="informationAndHours" v-for="post in posts" :key="post">
                <p class="nameOfInformation"><span  v-for="resturantDeatail in post.resturantDeatails" :key="resturantDeatail">{{resturantDeatail.name}}</span></p>
                <p class="addressOfInformation"><i class="material-icons">place</i>&nbsp;{{post.addressLine}}</p>
                <p class="orderOfInformation"><i class="fa fa-clock-o"></i>&nbsp;&nbsp;ساعات سفارش گیری</p>
                <p class="everydayInformation">همه روزه</p>
                <p class="openingTimeInformation" v-for="resturantDeatail in post.resturantDeatails" :key="resturantDeatail">از {{resturantDeatail.openingTime}} ظهر تا {{resturantDeatail.closingTime}} شب</p>
            </div>
        </div>

        <div class="comment"  v-for="comment in comments" :key="comment">
            <a name="commentTab"></a>
            <div class="commentTitle"><h3>نظر کاربران در مورد {{comment.name}}</h3></div>
            <p class="anotherCommentTitle">شما می توانید بعد از سفارش از این رستوران، نظر خود را در باره ی این رستوران ثبت کنید.</p>
            <p class="starInComment">
                <span v-if="avg < 5" class="fa fa-star unchecked"></span>
                <span v-else="" class="fa fa-star"></span>
                <span v-if="avg < 4" class="fa fa-star unchecked"></span>
                <span v-else="" class="fa fa-star"></span>
                <span v-if="avg < 3" class="fa fa-star unchecked"></span>
                <span v-else="" class="fa fa-star"></span>
                <span v-if="avg < 2" class="fa fa-star unchecked"></span>
                <span v-else="" class="fa fa-star"></span>
                <span v-if="avg < 1" class="fa fa-star unchecked"></span>
                <span v-else="" class="fa fa-star"></span>
                &nbsp;{{add()}} {{avg}}
            </p>
            <div class="qualityOfFoods">
                <p>کیفیت غذا <span class="numOfQualityOfFoods">3.7</span></p>
                <div class="numberOfQualityOfFoods"><div class="shapeOfNumberOfQualityOfFoods1"></div></div>
            </div>
            <div class="qualityOfFoods">
                <p>کیفیت بسته بندی <span class="numOfQualityOfFoods">4.7</span></p>
                <div class="numberOfQualityOfFoods"><div class="shapeOfNumberOfQualityOfFoods2"></div></div>
            </div>
            <div class="qualityOfFoods">
                <p>سرعت ارسال پیک <span class="numOfQualityOfFoods">4.4</span></p>
                <div class="numberOfQualityOfFoods"><div class="shapeOfNumberOfQualityOfFoods3"></div></div>
            </div>
            <div class="qualityOfFoods">
                <p>برخورد پیک <span class="numOfQualityOfFoods">4.1</span></p>
                <div class="numberOfQualityOfFoods"><div class="shapeOfNumberOfQualityOfFoods4"></div></div>
            </div>
        </div>

        <div class="eachOfClientComment" >
            <div class="clientComment" v-for="cmt in cmts" :key="cmt"> 
                <p>{{cmt.author}} 
                    <span class="rateOfClientComment">
                        &nbsp; {{cmt.quality}} &nbsp;
                        <span v-if="cmt.quality < 5" class="fa fa-star unchecked"></span>
                        <span v-else="" class="fa fa-star"></span>
                        <span v-if="cmt.quality < 4" class="fa fa-star unchecked"></span>
                        <span v-else="" class="fa fa-star"></span>
                        <span v-if="cmt.quality < 3" class="fa fa-star unchecked"></span>
                        <span v-else="" class="fa fa-star"></span>
                        <span v-if="cmt.quality < 2" class="fa fa-star unchecked"></span>
                        <span v-else="" class="fa fa-star"></span>
                        <span v-if="cmt.quality < 1" class="fa fa-star unchecked"></span>
                        <span v-else="" class="fa fa-star"></span>
                    </span>
                </p>
                <p class="textOfClientComment"><i class="fa fa-quote-right" style="font-size:18px; color:#d20f63;"></i> &nbsp;&nbsp; {{cmt.text}} </p>
                <p style="font-size:10px;">{{moment(cmt.created_at).fromNow('d')}} روز قبل<span class="rateOfClientComment" style="color:#777777; font-size:10px;">گزارش</span></p>
            </div>
        </div>

        <!-- <div class="eachOfClientComment" v-for="comment in comments" :key="comment">
            <div class="clientComment" v-for="commentPropertie in comment.commentProperties" :key="commentPropertie"> 
                <p>{{commentPropertie.author}} 
                    <span class="rateOfClientComment">
                        &nbsp; {{commentPropertie.quality}} &nbsp;
                        <span v-if="commentPropertie.quality < 5" class="fa fa-star unchecked"></span>
                        <span v-else="" class="fa fa-star"></span>
                        <span v-if="commentPropertie.quality < 4" class="fa fa-star unchecked"></span>
                        <span v-else="" class="fa fa-star"></span>
                        <span v-if="commentPropertie.quality < 3" class="fa fa-star unchecked"></span>
                        <span v-else="" class="fa fa-star"></span>
                        <span v-if="commentPropertie.quality < 2" class="fa fa-star unchecked"></span>
                        <span v-else="" class="fa fa-star"></span>
                        <span v-if="commentPropertie.quality < 1" class="fa fa-star unchecked"></span>
                        <span v-else="" class="fa fa-star"></span>
                    </span>
                </p>
                <p class="textOfClientComment"><i class="fa fa-quote-right" style="font-size:18px; color:#d20f63;"></i> &nbsp;&nbsp; {{commentPropertie.text}} </p>
                <p style="font-size:10px;">{{moment(commentPropertie.created_at).fromNow('d')}} روز قبل<span class="rateOfClientComment" style="color:#777777; font-size:10px;">گزارش</span></p>
            </div>
        </div> -->
  </div>
</template>

<script>
import axios from 'axios';
var moment = require('moment');

export default {
    data () {
        return {
            id: this.$route.params._id ,
            blogs: [],
            posts:[],
            cmts: [],
            comments: [],
            averageRate: [],
            moment: moment,
            searchMenue: '',
            avg: 0,
        }
    },
    methods: {
        add: function(){
            var final =this.averageRate.reduce((acc, item) => acc + item.quality, 0);
            this.avg = final/this.averageRate.length;

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
        axios.get(`http://localhost:4000/api/resturant/`+ this.id + `/comments`)
        .then(responses => {
            this.comments = responses.data
        })
        .catch(e => {
            this.errors.push(e)
        })

        //  comment
        axios.get(`http://localhost:4000/api/resturant/`+ this.id + `/comment`)
        .then(responses => {
            this.cmts = responses.data;
            this.averageRate = responses.data
        })
        .catch(e => {
            this.errors.push(e)
        })
        
        // averageRate
        // axios.get(`http://localhost:4000/api/resturant/`+ this.id + `/comment`)
        // .then(responses => {
        //     this.averageRate = responses.data
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
.titleOfResturant .unchecked{
    color:black;
}
.nameOfResturant{
    width: 30%;
    height: 10%;
    background-color: white;
    float: right;
    color:#aba5a4;
    font-size: 11px;
    margin-top: -90px;
    border-radius: 4px;
}
.photoOfResturant{
    border:1px solid white;
    width: 80px;
    margin-right: 44%;
}
.photoOfResturant img{
    margin-top:-30px;
}
.previous{
    width: 10%;
    height: 10%;
    background-color:white;
    float: left;
    color:#aba5a4;
    font-size: 11px;
    margin-top: -35px;
    border-radius: 4px;
}
.propertyOfResturant{
    padding-top: 10px;
}
.categoryOfPropertyOfResturant{
    padding-top: 10px;
    color: black;
}
.addressOfPropertyOfResturant{
    padding-top: 10px;
    color:#4a4a4a;
    padding-bottom: 10px;
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
    color:#777777;
}
.menueInformatioComment .inMenueInformatioComment a{
    text-decoration: none;
    color:#777777;
}
.menueInformatioComment .inMenueInformatioComment a::after{
    border-bottom: 2px solid #d20f63;
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
    /* background-color: #d20f63; */
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
    color: #9b9b9b;
}
.mainDiv .kindsOfFood .eachOfKindsOfFodd a::after{
    color: #202020;
    border-bottom:2px solid #d20f63;
    text-decoration: none;
}
.mainDiv .food{
    width:75%;
    /* background-color: aquamarine; */
    height: 650px;
    float: left;
}
.mainDiv .food .tableOfFood{
    width: 100%;
    height: 65%;
    /* background-color: chartreuse; */
}
.mainDiv .food .categorynameOfFood{
    width:100%;
    padding-right: 40px;
    color: black;
    font-size: 18px;
    padding-top: 20px;
}
.mainDiv .food .tableOfFood .foodSetOfFood{
    text-align: right;
    padding-right: 10px;
}
.mainDiv .food .tableOfFood .eachFood{
    width:44%;
    height: 175px;
    padding: 5px;
    margin-top: 2%;
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
    margin-top: -20px;
    float:left;
}
#price{
    color:black;
    text-align: left;
    font-weight: bold;
}
#description{
    color: #9b9b9b;
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
    color:#d20f63;
}
.inform{
    width:60%;
    height: 450px;
    margin-right: 20%;
    padding-top:20%;
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
    margin-top: -25px;
}
.comment{
    width:60%;
    height: 600px;
    margin-right: 20%;
    padding-top:10%;
    background-color: #fafafa;
}
.comment .commentTitle{
    width:100%;
    height: 60px;
    /* background-color:#f0f0f0; */
    border-bottom: 1px solid #656566;
    padding-right: 50px;
    padding-top: 5px;
    color:black;
    font-weight: bold;
}
.comment .anotherCommentTitle{
    padding-top:20px;
    font-size: 13px;
    padding-bottom: 30px;
}
.starInComment{
    padding-top:20px;
    text-align: center;
    color:orange;
    font-size: 20px;
    padding-bottom: 30px;
}
.starInComment .unchecked{
    color:black;
}
.qualityOfFoods{
    width: 70%;
    margin-left: 10%;
    margin-right: 15%;
    padding:0.5px;
    text-align: left;
    color: #777777;
    font-size: 15px;
    border-top: 1px solid #656566;
    margin-top:15px;
    padding-top:10px;
}
.qualityOfFoods .numOfQualityOfFoods{
    color:orange;
    text-align: right;
    float: right;
    padding-right: 71%;
}
.qualityOfFoods .numberOfQualityOfFoods{
    width:70%;
    background-color: #aba5a4;
    height: 10px;
    float:right;
    margin-top: -20px;
    border-radius: 10px;
}
.qualityOfFoods .numberOfQualityOfFoods .shapeOfNumberOfQualityOfFoods1{
    width: 65%;
    height: 100%;
    background-color: orange;
    border-radius: 10px;
    float: left;
}
.qualityOfFoods .numberOfQualityOfFoods .shapeOfNumberOfQualityOfFoods2{
    width: 95%;
    height: 100%;
    background-color: orange;
    border-radius: 10px;
    float: left;
}
.qualityOfFoods .numberOfQualityOfFoods .shapeOfNumberOfQualityOfFoods3{
    width: 85%;
    height: 100%;
    background-color: orange;
    border-radius: 10px;
    float: left;
}
.qualityOfFoods .numberOfQualityOfFoods .shapeOfNumberOfQualityOfFoods4{
    width: 70%;
    height: 100%;
    background-color: orange;
    border-radius: 10px;
    float: left;
}
.clientComment{
    width:60%;
    height: 150px;
    border-top: 1px solid #656566;
    margin-right: 20%;
    padding-top:15px;
    padding-left: 15px;
    padding-right: 15px;
}
.clientComment .rateOfClientComment{
    color:orange;
    float:left;
}
.clientComment .rateOfClientComment .unchecked{
    color:black;
}
.clientComment .textOfClientComment{
    color:#777777;
    font-size: 12px;
    margin-top:45px;
    margin-right: 10px;
}
/* .clientComment .eachOfClientComment{
    width:100%;
    height: 150px;
    border-top: 1px solid #656566;
} */
</style>
