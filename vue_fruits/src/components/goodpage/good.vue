<template>
    <div class="good">
        <section  class="mn-section">
            <div  class="mn-carousel has-gray-background">
                <div class="mn-carousel-content" style="transform: translateX(0px); transition: transform 0.15s linear;">
                    
                    <mu-carousel>
                            <mu-carousel-item v-for="(b,index) in Banners" :key="index"> 
                                    <div  class="mn-image" >
                            
                                    <div class="mn-image-holder" style="padding-bottom: 100%; background-image: url(&quot;http://picpro-sz.34580.com/wx/ImageUrl/518615/10.jpeg&quot;);">
                                    </div>
                                    <img :src="`http://picpro-sz.34580.com/wx/ImageUrl/${b}/800.jpeg`" class="mn-image-source is-active">
                                    </div>
                            </mu-carousel-item>
                    </mu-carousel>
                </div> 
                <!-- <div class="mn-carousel-indicators">
                    <div class="mn-carousel-indicator is-active">
                    </div>
                    <div class="mn-carousel-indicator">
                    </div>
                    <div class="mn-carousel-indicator">
                    </div>
                    <div class="mn-carousel-indicator"></div>
                </div> -->
            </div> 
            <div  class="mn-card">
                <div  class="mn-card-item product-information">
                    <div  class="mn-card-body">
                        <div  class="product-information-title">
                            <h3 >{{ProductInfo.ProductName}}</h3>
                        </div>
                        <div  class="product-information-price">
                            <div  class="price">
                                ¥
                                <span  class="big">{{ProductInfo.PeriodMoney}}</span>
                                
                                <span  class="unit">/袋</span>
                            </div>
                            <div  class="flashsale">
                                 <p >{{ProductInfo.PriceName}}</p>
                                  <span >每袋已降 {{p}}元</span>
                            </div>
                        </div> 
                            <div  class="product-information-supplement">
                                <div >
                                 <p >
                                {{ProductInfo.OldPriceName}}
                                <del >{{ProductInfo.MaxUnitPeriodMoney}}/ {{ProductInfo.Unit}}</del>
                                </p>
                                </div> <div ><p  class="soldnumber">
                                已售{{ProductInfo.SoldNumber}}</p></div>
                            </div>
                        </div>
                    </div> 
                    <div  class="mn-card-item product-activity is-link" v-for="(p,index) in ProductActivities" :key="index" >
                        <div  class="mn-card-body"><p >
                            <span >{{p.TypeName}}</span>
                             <span >{{p.Descrption}}</span>
                             </p>
                        </div>
                    </div>
                    
                 

                    <div  class="mn-card-item product-service">
                        <div  class="mn-card-body">
                            <div  class="product-service-lasttime">
                                <p >
                                <span  class="mn-icon" >
                                    <span class="mn-icon-svg" >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                        <path d="M16 3c-7.181 0-13 5.819-13 13s5.819 13 13 13c7.181 0 13-5.819 13-13s-5.819-13-13-13zM16 27.919c-6.569 0-11.919-5.344-11.919-11.919 0-6.569 5.344-11.919 11.919-11.919 6.569 0 11.919 5.344 11.919 11.919 0 6.569-5.35 11.919-11.919 11.919z">
                                        </path>
                                        <path d="M16 16h-6v1.081h7.081v-9.081h-1.081z">
                                        </path>
                                </svg>
                                    </span>
                             </span>
                                {{ProductInfo.LastTimeInfo}}
                                </p>
                                </div>



                            <div  class="product-service-list">
                                <p v-for="(pr,index) in ProductInfoServices" :key="index"><span  class="mn-icon" >
                                    <span class="mn-icon-svg" >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                    <path d="M21.256 11.081l-7.8 7.856-2.95-2.95-1.113 1.113 3.5 3.5c0.156 0.156 0.369 0.281 0.556 0.281s0.394-0.125 0.55-0.275l8.356-8.4-1.1-1.125z">
                                    </path>
                                    <path d="M16 3c-7.181 0-13 5.819-13 13s5.819 13 13 13c7.181 0 13-5.819 13-13s-5.819-13-13-13zM16 27.919c-6.569 0-11.919-5.344-11.919-11.919 0-6.569 5.344-11.919 11.919-11.919 6.569 0 11.919 5.344 11.919 11.919 0 6.569-5.35 11.919-11.919 11.919z">
                                    </path>
                                    </svg></span></span>
                                    {{pr.Name}}
                                </p>
                                                                                            
                            </div>
                    </div>
                            
                </div>
                </div>
            </section>
    </div>
</template>

<style lang="scss" src="./scss/good.scss">

</style>

<script>
import swiper from "./../element/swiper.vue";

export default {
  
    data(){
        return {
            goodlist:"",
            gdetail:"",
            ProductActivities:"",
            ProductInfoServices:"",
            ProductInfo:"",
            price:"",
            Banners:"",
            id:"",
           
        }
    },
    computed:{
        //计算价格
        p :function (){
            this.price = (this.ProductInfo.DefaultMoney - this.ProductInfo.PeriodMoney).toFixed(2)
            return  this.price
        }
    },
    methods: {
        
        getgoodlist(){
            // this.id = this.$route.query.data;
            console.log(this.id);
            console.log(this);
            var self = this;
            this.$http({
                method: "GET",
                params: {
                sourcetype:9,
                id:this.id
                },
                url: "/dt/wx/Products/ProductDetailRequest?"
            }).then(function(response) {
                self.goodlist = response.data.Data;
                self.ProductActivities = self.goodlist.ProductActivities
                self.ProductInfoServices = self.goodlist.ProductInfoServices;
                self.ProductInfo = self.goodlist.ProductInfo;
                self.Banners = self.ProductInfo.Banners;
                console.log(self.ProductInfo)
           
            }); 
            
        },
        //获取路由的参数
        getRouterData() {
        this.id = this.$route.query.data;
        // console.log(this.$route.query.data);
        console.log("good", this.id);
       
        },
    },
    mounted(){
        this.getRouterData();
        this.getgoodlist();
        
    }
}
</script>
