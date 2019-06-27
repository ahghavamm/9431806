<template>
  <div id="app-eachResturant">
      <div class="mainPhoto">
      </div>
      <div class="titleOfResturant">
          <div class="nameOfResturant"></div>
          <div class="photoOfResturant"></div>
          <div class="previous">بازگشت</div>

          <div class="propertyOfResturant">
              <h3></h3>

              <p class="categoryOfPropertyOfResturant"></p>
              <p class="addressOfPropertyOfResturant"></p>
          </div>
          <div class="menueInformatioComment">
              <!-- <div class=""><a href=""></a></div> -->
              <div class=""></div>
              <div class=""></div>
          </div>
      </div>
      <input type="text" />

      <div>
        <h1>{{blog.title}}</h1>
      </div>
  </div>
</template>

<script>


export default {
  data () {
    return {
        id: this.$route.params.id ,
        blog: {}
    }
  },
  created() {
      this.$http.get('http://jsonplaceholder.typicode.com/posts' + this.id).then(function(data){
          this.blog = data.body;
      })
  },
}
</script>

<style>
.mainPhoto{
    background: url(https://dist.reyhoon-static.com/uploads/images/restaurant-types/misc/fast-food_1537379346.jpeg?x-oss-process=image/resize,w_1600/interlace,1) no-repeat scroll center right / cover;
    width:auto;
    height: 300px;
    margin-top: 0.5%;
}
.titleOfResturant{
    width:60%;
    height: 70%;
    background-color: white;
    margin-right: 20%;
    text-align: center;
}
.nameOfResturant{

}
.photoOfResturant{

}
.previous{
    width: 5%;
    height: 10%;;
    background-color: white;
    float: right;
    color:#aba5a4;
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
    /* hover 202020 */
}



</style>
