<template>
  <div>
    <show-blogs></show-blogs>
    <app-main></app-main>
  </div>
</template>

<script>
import showBlogs from './components/showBlogs.vue'
import main from './components/main.vue'

export default {
  components:{
    'show-blogs': showBlogs,
    'app-main': main
  },
  data () {
    return {
     
    }
  }
}
</script>

<style>

</style>
