<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import showBlogs from './components/showBlogs.vue'
import main from './components/main.vue'
import resturantsList from './components/resturantsList.vue'
import login from './components/login.vue'
import register from './components/register.vue'

export default {
  components:{
    'show-blogs': showBlogs,
    'app-main': main,
    'app-resturantsList': resturantsList,
    'app-login': login,
    'app-register': register
  },
  data () {
    return {
     
    }
  }
}
</script>

<style>

</style>
