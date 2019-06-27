<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import showBlogs from './components/showBlogs.vue'
import main from './components/main.vue'
import login from './components/login.vue'
import register from './components/register.vue'
import resturantsList from './components/resturantsList.vue'
import eachResturant from './components/eachResturant.vue'

import header from './components/header.vue'
import footer from './components/footer.vue'

export default {
  components:{
    'show-blogs': showBlogs,
    'app-main': main,
    'app-login': login,
    'app-register': register,
    'app-header': header,
    'app-resturantsList': resturantsList,
    'app-footer': footer,
    'app-eachResturant': eachResturant,
  },
  data () {
    return {
     
    }
  }
}
</script>

<style>

</style>
