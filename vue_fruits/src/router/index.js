import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


import  Home from './../components/page/home.vue'
import  City from './../components/element/city.vue'
import  Search from './../components/element/search.vue'
import Detail from './../components/page/detail.vue'
import Adefault from './../components/detail/adefault.vue'
import Anew from './../components/detail/anew.vue'
import Sale from './../components/detail/sale.vue'
import Price from './../components/detail/price.vue'

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
    },{
        path:'/detail',
        name:'detail',
        component:Detail, 
        redirect:'/detail/default',
        children:[{
            path:'default',
            name:'default',
            component:Adefault,
        },{
            path:'new',
            name:'new',
            component:Anew,
        },{
            path:'sale',
            name:'sale',
            component:Sale,
        },{
            path:'price',
            name:'price',
            component:Price,
        }]
    }]
})

export default router;