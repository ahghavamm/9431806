<template>
  <div id="show-blogs">
      <div v-for="blog in blogs" :key="blog" class="resturantList">
          <h2>{{blog.title}}</h2>
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
    created(){
        this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
            this.blogs = data.body.slice(0,10);
        })
    }
}
</script>

<style>

</style>
