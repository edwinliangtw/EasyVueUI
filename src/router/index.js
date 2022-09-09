import * as VueRouter from "vue-router"
import Home from "../pages/Home.vue"
import Demo from "../pages/Demo.vue"
import Doc from "../pages/Doc.vue"
import About from "../pages/About.vue"

const routes = [
    { path: '/', component: Home },
    { path: '/demo', component: Demo },
    { path: '/doc', component: Doc },
    { path: '/about', component: About },
]

export default VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})
