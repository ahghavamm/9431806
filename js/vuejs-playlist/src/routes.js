import showBlogs from './components/showBlogs.vue'
import main from './components/main.vue'
import login from './components/login.vue'
import register from './components/register.vue'
import resturantsList from './components/resturantsList.vue'
import eachResturant from './components/eachResturant.vue'

export default[
    {path: '/', component: main },
    {path: '/login', component: login},
    {path: '/register', component: register},
    {path: '/showBlogs', component: showBlogs},
    {path: '/resturants', component: resturantsList},
    {path: '/resturants/eachResturant/:id', component: eachResturant},
]