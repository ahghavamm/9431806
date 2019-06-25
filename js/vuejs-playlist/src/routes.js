import showBlogs from './components/showBlogs.vue'
import main from './components/main.vue'
import resturantsList from './components/resturantsList.vue'
import login from './components/login.vue'
import register from './components/register.vue'

export default[
    {path: '/', component: main },
    {path: '/restaurants', component: resturantsList},
    {path: '/login', component: login},
    {path: '/register', component: register},
    {path: '/showBlogs', component: showBlogs},
]