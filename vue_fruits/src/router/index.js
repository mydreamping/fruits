import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


import  Home from './../components/page/home.vue'
import  City from './../components/element/city.vue'


const router = new VueRouter({
    routes : [{
        path:'/',
        name:'home',
        component:Home,
        
    },{
        path:'/city',
        name:'city',
        component:City,
        
    }]
})

export default router;