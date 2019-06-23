<template>
  <div id="app">
    
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods:{
    post: function(){
      this.$http.post('http://localhost:8888/php/WebClass/9431806/php/resturantsList.php/post');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
