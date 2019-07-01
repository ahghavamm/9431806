<template>
  <div id="show-blogs">
      <p>salam</p>
        <!-- <ul v-if="posts && posts.length">
            <li v-for="post of posts" :key="post">
            <p><strong>{{post.addressLine}}</strong></p>
            <p>{{post.resturantDeatails}}</p>
            </li>
        </ul> -->

        <div v-for="post in posts" :key="post">
            {{post.addressLine}}
            <div v-for="resturantDeatail in post.resturantDeatails" :key="resturantDeatail">
                {{resturantDeatail.name}}
            </div>
        </div>

        <ul v-if="errors && errors.length">
            <li v-for="error of errors" :key="error">
            {{error.message}}
            </li>
        </ul>
      <!-- <div v-for="blog in blogs" :key="blog" class="resturantList">
          <h2>{{blog.title}}</h2>
      </div> -->
  </div>
</template>

<script>
import axios from 'axios';
// const instance = axios.create({
//     baseURL: `http://localhost:4000`
// })

export default {
  data() {
    return {
      showAddresses: [],
      posts: [],
      errors: []
    }
  },
  created() {
    //   try {
    //   const res = await axios.get(`https://jsonplaceholder.typicode.com/users`)

    //   this.posts = res.data;
    // } catch(e) {
    //   console.error(e)
    // }
    axios.get(`http://localhost:4000/api/resturant`)
    .then(response => {
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  computed: {
      
  },
//   mounted() {
//       axios.get(`http://localhost:4000/api/resturant`)
//     .then(response => {
//       console.log(response.data)
//     //   this.posts = response.data
//     })
//     .catch(e => {
//       this.errors.push(e)
//     })
//   },
  
}
</script>

<style>

</style>
