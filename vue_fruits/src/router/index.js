import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


import  Home from './../components/page/home.vue'
import  City from './../components/element/city.vue'
import  Search from './../components/element/search.vue'
import Detail from './../components/page/detail.vue'

const router = new VueRouter({
    routes : [{
        path:'/',
        name:'home',
        component:Home,
        
    },{
        path:'/city',
        name:'city',
        component:City,
        
    },{
        path:'/search',
        name:'search',
        component:Search,
        // redirect:'/search/detail',
        // children:[{
        //     path:'detail',
        //     name:'detail',
        //     component:Detail,
        // }]
        
    },{
        path:'/detail',
        name:'detail',
        component:Detail, 
    }]
})

export default router;